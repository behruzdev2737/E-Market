import React from 'react'
import Banner from '@/assets/Banner 2.png'

const SmallBanner2 = () => {
  return (
    <div className="w-full overflow-hidden">
      <img 
        src={Banner.src} 
        alt="Banner"
        className="w-full h-auto object-cover"
      />
    </div>
  )
}

export default SmallBanner2