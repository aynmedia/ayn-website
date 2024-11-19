/** @format */
'use client';
import { useState } from 'react';
import { Londrina_Outline } from '@next/font/google';

const londrinaOutline = Londrina_Outline({
  subsets: ['latin'],
  weight: '400', // Londrina Outline only has 400 weight
  display: 'swap', // Optional, improves load performance
});

const ServicesHome = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredRight, setIsHoveredRight] = useState(false);

  return (
    <div className='pb-24'>
      <div className='flex md:flex-row flex-col gap-6 max-w-7xl md:mx-auto mx-4'>
        <div className='md:w-1/2 w-full'>
          <span className='text-lg font-bold text-gray-500 text-center'>
            Services
          </span>
          <h1 className='text-4xl font-bold'>What Can We Achieve Together</h1>
        </div>
        <div className='md:w-1/2 w-full flex justify-end'>
          <span className='text-lg font-bold text-gray-500 text-center md:text-right'>
            Patterns, innovations, and strategies
            <br /> are always shifting, and so are we.
          </span>
        </div>
      </div>
      <div className=' flex flex-col md:flex-row bg-secondary max-w-7xl md:mx-auto my-6'>
        <div
          className='md:w-1/2 w-full flex flex-col justify-center text-white'
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}>
          {isHovered ? (
            <div className='p-12 h-96'>
              {/* <h1 className={`${londrinaOutline.className} text-7xl my-12`}>
                Brand solutions
              </h1> */}
              <ul className='list-disc text-xl'>
                <li>Brand Strategy / Positioning</li>
                <li>Corporate Communications</li>
                <li>Brand Communication & Design </li>
                <li>Photoshoots & Video Shoots</li>
              </ul>
            </div>
          ) : (
            <div className='bg-primary p-12 text-secondary md:h-96'>
              <h1
                className={`${londrinaOutline.className} text-7xl my-6 font-bold`}>
                BRAND SOLUTIONS
              </h1>
              <span className='font-medium text-lg'>
                Your Strategic Partner in Building a Powerful Brand We
                don&apos;t just offer solutions; we tailor them to create a
                strong brand identity that deeply resonates with your audience,
                ensuring your brand leaves a lasting impact in today&apos;s
                competitive landscape.
              </span>
            </div>
          )}
        </div>
        <div
          className='md:w-1/2 w-full flex flex-col justify-center text-white'
          onMouseEnter={() => setIsHoveredRight(true)}
          onMouseLeave={() => setIsHoveredRight(false)}>
          {isHoveredRight ? (
            <div className='p-12  h-96'>
              {/* <h1 className={`${londrinaOutline.className} text-7xl my-12`}>
                Brand solutions
              </h1> */}
              <ul className='list-disc text-xl'>
                <li>Website & Mobile App Development</li>
                <li>Social Media Marketing</li>
                <li>Search Engine Optimisation (SEO) </li>
                <li>Performance Marketing</li>
                <li>Community / Influencer Marketing</li>
                <li>Video Marketing</li>
                <li>Email Marketing</li>
              </ul>
            </div>
          ) : (
            <div className='bg-primary p-12 text-secondary md:h-96'>
              <h1
                className={`${londrinaOutline.className} text-7xl my-6 font-bold`}>
                DIGITAL SOLUTIONS
              </h1>
              <span className='font-medium text-lg'>
                Elevating Your Online Presence to New Heights Our expertise
                drives your digital success. With precision, we craft and
                implement marketing strategies tailored specifically to your
                needs, ensuring your brand stands out and thrives in the online
                world.
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServicesHome;
