"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import Image  from "next/image";
import Plan1 from '/public/images/plan1.jpg'
import Plan2 from '/public/images/plan2.png'
import Plan3 from '/public/images/plan3.jpg'
import Plan4 from '/public/images/plan4.jpg'
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

import { Pagination } from 'swiper/modules';

export default function Coins() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <Image
            
             src={Plan1}
             width={350}
             height={250}
             alt="Anything"
             />
        </SwiperSlide>
        <SwiperSlide>
        <Image
            
            src={Plan2}
            width={350}
            height={250}
            alt="Anything"
            />
        </SwiperSlide>
        <SwiperSlide>
        <Image
            
            src={Plan3}
            width={350}
            height={250}
            alt="Anything"
            />
        </SwiperSlide>
        <SwiperSlide>
        <Image
            
            src={Plan4}
            width={350}
            height={250}
            alt="Anything"
            />
        </SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
