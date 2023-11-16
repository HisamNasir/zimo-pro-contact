import DownArrow from '@/public/assets/DownArrow.svg'
import React from 'react'
import Image1 from '@/public/assets/diamond.png';
import Image2 from '@/public/assets/island.png';
import Image3 from '@/public/assets/realestate.png';
import Image4 from '@/public/assets/cars.png';
import Image5 from '@/public/assets/yachts.png';
import Image6 from '@/public/assets/watches.png';
import Image7 from '@/public/assets/jets.png';
import Image8 from '@/public/assets/travelworld.png';
import Card from '@/components/Card';
import Image from 'next/image';
import { useRef, useEffect } from 'react';

const PageThree = () => {
  useEffect(() => {
    const cardContainer = document.getElementById('card-container');

    const handleScroll = (direction) => {
      const cardWidth = cardContainer.firstChild.offsetWidth;

      if (direction === 'left') {
        cardContainer.style.transition = 'transform 1s ease-in-out';
        cardContainer.style.transform = 'translateX(50%)';
      } else if (direction === 'right') {
        cardContainer.style.transition = 'transform 1s ease-in-out';
        cardContainer.style.transform = 'translateX(-25%)';
      }

      setTimeout(() => {
        const firstCard = cardContainer.firstChild;
        cardContainer.appendChild(firstCard.cloneNode(true));
        cardContainer.removeChild(firstCard);
        cardContainer.style.transition = 'none';
        cardContainer.style.transform = 'translateX(0)';
      }, 2000);
    };

    const animationInterval = setInterval(() => {
      handleScroll('right');
    }, 5000);

    document.getElementById('left').addEventListener('click', () => handleScroll('left'));
    document.getElementById('right').addEventListener('click', () => handleScroll('right'));

    return () => {
      clearInterval(animationInterval);
      document.getElementById('left').removeEventListener('click', () => handleScroll('left'));
      document.getElementById('right').removeEventListener('click', () => handleScroll('right'));
    };
  }, []);

  return (
    <div className="h-full" >
    {/* <Image alt="" className="absolute h-full w-auto object-cover -z-160 opacity-90" src={Wallpaper} width={3841} height={2159}/> */}
    <div className="h-full relative flex justify-center items-center tracking-widest">
    <div className="text-left absolute top-80 lg:top-16 left-16 text-xl  lg:text-[40px]">our categories</div>

    <div className="text-right max-md:hidden absolute top-16 right-16 w-[129px] flex justify-between">
        <button id="left" className="invert rotate-90" >
          <Image src={DownArrow} className="h-[20px]" />
        </button>
        <button id="right" className="invert -rotate-90">
          <Image src={DownArrow} className="h-[20px]" />
        </button>
      </div>
    <div  className="overflow-hidden absolute bottom-[35%] w-full" >
        <div id="card-container" className="grid grid-flow-col space-x-2 p-2">
          <Card image={Image1} text="diamonds" />
          <Card image={Image2} text="private island" />
          <Card image={Image3} text="real estate" />
          <Card image={Image4} text="cars" />
          <Card image={Image5} text="yachts" />
          <Card image={Image6} text="watches" />
          <Card image={Image7} text="jets" />
          <Card image={Image8} text="travel the world" />
        </div>
      </div>
    <div className="text-center absolute bottom-40 text-xl lg:text-4xl space-y-12 "><h1>one platform for all premium listings</h1><p className=' font-light'>unlimited potential</p></div>
  </div>
</div>
  )
}

export default PageThree