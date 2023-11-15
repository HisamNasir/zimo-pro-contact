import React from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import DownArrow from '@/components/DownArrow'
import AVAV from '@/components/AVAV'

const PageTwo = () => {
  return (
<div className="h-full" >
      {/* <Image alt="" className="absolute h-full w-auto object-cover -z-160 opacity-90" src={Wallpaper} width={3841} height={2159}/> */}
      <div className="h-full relative flex justify-center items-center tracking-widest">
      <div className="text-left absolute top-32 left-16">
        <div>
          <h3 className=' text-[29px]'>a revolutionary platform</h3>
          <h2 className=' text-[50px]'>entries - sellers</h2>
          <h1 className=' text-[70px]'>worldwide</h1>
        </div>
      </div>
      <div className="text-center absolute top-16">a real estate and property platform that is changing the world</div>
      <div className="text-right absolute space-y-16 right-16">
      <span className=" w-[589px] h-[144px]">
      <AVAV width="589" height="144" color="#000" />
        </span>
        <div>
          <p className=' text-center leading-16'>connecting users from across the globe <br/> to facilitate life's most important <br/> personal transaction</p>
        </div>
      </div>
      <div className="text-left absolute bottom-32 left-16">
        <div className=' space-y-16'>
          <h3 className=' text-[29px]'>The best of the best</h3>
          <p className=' text-[20px] md:w-1/2'>A COMBINATION OF AUTOMATION AND MANUAL CURATION OUR PRO AGENTS AND
MODERATION TEAM SELECTS THE HIGHEST QUALITY LISTINGS ON THE MARKET
FROM ACROSS THE WORLD.</p>
        </div>
      </div>
      <div className="text-center absolute bottom-4 ">
      <button className=" animate-bounce invert">
      <DownArrow width="80" height="40"  />
          </button>
      </div>
    </div>
</div>

  )
}

export default PageTwo;