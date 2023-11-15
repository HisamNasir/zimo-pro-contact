import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import AVAVBorder from "@/components/AVAVBorder";
import UKFlag from "@/components/UKFlag";
import Clock from "@/components/Clock";
import AVAV from "@/components/AVAV";
import Cart from "@/components/Cart";
import User from "@/components/User";
import ZIMA from "@/components/ZIMA";
import DownArrow from "@/components/DownArrow";
import Image from "next/image";
import Wallpaper from '@/public/assets/Page1bg.png'
import { FaArrowLeft, FaBeer } from "react-icons/fa";
const PageOne = () => {
  return (
    <div className="h-full bg-black" >
      <Image alt="" className="absolute h-full w-full object-cover -z-160 opacity-90" src={Wallpaper} width={3841} height={2159}/>
      <div className="h-full relative flex justify-center items-center text-white tracking-widest">
      <div className="text-left space-y-16 absolute left-16 top-16">
        <div className="invert flex gap-16 items-end ">
          <i>
        <AVAVBorder />

          </i>
          <i>
          <ZIMA width="184" height="50" color="" />
          </i>
          <p className=" invert">about</p>
        </div>
        <button className="flex gap-2 text-2xl items-center uppercase">
          <i>
            <FaArrowLeft/>
          </i>
          <p>Back</p>
        </button>
      </div>
      <div className="text-center absolute top-16">
        <span className="invert">
        <AVAV width="204" height="50" color="" />
        </span>
      </div>
      <div className="text-right absolute top-9 right-16">
        <div className="flex items-center gap-14">
        <div className="flex items-center gap-4  text-[14px] leading-4">
          <span className="">
            <Clock />
          </span>
          <UKFlag />
        </div>
        <button className="p-1">
          <Cart />
        </button>
        <button className="p-1">
          <User />
        </button>
        </div>
      </div>
      <div className="text-left absolute left-16">
        <h2 className=" text-[40px]">Discover</h2>
        <h1 className=" text-6xl">a new world</h1>
        <p className=" text-xl text-[#737373] mt-6">for those who wish for more...</p>
      </div>
      <div className="text-center absolute bottom-4 ">
        <div className=" text-center space-y-16">
        <p className=" text-xl text-[#737373] mt-6">Bringing the world closer together</p>
          <button className=" animate-bounce">
          <DownArrow width="80" height="40"  />
          </button>
        </div>
      </div>

      </div>
    </div>
  );
};

export default PageOne;
