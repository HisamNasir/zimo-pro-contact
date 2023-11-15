import Groupbrands from '@/components/Groupbrands'
import ZIMAPartners from '@/components/ZIMAPartners'
import React from 'react'
const PageSeven = () => {
  return (
    <div className="h-full" >
    {/* <Image className="absolute h-full w-auto object-cover -z-160 opacity-90" src={Wallpaper} width={3841} height={2159}/> */}
    <div className="h-full relative flex max-lg:flex-col justify-center max-lg:space-y-60 items-center tracking-widest">

    <div className=" lg:absolute left-16  hover:scale-110 transition-all duration-500 "><ZIMAPartners/></div>
    <div className="  hover:scale-110 transition-all duration-500 "><Groupbrands/></div>
</div>
</div>
  )
}

export default PageSeven