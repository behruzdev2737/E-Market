import React from "react";

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6 text-center">Biz bilan bog‘lanish</h1>
      <p className="text-lg text-gray-700 mb-4 text-center">
        Sizni qiziqtirgan savollar bo‘lsa, biz bilan bemalol bog‘lanishingiz mumkin:
      </p>
      <div className="bg-gray-100 rounded-2xl shadow p-6 space-y-3">
        <p>📧 Email: <b>support@gadgetstore.uz</b></p>
        <p>📞 Telefon: <b>+998 (90) 123-45-67</b></p>
        <p>📍 Manzil: Toshkent, Amir Temur shoh ko‘chasi, 12-uy</p>
        <p>🕒 Ish vaqti: <b>Dushanba – Shanba, 09:00 – 20:00</b></p>
      </div>
      <p className="mt-6 text-center text-gray-600">
        👉 Bizni <b>Telegram</b> va <b>Instagram</b>da ham topishingiz mumkin!
      </p>
    </div>
  );
}
