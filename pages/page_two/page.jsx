import React from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
const PageTwo = () => {
  return (
    <div className="h-full flex justify-center items-center bg-gray-200">
      <div className="text-left absolute top-0 left-0">Top Left</div>
      <div className="text-center absolute top-0">Top Center</div>
      <div className="text-right absolute top-0 right-0">Top Right</div>
      <div className="text-left absolute left-0">Center Left</div>
      <div className="text-center">Center</div>
      <div className="text-right absolute right-0">Center Right</div>
      <div className="text-left absolute bottom-0 left-0">Bottom Left</div>
      <div className="text-center absolute bottom-0">Bottom Center</div>
      <div className="text-right absolute bottom-0 right-0">Bottom Right</div>
    </div>
  )
}

export default PageTwo;