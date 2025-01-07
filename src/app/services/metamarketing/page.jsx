/** @format */
'use client';
import React from 'react';
import { BsCheckCircle } from 'react-icons/bs';
import { IoMegaphoneOutline } from 'react-icons/io5';
import { FaUncharted } from 'react-icons/fa';
import { BsGlobe } from 'react-icons/bs';
import { GiTakeMyMoney } from 'react-icons/gi';
import { CiMemoPad } from 'react-icons/ci';
import { GiOnTarget } from 'react-icons/gi';
import { PiStrategyDuotone } from 'react-icons/pi';
import { FaRegIdBadge } from 'react-icons/fa';
import Image from 'next/image';
import socialMedia from '@/../../public/images/services/socialmarketing.svg';
import fbinsta from '@/../../public/images/services/fbinsta.svg';
import heroImage from '@/../../public/images/services/header.jpg';
import Rotate from '../../components/animations/rotateAnimation';
const page = () => {
  return (
    <div className='pt-48'>
      <div className='max-w-7xl md:mx-auto mx-4'>
        <div className='flex flex-col md:flex-row items-center gap-4'>
          <Rotate>
            <h1 className='md:text-7xl text-4xl font-bold'>
              Boost your business with Facebook and Instagram
            </h1>
          </Rotate>
          <Rotate>
            <p className='text-lg font-medium'>
              Start driving leads and engaging customers today.
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
              <h1 className='text-4xl font-bold'>
                Facebook and Instagram Specialists
              </h1>
            </Rotate>
            <Rotate>
              <p className='text-lg font-medium'>
                Ayn Media specializes in Facebook and Instagram advertising,
                understanding that each platform has its unique approach to
                reaching a large audience quickly. We create tailored strategies
                to help you stand out from the competition and attract the right
                prospects.
              </p>
            </Rotate>
            <ul className='text-xl font-medium flex flex-col gap-4'>
              <Rotate>
                <li className='flex gap-4'>
                  <BsCheckCircle size={24} className='text-primary' /> 2.3
                  billion active users per month on Facebook
                </li>
              </Rotate>
              <Rotate>
                <li className='flex gap-4'>
                  <BsCheckCircle size={24} className='text-primary' /> 1 billion
                  active users per month on Instagram
                </li>
              </Rotate>
              <Rotate>
                <li className='flex gap-4'>
                  <BsCheckCircle size={24} className='text-primary' />
                  40% of Facebook users primarily watch videos
                </li>
              </Rotate>
              <Rotate>
                <li className='flex gap-4'>
                  <BsCheckCircle size={24} className='text-primary' /> 68% of
                  Instagram users visit the platform daily
                </li>
              </Rotate>
              <Rotate>
                <li className='flex gap-4'>
                  <BsCheckCircle size={24} className='text-primary' /> 74% of
                  marketers leverage Facebook for their social media strategy
                </li>
              </Rotate>
              <Rotate>
                <li className='flex gap-4'>
                  <BsCheckCircle size={24} className='text-primary' /> 65% of
                  marketers use Instagram for their social media strategy
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
        <div className='mt-12 text-center flex flex-col gap-4'>
          <Rotate>
            {' '}
            <h1 className='text-4xl font-bold'>Why Choose Ayn Media?</h1>
          </Rotate>
          <Rotate>
            <p className='text-lg font-medium'>
              From giving your brand a distinct voice to turning loyal followers
              into potential leads, we handle every aspect of social media
              marketing. Our team of experts is dedicated to promoting your
              brand and building a strong, trustworthy community with impactful
              calls-to-action.
            </p>
          </Rotate>
        </div>
        <div className='flex md:flex-row flex-col mt-12'>
          <div className='w-full md:w-1/2 flex flex-col gap-4 justify-center items-center'>
            <div className='flex gap-4 mb-2 p-8 hover:shadow-xl rounded-lg'>
              <span className='rounded-full bg-primary p-4 flex items-center justify-center w-24 h-24'>
                <IoMegaphoneOutline size={64} />
              </span>
              <div className='flex flex-col gap-2'>
                <h1 className='text-2xl font-bold'>
                  Lead Generation Specialists
                </h1>
                <p className='text-lg font-medium'>
                  We specialize in generating high-quality leads, and that’s why
                  our clients trust us.
                </p>
              </div>
            </div>
            <div className='flex gap-4 mb-2 p-8 hover:shadow-xl rounded-lg'>
              <span className='rounded-full bg-primary p-4 flex items-center justify-center w-24 h-24'>
                <FaUncharted size={64} />
              </span>
              <div className='flex flex-col gap-2'>
                <h1 className='text-2xl font-bold'>
                  Marketing + Sales Strategy
                </h1>
                <p className='text-lg font-medium'>
                  We offer a powerful combination—an integrated marketing
                  strategy crafted by experienced sales experts.
                </p>
              </div>
            </div>
            <div className='flex gap-4 mb-2 p-8 hover:shadow-xl rounded-lg'>
              <span className='rounded-full bg-primary p-4 flex items-center justify-center w-24 h-24'>
                <GiTakeMyMoney size={64} />{' '}
              </span>
              <div className='flex flex-col gap-2'>
                <h1 className='text-2xl font-bold'>ROI-Based Approach</h1>
                <p className='text-lg font-medium'>
                  We prioritize your budget and focus on maximizing your Return
                  on Investment, so you can rest assured your resources are
                  well-spent.
                </p>
              </div>
            </div>{' '}
            <div className='flex gap-4 mb-2 p-8 hover:shadow-xl rounded-lg'>
              <span className='rounded-full bg-primary p-4 flex items-center justify-center w-24 h-24'>
                <CiMemoPad size={64} />{' '}
              </span>
              <div className='flex flex-col gap-2'>
                <h1 className='text-2xl font-bold'>
                  What Clients Can Expect from Ayn Media
                </h1>
                <p className='text-lg font-medium'>
                  Ayn Media, one of the top digital marketing companies in
                  Chennai, offers result-driven Facebook and Instagram
                  advertising services. Here’s what our clients can expect from
                  us
                </p>
              </div>
            </div>
          </div>

          <div className='w-full md:w-1/2 flex flex-col gap-4'>
            <div className='flex gap-4 mb-2 p-8 hover:shadow-xl rounded-lg'>
              <span className='rounded-full bg-primary p-4 flex items-center justify-center w-24 h-24'>
                <FaRegIdBadge size={64} />
              </span>
              <div className='flex flex-col gap-2'>
                <h1 className='text-2xl font-bold'>
                  Profile and Page Management
                </h1>
                <p className='text-lg font-medium'>
                  We handle your company’s Facebook page and Instagram profile,
                  managing posts, likes, shares, and consistently delivering
                  fresh content.
                </p>
              </div>
            </div>
            <div className='flex gap-4 mb-2 p-8 hover:shadow-xl rounded-lg'>
              <span className='rounded-full bg-primary p-4 flex items-center justify-center w-24 h-24'>
                <PiStrategyDuotone size={64} />
              </span>
              <div className='flex flex-col gap-2'>
                <h1 className='text-2xl font-bold'>Brand Strategy</h1>
                <p className='text-lg font-medium'>
                  With extensive experience in brand building, we craft
                  effective strategies that reach the right audience at the
                  right time with the perfect content.
                </p>
              </div>
            </div>
            <div className='flex gap-4 mb-2 p-8 hover:shadow-xl rounded-lg'>
              <span className='rounded-full bg-primary p-4 flex items-center justify-center w-24 h-24'>
                <GiOnTarget size={64} />{' '}
              </span>
              <div className='flex flex-col gap-2'>
                <h1 className='text-2xl font-bold'>Lead Generation Strategy</h1>
                <p className='text-lg font-medium'>
                  We focus on results and growth. Our effective ad campaigns,
                  backed by an integrated sales and marketing strategy, generate
                  high-quality leads for your business.
                </p>
              </div>
            </div>
            <div className='flex gap-4 mb-2 p-8 hover:shadow-xl rounded-lg'>
              <span className='rounded-full bg-primary p-4 flex items-center justify-center w-24 h-24'>
                <BsGlobe size={64} />{' '}
              </span>
              <div className='flex flex-col gap-2'>
                <h1 className='text-2xl font-bold'>
                  Online Reputation Management
                </h1>
                <p className='text-lg font-medium'>
                  Ayn Media offers Online Reputation Management (ORM) services
                  for corporates and national brands, helping them effectively
                  respond to customer queries and maintain a positive online
                  presence.
                </p>
              </div>
            </div>
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
              We provide a dedicated account manager who will guide you through
              every step and keep you updated.
            </p>
          </Rotate> */}
          <div className='flex flex-col md:flex-row gap-4'>
            <div className='md:w-1/4 w-full flex flex-col gap-12'>
              <div className='border border-gray-400/50 rounded-lg p-4 shadow-lg hover:bg-secondary hover:text-white'>
                <h1 className='text-xl font-bold'>Analytics Report</h1>
                <p className='text-lg font-medium'>
                  Receive regular weekly and monthly analytics to stay informed
                  about your campaign’s performance.
                </p>
              </div>
              <div className='border border-gray-400/50 rounded-lg p-4 shadow-lg hover:bg-secondary hover:text-white'>
                <h1 className='text-xl font-bold'>Creatives</h1>
                <p className='text-lg font-medium'>
                  Our creative team combines innovative design with marketing
                  expertise to deliver high-quality, engaging content.
                </p>
              </div>

              <div className='border border-gray-400/50 rounded-lg p-4 shadow-lg hover:bg-secondary hover:text-white'>
                <h1 className='text-xl font-bold'>Market Study</h1>
                <p className='text-lg font-medium'>
                  Our valued clients gain a clear understanding of the digital
                  landscape and opportunities.
                </p>
              </div>
            </div>
            <div className='md:w-2/4 w-full'>
              <Image src={fbinsta} alt='social' width={1000} height={1000} />
            </div>
            <div className='md:w-1/4 w-full flex flex-col gap-12'>
              <div className='border border-gray-400/50 rounded-lg p-4 shadow-lg hover:bg-secondary hover:text-white'>
                <h1 className='text-xl font-bold'>
                  Social Media Optimization (SMO)
                </h1>
                <p className='text-lg font-medium'>
                  We create SMO strategies that boost brand awareness and foster
                  stronger connections with your customers.
                </p>
              </div>
              <div className='border border-gray-400/50 rounded-lg p-4 shadow-lg hover:bg-secondary hover:text-white'>
                <h1 className='text-xl font-bold'>Media Planning</h1>
                <p className='text-lg font-medium'>
                  We assist in media planning, ensuring cost-effective
                  strategies and seamless execution.
                </p>
              </div>
              <div className='border border-gray-400/50 rounded-lg p-4 shadow-lg hover:bg-secondary hover:text-white'>
                <h1 className='text-xl font-bold'>Dedicated Support Team</h1>
                <p className='text-lg font-medium'>
                  We provide a dedicated account manager who will guide you
                  through every step and keep you updated.
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
