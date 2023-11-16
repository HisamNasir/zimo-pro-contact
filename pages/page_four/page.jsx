import ZIMA from '@/public/assets/ZIMA.svg'
import React from 'react'
import ImageCard from '@/public/assets/page4image.png'
import Image from 'next/image'
const PageFour = () => {
  return (
    <div className="h-screen" >
    {/* <Image className="absolute h-full w-auto object-cover -z-160 opacity-90" src={Wallpaper} width={3841} height={2159}/> */}
    <div className="h-full relative lg:flex justify-between  items-center tracking-widest">

    <div className="text-left pl-2  lg:pl-16">
        <div className='leading-tight space-y-8'>
            <div className='mb-8'>
                <Image className=' h-[152px] w-full px-3 invert' src={ZIMA}/>
            </div>
            <div>
            <h2 className=' text-xl xl:mb-8 xl:text-4xl'>
                one source
            </h2>
            <h1 className=' text-2xl xl:text-6xl'>
                entry ticket
            </h1>

            </div>
            <p>
for all premium listings
            </p>
            
        </div>
    </div>

    <div className=" lg:pr-16 ">
        <div className='max-lg:px-7'>
            <Image src={ImageCard} width={1083} height={718}/>
        </div>
        <p className=' text-3xl text-center mt-20'>let your dreams find you</p>
    </div>

  </div>
</div>
  )
}

export default PageFour