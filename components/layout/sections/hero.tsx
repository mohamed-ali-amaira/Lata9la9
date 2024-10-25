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
      // Trigger the API route for PageView
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

    sendPageView(); // Send PageView event when the page loads
  }, []);

  return (
    <section
      className='container w-full'
      style={{ marginBottom: width >= 720 ? -125 : "auto" }}
    >
      <div className='grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-16 md:py-32'>
        <div className='text-center space-y-8'>
          <div className='max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-bold'>
            <h1 style={{ direction: "rtl", fontSize: "11rem" }}>
              "لا تقلق"
            </h1>
            <br />
            <h2 style={{ direction: "rtl" }}>
              وموش juste كلام
            </h2>
          </div>

          <p
            style={{ direction: "rtl" }}
            className='max-w-screen-sm mx-auto text-xl text-muted-foreground'
          >
            {`استشارة وحدة تخليك ترى كل شيء بالواضح`}
          </p>

          <div className='space-y-4 md:space-y-0 md:space-x-4'>
            <Button
              className="w-5/6 md:w-1/4 font-bold group/arrow"
              onClick={scrollToContact}
              style={{ position: "relative", top: 5 }}
            >
              <ArrowLeft className="size-5 mr-2 group-hover/arrow:translate-x-1 transition-transform" />
              استشرنا الان

            </Button>
            <Button
              asChild
              variant='secondary'
              className='w-5/6 md:w-1/4 font-bold'
            >
              <Link href='#faq'>أكثر معلومات</Link>
            </Button>
          </div>
        </div>

        {/* Moved the paragraph inside the video container */}
        <div className='relative group mt-4'>
          <p
            style={{ direction: "rtl", marginTop: "0.5rem" }}
            className='max-w-screen-sm mx-auto text-2xl text-center'
          >
            {`حضرنالك فيديو يفسرلك كل شي`}
          </p>
          <br />
          <div className='w-full md:w-[1200px] mx-auto rounded-lg relative rounded-lg leading-none flex flex-col items-center'>
            <iframe
              height={width > 720 ? "840" : "270"}
              style={{ borderRadius: 25, borderWidth: 0 }}
              className='w-full md:w-[1200px] rounded-lg border-0'
              src='https://www.youtube.com/embed/ZAUatgR0r70'
              title='YouTube video player'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowFullScreen
            ></iframe>

          </div>
        </div>

        <RegisterButton />
      </div>
    </section>
  );
};

export default HeroSection;
