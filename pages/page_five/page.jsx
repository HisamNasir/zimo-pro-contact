import React from "react";
import Wallpaper from "@/public/assets/fifthWallpaper.png";
import Image from "next/image";

import AVAV from "@/public/assets/AVAV.svg";
import BackArrow from '@/public/assets/BackArrow.svg'
const PageFive = () => {
  
  return (
    <div className="h-screen bg-black ">
      <Image
        className="absolute h-full w-full object-cover -z-100 opacity-90 "
        src={Wallpaper}
        width={3841}
        height={2159}
      />
      <div className="h-full relative flex p-4 lg:justify-center items-center text-white tracking-widest">
        <div className="text-left absolute top-16 lg:right-16">
          <div>
            <h2 className=" text-4xl mb-8">Personalised for you</h2>
            <p className=" text-xs lg:text-xl lg:leading-10 opacity-50">
            Delivering thousands of personalised alerts <br/>
everyday, our USERS can be first in line when<br/>
that opportunity of a lifetime is here.
            </p>
          </div>
        </div>
        <div className="text-right absolute top-16 right-16">
          <div></div>
        </div>
        <div className="text-left absolute left-16">
          <div>
            <div className=" opacity-10 animate-pulse  delay-500">
          <Image className=" h-[134x] w-[547px]" src={AVAV}/>
            </div>
          </div>
        </div>

        <button className="text-right z-10 absolute right-16 flex gap-2 items-center p-4 hover:translate-x-8 transition-all duration-500 ">
          <p>create user id</p>
          <Image className=" h-[16px] rotate-180" src={BackArrow}/>
        </button>

      </div>
    </div>
  );
};

export default PageFive;
