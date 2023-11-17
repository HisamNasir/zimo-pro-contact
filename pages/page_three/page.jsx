import React, { useEffect } from 'react';
import SwiperCore, { Navigation } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Card from '@/components/Card';
import DownArrow from '@/public/assets/DownArrow.svg';
import Image from 'next/image';
import Image1 from "@/public/assets/diamond.png";
import Image2 from "@/public/assets/island.png";
import Image3 from "@/public/assets/realestate.png";
import Image4 from "@/public/assets/cars.png";
import Image5 from "@/public/assets/yachts.png";
import Image6 from "@/public/assets/watches.png";
import Image7 from "@/public/assets/jets.png";
import Image8 from "@/public/assets/travelworld.png";


SwiperCore.use([Navigation]);

const PageThree = () => {
  useEffect(() => {
    // Initialize AOS or any other animations library here
    // ...
  }, []);

  return (
    <div className="h-screen page" data-aos="fade-up" data-aos-once="false">
      <div className="h-full relative flex flex-col justify-center tracking-widest">
        <div className="flex items-center relative">
          <div className="p-8 text-xl lg:text-[40px]">our categories</div>

          <div className="p-8 absolute right-0 w-[129px] flex justify-between">
            <button id="swiper-left" className="invert rotate-90">
              <Image src={DownArrow} className="h-[10px] md:h-[20px]" />
            </button>
            <button id="swiper-right" className="invert -rotate-90">
              <Image src={DownArrow} className="h-[10px] md:h-[20px]" />
            </button>
          </div>
        </div>
<div className='p-4'>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          navigation={{
            nextEl: '#swiper-right',
            prevEl: '#swiper-left',
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            2000:{
              slidesPerView: 5,
            }
          }}
          className="flex w-full overflow-hidden "
        >
          <SwiperSlide>
            <Card image={Image1} text="diamonds" />
          </SwiperSlide>
          <SwiperSlide>
            <Card image={Image2} text="private island" />
          </SwiperSlide>
          <SwiperSlide>
            <Card image={Image3} text="real estate" />
          </SwiperSlide>
          <SwiperSlide>
            <Card image={Image4} text="cars" />
          </SwiperSlide>
          <SwiperSlide>
            <Card image={Image5} text="yachts" />
          </SwiperSlide>
          <SwiperSlide>
            <Card image={Image6} text="watches" />
          </SwiperSlide>
          <SwiperSlide>
            <Card image={Image7} text="jets" />
          </SwiperSlide>
          <SwiperSlide>
            <Card image={Image8} text="travel the world" />
          </SwiperSlide>
        </Swiper>

</div>

        <div className="text-center bottom-40 text-xl lg:text-5xl space-y-12">
          <h1>one platform for all premium listings</h1>
          <p className="text-lg md:text-[40px]">unlimited potential</p>
        </div>
      </div>
    </div>
  );
};

export default PageThree;
