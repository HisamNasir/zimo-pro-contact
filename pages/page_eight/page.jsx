import Image from 'next/image'
import React from 'react'
import Cover from '@/public/assets/LastpageCover.png'
import Car from '@/public/assets/carvertical.png'
import AVAV from '@/components/AVAV'
const PageEight = () => {
  return (
    <div className="h-[165%]" >
        <div className='bg-black absolute  h-[1080p] -z-10 screen w-screen object-cover'></div>
    <Image className="  h-[1080p] w-auto object-cover  opacity-90" src={Cover} width={3841} height={2159}/>
    <div className="  relative flex justify-center items-center tracking-widest">
    <div className="text-left -translate-y-1/2 absolute top-[40%] hover:scale-110 transition-all duration-500 left-8"><Image src={Car} width={500} height={800}/></div>
    <div className="text-right -translate-y-1/2 absolute top-[54%] right-8 opacity-10">
    <AVAV width="913" height="223" color="" />
    </div>
  </div>
</div>
  )
}

export default PageEight