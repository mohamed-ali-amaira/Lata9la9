"use client";
import React, { useEffect, useState } from "react";

const FloatingButton = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      const scrolledPercentage =
        ((scrollPosition + windowHeight) / documentHeight) * 100;

      if (scrolledPercentage > 90) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToContact = () => {
    const contactElement = document.getElementById("contact");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (isVisible) {
    return (
      <button
        onClick={scrollToContact}
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 md:hidden font-bold text-white bg-gradient-to-r from-[#f22b0a] to-primary hover:from-primary hover:to-[#f22b0a] rounded-full px-6 py-3 shadow-lg transition-colors focus:outline-none"
        aria-label="Contact Us"
      >
        استشرنا الان
      </button>

    );
  } else {
    return <></>;
  }
};

export default FloatingButton;
