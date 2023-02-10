//импорт модулей
import React from 'react';

//импорт модулей для свайпера
import {Navigation} from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/react';

//импорт кастомных компонентов
import Review from "../Review/Review";
import SliderPrevButton from "./SliderPrevButton/SliderPrevButton";
import SliderNextButton from "./SliderNextButton/SliderNextButton";

//импорт стилей
import './PopularReviewsSwiper.css';
import css from './PopularReviews.module.sass';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

//коллекция данных для слайдера
const DATA_FOR_REVIEWS = [
    {
        'id': 1,
        'product_title': 'Apple iPhone 14 128Gb голубой',
        'product_icon': 'https://i.ibb.co/J2zM9ps/Group-20.png',
        'rating_value': 4,
        'review_text': 'Очень довольна покупкой! Спасибо сервису за быструю доставку и приятное обслуживание. Приехал в отличном состоянии.',
        'user_icon': 'https://i.ibb.co/N7gg388/Ellipse-10.png',
        'user_name': 'Мерей Әбдiкарiм',
    },
    {
        'id': 2,
        'product_title': 'Apple iPhone 14 128Gb голубой',
        'product_icon': 'https://i.ibb.co/J2zM9ps/Group-20.png',
        'rating_value': 4,
        'review_text': 'Очень довольна покупкой! Спасибо сервису за быструю доставку и приятное обслуживание. Приехал в отличном состоянии.',
        'user_icon': 'https://i.ibb.co/N7gg388/Ellipse-10.png',
        'user_name': 'Мерей Әбдiкарiм',
    },
    {
        'id': 3,
        'product_title': 'Apple iPhone 14 128Gb голубой',
        'product_icon': 'https://i.ibb.co/J2zM9ps/Group-20.png',
        'rating_value': 4,
        'review_text': 'Очень довольна покупкой! Спасибо сервису за быструю доставку и приятное обслуживание. Приехал в отличном состоянии.',
        'user_icon': 'https://i.ibb.co/N7gg388/Ellipse-10.png',
        'user_name': 'Мерей Әбдiкарiм',
    },
];

const PopularReviews = (props) => {
    return (
        <section className={css.Container}>
            <h1>{props.text}</h1>
            <Swiper
                slidesPerView={3}
                a
                loop={true}
                modules={[Navigation]}
                className='swiper-review'
            >
                {DATA_FOR_REVIEWS.map((item) => (
                    <SwiperSlide className='swiper-slide-review' key={item.id}>
                        <Review
                            product_title={item.product_title}
                            product_icon={item.product_icon}
                            review_text={item.review_text}
                            user_icon={item.user_icon}
                            user_name={item.user_name}
                            rating_value={item.rating_value}
                            key={item.id}
                        />
                    </SwiperSlide>
                ))}
                    <SliderPrevButton/>
                    <SliderNextButton/>
            </Swiper>
        </section>
    );
};

export default PopularReviews;