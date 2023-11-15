import Image from 'next/image'
import React from 'react'
import Cover from '@/public/assets/LastpageCover.png'
import Car from '@/public/assets/carvertical.png'
import AVAV from "@/public/assets/AVAV.svg";
const PageEight = () => {
  return (
    <div className=" h-full lg:h-[165%]" >
        <div className='bg-black absolute h-[80vh] -z-10 screen w-screen object-cover'/>
    <Image className=" h-[80vh]  max-lg:absolute object-cover  opacity-90" src={Cover} width={3841} height={2159}/>
    <div className="  relative flex  justify-center items-center tracking-widest">
    <div className="text-left lg:-translate-y-1/2 translate-y-1/2 absolute top-[50%] hover:scale-110 transition-all duration-500 left-8"><Image className='' src={Car} width={500} height={800}/></div>
    <div className="text-right  lg:-translate-y-1/2  absolute top-[50%]  right-8  lg:opacity-20">
    <Image className="lg:invert  h-[223px] w-[913px]" src={AVAV}/>
    </div>
  </div>
</div>
  )
}

export default PageEight