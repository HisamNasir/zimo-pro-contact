import React from "react";
import Wallpaper from "@/public/assets/fifthWallpaper.png";
import Image from "next/image";
import AVAV from "@/components/AVAV";
import LongArrow from "@/components/LongArrow";
const PageFive = () => {
  return (
    <div className="h-full bg-black ">
      <Image
        className="absolute h-full w-full object-cover -z-160 opacity-90"
        src={Wallpaper}
        width={3841}
        height={2159}
      />
      <div className="h-full relative flex justify-center items-center text-white tracking-widest">
        <div className="text-left absolute top-16 right-16">
          <div>
            <h2 className=" text-[40px] mb-8">Personalised for you</h2>
            <p className=" text-xl leading-10 opacity-50">
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
            <div className=" opacity-10">
              <AVAV width="547px" height="134" color="#fff" />
            </div>
          </div>
        </div>

        <div className="text-right absolute right-16 flex gap-2 items-center ">
          <p>create user id</p>
          <LongArrow />
        </div>

      </div>
    </div>
  );
};

export default PageFive;
