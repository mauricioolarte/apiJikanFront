import React, { useRef, useContext } from 'react'
import { Card1 } from './card1'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import DataContext from '../utils/Datacontext'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.min.css'
import 'swiper/modules/navigation/navigation.min.css';
import 'swiper/modules/pagination/pagination.min.css';
import 'swiper/modules/scrollbar/scrollbar.min.css';

const Carousel2 = ({ showCarrusel = false, datos }) => {
    const showCard = useRef(null)

	const { dataApp } = useContext(DataContext);
    
    const listCard = dataApp.values.map((dato) =>
        <SwiperSlide className="carrousel-item1">
            <Card1 imageurl={dato.urlImagen}
                messaje={dato.animeId} title={dato.animeTitle}
            />
        </SwiperSlide>
	)
  return (
    <section className="carrousel">
        <Swiper
            slidesPerView={5}
            spaceBetween={8}
            slidesPerGroup={5}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
            clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper carrousel__container"
      >
            <div ref={showCard}>
                {listCard}
            </div>
        </Swiper>
    </section>
  );
};

export {Carousel2};