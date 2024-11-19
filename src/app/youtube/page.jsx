/** @format */

import React from 'react';
import { BsCheckCircle } from 'react-icons/bs';
import { FaUncharted } from 'react-icons/fa';
import { PiTreeStructure } from 'react-icons/pi';
import { MdOutlinePermDeviceInformation } from 'react-icons/md';
import Image from 'next/image';
import socialMedia from '@/../../public/images/services/socialmarketing.svg';
import social from '@/../../public/images/services/social.svg';
import youtube from '@/../../public/images/services/youtube.svg';
import heroImage from '@/../../public/images/services/header.jpg';
import Rotate from '../components/animations/rotateAnimation';
import { IoCameraOutline } from 'react-icons/io5';
import { RiLineChartLine } from 'react-icons/ri';
import { FaCameraRetro } from 'react-icons/fa';
import { LuMedal } from 'react-icons/lu';

const page = () => {
  return (
    <div className='pb-48'>
      <div className='max-w-7xl md:mx-auto mx-4 my-12 '>
        <div className='flex flex-col md:flex-row items-center gap-4'>
          <Rotate>
            <h1 className='md:text-7xl text-4xl font-bold'>
              Grow Your Brand with YouTube
            </h1>
          </Rotate>
          <Rotate>
            <p className='text-lg font-medium'>
              The best YouTube marketing service is here at Ayn Media.
            </p>
          </Rotate>
        </div>

        <div className='flex flex-col md:flex-row items-center gap-4 my-12'>
          <Rotate>
            <p className='text-xl font-medium'>
              YouTube is localized in 100 countries and available in 80
              languages
            </p>
          </Rotate>
        </div>
        <div className='bg-primary h-[400px] w-full overflow-hidden my-12'>
          <Image src={heroImage} alt='hero' objectFit='cover' />
        </div>
        <div className='flex md:flex-row flex-col'>
          <div className='w-full md:w-1/2 flex flex-col gap-4'>
            <Rotate>
              <h1 className='text-4xl font-bold'>YouTube Marketing</h1>
            </Rotate>
            <Rotate>
              <p className='text-lg font-medium'>
                The key to YouTube advertising success lies in its simplicity.
                Content creators can easily share content with a vast audience,
                and users can consume it with just a click. YouTube advertising
                is a powerful tool for marketers to reach the right audience
                effectively.
              </p>
            </Rotate>
            <ul className='text-xl font-medium flex flex-col gap-4'>
              <Rotate>
                <li className='flex gap-4'>
                  <BsCheckCircle size={24} className='text-primary' />
                  2.3 billion active users on YouTube
                </li>
              </Rotate>
              <Rotate>
                <li className='flex gap-4'>
                  <BsCheckCircle size={24} className='text-primary' /> The
                  second most popular search engine after Google
                </li>
              </Rotate>
              <Rotate>
                <li className='flex gap-4'>
                  <BsCheckCircle size={24} className='text-primary' /> 70% of
                  YouTube views come from mobile devices
                </li>
              </Rotate>
            </ul>
          </div>
          <div className='w-full md:w-1/2 flex flex-col gap-4 justify-center items-center'>
            <Image
              src={socialMedia}
              alt='social-media'
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className='flex md:flex-row flex-col mt-12'>
          <div className='w-full md:w-1/2 flex flex-col gap-4 justify-center items-center'>
            <Image src={social} alt='social' width={600} height={600} />
          </div>
          <div className='w-full md:w-1/2 flex flex-col gap-4'>
            <Rotate>
              {' '}
              <h1 className='text-4xl font-bold'>Why Choose Ayn Media?</h1>
            </Rotate>
            <Rotate>
              <p className='text-lg font-medium'>
                Ayn Media, one of the top YouTube marketing and advertising
                agencies in Chennai, recommends YouTube for clients focused on
                brand awareness with a secondary goal of lead generation. We
                specialize in 360º services, from content creation to ad
                management.
              </p>
            </Rotate>
            <div className='flex gap-4 mb-2 p-8 hover:shadow-xl rounded-lg'>
              <span className='rounded-full bg-primary p-4 flex items-center justify-center w-24 h-24'>
                <FaCameraRetro size={64} />
              </span>
              <div className='flex flex-col gap-2'>
                <h1 className='text-2xl font-bold'>Content Creators</h1>
                <p className='text-lg font-medium'>
                  Our content experts craft content that speaks, sells, and
                  resonates with your audience.
                </p>
              </div>
            </div>
            <div className='flex gap-4 mb-2 p-8 hover:shadow-xl rounded-lg'>
              <span className='rounded-full bg-primary p-4 flex items-center justify-center w-24 h-24'>
                <FaUncharted size={64} />
              </span>
              <div className='flex flex-col gap-2'>
                <h1 className='text-2xl font-bold'>Content Strategy</h1>
                <p className='text-lg font-medium'>
                  We build strategic content plans that reduce competition and
                  enhance results.
                </p>
              </div>
            </div>
            <div className='flex gap-4 mb-2 p-8 hover:shadow-xl rounded-lg'>
              <span className='rounded-full bg-primary p-4 flex items-center justify-center w-24 h-24'>
                <LuMedal size={64} />{' '}
              </span>
              <div className='flex flex-col gap-2'>
                <h1 className='text-2xl font-bold'>Proven Track Record</h1>
                <p className='text-lg font-medium'>
                  We’ve increased YouTube views for our clients by 14% to 45%
                  through effective YouTube SEO strategies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-secondary py-24 w-full '>
        <div className='max-w-7xl md:mx-auto mx-4 flex flex-col items-center justify-center gap-6'>
          <Rotate>
            <h1 className='text-3xl font-bold text-white'>Our Expertise</h1>
          </Rotate>
          {/* <Rotate>
            <p className='text-xl font-medium text-white text-center'>
              India’s social media user base is expanding every second—along
              with your potential leads. Our team of social media experts crafts
              tailored marketing campaigns designed to maximize your brand’s
              impact across each platform.
            </p>
          </Rotate> */}
        </div>
      </div>
      <div className='max-w-7xl md:mx-auto mx-4 relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 my-12 '>
        <div className='absolute inset-0 flex justify-between opacity-10 -z-10 '>
          <span className='w-[2px] bg-gray-500 h-full'></span>
          <span className='w-[2px] bg-gray-500 h-full'></span>
          <span className='w-[2px] bg-gray-500 h-full'></span>
          <span className='w-[2px] bg-gray-500 h-full'></span>
        </div>

        <div className='p-12 flex gap-6 justify-center bg-white rounded-lg shadow-lg hover:bg-secondary hover:text-white'>
          {' '}
          <span className='rounded-full bg-primary p-4 flex items-center justify-center w-24 h-24 '>
            <IoCameraOutline size={64} />
          </span>
          <div className='flex flex-col gap-4'>
            <h2 className='text-xl font-bold'>Content Creators</h2>
            <p className='text-lg'>
              Our team of experts supports you in every aspect of content
              creation, video production, editing, and delivery.
            </p>
          </div>
        </div>
        <div className='p-12 flex gap-6 justify-center bg-white rounded-lg shadow-lg hover:bg-secondary hover:text-white'>
          {' '}
          <span className='rounded-full bg-primary p-4 flex items-center justify-center w-24 h-24'>
            <PiTreeStructure size={64} />
          </span>
          <div className='flex flex-col gap-4'>
            <h2 className='text-xl font-bold'>Content Strategy</h2>
            <p className='text-lg'>
              The success of content marketing is 50% content and 50% strategy.
              We offer proven content strategies that yield significant results.
            </p>
          </div>
        </div>
        <div className='p-12 flex gap-6 justify-center bg-white rounded-lg shadow-lg hover:bg-secondary hover:text-white'>
          <span className='rounded-full bg-primary p-4 flex items-center justify-center w-24 h-24'>
            <RiLineChartLine size={64} />
          </span>
          <div className='flex flex-col gap-4'>
            <h2 className='text-xl font-bold'>Marketing Strategy</h2>
            <p className='text-lg'>
              With 5+ years of experience in digital marketing and sales, our
              team helps attract new subscribers and increase reach.
            </p>
          </div>
        </div>
        <div className='p-12 flex gap-6 justify-center bg-white rounded-lg shadow-lg hover:bg-secondary hover:text-white'>
          {' '}
          <span className='rounded-full bg-primary p-4 flex items-center justify-center w-24 h-24'>
            <MdOutlinePermDeviceInformation size={64} />
          </span>
          <div className='flex flex-col gap-4'>
            <h2 className='text-xl font-bold'>Video SEO</h2>
            <p className='text-lg'>
              If your YouTube videos aren&apos;t reaching the right audience,
              Video SEO is the solution. SEO-optimized videos can increase views
              by 15% to 40%.
            </p>
          </div>
        </div>
      </div>
      <div className='py-12'>
        <div className='max-w-7xl md:mx-auto mx-4 flex flex-col items-center justify-center gap-6'>
          <Rotate>
            <h1 className='text-3xl font-bold'>Our Special Features</h1>
          </Rotate>
          <Rotate>
            <p className='text-xl font-medium'>
              We offer a wide range of services to help you achieve your
              marketing goals. From social media marketing to content creation,
              we have the tools and expertise to help you succeed.
            </p>
          </Rotate>
          <div className='flex flex-col md:flex-row gap-4'>
            <div className='md:w-1/4 w-full flex flex-col gap-12'>
              <div className='border border-gray-400/50 rounded-lg p-4 shadow-lg hover:bg-secondary hover:text-white'>
                <h1 className='text-xl font-bold'>Experienced Team</h1>
                <p className='text-lg font-medium'>
                  Our team brings over 5 years of experience in the digital
                  industry.
                </p>
              </div>
              <div className='border border-gray-400/50 rounded-lg p-4 shadow-lg hover:bg-secondary hover:text-white'>
                <h1 className='text-xl font-bold'>Ethical SEO Process</h1>
                <p className='text-lg font-medium'>
                  Ayn Media follows white-hat methods to deliver long-term,
                  sustainable results.
                </p>
              </div>

              <div className='border border-gray-400/50 rounded-lg p-4 shadow-lg hover:bg-secondary hover:text-white'>
                <h1 className='text-xl font-bold'>Dedicated Manager</h1>
                <p className='text-lg font-medium'>
                  We provide a dedicated manager to guide you and keep you
                  updated on progress.
                </p>
              </div>
            </div>
            <div className='md:w-2/4 w-full'>
              <Image src={youtube} alt='social' width={1000} height={1000} />
            </div>
            <div className='md:w-1/4 w-full flex flex-col gap-12'>
              <div className='border border-gray-400/50 rounded-lg p-4 shadow-lg hover:bg-secondary hover:text-white'>
                <h1 className='text-xl font-bold'>Periodic Review</h1>
                <p className='text-lg font-medium'>
                  Our strategic plans, regular reviews, and transparent reports
                  set us apart from others.
                </p>
              </div>
              <div className='border border-gray-400/50 rounded-lg p-4 shadow-lg hover:bg-secondary hover:text-white'>
                <h1 className='text-xl font-bold'>Content Research</h1>
                <p className='text-lg font-medium'>
                  We invest time and effort into content research, transforming
                  your brand&apos;s reach and impact.
                </p>
              </div>
              <div className='border border-gray-400/50 rounded-lg p-4 shadow-lg hover:bg-secondary hover:text-white'>
                <h1 className='text-xl font-bold'>Content Marketing</h1>
                <p className='text-lg font-medium'>
                  Our content team, with proven industry expertise, can amplify
                  your videos and boost engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
