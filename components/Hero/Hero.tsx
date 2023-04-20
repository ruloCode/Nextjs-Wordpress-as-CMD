import React from "react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

SwiperCore.use([Navigation, Pagination]);

const videos = [
  {
    id: 1,
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    title: "Video 1",
  },
  {
    id: 2,
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    title: "Video 2",
  },
  {
    id: 3,
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    title: "Video 3",
  },
];

export const Hero = () => {
  return (
    <div className="relative">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
      >
        {videos.map((video) => (
          <SwiperSlide key={video.id}>
            <video className="w-full" autoPlay muted loop>
              <source src={video.src} type="video/mp4" />
            </video>
            <div className="absolute inset-0 flex justify-center items-center">
              <h1 className="text-5xl text-white">{video.title}</h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
