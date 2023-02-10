//импорт модулей
import React from 'react';

//импорт стилей
import css from './SlideItem.module.sass'

const SlideItem = (props) => {
    return (
        <div className={css.Container}>
            <img className={css.Image} src={props.video_preview} alt='video icon'/>
            <p>{props.video_title}</p>
        </div>
    );
};

export default SlideItem;