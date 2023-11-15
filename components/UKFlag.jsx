import Image from 'next/image'
import React from 'react'
import UK from '@/public/assets/UK.png'
export default function UKFlag() {
  return (
    <div>
        <Image className=' w-[37px] h-[25px]' width={250} height={200} src={UK}/>
    </div>
  )
}
