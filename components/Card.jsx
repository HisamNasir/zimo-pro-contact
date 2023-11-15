import Image from 'next/image';
import React from 'react';

const Card = ({ image, text }) => {
  return (
    <div className="w-[420px] h-[420px] relative m-2" >
        <Image className='w-[420px] h-[420px] ' src={image} width={600} height={600} />
      <div className="absolute bottom-4 inset-0 flex items-end justify-center">
        <p className="text-white text-2xl ">{text}</p>
      </div>
    </div>
  );
};

export default Card;
