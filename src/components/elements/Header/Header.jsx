//импорт модулей
import React from 'react';

//импорт кастомных компонентов
import MainNavbar from "./MainNavbar/MainNavbar";

const Header = () => {
    return (
        <header>
            {/*навбар с кнопкой каталога, полем поиска, ссылками на страницы заказов, избранных, корзины и профиля*/}
            <MainNavbar/>

        </header>
    );
};

export default Header;