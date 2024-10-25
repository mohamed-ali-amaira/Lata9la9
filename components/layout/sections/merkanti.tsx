"use client";
import React from "react";
import { InstagramEmbed } from "react-social-media-embed";

export default function Merkanti() {
  return (
    <div className='w-full container flex flex-col items-center justify-center'>
      <h2
        dir='rtl'
        className='mb-10 text-3xl text-primary px-1 lg:px-2 border-2 text-center py-6 rounded border-white '
      >
        بعض المعلومات الي تنجم تنفعك
      </h2>
      <div className='flex justify-center lg:flex-row flex-col '>
        <InstagramEmbed
          url='https://www.instagram.com/reel/C2IPn_zIQjT/'
          width={328}
        />
        <InstagramEmbed
          url='https://www.instagram.com/reel/C3-wruYIrny/'
          width={328}
        />

        <InstagramEmbed
          url='https://www.instagram.com/reel/C4TR0i1IkKw/'
          width={328}
        />
      </div>
    </div>
  );
}
