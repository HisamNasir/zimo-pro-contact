import React, { useState, useEffect } from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css'
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";
import AVAVBorder from '@/public/assets/AVAVBorder.svg'
import BackArrow from '@/public/assets/BackArrow.svg'
import DownArrow from '@/public/assets/DownArrow.svg'
import ZIMA from '@/public/assets/ZIMA.svg'

import Clock from "@/components/Clock";
import AVAV from "@/public/assets/AVAV.svg";
import Cart from "@/public/assets/Cart.svg";
import User from "@/public/assets/User.svg";
import Wallpaper from '@/public/assets/Page1bg.png'
import "aos/dist/aos.css";
import CountryFlag from '@/components/CountryFlag';

const PageOne = () => {
  const [shouldScroll, setShouldScroll] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 1000 });

    const handleScroll = () => {
      if (window.scrollY >= window.innerHeight) {
        setShouldScroll(true);
      } else {
        setShouldScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (shouldScroll) {
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    }
  }, [shouldScroll]);

  return (
    <div className="h-screen bg-black relative overflow-hidden" data-aos="fade-up" data-aos-once="false">
      <Image
        alt=""
        className="absolute h-full w-full object-cover -z-80 opacity-90"
        src={Wallpaper}
        width={3841}
        height={2159}
      />
      <div className="h-full relative flex flex-col justify-center items-center text-white tracking-widest">
        <div className="text-left space-y-2 sm:space-y-4 md:space-y-6 absolute left-2 sm:left-8 top-2 sm:top-8">
          <div className="invert flex gap-1 sm:gap-4 md:gap-6 items-end">
            <Image className="invert h-[30px] sm:h-[40px] md:h-[50px]" src={AVAVBorder} />
            <Image className="invert w-auto hidden xl:block  md:h-[50px]" src={ZIMA} />
            <p className="invert sm:text-[14px] md:text-[18px]">about</p>
          </div>
          <button className="flex gap-1 sm:gap-2 sm:text-[14px] md:text-[18px] items-center uppercase">
            <Image className="h-[10px] sm:h-[12px]" src={BackArrow} />
            <p>Back</p>
          </button>
        </div>
        <div className="max-w-screen-md text-center absolute hidden sm:block top-4 sm:top-8">
          <span className="invert">
            <Image className="invert h-[20px] sm:h-[25px] md:h-[30px] xl:h-[50px]" src={AVAV} />
          </span>
        </div>
        <div className="text-right absolute top-2 sm:top-8 right-2 sm:right-8">
          <div className="flex items-center gap-2 sm:gap-4 md:gap-6">
            <div className="flex max-lg:hidden items-center gap-1 sm:gap-2 md:gap-4 text-[10px] sm:text-[12px] md:text-[14px] leading-4">
              <span className="">
                <Clock />
              </span>
              {/* Adjusted the sizes for better responsiveness */}
              <CountryFlag />
            </div>
            <button className="p-1">
              <Image className="h-[20px] sm:h-[25px] md:h-[30px]" src={Cart} />
            </button>
            <button className="p-1">
              <Image className="h-[20px] sm:h-[25px] md:h-[30px]" src={User} />
            </button>
          </div>
        </div>
        <div className="text-left absolute left-2 sm:left-8">
          <h2 className="font-light text-[18px] sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">Discover</h2>
          <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">a new world</h1>
          <p className="text-xs sm:text-lg md:text-xl text-[#737373] mt-1 sm:mt-2 md:mt-4">
            for those who wish for more...
          </p>
        </div>
        <div className="text-center absolute bottom-4">
          <div className="text-center space-y-2 sm:space-y-4 md:space-y-6">
            <p className="text-xs sm:text-lg md:text-xl text-[#737373] mt-1 sm:mt-2 md:mt-4">
              Bringing the world closer together
            </p>

          <button id="down-arrow-button" className="animate-bounce">
            <Image className="h-[20px] sm:h-[40px] md:h-[80px]" src={DownArrow} />
          </button>

          </div>
        </div>
      </div>
    </div>
  );
  
  
  
};

export default PageOne;
