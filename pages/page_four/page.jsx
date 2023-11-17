import ZIMA from '@/public/assets/ZIMA.svg'
import React from 'react'
import ImageCard from '@/public/assets/page4image.png'
import Image from 'next/image'

const PageFour = () => {
  return (
    <div className="h-screen" data-aos="fade-up"data-aos-once="false">
      <div className="h-full relative flex max-md:flex-col md:justify-between justify-center space-y-4 items-center tracking-widest">

        {/* Left Section */}
        <div className="text-left pl-2 lg:pl-16">
          <div className='leading-tight'>
            <div className='mb-8'>
              <Image className='w-[565px] px-3 invert' src={ZIMA}/>
            </div>
            <div>
              <h2 className='text-xl xl:mb-8 xl:text-4xl'>
                one source
              </h2>
              <h1 className='text-2xl xl:text-6xl'>
                entry ticket
              </h1>
            </div>
            <p className='text-[#737373]'>
              for all premium listings
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:pr-16">
          <div className='max-lg:px-7'>
            <Image className='max-h-[718px]' src={ImageCard} width={1083} height={718}/>
          </div>
          <p className='md:text-3xl text-center mt-10'>let your dreams find you</p>
        </div>

      </div>
    </div>
  )
}

export default PageFour
