'use client'
import axios from 'axios';
import { Heart } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const DiscountProducts = () => {

  const [products, setProducts] = useState<any[]>([]); 
  const router = useRouter()

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        setProducts(response.data.products);
      } catch (error) {
        console.error("Mahsulotlarni olishda xato:", error);
      }
    };

    fetchProducts(); 
  }, []);

  return (
    <div className='w-full mt-[60px] md:mt-[120px] px-4 md:px-10'>
      
      <h1 className='text-[20px] md:text-[24px] mb-[20px] md:ml-[180px]'>
        Discounts up to -50%
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:px-[180px]">
        {products.slice(8,12).map((product) => (
          <div
            key={product.id}
            className="w-full max-w-[300px] mx-auto p-4 border rounded bg-[#F6F6F6] flex flex-col items-center"
          >
            <div className="w-full flex justify-end">
              <Heart />
            </div>

            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-[120px] h-[120px] object-contain my-3"
            />

            <h3 className="font-semibold text-center text-sm md:text-base">
              {product.title}
            </h3>

            <p className="font-bold mt-2">${product.price}</p>

            <button 
              className="w-[140px] md:w-[158px] h-[44px] md:h-[48px] bg-black rounded-xl text-white mt-3"
              onClick={()=>router.push(`ProductsDetails/${product.id}`)}
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DiscountProducts