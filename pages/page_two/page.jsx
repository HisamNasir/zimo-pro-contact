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
<div className="h-screen page"  data-aos="fade-up" data-aos-once="false">
      <div className="h-full relative flex justify-center items-center tracking-widest">
      <div className="text-center max-lg:text-xs absolute top-4 lg:top-16">a real estate and property platform that is changing the world</div>
      <div className="text-left absolute top-24 lg:top-32 left-4 lg:left-16">
        <div>
          <h3 className='max-lg:text-xs text-3xl'>a revolutionary platform</h3>
          <h2 className='max-lg:text-lg text-5xl'>entries - sellers</h2>
          <h1 className='max-xl:text-3xl text-7xl'>worldwide</h1>
        </div>
      </div>
      <div className="text-right max-lg:w-full max-lg:flex max-lg:flex-col max-lg:items-center absolute space-y-16 lg:right-16">
      
        <Image src={AVAV} className='invert w-[589px] max-lg:p-4 ma-h-[144px]'/>
       
        <div>
          <p className=' text-left p-2 lg:text-center leading-16'>connecting users from across the globe <br/> to facilitate life's most important <br/> personal transaction</p>
        </div>
      </div>
      <div className="text-left absolute bottom-32 left-4 lg:left-16">
        <div className=' space-y-4 lg:space-y-16'>
          <h3 className='max-lg:text-xs text-3xl'>The best of the best</h3>
          <p className='max-lg:text-xs text-xl lg:w-1/2'>A COMBINATION OF AUTOMATION AND MANUAL CURATION OUR PRO AGENTS AND
MODERATION TEAM SELECTS THE HIGHEST QUALITY LISTINGS ON THE MARKET
FROM ACROSS THE WORLD.</p>
        </div>
      </div>
      <div className="text-center absolute bottom-4 ">
      <button id="down-arrow-button" className="animate-bounce invert">
          <Image className="h-[30px] lg:h-[80px]" src={DownArrow} />
        </button>
      </div>
    </div>
</div>

  )
}

export default PageTwo;