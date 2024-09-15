'use client'

import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-10 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I&apos;m{' '}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                'Wayangseno',
                1000,
                'Web Developer',
                1000,
                'Mobile Developer',
                1000,
                'UI/UX Designer',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#adb7be] text-base sm:text-lg lg:text-xl mb-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam
            voluptas unde nulla soluta? Veritatis earum obcaecati dolore. Ipsam
            quod eum, est provident eaque tenetur sed, unde illum id,
            accusantium voluptatibus!
          </p>
          <div>
            <button className="px-6 py-4 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">
              Hire Me
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-3">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full  w-[300px] lg:w-[400px] h-[300px] lg:h-[400px] relative">
            <Image
              src="/images/photo.png"
              alt="hero image"
              width={300}
              height={300}
              className="rounded-xl absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
