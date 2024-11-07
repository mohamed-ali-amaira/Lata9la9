import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PhoneIcon } from "@heroicons/react/24/solid";
import { FaWhatsapp } from "react-icons/fa";
interface FAQProps {
  question: string;
  answer: string | string[];
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "كيفاه تصير الاستشارة؟",
    answer: [
      "بعد ما <strong>تكتبلنا وضعيتك القانونية</strong> اللوطة احنا نتصلو بيك بش نحددو معاك <strong>موعد في الوقت الي انت تختارو</strong>.",
      "بعد <strong>يكلمك المستشار القانوني</strong> على رقمك ويعطيك <strong>الي تستحقو كل</strong>."
    ],
    value: "item-1",
  },
  {
    question: "قداش ثمن الاستشارة؟",
    answer: [
      "نظرا لتنوع القضايا واجراءاتها من غير العادل انو نعطيو <strong>ثمن موحد للاستشارات الكل</strong>.",
      "على هذكا يتم <strong>مراجعة وضعيتك</strong> بعد ما تبعثها لنا بش يتم <strong>تحديد الثمن العادل</strong> ليها.",
      "بعد <strong>نكلموك نعلموك</strong> واذا قبلت نكملو بقية الاجراءات."
    ],
    value: "item-2",
  },
  {
    question: "شنيا نوعية القضايا الي نجم نسئل عليها ؟",
    answer: [
      "نظرا لتنوع القضايا واختلاف <strong>أنواع القوانين</strong> المنطبقة, وفرنالكم <strong>مستشارين في كل الاختصاصات</strong>.",
      "<strong>يكلمك المستشار</strong> الي مختص في <strong>قضيتك انت بالذات</strong> وتعدات قدامو كيفها برشا مرات.",
      "هكاكا نضمنو انو بش <strong>تتحصل على أحسن حل ممكن</strong>."
    ],
    value: "item-2.5",
  },
  {
    question: "شنو ناخو مع الاستشارة؟",
    answer: [
      "الاستشارة بش تغطيلك <strong>أسئلتك كل</strong> وتخليك <strong>فاهم الوضعية بالكامل</strong> وما تخلي حتى حد ياخولك حقك.",
      "إضافة لهذكا نوفرولك <strong>ملخص للاستشارة</strong> بعد المكالمة <strong>عند الطلب</strong> كان تخاف تنسى الإجراءات.",
      "وقت يصير <strong>أي تطور في الاحداث</strong> تنجم ترجع لنا <strong>تثبت معانا في اطار المتابعة</strong> واحنى <strong>ما نخليوكش وحدك</strong>."
    ],
    value: "item-3",
  },
  {
    question: "قداه تدوم الاستشارة في الهاتف ؟",
    answer: [
      "ما نجموش نحددو قداش بالضبط على خاطر كل وضعية أو مشكلة <strong>تستحق تاخو وقتها</strong> واحنا ماناش بش نقصو على حريف وهو مزال ما <strong>حكاش مشكلتو</strong>.",
      "وبالتالي مدة الاستشارة هي <strong>المدة الي تستحقها الاستشارة</strong> قد ما بش تاخو بش يكون <strong>حق حريفنا مضمون</strong>."
    ],
    value: "item-4",
  },
  {
    question: "انجم نبعثلكم وثائق تراجعوها ؟ ",
    answer: [
      "أكيد بعد ما <strong>تكتب وضعيتك</strong> يتم الاتصال بيك وطلب <strong>الوثائق اذا كانت ضرورية</strong> للاستشارة."
    ],
    value: "item-5",
  },
  {
    question: "قداه تقعدو بش تكلموني ؟ ",
    answer: [
      "أحنا ديما نحاولو ما <strong>نفوتوش الـ 24 ساعة</strong> بش نتصلو بحريفنا نظرا <strong>لعدد الحرفاء الكبير يوميا</strong>.",
      "في الحالات الكل نحاولو <strong>نسبقو الاستشارات العاجلة</strong>."
    ],
    value: "item-6",
  },
  {
    question: "كيفاش نخلصكم؟",
    answer: [
      "طرق الخلاص مقسمة على 3 :",
      "• <strong>الحوالة البنكية (versement bancaire)</strong>", // Point added
      "• <strong>الـWestern Union أو الـMoneygram بالنسبة للمقيمين بالخارج</strong>", // Point added
      "• <strong>بتطبيق الـD17</strong>", // Point added
      "يتم الخلاص بعد تحديد التعريفة المناسبة وقبل تحديد الموعد مع المستشار." // Point added
    ],
    value: "item-7",
  },
  {
    question: "قداش تقعدو بش تحضرولي العقد أو الاتفاق الخ..؟ ",
    answer: [
      "أي وثيقة تطلبها <strong>نجمو نحضرها لك</strong> بكل تفاصيلها في أجل <strong>1 يوم واحد كحد أدنى و 3 أيام كحد أقصى</strong>."
    ],
    value: "item-8",
  },
];

export const FAQSection = () => {
  const phoneNumber = "53925344";
  const whatsappLink = `https://wa.me/${phoneNumber.replace(/\+216/g, '')}`;

  return (
    <section id='faq' className='container md:w-[600px] py-24 sm:py-32'>
      <div className='text-center mb-8'>
        <h2 className='text-4xl font-bold text-center'>
          <span style={{ color: "#031833" }}>
            أسئلة ديما تطرحوها
          </span>
        </h2>
      </div>

      <Accordion type='single' collapsible className='AccordionRoot'>
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem dir='rtl' key={value} value={value}>
            <AccordionTrigger className='text-right'>
              {question}
            </AccordionTrigger>

            <AccordionContent>
              <ul className={`${value === 'item-7' ? 'list-none' : 'list-inside'}`}>
                {Array.isArray(answer) ? (
                  answer.map((line, i) => (
                    <li key={i} dangerouslySetInnerHTML={{ __html: line }} className={`${value === 'item-7' ? 'mb-1' : ''}`} />
                  ))
                ) : (
                  <li dangerouslySetInnerHTML={{ __html: answer }} />
                )}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <br />
      <h2 dir='rtl' className='text-center my-2 text-2xl'>
        في الحالات الكل تنجم ديما تتصل بينا بش تستفسر
        <br />
        <br />
        <span className='text-sm text-gray-500'>اضغط على الرقم للتواصل معنا على واتساب</span>
        <br />
        <br />
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className='flex items-center justify-center mt-2 text-5xl font-bold hover:text-green-600 transition-colors duration-200'
        >
          <span dir='ltr'>{phoneNumber}</span>
          <FaWhatsapp className='w-10 h-10 ml-2' />
        </a>
      </h2>
    </section>
  );
};

export default FAQSection;
