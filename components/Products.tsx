"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Heart } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Products = () => {
  const router = useRouter();
  const [activeButton, setActiveButton] = useState<
    "new" | "best" | "featured" | null
  >(null);
  const [products, setProducts] = useState<any[]>([]);

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
    <div className="w-[1707px] h-[1056px]">
      <div className="font-bold flex gap-10 pl-[220px] pt-[56px]">
        <button
          onClick={() => setActiveButton("new")}
          style={{ color: activeButton === "new" ? "black" : "gray" }}
          className="cursor-pointer"
        >
          New Arrival
        </button>
        <button
          onClick={() => setActiveButton("best")}
          style={{ color: activeButton === "best" ? "black" : "gray" }}
          className="cursor-pointer"
        >
          Bestseller
        </button>
        <button
          onClick={() => setActiveButton("featured")}
          style={{ color: activeButton === "featured" ? "black" : "gray" }}
          className="cursor-pointer"
        >
          Featured Products
        </button>
      </div>

      <div className="flex flex-wrap gap-5 pl-[220px] pt-[20px]">
        {products.slice(0, 8).map((product) => (
          <div
            key={product.id}
            className="w-[300px] p-4 border rounded text-center bg-[#F6F6F6]"
          >
            <Heart />
            <img src={product.thumbnail} alt={product.title} className="" />
            <h3 className="font-semibold">{product.title}</h3>
            <p className="font-bold mt-2">${product.price}</p>
              <button className="w-[158px] h-[48px] bg-black rounded-xl text-white" onClick={()=> router.push(`/ProductsDetails/${product.id}`)}>
                Buy Now
              </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
