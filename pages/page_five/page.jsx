import React from "react";
import Wallpaper from "@/public/assets/fifthWallpaper.png";
import Image from "next/image";

import AVAV from "@/public/assets/AVAV.svg";
import BackArrow from "@/public/assets/BackArrow.svg";
const PageFive = () => {
  return (
    <div className="h-screen bg-black " data-aos="fade-up"data-aos-once="false">
      <Image
        className="absolute h-full w-full object-cover -z-100 opacity-90 "
        src={Wallpaper}
        width={3841}
        height={2159}
      />
      <div className="h-screen relative flex p-4 lg:justify-center items-center text-white tracking-widest">
        <div className="text-left absolute top-16 lg:right-16">
          <div className=" max-w-min">
            <h2 className=" text-2xl md:text-4xl mb-5 md:mb-8 min-w-max tracking-widest">Personalised for you</h2>
            <p className=" text-xs lg:text-lg tracking-wide leading-6 lg:leading-10 opacity-50 relative">
              Delivering thousands of personalised alerts 
              everyday, our USERS can be first in line when
              that opportunity of a lifetime is here.
            </p>
          </div>
        </div>
        <div className="text-right absolute top-16 right-16">
          <div></div>
        </div>
        <div className="text-left absolute max-md:bottom-16 md:left-16">
          <div>
            <div className=" opacity-10 animate-pulse  delay-500">
              <Image className=" h-[134x] md:w-[547px] " src={AVAV} />
            </div>
          </div>
        </div>

        <button className="text-right z-10 absolute right-2 md:right-16 flex gap-2 items-center p-4 hover:translate-x-8 transition-all duration-500 ">
          <p>create user id</p>
          <Image className=" h-[16px] rotate-180 max-h-[100vh] "src={BackArrow} />
        </button>
      </div>
    </div>
  );
};

export default PageFive;
