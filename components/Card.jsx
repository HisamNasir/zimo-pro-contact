import Image from 'next/image';
import React from 'react';

const Card = ({ image, text }) => {
  return (
    <div className="  lg:w-[420px] w-[220px] lg:h-[420px] relative m-2" >
        <Image className='lg:w-[420px] lg:h-[420px] ' src={image} width={600} height={600} />
      <div className="absolute bottom- inset-0 flex items-end hover:items-center transition-all rounded-xl hover:bg-black hover:bg-opacity-50 duration-500 justify-center">
        <p className="text-white lg:text-2xl pb-4 ">{text}</p>
      </div>
    </div>
  );
};

export default Card;
