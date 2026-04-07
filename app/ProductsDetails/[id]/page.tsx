"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import { LucideCarTaxiFront, Home, CheckCircle } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Product = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  images: string[];
  category: string;
  brand: string;
  description: string;
};

type CartItem = {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
  color: string;
};

const ProductDetailsPage = () => {
  const { id } = useParams();

  const [product, setProduct] = useState<Product | null>(null);
  const [mainImage, setMainImage] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(
          `https://dummyjson.com/products/${id}`
        );

        setProduct(res.data);
        setMainImage(res.data.thumbnail);
      } catch (error) {
        console.error("Xatolik:", error);
      }
    };

    if (id) fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (!product) return;

    const existingCart: CartItem[] = JSON.parse(
      localStorage.getItem("cart") || "[]"
    );

    const existingIndex = existingCart.findIndex(
      (item) => item.id === product.id
    );

    if (existingIndex !== -1) {
      existingCart[existingIndex].quantity += 1;
    } else {
      existingCart.push({
        id: product.id,
        title: product.title,
        price: product.price,
        image: mainImage || product.thumbnail,
        quantity: 1,
        color: selectedColor || "default",
      });
    }

    localStorage.setItem("cart", JSON.stringify(existingCart));

    toast.success(`${product.title} savatchaga qo‘shildi!`, {
      position: "top-left",
      autoClose: 2000,
    });
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className="w-[1400px] mx-auto py-10 flex gap-10">
      <ToastContainer />

      <div className="flex flex-col gap-4">
        {product.images?.slice(0, 4).map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Variant ${index + 1}`}
            className={`w-[100px] h-[100px] object-cover rounded-xl cursor-pointer border transition-all duration-300 ${
              mainImage === img
                ? "border-black scale-105"
                : "border-gray-300"
            }`}
            onClick={() => setMainImage(img)}
          />
        ))}
      </div>

      <div className="flex-1 flex gap-10">
        <img
          src={mainImage}
          alt={product.title}
          className="w-[400px] h-[400px] object-cover rounded-xl shadow"
        />

        <div className="flex flex-col gap-[10px]">
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-2xl font-semibold mb-2">${product.price}</p>

          <div className="flex gap-3 items-center">
            <p className="font-medium">Select Color:</p>
            {["red", "green", "blue"].map((color) => (
              <div
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`cursor-pointer rounded-full transition-all duration-300 ${
                  selectedColor === color
                    ? "scale-75 ring-2 ring-black"
                    : "scale-100"
                }`}
                style={{
                  backgroundColor: color,
                  width: "24px",
                  height: "24px",
                }}
              />
            ))}
          </div>

          <p className="text-gray-600 mb-4 w-[600px] h-[100px] rounded-xl bg-gray-100 p-2">
            {product.description}
          </p>

          <p className="text-sm text-gray-500 mb-6">
            Brand: {product.brand} | Category: {product.category}
          </p>

          <button
            onClick={handleAddToCart}
            className="bg-black text-white px-8 py-3 rounded-xl hover:bg-gray-800"
          >
            Add to Cart
          </button>

          <div className="flex items-center gap-[70px] mt-6">
            <div className="flex gap-4">
              <div className="w-[50px] h-[50px] bg-gray-100 flex items-center justify-center rounded-xl">
                <LucideCarTaxiFront />
              </div>
              <div>
                <h1 className="text-gray-400">Free Delivery</h1>
                <h1 className="font-bold">1-2 day</h1>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-[50px] h-[50px] bg-gray-100 flex items-center justify-center rounded-xl">
                <Home />
              </div>
              <div>
                <h1 className="text-gray-400">In Stock</h1>
                <h1 className="font-bold">Today</h1>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-[50px] h-[50px] bg-gray-100 flex items-center justify-center rounded-xl">
                <CheckCircle />
              </div>
              <div>
                <h1 className="text-gray-400">Guaranteed</h1>
                <h1 className="font-bold">1 year</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;