import ZIMA from '@/components/ZIMA'
import React from 'react'
import ImageCard from '@/public/assets/page4image.png'
import Image from 'next/image'
const PageFour = () => {
  return (
    <div className="h-full" >
    {/* <Image className="absolute h-full w-auto object-cover -z-160 opacity-90" src={Wallpaper} width={3841} height={2159}/> */}
    <div className="h-full relative flex justify-between  items-center tracking-widest">

    <div className="text-left  pl-16">
        <div className='leading-tight space-y-8'>
            <div className='mb-8'>
        <ZIMA width="565" height="152" color="#000" />
            </div>
            <div>
            <h2 className=' text-[40pt]'>
                one source
            </h2>
            <h1 className=' text-[60pt]'>
                entry ticket
            </h1>

            </div>
            <p>
for all premium listings
            </p>
            
        </div>
    </div>

    <div className=" pr-16 translate-y-20">
        <div>
            <Image src={ImageCard} width={1083} height={718}/>
        </div>
        <p className=' text-3xl text-center mt-20'>let your dreams find you</p>
    </div>

  </div>
</div>
  )
}

export default PageFour