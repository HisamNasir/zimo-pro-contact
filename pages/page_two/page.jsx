import React, { useEffect } from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css'
import DownArrow from '@/public/assets/DownArrow.svg'
import AVAV from "@/public/assets/AVAV.svg";
import Image from 'next/image';


const PageTwo = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });

    const handleScrollDown = () => {
      window.scrollTo({
        top: window.innerHeight*2,
        behavior: 'smooth',
      });
    };

    const downArrowButton = document.getElementById('down-arrow-button');
    if (downArrowButton) {
      downArrowButton.addEventListener('click', handleScrollDown);
    }

    return () => {
      if (downArrowButton) {
        downArrowButton.removeEventListener('click', handleScrollDown);
      }
    };
  }, []);
  return (
    <div className="h-screen page" data-aos="fade-up" data-aos-once="false">
      <div className="h-full relative flex justify-center items-center tracking-widest">
        <div className="text-center absolute top-8 ">
          a real estate and property platform that is changing the world
        </div>
        <div className="text-left absolute top-32 left-4 sm:left-8 md:left-16">
          <div className=' space-y-2'>
            <h3 className="text-xl sm:text-xl md:text-2xl lg:text-4xl">a revolutionary platform</h3>
            <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-[63px]">entries - sellers</h2>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[87px]">worldwide</h1>
          </div>
        </div>
        <div className="text-right max-lg:w-full max-lg:flex max-lg:flex-col max-lg:items-center absolute xl:space-y-4 sm:space-y-2 lg:right-4">
          <Image src={AVAV} className="invert w-[250px] sm:w-[300px] md:w-[400px] lg:w-[500px] max-lg:h-[80px] sm:h-[90px] md:h-[100px] lg:h-[144px]" />
          <div>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg p-2 leading-6 sm:leading-8 text-center">connecting users from across the globe <br /> to facilitate life's most important <br /> personal transaction</p>
          </div>
        </div>
        <div className="text-left absolute bottom-32 md:bottom-40 lg:bottom-48 left-4 sm:left-8 md:left-16">
          <div className=" space-y-4 xl:space-y-8">
            <h3 className="text-xl sm:text-xl md:text-2xl lg:text-3xl">The best of the best</h3>
            <p className="text-base sm:text-md md:text-lg lg:w-1/2 lg:text-xl">A COMBINATION OF AUTOMATION AND MANUAL CURATION OUR PRO AGENTS AND MODERATION TEAM SELECTS THE HIGHEST QUALITY LISTINGS ON THE MARKET FROM ACROSS THE WORLD.</p>
          </div>
        </div>
        <div className="text-center absolute bottom-1">
          <button id="down-arrow-button" className="animate-bounce invert">
            <Image className="h-[20px] sm:h-[40px] md:h-[80px]" src={DownArrow} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageTwo;