import React from 'react'
import Logo from '@/assets/Logo.png'

const Footer = () => {
  return (
    <div className='w-full bg-[#000000]'>
      
      <div className='py-[60px] md:py-[104px] px-4 sm:px-8 md:px-[80px] lg:px-[160px] 
                      grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-[80px] lg:gap-[150px]'>

        {/* LEFT */}
        <div className='flex flex-col gap-[20px]'>
          <img src={Logo.src} alt="" width={80}/>
          <p className='text-gray-400 max-w-[384px] text-sm md:text-base'>
            We are a residential interior design firm located in Portland. Our boutique-studio offers more than
          </p>
        </div>

        {/* SERVICES */}
        <div className='text-white flex flex-col gap-[10px]'>
          <h1 className='font-bold text-[18px] md:text-[20px]'>Services</h1>
          <p className='text-gray-400'>Bonus program</p>
          <p className='text-gray-400'>Gift cards</p>
          <p className='text-gray-400'>Credit and payment</p>
          <p className='text-gray-400'>Service contracts</p>
          <p className='text-gray-400'>Non-cash account</p>
          <p className='text-gray-400'>Payment</p>
        </div>

        {/* ASSISTANCE */}
        <div className='text-white flex flex-col gap-[10px]'>
          <h1 className='font-bold text-[18px] md:text-[20px]'>Assistance to the buyer</h1>
          <p className='text-gray-400'>Find an order</p>
          <p className='text-gray-400'>Terms of delivery</p>
          <p className='text-gray-400'>Exchange and return of goods</p>
          <p className='text-gray-400'>Guarantee</p>
          <p className='text-gray-400'>Frequently asked questions</p>
          <p className='text-gray-400'>Terms of use of the site</p>
        </div>

      </div>
    </div>
  )
}

export default Footer