//импорт модулей
import React from 'react';
import { useSwiper } from 'swiper/react';

const SliderNextButton = () => {
    const swiper = useSwiper();

    return (
        <div
            onClick={() => swiper.slidePrev()}
        >
            <div className="swiper-button-prev video-review-slider-button-prev"></div>
        </div>
    );
}

export default SliderNextButton;