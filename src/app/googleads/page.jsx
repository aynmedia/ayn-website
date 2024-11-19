/** @format */

import React from 'react';
import { BsCheckCircle } from 'react-icons/bs';
import { RiTeamLine } from 'react-icons/ri';
import { MdSavedSearch } from 'react-icons/md';
import { CgWebsite } from 'react-icons/cg';
import { MdOutlineScreenSearchDesktop } from 'react-icons/md';
import { MdOutlineLiveTv } from 'react-icons/md';
import { FaMoneyBillTrendUp } from 'react-icons/fa6';
import { TbImageInPicture } from 'react-icons/tb';
import google from '@/../../public/images/services/google.svg';
import Image from 'next/image';
import googleplus from '@/../../public/images/services/googleplus.jpg';
import googleimage from '@/../../public/images/services/googleimage.jpg';
import heroImage from '@/../../public/images/services/header.jpg';
import Rotate from '../components/animations/rotateAnimation';
const page = () => {
  return (
    <div className='pb-48'>
      <div className='max-w-7xl md:mx-auto mx-4 my-12 '>
        <div className='flex flex-col md:flex-row items-center gap-4'>
          <Rotate>
            <h1 className='md:text-7xl text-4xl font-bold'>
              Leverage Your Business with Google Ads
            </h1>
          </Rotate>
          <Rotate>
            <p className='text-lg font-medium'>
              Let’s elevate your business game with Ayn Media.
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
        <div className='flex md:flex-row flex-col items-center gap-4'>
          <div className='w-full md:w-1/2 flex flex-col gap-4'>
            <Rotate>
              <h1 className='text-4xl font-bold'>
                Google Ads - PPC, CPM, CPA, CPC, CPL
              </h1>
            </Rotate>
            <Rotate>
              <p className='text-lg font-medium'>
                Google is a powerhouse for managing result-driven ad campaigns.
                Consistently guiding the Google Ads platform on where to focus
                can make all the difference. Here’s why Google Ads stand out
                from other media:
              </p>
            </Rotate>
            <ul className='text-xl font-medium flex flex-col gap-4'>
              <Rotate>
                <li className='flex gap-4'>
                  <BsCheckCircle size={24} className='text-primary' />
                  Easy access to hot prospects
                </li>
              </Rotate>
              <Rotate>
                <li className='flex gap-4'>
                  <BsCheckCircle size={24} className='text-primary' /> Faster
                  results compared to SEO
                </li>
              </Rotate>
              <Rotate>
                <li className='flex gap-4'>
                  <BsCheckCircle size={24} className='text-primary' />A highly
                  effective way to understand demand
                </li>
              </Rotate>
              <Rotate>
                <li className='flex gap-4'>
                  <BsCheckCircle size={24} className='text-primary' />
                  Lower competition in CPC, making it more cost-effective
                </li>
              </Rotate>
            </ul>
          </div>
          <div className='w-full md:w-1/2 flex flex-col gap-4 justify-center items-center'>
            <Image
              src={googleplus}
              alt='social-media'
              width={800}
              height={800}
            />
          </div>
        </div>
        <div className='flex md:flex-row flex-col mt-24 gap-4'>
          <div className='w-full md:w-1/2 flex flex-col gap-4 justify-center items-center'>
            <Image src={googleimage} alt='social' width={600} height={600} />
          </div>
          <div className='w-full md:w-1/2 flex flex-col gap-4'>
            <Rotate>
              {' '}
              <h1 className='text-4xl font-bold'>Why Choose Ayn Media?</h1>
            </Rotate>
            <Rotate>
              <p className='text-lg font-medium'>
                We craft strategies that deliver consistent results for
                Pay-per-Click (PPC) campaigns. By understanding your target
                audience, fine-tuning messaging, and adjusting key metrics, we
                ensure effective Google Ads outcomes. Here’s why clients choose
                us:
              </p>
            </Rotate>
            <div className='flex gap-4 mb-2 p-8 hover:shadow-xl rounded-lg'>
              <span className='rounded-full bg-primary p-4 flex items-center justify-center w-24 h-24'>
                <RiTeamLine size={64} />
              </span>
              <div className='flex flex-col gap-2'>
                <h1 className='text-2xl font-bold'>Experienced Team</h1>
                <p className='text-lg font-medium'>
                  We implement proven strategies that minimize budget wastage in
                  trial campaigns
                </p>
              </div>
            </div>
            <div className='flex gap-4 mb-2 p-8 hover:shadow-xl rounded-lg'>
              <span className='rounded-full bg-primary p-4 flex items-center justify-center w-24 h-24'>
                <MdSavedSearch size={64} />
              </span>
              <div className='flex flex-col gap-2'>
                <h1 className='text-2xl font-bold'>Keyword Research Experts</h1>
                <p className='text-lg font-medium'>
                  Our focus on strategic keyword research helps reduce
                  competition and boost results.
                </p>
              </div>
            </div>
            <div className='flex gap-4 mb-2 p-8 hover:shadow-xl rounded-lg'>
              <span className='rounded-full bg-primary p-4 flex items-center justify-center w-24 h-24'>
                <CgWebsite size={64} />{' '}
              </span>
              <div className='flex flex-col gap-2'>
                <h1 className='text-2xl font-bold'>Landing Page Specialists</h1>
                <p className='text-lg font-medium'>
                  We convert traffic into customers by designing high-converting
                  landing pages backed by a strong content strategy.
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
              4 Types of Ads in Google Advertising
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
            <MdOutlineScreenSearchDesktop size={64} />
          </span>
          <div className='flex flex-col gap-4'>
            <h2 className='text-xl font-bold'>Search Ads</h2>
            <p className='text-lg'>
              By understanding the right keywords, Search Ads provide a direct
              way to reach customers who have an immediate need.
            </p>
          </div>
        </div>
        <div className='p-12 flex gap-6 justify-center bg-white rounded-lg shadow-lg hover:bg-secondary hover:text-white'>
          {' '}
          <span className='rounded-full bg-primary p-4 flex items-center justify-center w-24 h-24'>
            <TbImageInPicture size={64} />
          </span>
          <div className='flex flex-col gap-4'>
            <h2 className='text-xl font-bold'>Display Ads</h2>
            <p className='text-lg'>
              Create strong brand awareness by leveraging the right audience
              insights and Google Ads metrics.
            </p>
          </div>
        </div>
        <div className='p-12 flex gap-6 justify-center bg-white rounded-lg shadow-lg hover:bg-secondary hover:text-white'>
          <span className='rounded-full bg-primary p-4 flex items-center justify-center w-24 h-24'>
            <FaMoneyBillTrendUp size={64} />
          </span>
          <div className='flex flex-col gap-4'>
            <h2 className='text-xl font-bold'>Remarketing</h2>
            <p className='text-lg'>
              Studies show that remarketing can boost conversions by 50% – 60%,
              effectively targeting users across multiple devices.
            </p>
          </div>
        </div>
        <div className='p-12 flex gap-6 justify-center bg-white rounded-lg shadow-lg hover:bg-secondary hover:text-white'>
          {' '}
          <span className='rounded-full bg-primary p-4 flex items-center justify-center w-24 h-24'>
            <MdOutlineLiveTv size={64} />
          </span>
          <div className='flex flex-col gap-4'>
            <h2 className='text-xl font-bold'>Video Ads</h2>
            <p className='text-lg'>
              54% of consumers prefer more video content, making it an effective
              tool to engage millennials and other audience groups.
            </p>
          </div>
        </div>
      </div>
      <div className='py-12'>
        <div className='max-w-7xl md:mx-auto mx-4 flex flex-col items-center justify-center gap-6'>
          <Rotate>
            <h1 className='text-3xl font-bold'>Our Special Features</h1>
          </Rotate>
          {/* <Rotate>
            <p className='text-xl font-medium'>
              We offer a wide range of services to help you achieve your
              marketing goals. From social media marketing to content creation,
              we have the tools and expertise to help you succeed.
            </p>
          </Rotate> */}
          <div className='flex flex-col md:flex-row gap-4'>
            <div className='md:w-1/4 w-full flex flex-col gap-12'>
              <div className='border border-gray-400/50 rounded-lg p-4 shadow-lg hover:bg-secondary hover:text-white'>
                <h1 className='text-xl font-bold'>Website Support</h1>
                <p className='text-lg font-medium'>
                  Our website design team is here to optimize and enhance your
                  website’s performance.
                </p>
              </div>
              <div className='border border-gray-400/50 rounded-lg p-4 shadow-lg hover:bg-secondary hover:text-white'>
                <h1 className='text-xl font-bold'>Landing Page</h1>
                <p className='text-lg font-medium'>
                  Our experts create high-converting landing pages with a
                  well-defined content strategy.
                </p>
              </div>

              <div className='border border-gray-400/50 rounded-lg p-4 shadow-lg hover:bg-secondary hover:text-white'>
                <h1 className='text-xl font-bold'>Dedicated Manager</h1>
                <p className='text-lg font-medium'>
                  A dedicated manager from Ayn Media will guide and keep you
                  updated throughout the process.
                </p>
              </div>
            </div>
            <div className='md:w-2/4 w-full'>
              <Image src={google} alt='social' width={1000} height={1000} />
            </div>
            <div className='md:w-1/4 w-full flex flex-col gap-12'>
              <div className='border border-gray-400/50 rounded-lg p-4 shadow-lg hover:bg-secondary hover:text-white'>
                <h1 className='text-xl font-bold'>Periodic Review</h1>
                <p className='text-lg font-medium'>
                  Our strategic planning and periodic reviews set us apart from
                  others, ensuring continuous improvement.
                </p>
              </div>
              <div className='border border-gray-400/50 rounded-lg p-4 shadow-lg hover:bg-secondary hover:text-white'>
                <h1 className='text-xl font-bold'>Keyword Research</h1>
                <p className='text-lg font-medium'>
                  We invest time and effort into keyword research, changing the
                  game for your Google Ads campaigns.
                </p>
              </div>
              <div className='border border-gray-400/50 rounded-lg p-4 shadow-lg hover:bg-secondary hover:text-white'>
                <h1 className='text-xl font-bold'>Creative Ads</h1>
                <p className='text-lg font-medium'>
                  Our power-packed copywriting and digital teams work together
                  to add immense value to your ad results.
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
