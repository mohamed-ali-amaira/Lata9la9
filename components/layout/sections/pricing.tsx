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
import { useEffect, useState } from "react";

enum PopularPlan {
  NO = 0,
  YES = 1,
}

interface PlanProps {
  title: string;
  popular: PopularPlan;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const plans: PlanProps[] = [
  {
    title: "ثمن تحرير العقد/اتفاق/عريضة.. ",
    popular: PopularPlan.NO,
    price: 59,
    description: "",
    buttonText: "استشرنا الان",
    benefitList: [
      "ابتداءا من 300 دينار",
      "عقد كامل المواصفات القانونية ",
      " عقد خالي من أي ثغرة قانونية",
      "يتم تحرير العقد في أجل 3 أيام ",
      "  عقد حافظ لكل حقوقك بصفة دقي",
    ],
  },
  {
    title: "",
    popular: PopularPlan.NO,
    price: 79,
    description: "",
    buttonText: "استشرنا الان",
    benefitList: [
      "ملخص للاستشارة عند الطلب",
      "استشارة عن بعد وين ما انت وفي الوقت الي تختارو",
    ],
  },
  {
    title: "",
    popular: PopularPlan.NO,
    price: 99,
    description: "",
    buttonText: "استشرنا الان",
    benefitList: [
      "استشارة شاملة لكل استفساراتك",
      "مدة المكالمة غير محددة ",
      "متابعة خاصة حتى بعد الاستشارة",
    ],
  },
];

const PricingSection = () => {
  return (
    <section className="container text-left py-24 sm:py-32" style={{ marginTop: -100 }}>
      <h2 className="text-3xl md:text-4xl text-center mb-4">التعريفة</h2>
      <h2 className="text-3xl md:text-4xl text-center mb-4">- -</h2>

      {/* Price display section centered above the cards */}
      <div className="text-center mb-8" style={{ scale: 1.45 }}>
        <span className="text-3xl font-bold flex flex-col justify-center">
          <del className="text-lg text-red-500">120 TND</del>
          <span className="text-green-500">ابتداءا من 59 دينار</span>
        </span>
      </div>

      {/* Displaying 3 cards with equal width */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
        {plans.map(({ title, popular, description, benefitList }) => (
          <Card
            key={title}
            className={`w-full lg:w-1/3 ${popular === PopularPlan.YES ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary lg:scale-[1.05]" : ""}`}
          >
            <CardHeader>
              <CardTitle className="pb-2 text-right">{title}</CardTitle>
              <CardDescription className="pb-4 text-right">{description}</CardDescription>
            </CardHeader>

            <CardContent dir="rtl" className="flex">
              <div className="space-y-4">
                {benefitList.map((benefit) => (
                  <span key={benefit} className="flex">
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
