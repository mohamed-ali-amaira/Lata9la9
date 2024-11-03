"use client";
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

const reviewList: ReviewProps[] = [
  {
    image: "",
    comment: `استشارة عن بعد :\nبالهاتف وين انت.\nوقت الي يساعدك انت.\nتاخو وقتك في المكالمة قد ما تستحق.`,
  },
  {
    image: "",
    comment: `كتب اتفاق (قضايا الطلاق) :\nتحرير كتب اتفاق ومتابعة القضية بمختلف اجراءاتها ومراحلها\nباش نتاكدو الي الاجراءات تمشي بالسرعة الي تحب عليها انت.`,
  },
  {
    image: "",
    comment: `تحرير العقود :\nنوفرولك كل انواع العقود سواء المهنية للـ freelancers او للبيع او الكراء او اتفاق طلاق او اي نوع من انواع الالتزام بين طرفين\nنوفرولك عقود خالية من اي ثغرة قانونية يمكن استغلالها فيما بعد, عقود تضمنلك حقك على المدى البعيد.`,
  },
  {
    image: "",
    comment: `تحرير عريضة :\nنوفرولك عريضة تستجيب للمواصفات القانونية الكل بش تضمن بيها حقك\nنحررولك المطالب الي تستحقها الكل ونوريوك شنو تعمل بش ما يتجاهلك حد.`,
  },
  {
    image: "",
    comment: `رفع الاجراء الحدودي S17 :\nنحبو نبشروكم الي الاجراء هذا غير قانوني وتنجم تلغيه وترجع تعيش حياتك عادي وذلك باتباع اجراءات قانونية ساهلة كيما عملو عديد حرفائنا الي تلقاو اراءهم لوطى.`,
  },
  {
    image: "",
    comment: `متابعة خاصة:\nبعد ما تكمل استشارتنا نرجعولك باش نتاكدو انه حقك مضمون.\nعندك الحق تعاود تسالنا.\nنوفرولك suivi ترجع تسالنا بلاش على نفس الموضوع في صورة صارو تطورات\nنوفرولك ملخص الاستشارة عند الطلب بش ما تنسى شي.`,
  },
];

const TestimonialSection = () => {
  return (
    <section id='testimonials' className='container py-24 sm:py-32'>
      <div className='text-center'>
        <h2
          dir='rtl'
          className='text-4xl font-bold text-center mb-8' 
        >
          شنو نقدمولك؟
        </h2>
      </div>


      <Carousel
        opts={{
          align: "end",
          startIndex: window.innerWidth >= 720 ? 1 : 2,
          loop: true,
        }}
        className='relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto mt-8' // Added top margin
      >
        <CarouselContent>
          {reviewList.map((review, index) => (
            <CarouselItem
              key={index}
              className='md:basis-1/2 lg:basis-1/3'
            >
              <Card className='bg-gray-200 dark:bg-card'> {/* Changed background color */}
                <CardContent className='pt-6 pb-8'> {/* Increased bottom padding */}
                  {review.image.length === 0 ? (
                    <div dir='rtl' className="flex flex-col items-center"> {/* Center-align the content */}
                      {review.comment.split("\n").map((line, i) => {
                        if (line.includes(":")) {
                          return (
                            <div key={i} className="text-center mb-2 font-semibold">
                              <strong>{line}</strong> {/* Bold and centered title */}
                            </div>
                          );
                        } else {
                          return (
                            <span key={i} className="text-center mb-2"> {/* Center the text lines */}
                              {line}
                              <br />
                            </span>
                          );
                        }
                      })}
                    </div>
                  ) : (
                    <Image alt='' src={review.image} width={300} height={100} />
                  )}
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

    </section>
  );
};

export default TestimonialSection;
