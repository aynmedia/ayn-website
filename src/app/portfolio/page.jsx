/** @format */

import React from 'react';
import { workImages } from '../lib/work';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import { webdesignsample } from '../lib/webdesignsample';

const page = () => {
  return (
    <div className=''>
      <div className='max-w-7xl md:mx-auto mx-4 '>
        <div className='flex flex-col md:flex-row justify-center '>
          <div
            className='w-full md:w-1/2 flex items-start 
         '>
            <div className='sticky top-[35%] pb-12'>
              <span className='text-md text-gray-400 font-medium uppercase tracking-wider'>
                Our Portfolio
              </span>
              <h1 className='text-7xl font-bold bg-secondary bg-clip-text text-transparent'>
                Crafting Digital Excellence
              </h1>
              <p className='w-full text-md md:w-2/3 text-gray-800 mt-6 leading-relaxed'>
                Discover our journey of transforming ideas into impactful
                digital experiences. Each project represents our commitment to
                innovation, creativity, and delivering exceptional results that
                drive business growth.
              </p>
              <div className='mt-8 flex gap-4'>
                <div className='flex items-center gap-2'>
                  <span className='text-4xl font-bold text-secondary'>
                    150+
                  </span>
                  <span className='text-sm text-gray-600'>
                    Projects
                    <br />
                    Completed
                  </span>
                </div>
                <div className='flex items-center gap-2'>
                  <span className='text-4xl font-bold text-secondary'>98%</span>
                  <span className='text-sm text-gray-600'>
                    Client
                    <br />
                    Satisfaction
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full md:w-1/2'>
            {workImages.map((image, index) => (
              <section
                className='flex items-center mb-10 h-[100vh] sticky top-0 justify-center'
                key={index}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={400}
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
        <Marquee gradient={false} speed={100} pauseOnHover={true} gap={30}>
          {workImages.map((image, index) => (
            <section
              key={index}
              className='flex items-center justify-center mr-4'>
              <Image src={image.src} alt={image.alt} width={400} height={400} />
            </section>
          ))}
        </Marquee>
      </div>
      <div className='max-w-7xl md:mx-auto mx-4 my-12 '>
        <div className='flex flex-col md:flex-row justify-center'>
          <div className='w-full '>
            <span className='text-4xl text-secondary font-bold flex justify-center'>
              Web Development
            </span>
            {webdesignsample.map((website, index) => (
              <section
                className='flex justify-center items-center mb-10 h-[100vh] sticky top-0 bg-white gap-12'
                key={index}>
                <Image
                  src={website.src}
                  alt={website.alt}
                  width={400}
                  height={400}
                />
                <div className='flex flex-col gap-12 w-full md:w-1/3'>
                  <h1 className='text-4xl text-gray-800 font-bold'>
                    {website.title}
                  </h1>
                  <p className='text-md text-gray-800 font-medium'>
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
