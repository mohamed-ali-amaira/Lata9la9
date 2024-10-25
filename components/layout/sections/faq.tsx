import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import RegisterButton from "@/components/ui/register";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "كيفاه تصير الاتستشارة؟",
    answer: `بعد ما تكتبلنا وضعيتك القانونية اللوطة احنا نتصلو بيك بش نحددو معاك موعد في الوقت الي انت تختارو وبعد يكلمك المستشار القانوني على رقمك ويعطيم الي تستحقو كل.`,
    value: "item-1",
  },
  {
    question: "قداش ثمن الاستشارة؟",
    answer:
      "نظرا لتنوع القضايا واجراءاتها من غير العادل انو نعطيو ثمن موحد للاستشارات الكل.. على هذكا يتم مراجعة وضعيتك بعد ما تبعثها لنا بش يتم تحديد الثمن العادل ليها وبعد نكلموك نعلموك واذا قبلت نكملو بقية الاجراءات",
    value: "item-2",
  },
  {
    question: "شنيا نوعية القضايا الي نجم نسئل عليها ؟",
    answer:
      "نظرا لتنوع القضايا واختلاف أنواع القوانين المنطبقة, وفرنالكم مستشارين في كل الاختصاصات بش هكاكا يكلمك المستشار الي مختص في قضيتك انت بالذات وتعدات قدامو كيفها برشا مرات وهكاكا نضمنو انو بش تتحصل على أحسن حل ممكن",
    value: "item-2.5",
  },
  {
    question: "شنو ناخو مع الاستشارة؟",
    answer:
      "الاستشارة بش تغطيلك أسئلتك كل وتخليك فاهم الوضعية بالكامل وما تخلي حتى حد يا خولك حقك. إضافة لهذكا نوفرولك ملخص للاستشارة بعد المكالمة عند الطلب كان تخاف تنسى الإجراءات وبعد هذكا وقت يصير أي تطور في الاحداث تنجم ترجعلنا تثبت معانا في اطار المتابعة واحنى ما نخليوكش وحدك",
    value: "item-3",
  },
  {
    question: "قداه تدوم الاستشارة في الهاتف ؟",
    answer: "ما نجموش نحددو قداش بالضبط على خاطر كل وضعية أو مشكلة تستحق تاخو وقتها واحنا ماناش بش نقصو على حريف وهو مزال ما حكاش مشكلتو. وبالتالي مدة الاستشارة هي المدة الي تستحقها الاستشارة قد ما بش تاخو بش يكون حق حريفنا مضمون",
    value: "item-4",
  },
  {
    question: "انجم نبعثلكم وثائق تراجعوها ؟ ",
    answer:
      "أكيد بعد ما تكتب وضعيتك يتم الاتصال بيك وطلب الوثائق اذا كانت ضرورية للاستشارة",
    value: "item-5",
  },
  {
    question: "قداه تقعدو بش تكلموني ؟ ",
    answer:
      "أحنا ديما نحاولو ما نفوتوش الـ 24 ساعة بش نتصلو بحريفنا نظرا لعدد الحرفاء الكبير يوميا. وفي الحالات الكل نحاولو نسبقو الاستشارات العاجلة",
    value: "item-6",
  },
  {
    question: "كيفاش نخلصكم؟",
    answer:
      "طرق الخلاص مقسمة على 3 : )versement bancaire( الحوالة البنكية Moneygramأو الـ Western unionالـ بالنسبة للمقيمين بالخارج. بتطبيق الـ D17 يتم الخلاص بعد تحديد التعريفة المناسبة وقبل تحديد الموعد مع المستشار.",
    value: "item-7",
  },
  {
    question: "قداش تقعدو بش تحضرولي العقد أو الاتفاق الخ..؟ ",
    answer:
      "أي وثيقة تطلبها نجمو نحضر وهالك بكل تفاصيلها في أجل 1 يوم واحد كحد أدنى و 3 أيام كحد أقصى",
    value: "item-8",
  },
];

export const FAQSection = () => {
  return (
    <section id='faq' className='container md:w-[700px] py-24 sm:py-32'>
      <div className='text-center mb-8'>
        <h2 className='text-3xl md:text-4xl text-center font-bold'>
          أسئلة ديما تطرحوها
        </h2>
      </div>

      <Accordion type='single' collapsible className='AccordionRoot'>
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem dir='rtl' key={value} value={value}>
            <AccordionTrigger className='text-right'>
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h2 dir='rtl' className='text-center my-2 text-lg'>
        في الحالات الكل تنجم ديما تتصل بينا بش تستفسر 
        <br />
        <span dir='ltr'>+216 53 925 344</span>
      </h2>

      <div className='w-full flex items-center justify-center mt-8'>
        <RegisterButton />
      </div>
    </section>
  );
};
