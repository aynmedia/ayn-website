/** @format */

import React from 'react';
import { BsCheckCircle } from 'react-icons/bs';
import { IoMegaphoneOutline } from 'react-icons/io5';
import { FaUncharted } from 'react-icons/fa';
import { BsGlobe } from 'react-icons/bs';
import { FaBlog } from 'react-icons/fa';
import { CiYoutube } from 'react-icons/ci';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { MdOutlinePermDeviceInformation } from 'react-icons/md';
import Image from 'next/image';
import socialMedia from '@/../../public/images/services/socialmarketing.svg';
import social from '@/../../public/images/services/social.svg';
import content from '@/../../public/images/services/content.svg';
import heroImage from '@/../../public/images/services/header.jpg';
import Rotate from '../components/animations/rotateAnimation';
const page = () => {
  return (
    <div className='pb-48'>
      <div className='max-w-7xl md:mx-auto mx-4 my-12 '>
        <div className='flex flex-col md:flex-row items-center gap-4'>
          <Rotate>
            <h1 className='md:text-7xl text-4xl font-bold'>
              Let Us Tell Your Brand Story
            </h1>
          </Rotate>
          <Rotate>
            <p className='text-lg font-medium'>
              The best content marketing service at Ayn Media.
            </p>
          </Rotate>
        </div>

        <div className='flex flex-col md:flex-row items-center gap-4 my-12'>
          <Rotate>
            <p className='text-xl font-medium'>
              Over 3.5 billion people worldwide actively use social
              media—that&apos;s an immense pool of potential clients waiting to
              be reached. In today’s digital age, establishing a robust online
              presence is essential.
            </p>
          </Rotate>
        </div>
        <div className='bg-primary h-[400px] w-full overflow-hidden my-12'>
          <Image src={heroImage} alt='hero' objectFit='cover' />
        </div>
        <div className='flex md:flex-row flex-col'>
          <div className='w-full md:w-1/2 flex flex-col gap-4'>
            <Rotate>
              <h1 className='text-4xl font-bold'>Content Marketing</h1>
            </Rotate>
            <Rotate>
              <p className='text-lg font-medium'>
                Did you know that over 50% of businesses don’t have a documented
                content marketing strategy? Content marketing is about creating
                and delivering strategic content that motivates users to take
                action, communicate an idea, or establish thought leadership.
              </p>
            </Rotate>
            <ul className='text-xl font-medium flex flex-col gap-4'>
              <Rotate>
                <li className='flex gap-4'>
                  <BsCheckCircle size={24} className='text-primary' /> Website
                  traffic can increase by 7X through content marketing
                </li>
              </Rotate>
              <Rotate>
                <li className='flex gap-4'>
                  <BsCheckCircle size={24} className='text-primary' /> Custom
                  content fosters a stronger bond with customers
                </li>
              </Rotate>
              <Rotate>
                <li className='flex gap-4'>
                  <BsCheckCircle size={24} className='text-primary' /> Content
                  marketing costs 62% less than traditional marketing
                </li>
              </Rotate>
              <Rotate>
                <li className='flex gap-4'>
                  <BsCheckCircle size={24} className='text-primary' /> 50% of
                  successful organizations use content marketing strategies
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
                Ayn Media, one of the leading content marketing agencies in
                Chennai, recommends content marketing for companies,
                entrepreneurs, and startups looking to build consistent and
                deeper brand reach in a short time. Content marketing is all
                about engaging people’s interests.
              </p>
            </Rotate>
            <div className='flex gap-4 mb-2 p-8 hover:shadow-xl rounded-lg'>
              <span className='rounded-full bg-primary p-4 flex items-center justify-center w-24 h-24'>
                <IoMegaphoneOutline size={64} />
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
                  We develop content strategies that reduce competition and
                  drive better results.
                </p>
              </div>
            </div>
            <div className='flex gap-4 mb-2 p-8 hover:shadow-xl rounded-lg'>
              <span className='rounded-full bg-primary p-4 flex items-center justify-center w-24 h-24'>
                <BsGlobe size={64} />{' '}
              </span>
              <div className='flex flex-col gap-2'>
                <h1 className='text-2xl font-bold'>Marketing Strength</h1>
                <p className='text-lg font-medium'>
                  Our content marketing experts implement these strategies,
                  adding significant value to your brand’s growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-secondary py-24 w-full '>
        <div className='max-w-7xl md:mx-auto mx-4 flex flex-col items-center justify-center gap-6'>
          <Rotate>
            <h1 className='text-3xl font-bold text-white'>
              Major Types of Content Marketing
            </h1>
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
            <FaBlog size={64} />
          </span>
          <div className='flex flex-col gap-4'>
            <h2 className='text-xl font-bold'>Blogging</h2>
            <p className='text-lg'>
              Our team of expert writers helps with blog topic research,
              writing, and effective keyword implementation to drive traffic.
            </p>
          </div>
        </div>
        <div className='p-12 flex gap-6 justify-center bg-white rounded-lg shadow-lg hover:bg-secondary hover:text-white'>
          {' '}
          <span className='rounded-full bg-primary p-4 flex items-center justify-center w-24 h-24'>
            <CiYoutube size={64} />
          </span>
          <div className='flex flex-col gap-4'>
            <h2 className='text-xl font-bold'>Video Creation</h2>
            <p className='text-lg'>
              Content marketing success is 50% content and 50% strategy. Ayn
              Media offers proven video production strategies that deliver
              broad, impactful results.
            </p>
          </div>
        </div>
        <div className='p-12 flex gap-6 justify-center bg-white rounded-lg shadow-lg hover:bg-secondary hover:text-white'>
          <span className='rounded-full bg-primary p-4 flex items-center justify-center w-24 h-24'>
            <MdOutlineAlternateEmail size={64} />
          </span>
          <div className='flex flex-col gap-4'>
            <h2 className='text-xl font-bold'>Email Content</h2>
            <p className='text-lg'>
              With over 5 years of experience in digital marketing and sales,
              our team helps you attract new subscribers and expand your reach
              with engaging email content.
            </p>
          </div>
        </div>
        <div className='p-12 flex gap-6 justify-center bg-white rounded-lg shadow-lg hover:bg-secondary hover:text-white'>
          {' '}
          <span className='rounded-full bg-primary p-4 flex items-center justify-center w-24 h-24'>
            <MdOutlinePermDeviceInformation size={64} />
          </span>
          <div className='flex flex-col gap-4'>
            <h2 className='text-xl font-bold'>Infographics </h2>
            <p className='text-lg'>
              Wondering why your content isn&apos;t reaching your audience
              effectively? Infographics are one of the most powerful ways to
              deliver content and engage your audience.
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
                <h1 className='text-xl font-bold'>Wide Range</h1>
                <p className='text-lg font-medium'>
                  Ayn Media offers a comprehensive range of content marketing
                  services.
                </p>
              </div>

              <div className='border border-gray-400/50 rounded-lg p-4 shadow-lg hover:bg-secondary hover:text-white'>
                <h1 className='text-xl font-bold'>Dedicated Manager</h1>
                <p className='text-lg font-medium'>
                  We provide a dedicated manager to guide you and keep you
                  updated.
                </p>
              </div>
            </div>
            <div className='md:w-2/4 w-full'>
              <Image src={content} alt='social' width={1000} height={1000} />
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
                  your brand&apos;s reach.
                </p>
              </div>
              <div className='border border-gray-400/50 rounded-lg p-4 shadow-lg hover:bg-secondary hover:text-white'>
                <h1 className='text-xl font-bold'>Content Production</h1>
                <p className='text-lg font-medium'>
                  Our content team, equipped with proven industry knowledge,
                  creates high-quality, impactful content.
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
