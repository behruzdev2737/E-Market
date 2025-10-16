"use client";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const CartPage = () => {
  const [cart, setCart] = useState<any[]>([]);
  const router = useRouter()

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

  const updateQuantity = (id: number, newQty: number) => {
    const updated = cart.map((item) =>
      item.id === id ? { ...item, quantity: newQty } : item
    );
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const removeFromCart = (id: number) => {
    const filtered = cart.filter((item) => item.id !== id);
    setCart(filtered);
    localStorage.setItem("cart", JSON.stringify(filtered));
  };

  const clearCart = () => {
    localStorage.removeItem("cart");
    setCart([]);
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="w-full text-center py-20 text-2xl font-semibold">
        🛒 Savatchangiz hozircha bosh
      </div>
    );
  }

  return (
    <div className="flex items-center">
      <div className="w-[600px] ml-[220px] py-10 h-full">
        <h1 className="text-3xl font-bold mb-8">Savatcha</h1>

        <div className="flex flex-col gap-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b pb-4"
            >
              <div className="flex items-center gap-6">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-[100px] h-[100px] object-cover rounded-xl"
                />
                <div>
                  <h2 className="font-semibold text-lg">{item.title}</h2>
                  <p className="text-gray-500">${item.price}</p>
                  <p className="text-sm text-gray-400">
                    Rang: {item.color || "default"}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={() =>
                    updateQuantity(item.id, Math.max(1, item.quantity - 1))
                  }
                  className="px-3 py-1 border rounded-lg hover:bg-gray-100"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="px-3 py-1 border rounded-lg hover:bg-gray-100"
                >
                  +
                </button>

                <p className="w-[80px] text-right font-semibold">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>

                <button onClick={() => removeFromCart(item.id)}>
                  <X />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center mt-10">
          <button
            onClick={clearCart}
            className="px-6 py-3 bg-gray-200 rounded-xl hover:bg-gray-300"
          >
            Savatni tozalash
          </button>
        </div>
      </div>

      <div className="container py-10 h-[600px] w-[536px] border-1 rounded-xl flex flex-col gap-[20px]">
        <h1 className="text-[20px] font-bold w-[408px] h-[26px] pt-[6px] p-[54px]">
          Order Summary
        </h1>
        <div>
          <h1 className="text-[14px] w-[408px] h-[26px] pl-[54px] text-gray-500">
            Discount code / Promo code
          </h1>
          <input
            type="text"
            placeholder="Code"
            className="w-[408px] h-[56px] ml-[54px] px-[16px] border-2 rounded-xl"
          />
        </div>
        <div>
          <h1 className="text-[14px] w-[408px] h-[26px] pl-[54px] text-gray-500">
            Your bonus card number
          </h1>
          <input
            placeholder="Enter Card Number"
            className="w-[408px] h-[56px] ml-[54px] px-[16px] border-2 rounded-xl"
          />
        </div>
        <div className=" px-[55px] flex flex-col gap-5">
          <div className="flex font-semibold justify-between">
            <p className="text-xl font-semibold text-[17px]">Subtotal</p>
          <p className="text-[17px]">${total.toFixed(2)}</p>
          </div>
          <div className="flex font-semibold justify-between">
            <p className="text-[17px] text-gray-500">Estimated Tax</p>
          <p className="text-[17px]">$50</p>
          </div>
          <div className="flex font-semibold justify-between">
            <p className="text-[17px] text-gray-500">Estimated Shipping & Handling</p>
          <p className="text-[17px]">$29</p>
          </div>
          <div className="flex font-semibold justify-between">
            <p className="text-[17px] font-bold">Total</p>
            <p className="text-[17px]">${(total+50+29).toFixed(2)}</p>
          </div>
          <button className="w-[408px] h-[56px] bg-black text-white rounded-xl" onClick={() => router.push('/info')}>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
