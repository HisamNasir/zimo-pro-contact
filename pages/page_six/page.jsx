import Image from 'next/image'
import React from 'react'
import Wallpaper from '@/public/assets/mapWallpaper.png'
const PageSix = () => {
  return (
    <div className="h-full" >
    <Image className="absolute h-full w-auto object-cover -z-80 opacity-90" src={Wallpaper} width={3841} height={2159}/>
    <div className="h-full relative flex justify-center items-center tracking-widest">

    <div className="text-center">
        <div>
            <h1 className=' text-[40px] mb-8'>global vision</h1>
            <p className=' text-center leading-8'>
            With a remote culture, diversity is naturally in our DNA. <br/>
Based across THE GLOBE, making up over 23 different nationalities.
            </p>
        </div>
    </div>

  </div>
</div>
  )
}

export default PageSix;