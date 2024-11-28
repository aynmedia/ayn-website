/** @format */
'use client';
import React from 'react';
import Image from 'next/image';
import { logoImages } from '../lib/logos';
import { FaArrowRightLong } from 'react-icons/fa6';

import Marquee from 'react-fast-marquee';
import { Button } from '@/components/ui/button';

const LogoSlider = () => {
  return (
    <div className='my-12 flex flex-col items-center gap-6 overflow-hidden'>
      <h1 className='md:text-4xl text-2xl font-bold mt-12'>Our Clients</h1>
      <span className='pb-12 text-xl text-center text-gray-600 px-4 '>
        We don&apos;t play favorites, We excel at keeping all our clients happy,
        all at once.
      </span>{' '}
      <Marquee gradient speed={50}>
        {logoImages.map((logo) => (
          <Image
            key={logo.id}
            src={logo.src}
            alt={logo.alt}
            width={200}
            height={200}
            // className='grayscale hover:grayscale-0 transition-all duration-500 ease-in-out'
          />
        ))}
      </Marquee>
      <Marquee gradient direction='right' speed={50}>
        {logoImages.map((logo) => (
          <Image
            key={logo.id}
            src={logo.src}
            alt={logo.alt}
            width={200}
            height={200}
            // className='grayscale hover:grayscale-0 transition-all duration-500 ease-in-out'
          />
        ))}
      </Marquee>
      <div className='flex justify-center my-12'>
        <Button
          variant='primary'
          className='px-6 py-6 text-xl text-secondary font-bold bg-primary focus:ring-4 focus:outline-none focus:ring-primary hover:bg-secondary hover:text-primary'>
          View All <FaArrowRightLong />
        </Button>
      </div>
    </div>
  );
};

export default LogoSlider;
