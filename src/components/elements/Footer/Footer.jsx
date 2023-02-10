//импорт модулей
import React from 'react';

//импорт стилей
import css from './Footer.module.sass';

//импорт изображений
import OnDukenLogo from './images/onduken_logo.svg';
import FacebookIcon from './images/facebook_icon.svg';
import InstagramIcon from './images/instagram_icon.svg';
import WhatsappIcon from './images/whatsapp_icon.svg';
import EmailIcon from './images/email_icon.svg';

const Footer = () => {
    return (
        <div className={css.Container}>
            {/*первый блок футера с контактами*/}
            <div className={css.ContactsBlock}>
                <div>
                    <img src={OnDukenLogo} alt="OnDukenLogo"/>
                </div>

                <div>
                    <a className={css.HighlightedText} href="tel:+77777777777">+7 (777) 777 77 77</a>
                    <br/>
                    <span className={css.UnderstatedText}>Контактный центр</span>
                </div>
                <div className={css.HighlightedText}>
                    Астана, Есиль район, ​проспект Мангилик Ел, 53/1
                </div>
            </div>
            {/*второй блок футера со списком ссылок для покупателей*/}
            <div className={css.FooterList}>
                <ul>
                    <li>Покупателям</li>
                    <li><a href="#">Как выбрать товар</a></li>
                    <li><a href="#">Оплата и доставка</a></li>
                    <li><a href="#">Обратная связь</a></li>
                    <li><a href="#">Возвраты</a></li>
                </ul>
            </div>
            {/*третий блок футера со списком ссылок для патрнеров и лицензией*/}
            <div className={css.FooterList}>
                <ul>
                    <li>Партнерам</li>
                    <li><a href="#">Личный кабинет продавца</a></li>
                    <li><a href="#">Документация для партнёров</a></li>
                    <li><a href="#">Сайт для партнеров</a></li>
                    <li><a href="#">Как стать партнёром</a></li>
                </ul>

            </div>
            <div className={css.FooterList}>
                <ul>
                    <li>Мы в соц. сетях:</li>
                    <li><img src={FacebookIcon} alt="social network icon"/>
                    <img src={InstagramIcon} alt="social network icon"/>
                    <img src={WhatsappIcon} alt="social network icon"/>
                    <img src={EmailIcon} alt="social network icon"/></li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;