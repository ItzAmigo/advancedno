//импорт модулей
import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper";

//импорт кастомных компонентов
import SliderPrevButton from "./SliderPrevButton/SliderPrevButton";
import SliderNextButton from "./SliderNextButton/SliderNextButton";

//импорт стилей
import css from './MainInfo.module.sass';
import './MainInfoSwiper.sass'

//импорт изображений
import Frame1 from './images/Frame1.png';
import Frame2 from './images/Frame2.png';
import Frame3 from './images/Frame3.png';
import Frame4 from './images/Frame4.png';
import Rectangle1 from './images/Rectangle1.svg';
import Rectangle2 from './images/Rectangle2.svg';


const MainInfo = () => {
    return (
        <section className={css.Container}>
            <div>
                <Swiper
                    slidesPerView={1}
                    loop={true}
                    pagination={true}
                    modules={[Pagination, Navigation]}
                    className='swiper-main'
                >
                    <SwiperSlide className='swiper-slide-main'>
                        <img src={Rectangle1} alt=""/>
                    </SwiperSlide>
                    <SwiperSlide className='swiper-slide-main'>
                        <img src={Rectangle1} alt=""/>
                    </SwiperSlide>
                    <SwiperSlide className='swiper-slide-main'>
                        <img src={Rectangle1} alt=""/>
                    </SwiperSlide>
                    <SwiperSlide className='swiper-slide-main'>
                        <img src={Rectangle1} alt=""/>
                    </SwiperSlide>
                    <SwiperSlide className='swiper-slide-main'>
                        <img src={Rectangle1} alt=""/>
                    </SwiperSlide>
                    <SwiperSlide className='swiper-slide-main'>
                        <img src={Rectangle1} alt=""/>
                    </SwiperSlide>
                    <SwiperSlide className='swiper-slide-main'>
                        <img src={Rectangle1} alt=""/>
                    </SwiperSlide>
                    <div>
                        <SliderPrevButton/>
                        <SliderNextButton/>
                    </div>
                </Swiper>
            </div>
            <div>
                <img src={Rectangle2} alt=""/>
            </div>
            <div>
                <img src={Frame1} alt=""/>
            </div>
            <div>
                <img src={Frame2} alt=""/>
            </div>
            <div>
                <img src={Frame3} alt=""/>
            </div>
            <div>
                <img src={Frame4} alt=""/>
            </div>
        </section>
    );
};

export default MainInfo;