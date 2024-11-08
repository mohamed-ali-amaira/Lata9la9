"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import RegisterButton from "@/components/ui/register";
import { Star } from "lucide-react";
import Image from "next/image";

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
  avatar?: string;
}

const reviewList: ReviewProps[] = [
  {
    image: "",
    avatar: "/man.png",
    name: "",
    userName: `Moncef`,
    comment: `"أكيد عونتوني برشا يعطيكم ألف صحّة 😊 و زيد قدام الناس  نشكر فيكم و في الصفحة نزيد نحيّكم 😍"`,
    rating: 4.8,
  },
  {
    image: "",
    name: ``,
    avatar: "/man.png",
    userName: "Othman",
    comment: `"سلام عليكم اهلا تيماء 
الصراحة التعامل جدا ممتاز و راقي و احترافي ... الاستشارة كانت موجهة و في صلب الموضوع تماما،،  كنت محتار و عندي عدت معلومات و لكن فوجئت بدلت التوجيهات و المعلومات الي خليتها مالاستاذ ،، و طلب انو تتم تتبع القضية من خلالكم،، ربي يبارك فيك و شكرا"`,
    rating: 5.0,
  },
  {
    image: "",
    name: "",
    avatar: "/man.png",
    userName: `Mohamed amine`,
    comment: `"Merci alikom la7e9i9a service tayara w moufid 3al5er najamet ne3eref 7o9ou9i w wathe3iti bethabt 😊 Bon courage équipe lata9la9🔥✨"`,
    rating: 4.8,
  },
  {
    image: "",
    avatar: "/woman.png",
    name: "",
    userName: `Hamida`,
    comment: `"Vraiment 3awnetni barcha wsa3detni psk ena b3ida Kent la7kia ashel barcha wa9teli fama estichara 9anounia en ligne merci beaucoup à tous les équipe"`,
    rating: 4.8,
  },
  {
    image: "",
    avatar: "/woman.png",
    name: "",
    userName: `Rahma`,
    comment: `"كانت تجربتي مع مكتب استشارات "لا تقلق" تجربة ممتازة و سلسة. توصّلت للمعلومات إلي حاجتي بها بسرعة و كان التواصل معاهم بنظام و إحترام و أكثر حاجة عجبتني إنو يقعدو معاك للآخر و يجاوبوك على تساؤلاتك الكل."`,
    rating: 4.8,
  },
  {
    image: "",
    avatar: "/woman.png",
    name: "",
    userName: `Lobna`,
    comment: `"Merci beaucoup pour votre soutien, pour votre réponse et pour votre compréhension🥰🥰 Rabi y3inkom o nchlh dima mn 7asan l a7san 3awentouni barcha bech 5tart le bon choix et la bonne décision ❤🙏"`,
    rating: 4.8,
  },
  {
    image: "",
    avatar: "/man.png",
    name: "",
    userName: `Abderrazek`,
    comment: `"السلام عليكم نحب نقول ليك انتي أختي تيماء أولا يعطيك الصحة على رحابة صدرك و وسع بالك و الاستاذ يرحم لميمة إلي جاباتك فهمتني في الوضعية بالباهي بصراحة خدمة محترفة و رتحتنا من التنقل و التعب يعني الانسان الي عندو مشكلة تعطيه الحل و هو في دارو 
عموما خدمة ممتازة و ممتازة جدا تبدأ بأول تلفون مع اختنا تيماء و تكمل بحل من عند الاستاذ و تعلق تلفونك و أنت مرتاح البال😍"`,
    rating: 4.8,
  },
  {
    image: "",
    avatar: "/woman.png",
    name: "",
    userName: `Takwa`,
    comment: `"خدمتكم مميزة جداً وسع بالو و سمعني و عاوني بلڨدا شكرا جزيلا 😍"`,
    rating: 4.8,
  },
  {
    image: "",
    avatar: "/man.png",
    name: "",
    userName: `Amine`,
    comment: `"اهلا تيماء 
شكرا على حسن الخدمات الي تقدمو فيها، نحب نقدملكم رسالة شكر على المعلومات الي قدمتوهالي في وقت وجيز و حقيقتا عاونتموني على معلومات ما كنتش نعرفها،
و فرحان برشا الي تعاملت مع ناس شباب في عمري و انشاء الله القادم افضل 
شكرا مكتب استشارات لا تقلق 
لن نقلق مادمتم معنا 😃"`,
    rating: 4.8,
  },
  {
    image: "",
    avatar: "/woman.png",
    name: "",
    userName: `Manel`,
    comment: `"عسلامة أنا بخير يعطيكم الصحة على رسالتكم اللطيفة وعلى مساعدتكم القيمة في موضوع “الهيبة والورث مع إخوتي”. كانت الاستشارة مفيدة جدًا وساهمت بشكل كبير في توضيح الأمور.
  أكيد، الخدمة كانت ممتازة، ومهنية، وساعدتني كثيراً في اتخاذ القرار الصحيح. إذا كان رأيي باش اعاون عباد اخرين، فأنا لا أمانع في مشاركته على موقعكم
  شكراً مرة أخرى على كل شيء، وأتمنى لكم التوفيق في تحسين خدماتكم دائمًا"`,
    rating: 4.8,
  },
  
];

const TestimonialSection2 = () => {
  return (
    <section id="testimonial2" className="container py-24 sm:py-32">
      <div className="text-center">
        <h2
          dir="rtl"
          className="text-4xl font-bold text-center mb-4"
          style={{ color: "#031833" }}
        >
          سئلنا حرفائنا عن اراءهم
        </h2>
      </div>
      <br />
      <br />
      <div className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto">
        <Carousel
          opts={{
            align: "end",
            startIndex: window.innerWidth >= 720 ? 1 : 2,
            loop: true,
          }}
          className="relative"
        >
          <CarouselPrevious className="absolute left-[-3rem] top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-gray-500 rounded-full text-white flex items-center justify-center">
            <span className="material-icons">arrow_back</span>
          </CarouselPrevious>
          <CarouselNext className="absolute right-[-3rem] top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-gray-500 rounded-full text-white flex items-center justify-center">
            <span className="material-icons">arrow_forward</span>
          </CarouselNext>
          <CarouselContent>
            {reviewList.map((review) => (
              <CarouselItem key={review.userName} className="md:basis-1/2 lg:basis-1/3">
                <Card className="bg-muted/50 dark:bg-card">
                  <CardContent className="pt-6 pb-0">
                    <div className="flex gap-1 pb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="size-4 text-yellow-500" fill="currentColor" />
                      ))}
                    </div>
                    <div dir={/[\u0600-\u06FF]/.test(review.comment) ? "rtl" : "ltr"} className="text-right">
                      {review.comment}
                    </div>
                  </CardContent>
                  <CardHeader>
                    <div className="flex flex-row items-center gap-4">
                      <Avatar>
                        {review.avatar && (
                          <AvatarImage src={review.avatar} alt="radix" />
                        )}
                        <AvatarFallback>{review.name ? review.name[0] : review.userName[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <CardTitle className="text-lg">{review.name || review.userName}</CardTitle>
                        <CardDescription>{review.userName}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <div className="w-full mt-2 flex items-center justify-center">
        <RegisterButton />
      </div>
    </section>
  );
};

export default TestimonialSection2;
