import Image from 'next/image';
import React from 'react';

const Card = ({ image, text }) => {
  return (
    <div className="file:m-2" >
        <Image className=' h-auto w-full' src={image} width={600} height={600} />
      <div className="absolute w-auto  bottom- inset-0 flex items-end hover:items-center transition-all rounded-xl hover:bg-black hover:bg-opacity-50 duration-500 justify-center">
        <p className="text-white lg:text-2xl pb-4 ">{text}</p>
      </div>
    </div>
  );
};

export default Card;
