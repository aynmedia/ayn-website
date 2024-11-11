/** @format */

import React from 'react';
import Rotate from './animations/rotateAnimation';
import who from '@/../public/images/Who_we_are_BG.png';
import Image from 'next/image';
import { MdArrowOutward } from 'react-icons/md';
import SlideupAnimation from './animations/slideupAnimation';
import BounceAnimation from './animations/bounceAnimation';

const Whoweare = () => {
  return (
    <div className='flex bg-secondary text-white py-24 overflow-hidden'>
      <div className='max-w-7xl md:mx-auto mx-4 flex flex-col md:flex-row justify-between items-center w-full'>
        <div className='md:w-1/2 w-full flex justify-center'>
          <SlideupAnimation>
            <Image src={who} alt='ayn logo' width={500} height={500} />
          </SlideupAnimation>
        </div>
        <div className='md:w-1/2 w-full justify-end'>
          <Rotate>
            <span className='text-lg text-center text-gray-200'>
              Who We Are
            </span>
          </Rotate>
          <Rotate>
            <h1 className='text-2xl md:text-4xl font-bold py-4'>
              Life isn’t all about selling. Sometimes, you just need to be
              yourself.
            </h1>
          </Rotate>
          <div className='flex flex-row gap-12'>
            <div className='hidden md:block w-1/4 border-r border-gray-400'></div>
            <div className='flex flex-col w-full md:w-3/4 gap-6 text-lg'>
              <span>
                AYN Media & Technologies is a leading Digital Marketing Agency
                dedicated to helping businesses of all sizes succeed online.
                We’re a hive of passionate marketers, designers, developers,
                writers, and strategists — a team that thrives on challenges.
                Our mission is simple: to help you become the best version of
                your brand. We transform your business goals into a clear,
                compelling brand voice and bring it to life through innovative
                digital marketing strategies that create a seamless brand
                experience.
              </span>
              <span>
                We offer complete digital marketing services, including SEO,
                social media marketing, web development, content creation, and
                PPC advertising. Some call us an ad agency, a creative agency, a
                marketing company, or even the business model of the future. The
                truth is, we’re all of those and more. In today’s fast-paced,
                multi-channel world, businesses need fresh, inventive approaches
                to connect with their audience — and that’s where we come in.
                We&apos;re here to help you succeed across every domain and
                truly everywhere
              </span>
              <div className='my-12'>
                <BounceAnimation>
                  <button class='relative  rounded-full text-black bg-white font-roboto text-xl font-thin overflow-hidden p-4 w-48 h-48 transition-transform duration-200 ease-in-out transform hover:scale-105 focus:outline-none group hover:text-white'>
                    <span className='flex justify-center w-full'>
                      Explore Us <MdArrowOutward size={32} />
                    </span>
                    <span class='absolute inset-0 bg-yellow-400 rounded-full transform -translate-x-full rotate-10 transition-transform duration-200 ease-out group-hover:translate-x-0 z-[-1]'></span>
                  </button>
                </BounceAnimation>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whoweare;
