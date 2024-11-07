"use client";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import RegisterButton from "@/components/ui/register";
import Image from "next/image";

interface ReviewProps {
  image: string;
  comment: string;
}

const reviewListDesktop: ReviewProps[] = [
  {
    image: "",
    comment: `متابعة خاصة:\nبعد ما تكمل استشارتنا نرجعولك باش نتاكدو انه حقك مضمون.\nعندك الحق تعاود تسالنا.\nنوفرولك suivi ترجع تسالنا بلاش على نفس الموضوع في صورة صارو تطورات\nنوفرولك ملخص الاستشارة عند الطلب بش ما تنسى شي.`,
  },
  {
    image: "",
    comment: `استشارة عن بعد :\nبالهاتف وين انت.\nوقت الي يساعدك انت.\nتاخو وقتك في المكالمة قد ما تستحق.`,
  },
  {
    image: "",
    comment: `رفع الاجراء الحدودي S17 :\nنحبو نبشروكم الي الاجراء هذا غير قانوني وتنجم تلغيه وترجع تعيش حياتك عادي وذلك باتباع اجراءات قانونية ساهلة كيما عملو عديد حرفائنا الي تلقاو اراءهم لوطى.`,
  },
  {
    image: "",
    comment: `تحرير العقود :\nنوفرولك كل انواع العقود سواء المهنية للـ freelancers او للبيع او الكراء او اتفاق طلاق او اي نوع من انواع الالتزام بين طرفين\nنوفرولك عقود خالية من اي ثغرة قانونية يمكن استغلالها فيما بعد, عقود تضمنلك حقك على المدى البعيد.`,
  },
  {
    image: "",
    comment: `كتب اتفاق (قضايا الطلاق) :\nتحرير كتب اتفاق ومتابعة القضية بمختلف اجراءاتها ومراحلها\nباش نتاكدو الي الاجراءات تمشي بالسرعة الي تحب عليها انت.`,
  },
  {
    image: "",
    comment: `تحرير عريضة :\nنوفرولك عريضة تستجيب للمواصفات القانونية الكل بش تضمن بيها حقك\nنحررولك المطالب الي تستحقها الكل ونوريوك شنو تعمل بش ما يتجاهلك حد.`,
  },
];

const reviewListMobile: ReviewProps[] = [
  {
    image: "",
    comment: `تحرير العقود :\nنوفرولك كل انواع العقود سواء المهنية للـ freelancers او للبيع او الكراء او اتفاق طلاق او اي نوع من انواع الالتزام بين طرفين\nنوفرولك عقود خالية من اي ثغرة قانونية يمكن استغلالها فيما بعد, عقود تضمنلك حقك على المدى البعيد.`,
  },
  {
    image: "",
    comment: `متابعة خاصة:\nبعد ما تكمل استشارتنا نرجعولك باش نتاكدو انه حقك مضمون.\nعندك الحق تعاود تسالنا.\nنوفرولك suivi ترجع تسالنا بلاش على نفس الموضوع في صورة صارو تطورات\nنوفرولك ملخص الاستشارة عند الطلب بش ما تنسى شي.`,
  },
  {
    image: "",
    comment: `استشارة عن بعد :\nبالهاتف وين انت.\nوقت الي يساعدك انت.\nتاخو وقتك في المكالمة قد ما تستحق.`,
  },
  {
    image: "",
    comment: `رفع الاجراء الحدودي S17 :\nنحبو نبشروكم الي الاجراء هذا غير قانوني وتنجم تلغيه وترجع تعيش حياتك عادي وذلك باتباع اجراءات قانونية ساهلة كيما عملو عديد حرفائنا الي تلقاو اراءهم لوطى.`,
  },
  {
    image: "",
    comment: `كتب اتفاق (قضايا الطلاق) :\nتحرير كتب اتفاق ومتابعة القضية بمختلف اجراءاتها ومراحلها\nباش نتاكدو الي الاجراءات تمشي بالسرعة الي تحب عليها انت.`,
  },
  {
    image: "",
    comment: `تحرير عريضة :\nنوفرولك عريضة تستجيب للمواصفات القانونية الكل بش تضمن بيها حقك\nنحررولك المطالب الي تستحقها الكل ونوريوك شنو تعمل بش ما يتجاهلك حد.`,
  },
];

const TestimonialSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [startIndex, setStartIndex] = useState(2);

  useEffect(() => {
    const updateStartIndex = () => {
      const isMobileView = window.innerWidth < 720;
      setIsMobile(isMobileView);
      setStartIndex(isMobileView ? 1 : 2);
    };

    updateStartIndex();
    window.addEventListener("resize", updateStartIndex);

    return () => {
      window.removeEventListener("resize", updateStartIndex);
    };
  }, []);

  const reviewList = isMobile ? reviewListMobile : reviewListDesktop;

  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <div className="text-center">
        <h2 dir="rtl" className="text-4xl font-bold text-center mb-8">
          شنو نقدمولك؟
        </h2>
      </div>

      <Carousel
        opts={{
          align: "end",
          startIndex,
          loop: true,
        }}
        className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto mt-8"
      >
        <CarouselContent>
          {reviewList.map((review, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <Card className="bg-gray-200 dark:bg-card">
                <CardContent className="pt-6 pb-8">
                  {review.image.length === 0 ? (
                    <div dir="rtl" className="flex flex-col items-center">
                      {review.comment.split("\n").map((line, i) => {
                        if (line.includes(":")) {
                          return (
                            <div key={i} className="text-center mb-2 font-semibold">
                              <strong>{line}</strong>
                            </div>
                          );
                        } else {
                          return (
                            <span key={i} className="text-center mb-2">
                              {line}
                            </span>
                          );
                        }
                      })}
                    </div>
                  ) : (
                    <Image src={review.image} alt="" width={300} height={100} />
                  )}
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-[-2rem] z-10 w-10 h-10 bg-gray-500 rounded-full text-white flex items-center justify-center">
          <span className="material-icons">arrow_back</span>
        </CarouselPrevious>
        <CarouselNext className="absolute right-[-2rem] z-10 w-10 h-10 bg-gray-500 rounded-full text-white flex items-center justify-center">
          <span className="material-icons">arrow_forward</span>
        </CarouselNext>
      </Carousel>
      <div className="w-full mt-2 flex items-center justify-center">
        <RegisterButton />
      </div>
    </section>
  );
};

export default TestimonialSection;
