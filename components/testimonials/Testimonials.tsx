import React from "react";
import Image from "next/image";
import { Pagination, EffectCube, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./testimonials.module.css";
import Slide from './Slide'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



interface ReviewSlider {
  title?: string;
  reviews?: any;
  dark?: boolean;
}

const ReviewSlider: React.FC<ReviewSlider> = ({ title, reviews, dark }) => {
  return (
    <div className="relative mt-20">
      {title && (
        <div>
          <h3 className="title text-center">{title}</h3>
        </div>
      )}

      <Swiper
        effect={"coverflow"}
        // overflowVisible={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
          // Cambia el color de la sombra aquí
        }}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3} // Mostrar tres testimonios al mismo tiempo por defecto
        spaceBetween={30} // Espacio entre testimonios (ajusta según tus preferencias)
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
        breakpoints={{
          // Mostrar solo un testimonio en dispositivos móviles
          0: {
            slidesPerView: 1,
          },
          // Mostrar tres testimonios en dispositivos mayores a 768px
          768: {
            slidesPerView: 3,
          },
        }}
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={review.id}>
            <Slide dark={dark} review={review} showVideo={title === "Testimonios"}  />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReviewSlider;
