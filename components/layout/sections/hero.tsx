"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import RegisterButton from "@/components/ui/register";
import { ArrowLeft } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const { theme } = useTheme();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const scrollToContact = () => {
    const contactElement = document.getElementById("contact");
    if (contactElement) {
      window.scrollTo({
        top: contactElement.offsetTop,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    async function sendPageView() {
      await fetch("/api/facebook-conversion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          eventName: "PageView",
          eventData: {
            emailHash: "",
          },
        }),
      });
    }
    sendPageView();
  }, []);

  return (
    <section
      id='hero'
      className='container w-full'
      style={{ marginBottom: width >= 720 ? -125 : "auto" }}
    >
      <div className='grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-16 md:py-32'>
        <div className='text-center space-y-8'>
          <div className='max-w-screen-md mx-auto text-center'>
            <h1
              className='text-5xl md:text-7xl font-bold'
              style={{ direction: "rtl", color: "#031833" }}
            >
              لا تقلق
            </h1>
            <br />
            <br />
            <br />

            <h2
              className='text-3xl md:text-5xl font-bold leading-tight mt-4'
              style={{ direction: "rtl", color: "#031833" }}
            >
              استشارة وحدة تخليك <span>ترى كل شيء</span> بالواضح
            </h2>
          </div>

          <div className='space-y-4 md:space-y-0 md:space-x-4'>
            <Button
              className='w-5/6 md:w-1/4 font-bold group/arrow text-white bg-gradient-to-r from-[#f22b0a] to-primary hover:from-primary hover:to-[#f22b0a] transition-colors'
              onClick={scrollToContact}
              style={{ position: "relative", top: 5 }}
            >
              <ArrowLeft className='size-5 mr-2 group-hover/arrow:translate-x-1 transition-transform' />
              استشرنا الان
            </Button>
            <Button
              asChild
              variant='secondary'
              className='w-5/6 md:w-1/4 font-bold bg-white text-blue-600 border border-white hover:text-blue-600 transition-colors'
            >
              <Link href='#faq'>أكثر معلومات</Link>
            </Button>
          </div>
        </div>

        <div className='relative group mt-4'>
          <br />
          <div className='w-full md:w-[1200px] mx-auto rounded-lg relative leading-none flex flex-col items-center'>
            <iframe
              height={width > 720 ? "840" : "270"}
              style={{ borderRadius: 25, borderWidth: 0 }}
              className='w-full md:w-[1200px] rounded-lg border-0'
              src='https://www.youtube.com/embed/RidC55sy-yM'
              title='YouTube video player'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
