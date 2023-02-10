//импорт модулей
import React, {useState, useEffect} from 'react';
import {Breadcrumbs, Rating} from "@mui/material";
import {Link, useParams} from "react-router-dom";
import {YMaps, Map, ZoomControl, Placemark, Clusterer, GeolocationControl, SearchControl} from '@pbe/react-yandex-maps';
import {Navigation, Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";

//импорт кастом компонентов
import PopularModels from "../../elements/PopularModels/PopularModels";
import PopularReviews from "../../elements/PopularReviews/PopularReviews";
import SliderPrevButton from "../HomePage/MainInfo/SliderPrevButton/SliderPrevButton";
import SliderNextButton from "../HomePage/MainInfo/SliderNextButton/SliderNextButton";

//импорт стилей
import css from './ProductPage.module.sass'
import './ProductPageSwiper.sass'


import Heart from './images/Heart.svg';

import API from "../../../api";

const ProductPage = () => {
    const [lat, setLat] = useState(51.1605);
    const [lng, setLng] = useState(71.4704);
    const [product, setProduct] = useState({title: '', id: '', category: '', image: '', store: '', price: ''});
    const [store, setStore] = useState([{lat: 0, lng: 0, description: ''}]);

    const {productId} = useParams();

    useEffect(() => {
        async function fetch() {
            try {
                const res = await API.get(`/products/getProductById/${productId}`);
                setProduct(res.data);
                const res2 = await API.get(`/products/getStoresByTitle/${res.data.store}`);
                setStore(res2.data);
            } catch (e) {
                console.log(e)
            }
        }

        fetch();
    }, []);

    return (
        <>
            <section className={css.Container}>
                <article>
                    <Breadcrumbs separator="→" className={css.Breadcrumbs} styles={{color: 'white'}}
                                 aria-label="breadcrumb">
                        <Link to='/'>
                            OnDuken
                        </Link>
                        <Link to='/'>
                            {product.category}
                        </Link>
                    </Breadcrumbs>
                </article>
                <article className={css.ProductCard}>
                    <div className={css.ProductDescription}>
                        <div>
                            <h1 className={css.ProductName}>{product.title}</h1>
                        </div>
                        <div className={css.ProductDetails}>
                            <div>
                                <Swiper
                                    slidesPerView={1}
                                    loop={true}
                                    pagination={true}
                                    modules={[Pagination, Navigation]}
                                    className='swiper-product'
                                >
                                    <SwiperSlide className='swiper-slide-product'>
                                        <img src={product.image} alt="phone pic"/>
                                    </SwiperSlide>
                                    <SwiperSlide className='swiper-slide-product'>
                                        <img src={product.image} alt="phone pic"/>
                                    </SwiperSlide>
                                    <SwiperSlide className='swiper-slide-product'>
                                        <img src={product.image} alt="phone pic"/>
                                    </SwiperSlide>
                                    <SwiperSlide className='swiper-slide-product'>
                                        <img src={product.image} alt="phone pic"/>
                                    </SwiperSlide>
                                    <SwiperSlide className='swiper-slide-product'>
                                        <img src={product.image} alt="phone pic"/>
                                    </SwiperSlide>

                                    <div>
                                        <SliderPrevButton/>
                                        <SliderNextButton/>
                                    </div>
                                </Swiper>
                            </div>
                            <div className={css.ProductDetailsInfo}>
                                <div>
                                    <Rating
                                        name='read-only'
                                        value={5}
                                        readOnly
                                    />
                                    <p>4.9</p>
                                    <p>(128 отзывов)</p>
                                </div>
                                <div>
                                    <h1>Цвет</h1>
                                    <div>
                                        <button></button>
                                        <button></button>
                                        <button></button>
                                        <button></button>
                                        <button></button>
                                    </div>
                                </div>
                                <div>
                                    <h1>Объем памяти</h1>
                                    <div>
                                        <button className='button_secondary-outline'>128Gb</button>
                                        <button className='button_secondary-outline'>256Gb</button>
                                        <button className='button_secondary-outline'>512Gb</button>
                                        <button className='button_secondary-outline'>1 Tb</button>
                                    </div>
                                </div>
                                <div>
                                    <h1>Описание</h1>
                                    <p>Lorem ipsum dolor sit amet. Ut nobis molestiae ut quidem tenetur aut aperiam
                                        dolor. Eum temporibus
                                        tempora et dignissimos quas est quod obcaecati aut consequatur voluptatibu</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={css.ProductInfo}>
                        <div>
                            <button className='button_dark'>Black Friday</button>
                            <button className='button_primary'>-20%</button>
                        </div>
                        <div>
                            <p>
                                <span className={css.HighlightedText}>{product.price}₸</span>
                                <span className={css.StrikethroughText}>999 000₸</span></p>
                        </div>
                        <div>
                            <p>Доставка <span className={css.HighlightedText}>26 ноября</span> - бесплатно</p>
                            <br/>
                            <p>Самовывоз <span className={css.HighlightedText}>25 ноября</span> сегодня</p>
                        </div>
                        <div>
                            <p>Характеристики</p>
                            <ul>
                                <li>Lorem ipsum dolor sit amet</li>
                                <li>Lorem ipsum dolor sit amet</li>
                                <li>Lorem ipsum dolor sit amet</li>
                                <li>Lorem ipsum dolor sit amet</li>
                                <li>Lorem ipsum dolor sit amet</li>
                                <li>Lorem ipsum dolor sit amet</li>
                                <li>Lorem ipsum dolor sit amet</li>
                                <li>Lorem ipsum dolor sit amet</li>
                            </ul>
                        </div>
                        <div>
                            <button className='button_primary'>Добавить в корзину</button>
                            <button className='button_primary-outline'>
                                <img src={Heart} alt='heart'/>
                            </button>
                        </div>
                    </div>
                </article>
            </section>
            <section>
                <center>
                    <YMaps className={css.MapBlock}>
                        <Map width="87%" height="700px" defaultState={{center: [lat, lng], zoom: 13}}>
                            <Placemark geometry={[lat, lng]} properties={{iconContent: "Я"}}
                                       options={{preset: "islands#darkGreenIcon"}}/>
                            <ZoomControl/>
                            <GeolocationControl options={{float: "left"}}/>
                            <SearchControl options={{float: "right"}}/>
                            <Clusterer
                                options={{
                                    preset: "islands#invertedVioletClusterIcons",
                                    groupByCoordinates: false,
                                }}
                            >
                                {store.map((shop, index) => (
                                    <Placemark properties={{iconContent: product.store, balloonContent: shop.description}}
                                               key={index} geometry={[shop.lat, shop.lng]}/>
                                ))}
                            </Clusterer>
                        </Map>
                    </YMaps>
                </center>
            </section>
            <PopularReviews text="Отзывы покупателей"/>
            <PopularModels text="С этим товаром покупают"/>
        </>
    );
};

export default ProductPage;