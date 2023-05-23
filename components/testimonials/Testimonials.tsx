import React from "react";
import Image from "next/image";
import { Pagination, EffectCube, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./testimonials.module.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const reviews = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae magna id ex semper elementum.",
    author: "John Doe",
    image: "/images/Testimonio.png",
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae magna id ex semper elementum.",
    author: "John Doe",
    image: "/images/Testimonio.png",
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae magna id ex semper elementum.",
    author: "John Doe",
    image: "/images/Testimonio.png",
  },
];

interface ReviewSlider {
  title?: string;
}

const ReviewSlider: React.FC<ReviewSlider> = ({ title }) => {
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
            <div
              className={`${styles.testimonial} p-4 bg-gray-200`}
              onClick={() => {}}
            >
              <div className="rounded-full overflow-hidden w-24 h-24 mx-auto">
                <Image
                  src={review.image}
                  alt={`Author ${index + 1}`}
                  width={150}
                  height={150}
                  className="object-cover"
                />
              </div>
              <p className="text-xl">{review.text}</p>
              <p className="mt-2 font-semibold">{review.author}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReviewSlider;
