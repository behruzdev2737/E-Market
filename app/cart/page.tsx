"use client";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";


const CartPage = () => {

  type CartItem = {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
  color?: string;
};


  const [cart, setCart] = useState<CartItem[]>([]);
  const router = useRouter();

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

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="w-full text-center py-20 text-xl md:text-2xl font-semibold">
        🛒 Savatchangiz hozircha bosh
      </div>
    );
  }

  return (
    <div className="w-full px-4 md:px-10 py-10">
      
      {/* MAIN WRAPPER */}
      <div className="flex flex-col lg:flex-row gap-8 justify-center">

        {/* LEFT - CART */}
        <div className="w-full lg:w-2/3">
          <h1 className="text-2xl md:text-3xl font-bold mb-6">
            Savatcha
          </h1>

          <div className="flex flex-col gap-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row md:items-center justify-between border-b pb-4 gap-4"
              >
                {/* LEFT ITEM */}
                <div className="flex items-center gap-4 md:gap-6">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] object-cover rounded-xl"
                  />

                  <div>
                    <h2 className="font-semibold text-base md:text-lg">
                      {item.title}
                    </h2>
                    <p className="text-gray-500">${item.price}</p>
                    <p className="text-sm text-gray-400">
                      Rang: {item.color || "default"}
                    </p>
                  </div>
                </div>

                {/* RIGHT CONTROLS */}
                <div className="flex items-center justify-between md:justify-end gap-3 md:gap-4">
                  
                  <button
                    onClick={() =>
                      updateQuantity(item.id, Math.max(1, item.quantity - 1))
                    }
                    className="px-3 py-1 border rounded-lg"
                  >
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-3 py-1 border rounded-lg"
                  >
                    +
                  </button>

                  <p className="w-[70px] text-right font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>

                  <button onClick={() => removeFromCart(item.id)}>
                    <X />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={clearCart}
            className="mt-6 px-6 py-3 bg-gray-200 rounded-xl hover:bg-gray-300"
          >
            Savatni tozalash
          </button>
        </div>

        {/* RIGHT - SUMMARY */}
        <div className="w-full lg:w-1/3 border rounded-xl p-5 md:p-8 flex flex-col gap-5">
          
          <h1 className="text-lg md:text-xl font-bold">
            Order Summary
          </h1>

          <div>
            <p className="text-sm text-gray-500 mb-2">
              Discount code / Promo code
            </p>
            <input
              type="text"
              placeholder="Code"
              className="w-full h-[50px] md:h-[56px] px-4 border-2 rounded-xl"
            />
          </div>

          <div>
            <p className="text-sm text-gray-500 mb-2">
              Your bonus card number
            </p>
            <input
              placeholder="Enter Card Number"
              className="w-full h-[50px] md:h-[56px] px-4 border-2 rounded-xl"
            />
          </div>

          {/* SUMMARY */}
          <div className="flex flex-col gap-4">
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p>${total.toFixed(2)}</p>
            </div>

            <div className="flex justify-between text-gray-500">
              <p>Estimated Tax</p>
              <p>$50</p>
            </div>

            <div className="flex justify-between text-gray-500">
              <p>Shipping & Handling</p>
              <p>$29</p>
            </div>

            <div className="flex justify-between font-bold">
              <p>Total</p>
              <p>${(total + 50 + 29).toFixed(2)}</p>
            </div>
          </div>

          <button
            className="w-full h-[50px] md:h-[56px] bg-black text-white rounded-xl"
            onClick={() => router.push("/info")}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;