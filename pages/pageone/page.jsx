import React, { useState, useEffect } from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css'
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";
import AVAVBorder from '@/public/assets/AVAVBorder.svg'
import BackArrow from '@/public/assets/BackArrow.svg'
import DownArrow from '@/public/assets/DownArrow.svg'
import ZIMA from '@/public/assets/ZIMA.svg'
import UKFlag from "@/components/UKFlag";
import Clock from "@/components/Clock";
import AVAV from "@/public/assets/AVAV.svg";
import Cart from "@/public/assets/Cart.svg";
import User from "@/public/assets/User.svg";
import Wallpaper from '@/public/assets/Page1bg.png'
import "aos/dist/aos.css";

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
    <div className="h-full bg-black relative overflow-hidden">
      <Image
        alt=""
        className="absolute h-full w-full object-cover -z-80 opacity-90"
        src={Wallpaper}
        width={3841}
        height={2159}
      />
      <div className="h-full relative flex flex-col justify-center items-center text-white tracking-widest">
        <div className="text-left space-y-16 absolute left-2 lg:left-16 top-2 sm:top-16">
          <div className="  invert flex gap-2 xl:gap-16 items-end">
            <Image className="invert h-[25px] w-auto" src={AVAVBorder}/>
            
            <Image className="invert  h-[25px] w-auto xl:h-[50px]" src={ZIMA}/>
            
            <p className="invert">about</p>
          </div>
          <button className="flex gap-4 sm:text-2xl items-center uppercase">
          <Image className=" h-[16px]" src={BackArrow}/>
            <p>Back</p>
          </button>
        </div>
        <div className=" max-xl:hidden text-center absolute top-16 ">
          <span className="invert">
          <Image className="invert h-[25px] xl:h-[50px]" src={AVAV}/>
          </span>
        </div>
        <div className="text-right absolute top-2 md:top-16 right-2 lg:right-16  sm:top-16">
          <div className=" flex items-center gap-14">
            <div className="flex max-lg:hidden items-center gap-4 text-[14px] leading-4">
              <span className="">
                <Clock />
              </span>
              <UKFlag />
            </div>
            <button className="p-1">
            <Image className=" h-[25px]" src={Cart}/>
            </button>
            <button className="p-1">
            <Image className=" h-[25px]" src={User}/>
            </button>
          </div>
        </div>
        <div className="text-left absolute left-4 md:left-16">
          <h2 className="text-[24px] md:text-[40px]">Discover</h2>
          <h1 className="text-4xl md:text-6xl">a new world</h1>
          <p className="text-lg md:text-xl text-[#737373] mt-6">
            for those who wish for more...
          </p>
        </div>
        <div className="text-center absolute bottom-4">
          <div className="text-center space-y-16">
            <p className=" md:text-xl text-[#737373] mt-6">
              Bringing the world closer together
            </p>
            <button className="animate-bounce invert" onClick={() => setShouldScroll(true)}>
          <Image className="h-[30px] lg:h-[80px] invert" src={DownArrow} />
        </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageOne;
