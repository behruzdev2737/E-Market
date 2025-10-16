import Banners2 from '@/components/Banners2'
import Category from '@/components/Category'
import DiscountProducts from '@/components/DiscountProducts'
import Banner from '@/components/layouts/Banner'
import SmallBanner2 from '@/components/layouts/SmallBanner2'
import SmallBanners from '@/components/layouts/SmallBanners'
import Products from '@/components/Products'
import React from 'react'

const page = () => {
  return (
    <div>
      <Banner/>
          <SmallBanners/>
          <Category/>
          <Products/>
          <Banners2/>
          <DiscountProducts/>
          <SmallBanner2/>
    </div>
  )
}

export default page
