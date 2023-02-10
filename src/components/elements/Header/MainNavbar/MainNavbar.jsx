//импорт модулей
import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";

//импорт компонентов
import API from "../../../../api";
import Login from "../../Modal/LoginModal/Login";

//импорт стилей
import css from './MainNavbar.module.sass';

//импорт изображений
import OnDukenLogo from './images/onduken_logo.svg';
import CatalogIcon from './images/katalog_icon.svg';
import SearchIcon from './images/search_icon.svg';
import ArrowIcon from './images/arrow_icon.svg';
import HeartIcon from './images/heart_icon.svg';
import BasketIcon from './images/basket_icon.svg';
import ProfileIcon from './images/profile_icon.svg';





const MainNavbar = () => {
    const [value, setValue] = useState('');
    const [id, setId] = useState();
    const [username, setUsername] = useState();
    const [isOpen, setIsOpen] = useState(true);
    const [products, setProducts] = useState([]);
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        async function fetch() {
            try {
                const res = await API.get('/products/getAllProducts');
                setProducts(res.data);
                const user = localStorage.getItem("user");
                if (user) {
                    const auth = await API.post('/users/validate', {
                        jwt: JSON.parse(user).token
                    });
                    setUsername(auth.data.user.name);
                }
            } catch (e) {
                console.log(e)
            }
        }

        fetch();
    }, []);

    const filteredProducts = products.filter(product => {
        return product.title.toLowerCase().includes(value.toLowerCase())
    })

    const objectClickHandler = (e, id) => {
        setValue(e.target.textContent)
        setId(id);
        setIsOpen(false)
    }

    const inputClickHandler = () => {
        setIsOpen(true)
    }

    const handleClickOpen = () => {
        setOpenModal(true);
    };

    const handleClickClose = () => {
        setOpenModal(false);
    };

    const searchHandler = () => {
        window.location.href = `/product/${id}`;
    };

    return (
        <div className={css.Container}>
            <div className={css.LogoBlock}>
                <NavLink to='/'>
                    <img src={OnDukenLogo} alt="site's logo"/>
                </NavLink>
            </div>
            <div className={css.CatalogBlock}>
                <NavLink to='/catalog'>
                <button className='button button_primary'>
                    <img src={CatalogIcon} alt="icon"/> Каталог
                </button>
                </NavLink>
            </div>
            <div className={css.InputBlock}>
                <form>
                    <div className={css.SearchElement} onClick={searchHandler}>
                        <img src={SearchIcon} alt="search icon"/>
                    </div>
                    <input
                        type="text"
                        placeholder="Я хочу найти"
                        value={value}
                        onChange={(event) => setValue(event.target.value)}
                        onClick={inputClickHandler}
                    />
                    <ul className={css.AutoComplete}>
                        {
                            value && isOpen
                                ? filteredProducts.map((object, i) => {
                                    return (
                                        <li
                                            className={css.AutoCompleteItem}
                                            onClick={(e) => objectClickHandler(e, object.id)}
                                            key={i}
                                        >
                                            {object.title}
                                        </li>
                                    )
                                }) : null
                        }
                    </ul>
                </form>
            </div>
            <div className={css.ButtonsBlock}>
                <div>
                    <img src={ArrowIcon} alt="ArrowIcon"/>
                    <p>Заказы</p>
                </div>
                <div>
                    <img src={HeartIcon} alt="HeartIcon"/>
                    <p>Избранное</p>
                </div>
                <div>
                    <img src={BasketIcon} alt="BasketIcon"/>
                    <p>Корзина</p>
                </div>
                {username ? <div>
                    <img src={ProfileIcon} alt="ProfileIcon"/>
                    <p>{username}</p>
                </div> : <div onClick={handleClickOpen}>
                    <img src={ProfileIcon} alt="ProfileIcon"/>
                    <p>Войти</p>
                </div>}
                <Login
                    open={openModal}
                    handleClose={handleClickClose}
                />
            </div>
        </div>
    );
};

export default MainNavbar;