import React from "react";

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6 text-center">Biz haqimizda</h1>
      <p className="text-lg text-gray-700 leading-relaxed mb-4">
        Bizning onlayn do‘konimiz — zamonaviy hayot uchun eng so‘nggi 
        <span className="font-semibold"> elektron gadjetlar</span>ni taqdim etadigan ishonchli manzil.
      </p>
      <ul className="list-disc pl-6 text-gray-700 mb-6">
        <li>Eng yangi <b>smartfonlar</b>, <b>noutbuklar</b> va aksessuarlar</li>
        <li>Yuqori sifat va rasmiy kafolat</li>
        <li>Tezkor yetkazib berish va qulay to‘lov usullari</li>
      </ul>
      <p className="text-lg text-gray-700">
        📱 Maqsadimiz — hayotingizni qulayroq va zamonaviyroq qilish uchun 
        <span className="font-semibold"> innovatsion texnologiyalarni</span> sizga yaqinlashtirish.
      </p>
    </div>
  );
}
