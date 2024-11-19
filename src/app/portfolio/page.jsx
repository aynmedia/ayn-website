/** @format */

import React from 'react';
import { workImages } from '../lib/work';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import { webdesignsample } from '../lib/webdesignsample';

const page = () => {
  return (
    <div className='pb-48'>
      <div className='max-w-7xl md:mx-auto mx-4 my-12 '>
        <div className='flex flex-col md:flex-row justify-center'>
          <div
            className='w-full md:w-1/2 flex items-start
         '>
            <div className='sticky top-[15%]'>
              <span className='text-xl text-gray-400 font-bold'>Sample</span>
              <p className='text-7xl  font-bold'>Work</p>
              <p className='w-full text-xl font-bold md:w-1/2 text-gray-800 mt-4'>
                View some of our recent shortlisted and awesome work that we
                created for our happy clients.
              </p>
            </div>
          </div>
          <div className='w-full md:w-1/2'>
            {workImages.map((image, index) => (
              <section
                className='flex items-center mb-10 h-[100vh] sticky top-0'
                key={index}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                />
              </section>
            ))}
          </div>
        </div>
      </div>
      <div className='flex flex-col items-evenly justify-center overflow-x-auto bg-secondary h-[100vh] gap-12'>
        <span className='text-4xl text-white font-bold text-center'>
          Ads That Perform
        </span>
        <Marquee gradient={false} speed={50} pauseOnHover={true} gap={10}>
          {workImages.map((image, index) => (
            <section
              key={index}
              className='flex items-center justify-center mr-4'>
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
              />
            </section>
          ))}
        </Marquee>
      </div>
      <div className='max-w-7xl md:mx-auto mx-4 my-12 '>
        <div className='flex flex-col md:flex-row justify-center'>
          <div className='w-full '>
            <span className='text-4xl text-secondary font-bold text-center'>
              Web Development
            </span>
            {webdesignsample.map((website, index) => (
              <section
                className='flex items-center mb-10 h-[100vh] sticky top-0 bg-white gap-12'
                key={index}>
                <Image
                  src={website.src}
                  alt={website.alt}
                  width={700}
                  height={700}
                />
                <div className='flex flex-col gap-12 w-full md:w-1/3'>
                  <h1 className='text-4xl text-gray-800 font-bold'>
                    {website.title}
                  </h1>
                  <p className='text-lg text-gray-800 font-medium'>
                    {website.description}
                  </p>
                  <button className='bg-secondary text-white text-xl font-bold py-3 px-6 rounded-lg w-fit'>
                    Visit Website
                  </button>
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
