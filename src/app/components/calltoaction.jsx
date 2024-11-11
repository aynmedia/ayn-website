/** @format */
'use client';

import Image from 'next/image';
import React from 'react';
import Together from '@/../../public/images/Together.jpg';
import { BsArrowRight } from 'react-icons/bs';

const CallToAction = () => {
  return (
    <div className='relative py-12 md:py-24 max-w-7xl md:mx-auto mx-4'>
      <div className='absolute inset-0 flex justify-between opacity-10 -z-10'>
        <span className='w-[2px] bg-gray-500 h-full'></span>
        <span className='w-[2px] bg-gray-500 h-full'></span>
        <span className='w-[2px] bg-gray-500 h-full'></span>
        <span className='w-[2px] bg-gray-500 h-full'></span>
      </div>
      <div className='bg-[#EEEEEE] py-12 px-4 md:px-4 md:py-4 text-center flex flex-col md:flex-row items-center rounded-md'>
        <div className='md:w-1/3 w-full'>
          <Image
            src={Together}
            alt='call-to-action'
            width={300}
            height={300}
            className='rounded-md'
          />
        </div>
        <div className='md:w-1/3 w-full'>
          <p className='text-5xl font-bold'>Why Wait for Magic to Happen?</p>
        </div>
        <div className='md:w-1/3 w-full gap-y-6'>
          <p>
            Don&apos;t hesitate—let&apos;s create something amazing together.
            Reach out today and let&apos;s make your brand shine!
          </p>
          <button className='hover:bg-secondary bg-primary hover:text-primary  text-secondary font-bold py-4 px-6 rounded-md mt-4 flex flex-row gap-4 justify-center items-center mx-auto'>
            Begin Your Transformation Today <BsArrowRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
