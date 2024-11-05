"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";

interface PlanProps {
  title: string;
  price: number;
  benefitList: (string | JSX.Element)[];
}

const plans: PlanProps[] = [
  {
    title: "ثمن الاستشارة",
    price: 59,
    benefitList: [
      "استشارة شاملة لكل استفساراتك",
      "مدة المكالمة غير محددة",
      "متابعة خاصة حتى بعد الاستشارة",
      "ملخص للاستشارة عند الطلب",
      <>
        استشارة عن بعد وين ما انت{" "}
        <span style={{ display: 'inline-block', textAlign: 'right', direction: 'rtl' }}>
          وفي الوقت الي تختارو
        </span>
      </>,
    ],
  },
  {
    title: "ثمن تحرير العقد/اتفاق/عريضة ",
    price: 300,
    benefitList: [
      "عقد كامل المواصفات القانونية ",
      "عقد خالي من أي ثغرة قانونية",
      "يتم تحرير العقد في أجل 3 أيام ",
      "عقد حافظ لكل حقوقك بصفة دقيقة",
    ],
  },
];

const PricingSection = () => {
  return (
    <section className="container text-left py-24 sm:py-32" style={{ marginTop: -100 }}>
      <h2 className="text-3xl md:text-4xl text-center mb-4 font-bold" style={{ color: "#031833" }}>
        التعريفة
      </h2>
      <h2 className="text-3xl md:text-4xl text-center mb-4 font-bold" style={{ color: "#031833" }}>
        ° ° ° °
      </h2>
      <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8">
        {plans.map(({ title, price, benefitList }, index) => (
          <Card 
            key={title} 
            className={`w-full lg:w-1/2 border border-gray-300 shadow-lg flex flex-col ${title === "ثمن الاستشارة" ? "shadow-glow" : ""}`}
          >
            <CardHeader>
              <CardTitle className="pb-2 text-center">{title}</CardTitle>
            </CardHeader>

            <CardContent dir="rtl" className="flex flex-col flex-grow items-center">
              {title === "ثمن الاستشارة" && (
                <del className="text-lg text-red-500">80 TND</del>
              )}

              <span className="text-3xl font-bold text-black mb-2">
                ابتداءا من <span className="text-green-500">{price}</span> <span className="text-green-500">د</span>
              </span>

              <div className="space-y-4 mt-4">
                {benefitList.map((benefit, idx) => (
                  <span key={idx} className="flex items-center text-center">
                    {typeof benefit === "string" ? (
                      <>
                        <Check className="text-primary ml-2" />
                        <h3 className={`${benefit.includes("استشارة عن بعد") ? "text-sm md:text-base" : ""}`}>
                          {benefit}
                        </h3>
                      </>
                    ) : (
                      <>
                        <Check className="text-primary ml-2" />
                        <h3 className="flex flex-col">
                          {benefit}
                        </h3>
                      </>
                    )}
                  </span>
                ))}
              </div>

              {title === "ثمن الاستشارة" && (
                <span className="text-[85%] text-green-600 mt-4 text-center">
                  سيتم تحديد ثمن الاستشارة النهائي بعد مراجعتها من قبل فريقنا
                </span>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <style jsx>{`
        .shadow-glow {
          box-shadow: 0 0 20px rgba(0, 255, 0, 0.7);
        }
      `}</style>
    </section>
  );
};

export default PricingSection;
