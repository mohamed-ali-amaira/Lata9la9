"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";

interface PlanProps {
  title: string;
  price: number;
  benefitList: string[];
}

const plans: PlanProps[] = [
  {
    title: "ثمن تحرير العقد/اتفاق/عريضة ",
    price: 300,
    benefitList: [
      "ابتداءا من 300 دينار",
      "عقد كامل المواصفات القانونية ",
      "عقد خالي من أي ثغرة قانونية",
      "يتم تحرير العقد في أجل 3 أيام ",
      "عقد حافظ لكل حقوقك بصفة دقيقة",
    ],
  },
  {
    title: "ثمن الاستشارة",
    price: 59,
    benefitList: [
      "استشارة شاملة لكل استفساراتك",
      "مدة المكالمة غير محددة",
      "متابعة خاصة حتى بعد الاستشارة",
      "ملخص للاستشارة عند الطلب",
      "استشارة عن بعد وين ما انت وفي الوقت الي تختارو",
    ],
  },
];

const PricingSection = () => {
  return (
    <section className="container text-left py-24 sm:py-32" style={{ marginTop: -100 }}>
      <h2 className="text-3xl md:text-4xl text-center mb-4">التعريفة</h2>
      <h2 className="text-3xl md:text-4xl text-center mb-4">- -</h2>

      {/* Displaying 2 cards */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
        {plans.map(({ title, price, benefitList }) => (
          <Card key={title} className="w-full lg:w-1/2 border border-gray-300 shadow-lg">
            <CardHeader>
              <CardTitle className="pb-2 text-center">{title}</CardTitle>
            </CardHeader>

            <CardContent dir="rtl" className="flex flex-col items-center">
              <span className="text-3xl font-bold text-green-500 mb-2">ابتداءا من {price} دينار</span>
              {/* Conditionally render the del element only for the consultation card */}
              {title === "ثمن الاستشارة" && (
                <del className="text-lg text-red-500">120 TND</del>
              )}
              <div className="space-y-4 mt-4">
                {benefitList.map((benefit) => (
                  <span key={benefit} className="flex items-center">
                    <Check className="text-primary ml-2" />
                    <h3>{benefit}</h3>
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Single button centered under the cards */}
      <div className="flex justify-center mt-8">
        <Button variant="default" className="w-full lg:w-1/3">
          <Link href="#contact">استشرنا الان</Link>
        </Button>
      </div>
    </section>
  );
};

export default PricingSection;
