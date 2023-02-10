//импорт модулей
import React from 'react';
import {Rating} from '@mui/material';

//импорт стилей
import css from './Review.module.sass'


const Review = (props) => {
    return (
        <div className={css.Container}>
            <div className={css.ProductBlock}>
                <div className={css.ImageBlock}>
                    <img src={props.product_icon} alt='product icon'/>
                </div>
                <p>{props.product_title}</p>
                <Rating
                    name='read-only'
                    value={props.rating_value}
                    readOnly
                />
            </div>
            <div className={css.UserBlock}>
                <div>{props.review_text}</div>
                <div className={css.UserData}>
                    <div>
                        <img src={props.user_icon} alt=""/>
                    </div>
                    <div>{props.user_name}</div>
                </div>
            </div>
        </div>
    );
};

export default Review;