import React from 'react'
import Logo from '@/assets/Logo.png'

const Footer = () => {
  return (
    <div className='w-[1707] h-[513px] bg-[#000000]'>
        <div className='py-[104px] px-[160px]  flex gap-[233px]'>
      <div className='flex flex-col gap-[20px]'>
        <img src={Logo.src} alt="" width={80}/>
        <p className='w-[384px] h-[48px] text-gray-400'>We are a residential interior design firm located in Portland. Our boutique-studio offers more than</p>
      </div>
      <div className='text-white flex flex-col gap-[10px]'>
        <h1 className='font-bold text-[20px]'>Services</h1>
        <p className='text-gray-400'>Bonus program</p>
        <p className='text-gray-400'>Gift cards</p>
        <p className='text-gray-400'>Credit and payment</p>
        <p className='text-gray-400'>Service contracts</p>
        <p className='text-gray-400'>Non-cash account</p>
        <p className='text-gray-400'>Payment</p>
      </div>
      <div className='text-white flex flex-col gap-[10px]'>
        <h1 className='font-bold text-[20px]'>Assistance to the buyer</h1>
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
