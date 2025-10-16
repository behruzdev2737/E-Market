import React from "react";

export default function Blog() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6 text-center">Blog</h1>
      <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center">
        Bizning blogimizda siz eng so‘nggi texnologiyalar, gadjetlar va foydali maslahatlar haqida ma’lumot olasiz.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white shadow rounded-2xl p-6 hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">📱 Yangi gadjetlar sharhlari</h2>
          <p className="text-gray-600">
            Smartfonlar, planshetlar va noutbuklar haqida batafsil tahlil va foydali tavsiyalar.
          </p>
        </div>

        <div className="bg-white shadow rounded-2xl p-6 hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">⚡ Texnologiya yangiliklari</h2>
          <p className="text-gray-600">
            Dunyodagi eng so‘nggi yangiliklardan xabardor bo‘ling.
          </p>
        </div>

        <div className="bg-white shadow rounded-2xl p-6 hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">💡 Foydali maslahatlar</h2>
          <p className="text-gray-600">
            Qurilmangizni to‘g‘ri ishlatish va undan unumli foydalanish bo‘yicha qo‘llanmalar.
          </p>
        </div>
      </div>
    </div>
  );
}
