//импорт модулей
import React from 'react';
import {NavLink} from "react-router-dom";

//импорт стилей
import css from './PopularModels.module.sass';

//коллекция данных для слайдера
const DATA_FOR_REVIEWS = [
    {
        'title': 'Смартфон Apple iPhone 14 128Gb голубой',
        'img': 'https://i.ibb.co/5LFN7M4/Group-14.png',
        'price': '485 000₸',
    },
    {
        'title': 'Телевизор AVA 32” 32AH90G LED HD черный\n',
        'img': 'https://i.ibb.co/Vq12hBB/Group-14.png',
        'price': '64 990₸',
    },
    {
        'title': 'Ноутбук Apple MacBook Pro 16 MK183 серый',
        'img': 'https://i.ibb.co/yfSXhwT/Group-15.png',
        'price': '1 255 000₸',
    },
    {
        'title': 'Смартфон Apple iPhone 14 128Gb голубой',
        'img': 'https://i.ibb.co/5LFN7M4/Group-14.png',
        'price': '485 000₸',
    },
    {
        'title': 'Телевизор AVA 32” 32AH90G LED HD черный\n',
        'img': 'https://i.ibb.co/Vq12hBB/Group-14.png',
        'price': '64 990₸',
    },
    {
        'title': 'Ноутбук Apple MacBook Pro 16 MK183 серый',
        'img': 'https://i.ibb.co/yfSXhwT/Group-15.png',
        'price': '1 255 000₸',
    },
];

const PopularReviews = () => {
    return (
        <section className={css.Container}>
            <h1>Популярные модели</h1>
            <div className={css.CardsBlock}>
                {DATA_FOR_REVIEWS.map((item) => (
                    <div className={css.Card}>
                        <div>
                            <NavLink to='/map'><img src={item.img} alt=""/></NavLink>
                        </div>
                        <div>{item.title}</div>
                        <div>{item.price}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PopularReviews;