//импорт модулей
import React from 'react';

//импорт модулей для свайпера
import {Navigation, Pagination} from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/react';

//импорт кастомных компонентов
import SliderPrevButton from "./SliderPrevButton/SliderPrevButton";
import SliderNextButton from "./SliderNextButton/SliderNextButton";
import SlideItem from "./SlideItem/SlideItem";

//импорт стилей
import './VideoReviewsSwiper.css';
import css from './VideoReviews.module.sass';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

//коллекция данных для слайдера
const DATA_FOR_VIDEO_REVIEWS = [
    {
        'video_title': 'Samsung S22, S22+ и S22 ULTRA — первый обзор!',
        'video_preview': 'https://i.ibb.co/jw0NsCG/Rectangle-16.png',
    },
    {
        'video_title': 'iPhone 14 Pro: ДИНАМИЧЕСКИЙ ОБЗОР',
        'video_preview': 'https://i.ibb.co/V9D9VGv/Rectangle-17.png',
    },
    {
        'video_title': 'Идеальный ультрабук какой он? Обзор Asus ZenBook 14X',
        'video_preview': 'https://i.ibb.co/XXPCMVB/Rectangle-18.png',
    },
];

const VideoReviews = () => {
    return (
        <section className={css.Container}>
            <h1>Обзоры</h1>
            <Swiper
                slidesPerView={3}
                spaceBetween={20}
                loop={true}
                pagination={true}
                modules={[Pagination, Navigation]}
                className='swiper-video-review'
            >
                {DATA_FOR_VIDEO_REVIEWS.map((item) => (
                    <SwiperSlide className='swiper-slide-video-review'>
                        <SlideItem
                            video_title={item.video_title}
                            video_preview={item.video_preview}
                        />
                    </SwiperSlide>
                ))}
                <div>
                    <SliderPrevButton/>
                    <SliderNextButton/>
                </div>
            </Swiper>
        </section>
    );
};

export default VideoReviews;