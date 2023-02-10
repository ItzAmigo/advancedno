//импорт библиотек
import React, {useEffect, useState} from 'react';

//импорт стилей
import css from './CatalogPage.module.sass'
import {Rating} from "@mui/material";
import API from "../../../api";

const CatalogPage = () => {
    const [products, setProducts] = useState([]);
    const num = Math.floor(Math.random() * (1000 - 1) + 1);

    useEffect(() => {
        async function fetch() {
            try {
                const res = await API.get('/products/getAllProducts');
                setProducts(res.data);
            } catch (e) {
                console.log(e)
            }
        }

        fetch();
    }, []);

    return (
        <section className={css.Container}>
            <aside>
                <div>
                    <h5>Цена</h5>
                    <input
                        type="text"
                        placeholder="От"
                    />
                    <input
                        type="text"
                        placeholder="До"
                    />
                </div>
                <div>
                    <h5>Состояние продукта</h5>
                    <ul>
                        <li>
                            <input type="checkbox"/> Новый
                        </li>
                        <li>
                            <input type="checkbox"/> Ресейл
                        </li>
                    </ul>
                </div>
                <div>
                    <h5>Срок доставки</h5>
                    <ul>
                        <li>
                            <input name='any' type="radio"/> Любой
                        </li>
                        <li>
                            <input name='till_7_days' type="radio"/> до 7 дней
                        </li>
                    </ul>
                </div>
                <div>
                    <h5>Категория продукта</h5>
                    <ul>
                        <li>
                            <input type="checkbox"/> Компьютеры
                        </li>
                        <li>
                            <input type="checkbox"/> Телефоны
                        </li>
                        <li>
                            <input type="checkbox"/> Планшеты
                        </li>
                        <li>
                            <input type="checkbox"/> Аудио
                        </li>
                        <li>
                            <input type="checkbox"/> Телевизоры
                        </li>
                        <li>
                            <input type="checkbox"/> Камеры
                        </li>
                        <li>
                            <input type="checkbox"/> Гаджеты
                        </li>
                        <li>
                            <input type="checkbox"/> Цифр. продукты
                        </li>
                    </ul>
                </div>
                <form>
                    <h5>Сортировать по</h5>
                    <ul>
                        <li>
                            <input type="radio" id="popular" name="popular" value="Популярности"/> <label htmlFor="popular">Популярности</label>
                        </li>
                        <li>
                            <input type="radio" id="rating" name="rating" value="Рейтингу"/> <label htmlFor="rating">Рейтингу</label>
                        </li>
                        <li>
                            <input type="radio" id="discount" name="discount" value="Скидке"/> <label htmlFor="discount">Скидке</label>
                        </li>
                        <li>
                            <input type="radio" id="new" name="new" value="Новизне"/> <label htmlFor="new">Новизне</label>
                        </li>
                        <li>
                            <input type="radio" id="reviews" name="reviews" value="Отзывам"/> <label htmlFor="reviews">Отзывам</label>
                        </li>
                    </ul>
                </form>

            </aside>
            <div className={css.CatalogCards}>
                {
                    products.slice(num, num+4).map((object, i) => {
                        return (
                            <div className={css.CardBlock} key={i}>
                                <div>
                                    <img src={object.image} alt={object.title}/>
                                </div>
                                <div>
                                    <h3>
                                        {object.title}
                                    </h3>
                                    <div>
                                        <Rating
                                            name='read-only'
                                            value={5}
                                            readOnly
                                        />
                                        <p>
                                            4.9
                                        </p>
                                    </div>

                                </div>
                                <div>
                                    <p>{object.price}₸</p>
                                    <button className='button_primary'>Добавить в корзину</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
};

export default CatalogPage;