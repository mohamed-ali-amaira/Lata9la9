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
    comment: `  رفع الاجراء الحدودي S17 :
•   نحبو نبشروكم الي الاجراء هذا غير قانوني وتنجم تلغيه وترجع تعيش حياتك عادي وذلك باتباع اجراءات قانونية ساهلة كيما عملو عديد حرفائنا الي تلقاو اراءهم لوطى
`,
  },
  {
    image: "",
    comment: ` كتب اتفاق (قضايا الطلاق) :
•   تحرير كتب اتفاق ومتابعة القضية بمختلف اجراءاتها ومراحلها
•    باش نتاكدو الي الاجراءات تمشي بالسرعة الي تحب عليها`,
  },
  {
    image: "",
    comment: `تحرير العقود :
• نوفرولك كل انواع العقود سواء المهنية لل frelancers او للبيع او الكراءاو اتفاق طلاق او اي نوع من انواع التزام بين طرفين
•  نوفرولك عقود خالية من اي ثغرة قانونية يمكن استغلالها فيما بعد, عقود تضمنلك حقك على المدى البعيد  `,
  },
  {
    image: "",
    comment: `تحرير عريضة :
• نوفرولك عريضة تستجيب للمواصفات القانونية الكل بس تضمن بيها حقك
• نحررولك المطالب الي تستحقها الكل ونوريوك شنو تعمل بش ما يتجاهلك حدي`,
  },
  {
    image: "",
    comment: `متابعة خاصة:
• بعد ما تكمل استشارتنا نرجعولك باش نتاكدو انه حقك مضمون.
• عندك الحق تعاود تسالنا.
• نوفرولك suivi ترجع تسالنابلاش على نفس الموضوع في صورة صارو تطورات 
• نوفرولك ملخص الاستشارة عند الطلب بش ما تنسى شي`,
  },
  {
    image: "",
    comment: `استشارة عن بعد :
• بالهاتف وين انت.
•  وقت الي يساعدك انت.
•    تاخو وقتك في المكالمة قد ما تستحق .`,
  },
];

const TestimonialSection = () => {
  return (
    <section id='testimonials' className='container py-24 sm:py-32'>
      <div className='text-center'>
        <h2
          dir='rtl'
          className='text-3xl md:text-4xl text-center font-bold mb-4'
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
        className='relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto'
      >
        <CarouselContent>
          {reviewList.map((review, index) => (
            <CarouselItem
              key={index}
              className='md:basis-1/2 lg:basis-1/3'
            >
              <Card className='bg-muted/50 dark:bg-card'>
                <CardContent className='pt-6 pb-0'>
                  {review.image.length === 0 ? (
                    // Replace line breaks in the comment text with <br /> tags for proper formatting
                    <div dir='rtl'>
                      {review.comment.split("\n").map((line, i) => (
                        <span key={i}>
                          {line}
                          <br />
                        </span>
                      ))}
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
      
      <div className='w-full mt-2 flex items-center justify-center'>
        <RegisterButton />
      </div>
    </section>
  );
};

export default TestimonialSection;
