"use client";
import { ArrowLeft } from "lucide-react";
import React, { useState } from "react";
import { NavigationMenu } from "../ui/navigation-menu";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToContact = () => {
    const contactElement = document.getElementById("contact");
    if (contactElement && window) {
      window.scrollTo({
        top: contactElement.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const sections = [
    { href: "#faq", label: "أسئلة ديما تطرحوها" },
    { href: "#testimonial2", label: "اراء حرفائنا" },
    { href: "#merkanti", label: "معلومات تنجم تنفعك" },
    { href: "#testimonials", label: "شنو نقدمولك " },
    { href: "#hero", label: "الصفحة الرئيسية" },
  ];

  return (
    <header className='shadow-inner w-full max-w-screen-xl top-5 mx-auto sticky border border-secondary z-40 rounded-2xl flex flex-col md:flex-row items-center p-2 bg-white'>
      
      {/* Button for larger screens */}
      <div className='hidden md:flex justify-start w-3/12'>
        <Button
          className='w-full md:w-2/4 font-bold group/arrow'
          onClick={scrollToContact}
        >
          <ArrowLeft className='size-5 mr-2 group-hover/arrow:translate-x-1 transition-transform' />
          <span style={{ color: '#FFFFFF' }}>استشرنا الان</span>
        </Button>
      </div>

      <div className='flex-grow text-center'>
        <button 
          className="md:hidden" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {/* Hamburger Icon or similar can be used here */}
          {isMenuOpen ? "✖" : "☰"}
        </button>

        {typeof window !== 'undefined' && !window.location.href.includes("thanks") && (
          <NavigationMenu className='relative mx-auto'>
            <ul className={`flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-4 ${isMenuOpen ? "block" : "hidden md:flex"}`}>
              {sections.map(({ href, label }) => (
                <li key={href}>
                  <a href={href} className='text-sm text-[#031833] hover:underline'>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </NavigationMenu>
        )}
      </div>

      {/* Logo and text */}
      <Link href='/' className='font-bold text-lg flex items-center mt-2 md:mt-0'>
        <Image
          src='/images.png'
          alt='Xposure'
          width={"34"}
          height={"34"}
          className='rounded-lg w-9 h-9 mr-2 border'
        />
        <span style={{ color: '#031833' }}>لا تقلق</span>
      </Link>
    </header>
  );
}
