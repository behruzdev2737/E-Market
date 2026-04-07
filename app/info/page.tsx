"use client";
import React, { useEffect, useState } from "react";
import { MapPin, Truck, CreditCard } from "lucide-react";
import { useRouter } from "next/navigation";
import Card from "@/assets/image 65.png";

/* ✅ TYPE QO‘SHILDI */
type CartItem = {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
  color?: string;
};

const CheckoutPage = () => {
  const [step, setStep] = useState(1);
  const [selectedAddress, setSelectedAddress] = useState<number>(1);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const storedCart: CartItem[] = JSON.parse(
      localStorage.getItem("cart") || "[]"
    );
    setCart(storedCart);
  }, []);

  const addresses = [
    {
      id: 1,
      title: "Home",
      address: "1131 Dusty Townline, Jacksonville, TX 40322",
      phone: "(209) 555-0104",
    },
  ];

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const estimatedTax = 50;
  const shipping = 29;
  const grandTotal = total + estimatedTax + shipping;

  const Step1 = () => (
    <div className="space-y-8">
      <h2 className="text-xl font-bold">Select Address</h2>
      {addresses.map((a) => (
        <div
          key={a.id}
          className={`p-4 border rounded-xl cursor-pointer ${
            selectedAddress === a.id
              ? "border-black bg-gray-50"
              : "border-gray-200"
          }`}
          onClick={() => setSelectedAddress(a.id)}
        >
          <div className="flex justify-between">
            <div>
              <h3 className="font-semibold">{a.title}</h3>
              <p className="text-sm text-gray-500">{a.address}</p>
              <p className="text-sm text-gray-400">{a.phone}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const Step2 = () => (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Select Shipping Method</h2>
      <label className="flex items-center justify-between border p-4 rounded-xl cursor-pointer">
        <div className="flex items-center gap-3">
          <input type="radio" name="shipping" defaultChecked />
          <Truck />
          <span>Free Delivery (3-5 Days)</span>
        </div>
        <span className="font-semibold">$0.00</span>
      </label>
      <label className="flex items-center justify-between border p-4 rounded-xl cursor-pointer">
        <div className="flex items-center gap-3">
          <input type="radio" name="shipping" />
          <Truck />
          <span>Express Delivery (1-2 Days)</span>
        </div>
        <span className="font-semibold">$10.00</span>
      </label>
    </div>
  );

  const Step3 = () => (
    <div className="grid grid-cols-2 gap-8">
      <div className="border rounded-xl p-6 space-y-4">
        <h2 className="text-xl font-bold mb-4">Summary</h2>
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border rounded-xl p-3"
          >
            <div className="flex items-center gap-3">
              <img
                src={item.image}
                alt={item.title}
                className="w-12 h-12 object-cover rounded-md"
              />
              <div>
                <p className="font-semibold">{item.title}</p>
                <p className="text-gray-500 text-sm">${item.price}</p>
              </div>
            </div>
            <p className="font-semibold">x{item.quantity}</p>
          </div>
        ))}

        <div className="text-sm mt-4 space-y-1">
          <p>Address: {addresses[0].address}</p>
          <p>Shipment method: Free</p>
        </div>

        <div className="border-t pt-4 space-y-2">
          <div className="flex justify-between text-[15px]">
            <p>Subtotal</p>
            <p>${total.toFixed(2)}</p>
          </div>
          <div className="flex justify-between text-gray-500 text-[15px]">
            <p>Estimated Tax</p>
            <p>${estimatedTax}</p>
          </div>
          <div className="flex justify-between text-gray-500 text-[15px]">
            <p>Estimated Shipping & Handling</p>
            <p>${shipping}</p>
          </div>
          <div className="flex justify-between font-bold text-[16px]">
            <p>Total</p>
            <p>${grandTotal.toFixed(2)}</p>
          </div>
        </div>
      </div>

      <div className="border rounded-xl p-6 space-y-4">
        <h2 className="text-xl font-bold">Payment</h2>
        <div className="flex gap-6 border-b pb-2 text-gray-500">
          <p className="border-b-2 border-black pb-1 text-black font-semibold">
            Credit Card
          </p>
          <p>PayPal</p>
          <p>PayPal Credit</p>
        </div>

        <div className="flex flex-col gap-3">
          <img src={Card.src} alt="" />
          <input
            placeholder="Cardholder Name"
            className="border p-3 rounded-xl"
          />
          <input
            placeholder="Card Number"
            className="border p-3 rounded-xl"
          />
          <div className="flex gap-3">
            <input
              placeholder="Exp. Date"
              className="border p-3 rounded-xl w-1/2"
            />
            <input
              placeholder="CVV"
              className="border p-3 rounded-xl w-1/2"
            />
          </div>
          <label className="flex items-center gap-2 text-sm mt-2">
            <input type="checkbox" defaultChecked /> Same as billing address
          </label>
        </div>
      </div>
    </div>
  );

  if (showSuccess) {
    return (
      <div className="flex flex-col items-center justify-center h-[70vh]">
        <h1 className="text-3xl font-bold mb-4 text-green-600">
          ✅ Sizning buyurtmangiz tasdiqlandi!
        </h1>
        <p className="text-gray-600 mb-6">
          Tez orada siz bilan boglanamiz.
        </p>
        <button
          onClick={() => {
            localStorage.removeItem("cart");
            router.push("/");
          }}
          className="px-6 py-3 bg-black text-white rounded-xl"
        >
          Asosiy sahifaga qaytish
        </button>
      </div>
    );
  }

  return (
    <div className="w-[1000px] mx-auto py-10">
      <div className="flex justify-between mb-10">
        <div className="flex items-center gap-2">
          <MapPin className={`${step >= 1 ? "text-black" : "text-gray-400"}`} />
          <span
            className={`${step >= 1 ? "font-semibold" : "text-gray-400"}`}
          >
            Step 1: Address
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Truck className={`${step >= 2 ? "text-black" : "text-gray-400"}`} />
          <span
            className={`${step >= 2 ? "font-semibold" : "text-gray-400"}`}
          >
            Step 2: Shipping
          </span>
        </div>
        <div className="flex items-center gap-2">
          <CreditCard
            className={`${step >= 3 ? "text-black" : "text-gray-400"}`}
          />
          <span
            className={`${step >= 3 ? "font-semibold" : "text-gray-400"}`}
          >
            Step 3: Payment
          </span>
        </div>
      </div>

      <div className="border rounded-2xl p-8 bg-white shadow-sm">
        {step === 1 && <Step1 />}
        {step === 2 && <Step2 />}
        {step === 3 && <Step3 />}
      </div>

      <div className="flex justify-between mt-10">
        <button
          onClick={() => setStep(Math.max(1, step - 1))}
          className={`px-6 py-3 border rounded-xl ${
            step === 1
              ? "text-gray-400 border-gray-200"
              : "hover:bg-gray-100"
          }`}
          disabled={step === 1}
        >
          Back
        </button>

        <button
          onClick={() => {
            if (step === 3) {
              setShowSuccess(true);
            } else {
              setStep(step + 1);
            }
          }}
          className="px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800"
        >
          {step === 3 ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;