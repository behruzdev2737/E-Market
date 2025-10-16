'use client'
import axios from 'axios';
import { Heart } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'


const DiscountProducts = () => {

    const [products, setProducts] = useState<any[]>([]); 
    const rounter = useRouter()

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
    <div className='w-[1707px] h-[656px] mt-[120px]'>
     <h1 className='ml-[220px] text-[24px] mb-[20px]'>Discounts up to -50%</h1>
      <div className="flex flex-wrap gap-5 pl-[220px] pt-[20px]">
        {products.slice(8,12).map((product) => (
          <div
            key={product.id}
            className="w-[300px] p-4 border rounded text-center bg-[#F6F6F6]"
          >
            <Heart/>
            <img
              src={product.thumbnail}
              alt={product.title}
              className=""
            />
            <h3 className="font-semibold">{product.title}</h3>
            <p className="font-bold mt-2">${product.price}</p>
            <button className="w-[158px] h-[48px] bg-black rounded-xl text-white" onClick={()=>rounter.push(`ProductsDetails/${product.id}`)}>Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DiscountProducts