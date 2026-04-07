"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Heart } from "lucide-react";
import { useRouter } from "next/navigation";

type Product = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
};

const Products = () => {
  const router = useRouter();

  const [activeButton, setActiveButton] = useState<
    "new" | "best" | "featured" | null
  >(null);

  const [products, setProducts] = useState<Product[]>([]);

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
    <div className="w-full px-4 md:px-10 mt-[40px] md:mt-[80px]">
      {/* BUTTONS */}
      <div className="font-bold flex flex-wrap justify-center md:justify-start gap-6 md:gap-10 md:ml-[180px]">
        <button
          onClick={() => setActiveButton("new")}
          style={{ color: activeButton === "new" ? "black" : "gray" }}
          className="cursor-pointer text-sm md:text-base"
        >
          New Arrival
        </button>

        <button
          onClick={() => setActiveButton("best")}
          style={{ color: activeButton === "best" ? "black" : "gray" }}
          className="cursor-pointer text-sm md:text-base"
        >
          Bestseller
        </button>

        <button
          onClick={() => setActiveButton("featured")}
          style={{ color: activeButton === "featured" ? "black" : "gray" }}
          className="cursor-pointer text-sm md:text-base"
        >
          Featured Products
        </button>
      </div>

      {/* PRODUCTS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-6 md:px-[180px]">
        {products.slice(0, 8).map((product) => (
          <div
            key={product.id}
            className="w-full max-w-[300px] mx-auto p-4 border rounded text-center bg-[#F6F6F6] flex flex-col items-center"
          >
            <div className="w-full flex justify-end">
              <Heart />
            </div>

            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-[120px] h-[120px] object-contain my-3"
            />

            <h3 className="font-semibold text-sm md:text-base">
              {product.title}
            </h3>

            <p className="font-bold mt-2">${product.price}</p>

            <button
              className="w-[140px] md:w-[158px] h-[44px] md:h-[48px] bg-black rounded-xl text-white mt-3"
              onClick={() => router.push(`/ProductsDetails/${product.id}`)}
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;