import { Button } from "@/components/ui/button";
import RegisterButton from "@/components/ui/register";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { PhoneIcon } from "@heroicons/react/24/solid";

export const metadata = {
  title: "شكرا",
  description: "lataklak",
};

const FinalPage = () => {
  return (
    <section>
      <div className='grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-16 md:py-32'>
        <div className='text-center space-y-8'>
          <div className='max-w-screen-md mx-auto text-center text-3xl md:text-4xl font-bold'>
            <h1 style={{ direction: "rtl" }}>شكرا على ثقتكم فينا</h1>
            <br />
            <h3 style={{ direction: "rtl" }}>
              سيتم مراجعة طلبكم و من ثم الاتصال بكم فورا
            </h3>
          </div>
          <br />
          <div className='max-w-screen-md mx-auto text-lg md:text-2xl font-bold'>
            <h1 style={{ direction: "rtl" }}>
              &quot;خويا الغالي لا تقلق&quot;
            </h1>
            <br />
          </div>
          <p
            style={{ direction: "rtl" }}
            className='max-w-screen-sm mx-auto text-xl text-muted-foreground'
          >
            <span className='block'>{`يمكنكم دائما الاستفسار على`}</span>

            <div className='flex items-center justify-center mt-2'>
              {" "}
              {/* Flexbox for alignment */}
              <span dir='ltr'>+216 53 925 344</span> {/* Phone number */}
              <PhoneIcon className='w-5 h-5 mr-1' />{" "}
              {/* Phone icon to the left of the number */}
            </div>
          </p>

          <div className='space-y-4 md:space-y-0 md:space-x-4'></div>
        </div>
      </div>
    </section>
  );
};

export default FinalPage;
