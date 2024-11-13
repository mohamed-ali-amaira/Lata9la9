"use client";
import React from "react";
import { InstagramEmbed } from "react-social-media-embed";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Merkanti() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  };

  return (
    <div
      id='chokran'
      className='w-full container flex flex-col items-center justify-center'
    >
      <h2
        dir='rtl'
        className='text-4xl font-bold text-center mb-4'
        style={{ color: "#031833" }} // Set the color to #031833
      >
        بعض المعلومات الي تنجم تنفعك
      </h2>
      <br />
      <Slider {...settings} className='w-full max-w-sm'>
        {" "}
        {/* Adjust the max-width as needed */}
        <div>
          <InstagramEmbed
            url='https://www.instagram.com/reel/C2IPn_zIQjT/'
            width={328}
          />
        </div>
        <div>
          <InstagramEmbed
            url='https://www.instagram.com/reel/C3-wruYIrny/'
            width={328}
          />
        </div>
        <div>
          <InstagramEmbed
            url='https://www.instagram.com/reel/C4TR0i1IkKw/'
            width={328}
          />
        </div>
      </Slider>
    </div>
  );
}
