/** @format */

import React from 'react';
import { BsCheckCircle } from 'react-icons/bs';
import { IoMegaphoneOutline } from 'react-icons/io5';
import { FaUncharted } from 'react-icons/fa';
import { BsGlobe } from 'react-icons/bs';
import { CiFacebook, CiInstagram, CiLinkedin, CiYoutube } from 'react-icons/ci';
import Image from 'next/image';
import socialMedia from '@/../../public/images/services/socialmarketing.svg';
import social from '@/../../public/images/services/social.svg';
import feature from '@/../../public/images/services/feature.svg';
import heroImage from '@/../../public/images/services/header.jpg';
import Rotate from '../components/animations/rotateAnimation';
const page = () => {
  return (
    <div className='pb-48'>
      <div className='max-w-7xl md:mx-auto mx-4 my-12 '>
        <div className='flex flex-col md:flex-row items-center gap-4'>
          <Rotate>
            <h1 className='md:text-7xl text-4xl font-bold'>
              Give your brand a powerful voice
            </h1>
          </Rotate>
          <Rotate>
            <p className='text-lg font-medium'>
              Ayn Media – Delivering top-notch social media marketing to elevate
              your brand’s impact.
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
              <h1 className='text-4xl font-bold'>Social Media Marketing</h1>
            </Rotate>
            <Rotate>
              <p className='text-lg font-medium'>
                Over 3.5 billion people worldwide actively use social
                media—that&apos;s an immense pool of potential clients waiting
                to be reached. In today’s digital age, establishing a robust
                online presence is essential.
              </p>
            </Rotate>
            <ul className='text-xl font-medium flex flex-col gap-4'>
              <Rotate>
                <li className='flex gap-4'>
                  <BsCheckCircle size={24} className='text-primary' /> Drives
                  more traffic to your website or page
                </li>
              </Rotate>
              <Rotate>
                <li className='flex gap-4'>
                  <BsCheckCircle size={24} className='text-primary' /> Drives
                  more Enhances brand awareness
                </li>
              </Rotate>
              <Rotate>
                <li className='flex gap-4'>
                  <BsCheckCircle size={24} className='text-primary' /> Drives
                  more Builds customer trust
                </li>
              </Rotate>
              <Rotate>
                <li className='flex gap-4'>
                  <BsCheckCircle size={24} className='text-primary' /> Drives
                  more Connects your brand with both loyal and new customers
                </li>
              </Rotate>
              <Rotate>
                <li className='flex gap-4'>
                  <BsCheckCircle size={24} className='text-primary' /> Drives
                  more Demonstrates authenticity and authority
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
                From amplifying your brand’s voice to transforming loyal
                followers into valuable leads, we handle every facet of social
                media marketing. Our team of experts is dedicated to promoting
                your brand and fostering a trusted, thriving community with
                strategic calls-to-action.
              </p>
            </Rotate>
            <div className='flex gap-4 mb-2 p-8 hover:shadow-xl rounded-lg'>
              <span className='rounded-full bg-primary p-4 flex items-center justify-center w-24 h-24'>
                <IoMegaphoneOutline size={64} />
              </span>
              <div className='flex flex-col gap-2'>
                <h1 className='text-2xl font-bold'>Brand Voice</h1>
                <p className='text-lg font-medium'>
                  We give your brand a distinct voice on social media that
                  speaks, attracts, and connects with your audience.
                </p>
              </div>
            </div>
            <div className='flex gap-4 mb-2 p-8 hover:shadow-xl rounded-lg'>
              <span className='rounded-full bg-primary p-4 flex items-center justify-center w-24 h-24'>
                <FaUncharted size={64} />
              </span>
              <div className='flex flex-col gap-2'>
                <h1 className='text-2xl font-bold'>Strategic Expertise</h1>
                <p className='text-lg font-medium'>
                  Our team crafts a reliable, engaging strategy that strengthens
                  brand communication through captivating content.
                </p>
              </div>
            </div>
            <div className='flex gap-4 mb-2 p-8 hover:shadow-xl rounded-lg'>
              <span className='rounded-full bg-primary p-4 flex items-center justify-center w-24 h-24'>
                <BsGlobe size={64} />{' '}
              </span>
              <div className='flex flex-col gap-2'>
                <h1 className='text-2xl font-bold'>From Followers to Leads</h1>
                <p className='text-lg font-medium'>
                  We convert your loyal followers into prospective leads with
                  compelling, action-oriented strategies.
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
              4 Major Platforms of Social Media Marketing
            </h1>
          </Rotate>
          <Rotate>
            <p className='text-xl font-medium text-white text-center'>
              India’s social media user base is expanding every second—along
              with your potential leads. Our team of social media experts crafts
              tailored marketing campaigns designed to maximize your brand’s
              impact across each platform.
            </p>
          </Rotate>
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
            <CiFacebook size={64} />
          </span>
          <div className='flex flex-col gap-4'>
            <h2 className='text-xl font-bold'>FACEBOOK</h2>
            <p className='text-lg'>
              With over 2.23 billion monthly active users, this platform is
              perfect for reaching diverse age groups worldwide.
            </p>
          </div>
        </div>
        <div className='p-12 flex gap-6 justify-center bg-white rounded-lg shadow-lg hover:bg-secondary hover:text-white'>
          {' '}
          <span className='rounded-full bg-primary p-4 flex items-center justify-center w-24 h-24'>
            <CiInstagram size={64} />
          </span>
          <div className='flex flex-col gap-4'>
            <h2 className='text-xl font-bold'>INSTAGRAM</h2>
            <p className='text-lg'>
              With over 1 billion monthly users, this platform is ideal for
              connecting with today’s trends and engaging the youth.
            </p>
          </div>
        </div>
        <div className='p-12 flex gap-6 justify-center bg-white rounded-lg shadow-lg hover:bg-secondary hover:text-white'>
          <span className='rounded-full bg-primary p-4 flex items-center justify-center w-24 h-24'>
            <CiLinkedin size={64} />
          </span>
          <div className='flex flex-col gap-4'>
            <h2 className='text-xl font-bold'>LINKEDIN</h2>
            <p className='text-lg'>
              With over 294 million monthly active users, this platform is the
              go-to choice for B2B marketing.
            </p>
          </div>
        </div>
        <div className='p-12 flex gap-6 justify-center bg-white rounded-lg shadow-lg hover:bg-secondary hover:text-white'>
          {' '}
          <span className='rounded-full bg-primary p-4 flex items-center justify-center w-24 h-24'>
            <CiYoutube size={64} />
          </span>
          <div className='flex flex-col gap-4'>
            <h2 className='text-xl font-bold'>YOUTUBE </h2>
            <p className='text-lg'>
              With over 1.9 billion monthly users, YouTube stands as one of the
              most widely viewed and utilized marketing platforms worldwide.
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
                <h1 className='text-xl font-bold'>Facebook Marketing</h1>
                <p className='text-lg font-medium'>
                  From pages to advertisements, we integrate every aspect of
                  Facebook into our campaigns to drive impactful results.
                </p>
              </div>
              <div className='border border-gray-400/50 rounded-lg p-4 shadow-lg hover:bg-secondary hover:text-white'>
                <h1 className='text-xl font-bold'>Instagram Marketing</h1>
                <p className='text-lg font-medium'>
                  We cover it all—feeds, reels, IGTV, stories, and more—to
                  ensure your brand shines on Instagram.
                </p>
              </div>

              <div className='border border-gray-400/50 rounded-lg p-4 shadow-lg hover:bg-secondary hover:text-white'>
                <h1 className='text-xl font-bold'>LinkedIn Marketing</h1>
                <p className='text-lg font-medium'>
                  From content sharing and networking to advertising, we handle
                  every aspect of LinkedIn marketing.
                </p>
              </div>
            </div>
            <div className='md:w-2/4 w-full'>
              <Image src={feature} alt='social' width={1000} height={1000} />
            </div>
            <div className='md:w-1/4 w-full flex flex-col gap-12'>
              <div className='border border-gray-400/50 rounded-lg p-4 shadow-lg hover:bg-secondary hover:text-white'>
                <h1 className='text-xl font-bold'>YouTube Marketing</h1>
                <p className='text-lg font-medium'>
                  We craft engaging, viral video content that resonates with
                  your audience.
                </p>
              </div>
              <div className='border border-gray-400/50 rounded-lg p-4 shadow-lg hover:bg-secondary hover:text-white'>
                <h1 className='text-xl font-bold'>
                  Social Media Optimization (SMO)
                </h1>
                <p className='text-lg font-medium'>
                  We create SMO strategies to boost brand awareness and
                  strengthen connections with customers.
                </p>
              </div>
              <div className='border border-gray-400/50 rounded-lg p-4 shadow-lg hover:bg-secondary hover:text-white'>
                <h1 className='text-xl font-bold'>
                  Online Reputation Management
                </h1>
                <p className='text-lg font-medium'>
                  We help monitor and enhance your brand’s online presence to
                  drive better results.
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
