"use client";
import React, { useEffect, useState } from "react";
import { useParams,useRouter } from "next/navigation";
import axios from "axios";
import { Heart } from "lucide-react";


const CategoryPage = () => {
  const router = useRouter();
  const { category } = useParams(); 
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          `https://dummyjson.com/products/category/${category}`
        );
        setProducts(res.data.products);
      } catch (error) {
        console.error("Xatolik:", error);
      }
    };

    fetchProducts();
  }, [category]);

  return (
    <div className="w-[1600px] mx-auto py-10">
      <h1 className="text-3xl font-bold capitalize mb-8">
        {category}
      </h1>

      <div className="grid grid-cols-4 gap-6">
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product.id}
              className="bg-[#F6F6F6] p-4 rounded-xl flex flex-col items-center"
            >
              <Heart className="self-end mb-2 cursor-pointer" />
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-[200px] h-[200px] object-cover"
              />
              <h3 className="font-semibold mt-2 text-center">
                {product.title}
              </h3>
              <p className="text-lg font-bold mt-2">${product.price}</p>
              <button 
              onClick={() => router.push(`/ProductsDetails/${product.id}`)}
              className="mt-3 bg-black text-white px-6 py-2 rounded-xl">
                Buy Now
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500 w-[1600px] flex items-center justify-center">Mahsulotlar topilmadi.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
