"use client";
import React, { useEffect, useState } from "react";

// Function to generate random order number
const generateOrderNumber = () => {
  return Math.floor(100000 + Math.random() * 900000); // Generates a random 6-digit number
};

const InvoiceComp = () => {
  const [orderNumber, setOrderNumber] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    // Generate order number and current date on client side
    // @ts-ignore
    setOrderNumber(generateOrderNumber());
    setCurrentDate(new Date().toLocaleDateString());
  }, []); // Empty dependency array ensures this only runs once when the component mounts

  const invoiceItems = [
    {
      id: 1,
      item: "Abonnement Formation Sponsoring",
      quantity: 1,
      price: 247.0,
    },
  ];

  // Calculate total before and after Remise (discount)
  const totalPrice = invoiceItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const remise = 50.0; // Discount of 50 TND
  const finalPrice = totalPrice - remise;

  return (
    <div className='container mx-auto p-4 bg-gray-800 mt-10 mb-5'>
      {/* Invoice Header */}
      <div className='flex justify-between items-center mb-4'>
        <h2 className='text-2xl font-bold text-white'>Facture</h2>
        <div className='text-white text-right'>
          <p>Tunis, Tunisie | 25 25 18 08</p>
          <p>Order #: {orderNumber}</p>
          <p>Date: {currentDate}</p>
        </div>
      </div>

      {/* Invoice Table */}
      <table className='min-w-full bg-gray-900 shadow-md rounded'>
        <thead>
          <tr>
            <th className='py-2 px-4 bg-gray-700 text-left text-white font-bold'>
              Item
            </th>
            <th className='py-2 px-4 bg-gray-700 text-left text-white font-bold'>
              Qté
            </th>
            <th className='py-2 px-4 bg-gray-700 text-left text-white font-bold'>
              Prix unitaire (TND)
            </th>
            <th className='py-2 px-4 bg-gray-700 text-left text-white font-bold'>
              Total (TND)
            </th>
          </tr>
        </thead>
        <tbody>
          {invoiceItems.map((item) => (
            <tr key={item.id} className='border-b border-gray-600'>
              <td className='py-2 px-4 text-white'>{item.item}</td>
              <td className='py-2 px-4 text-white'>{item.quantity}</td>
              <td className='py-2 px-4 text-white'>
                {item.price.toFixed(2)} TND
              </td>
              <td className='py-2 px-4 text-white'>
                {(item.quantity * item.price).toFixed(2)} TND
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td
              colSpan={3}
              className='py-2 px-4 text-right text-white font-bold'
            >
              Sous-total:
            </td>
            <td className='py-2 px-4 text-white font-bold'>
              {totalPrice.toFixed(2)} TND
            </td>
          </tr>
          <tr>
            <td
              colSpan={3}
              className='py-2 px-4 text-right text-white font-bold'
            >
              Remise:
            </td>
            <td className='py-2 px-4 text-white font-bold'>-50.00 TND</td>
          </tr>
          <tr>
            <td
              colSpan={3}
              className='py-2 px-4 text-right text-white font-bold'
            >
              Total à payer:
            </td>
            <td className='py-2 px-4 text-white font-bold'>
              {finalPrice.toFixed(2)} TND
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default function Thanks() {
  const [showRib, setShowRib] = useState(false);
  useEffect(() => {
    if (window) {
      setShowRib(window.location.href.includes("rib"));
    }
  }, []);
  if (!showRib) {
    return (
      <div>
        <div className='container w-full mt-20 text-center overflow-visible'>
          <h2 dir='rtl' className='text-5xl'>
            شكرا على ثيقتك فينا !
          </h2>
          {!showRib && (
            <h2 dir='rtl' className='text-3xl mt-16'>
              خلي تاليفونك بحذاك بش نكلموك على confirmation
            </h2>
          )}

          <h2 dir='rtl' className='text-3xl mt-4'>
            هذا رابط الـgroup متاعنا الي بش نتعلمو فيه أكثر.
          </h2>
          <h2 dir='rtl' className='text-2xl mt-4 text-wrap'>
            <a
              href='https://www.facebook.com/groups/academy.xposure.tn'
              target='_blank'
              className='text-blue-400 text-center text-wrap'
            >
              https://www.facebook.com/groups/academy.xposure.tn
            </a>
          </h2>

          <h2 dir='rtl' className='text-4xl mt-4'>
            مرحبا بيك ونشوفوك في الـmasterclass
          </h2>
        </div>
        <InvoiceComp />
      </div>
    );
  } else {
    return (
      <div>
        <div className='container w-full mt-20 text-center overflow-visible'>
          <h2 className='text-center mt-5 text-2xl text-primary'>
            RIB : 04 093 178 0085060952 33 TN <br /> SOCIETE IDEAS STUDIOS{" "}
          </h2>
          <p
            dir='rtl'
            className='text-lg mt-3 lg:flex lg:items-center lg:justify-center lg:flex-col'
          >
            <span className='text-2xl font-bold'>كيفاش تعمل بالضبط؟</span>
            <br />
            <ol className='list-decimal  lg:w-1/3 text-right'>
              <li>تمشي لأقرب فرع التجاري تعطيه الـrib الي الفوق </li>
              <li>تحط اسم الـمستفيد : IDEAS STUDIO</li>
              <li>تاخو الـreçu وتبعثهولنا عالـwhatsapp هذا 25251808</li>
              <li>احنا نبعثولك معطياتك الي تستحقها كل.</li>
            </ol>
          </p>
          <div className='w-full overflow-x-auto'>
            <InvoiceComp />
          </div>

          <h2 dir='rtl' className='text-5xl'>
            شكرا على ثيقتك فينا !
          </h2>

          <h2 dir='rtl' className='text-3xl mt-4'>
            هذا رابط الـgroup متاعنا الي بش نتعلمو فيه أكثر.
          </h2>
          <h2 dir='rtl' className='text-2xl mt-4 text-wrap'>
            <a
              href='https://www.facebook.com/groups/academy.xposure.tn'
              target='_blank'
              className='text-blue-400 text-center text-wrap'
            >
              https://www.facebook.com/groups/academy.xposure.tn
            </a>
          </h2>

          <h2 dir='rtl' className='text-4xl mt-4'>
            مرحبا بيك ونشوفوك في الـmasterclass
          </h2>
        </div>
      </div>
    );
  }
}
