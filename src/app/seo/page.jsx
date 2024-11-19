/** @format */

import React from 'react';
import { BsCheckCircle } from 'react-icons/bs';
import { RiTeamLine } from 'react-icons/ri';
import { SlBadge } from 'react-icons/sl';
import { GrUserExpert } from 'react-icons/gr';
import { RiSeoLine } from 'react-icons/ri';
import { BiStoreAlt } from 'react-icons/bi';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';
import { CiYoutube } from 'react-icons/ci';
import Image from 'next/image';
import seo from '@/../../public/images/services/seo.jpg';
import social from '@/../../public/images/services/social.svg';
import seofeature from '@/../../public/images/services/seofeature.svg';
import heroImage from '@/../../public/images/services/header.jpg';
import Rotate from '../components/animations/rotateAnimation';
const page = () => {
  return (
    <div className='pb-48'>
      <div className='max-w-7xl md:mx-auto mx-4 my-12 '>
        <div className='flex flex-col md:flex-row items-center gap-4'>
          <Rotate>
            <h1 className='md:text-7xl text-4xl font-bold'>
              Drive More Traffic to Your Website
            </h1>
          </Rotate>
          <Rotate>
            <p className='text-lg font-medium'>
              The best SEO and Search Engine Marketing company that delivers
              results.
            </p>
          </Rotate>
        </div>

        <div className='flex flex-col md:flex-row items-center gap-4 my-12'>
          <Rotate>
            <p className='text-xl font-medium'>
              Consumers spend an average of 13 minutes reading Local SEO reviews
              before making a decision
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
                Search Engine Optimization (SEO) and Local SEO
              </h1>
            </Rotate>
            <Rotate>
              <p className='text-lg font-medium'>
                Google’s organic rankings are directly tied to your SEO, which
                drives the number of organic leads you generate. 60% of
                marketers report that leads from SEO have a high-quality
                conversion rate. We achieve this through a streamlined process.
              </p>
            </Rotate>
            <ul className='text-xl font-medium flex flex-col gap-4'>
              <Rotate>
                <li className='flex gap-4'>
                  <BsCheckCircle size={24} className='text-primary' />
                  SEO leads have a 14% higher close rate
                </li>
              </Rotate>
              <Rotate>
                <li className='flex gap-4'>
                  <BsCheckCircle size={24} className='text-primary' />
                  39% of buyers are influenced by relevant search results
                </li>
              </Rotate>
              <Rotate>
                <li className='flex gap-4'>
                  <BsCheckCircle size={24} className='text-primary' />
                  Nearly 1 in 3 searches are location-based (Local SEO)
                </li>
              </Rotate>
            </ul>
          </div>
          <div className='w-full md:w-1/2 flex flex-col gap-4 justify-center items-center'>
            <Image src={seo} alt='social-media' width={500} height={500} />
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
                If you&apos;re searching for the best SEO company in Chennai,
                Ayn Media is your ideal partner. We’ve helped clients achieve a
                45% increase in organic results through effective SEO
                strategies. From website optimization to off-page optimization,
                we’re committed to delivering superior results.
              </p>
            </Rotate>
            <div className='flex gap-4 mb-2 p-8 hover:shadow-xl rounded-lg'>
              <span className='rounded-full bg-primary p-4 flex items-center justify-center w-24 h-24'>
                <RiTeamLine size={64} />
              </span>
              <div className='flex flex-col gap-2'>
                <h1 className='text-2xl font-bold'>Experienced Team</h1>
                <p className='text-lg font-medium'>
                  Our proven keyword strategies minimize the need for extensive
                  A/B testing in the SEO process.
                </p>
              </div>
            </div>
            <div className='flex gap-4 mb-2 p-8 hover:shadow-xl rounded-lg'>
              <span className='rounded-full bg-primary p-4 flex items-center justify-center w-24 h-24'>
                <GrUserExpert size={64} />
              </span>
              <div className='flex flex-col gap-2'>
                <h1 className='text-2xl font-bold'>
                  Expert in Keyword Research
                </h1>
                <p className='text-lg font-medium'>
                  We focus on strategic keyword research to reduce competition
                  and drive better results.
                </p>
              </div>
            </div>
            <div className='flex gap-4 mb-2 p-8 hover:shadow-xl rounded-lg'>
              <span className='rounded-full bg-primary p-4 flex items-center justify-center w-24 h-24'>
                <SlBadge size={64} />{' '}
              </span>
              <div className='flex flex-col gap-2'>
                <h1 className='text-2xl font-bold'>Proven Track Record</h1>
                <p className='text-lg font-medium'>
                  On average, we’ve increased our clients&apos; traffic by 14%
                  to 45% through targeted SEO strategies.
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
            <RiSeoLine size={64} />
          </span>
          <div className='flex flex-col gap-4'>
            <h2 className='text-xl font-bold'>Local SEO</h2>
            <p className='text-lg'>
              If your business isn&apos;t visible in local searches, you&apos;re
              missing out on ready-to-purchase customers. 30% of customers are
              more likely to buy from a business that’s easily accessible
              through search.
            </p>
          </div>
        </div>
        <div className='p-12 flex gap-6 justify-center bg-white rounded-lg shadow-lg hover:bg-secondary hover:text-white'>
          {' '}
          <span className='rounded-full bg-primary p-4 flex items-center justify-center w-24 h-24'>
            <BiStoreAlt size={64} />
          </span>
          <div className='flex flex-col gap-4'>
            <h2 className='text-xl font-bold'>E Commerce SEO</h2>
            <p className='text-lg'>
              ECommerce owners looking to boost organic sales can benefit from
              our tailored services. We optimize your product searches and
              search behavior to position your website at the top.
            </p>
          </div>
        </div>
        <div className='p-12 flex gap-6 justify-center bg-white rounded-lg shadow-lg hover:bg-secondary hover:text-white'>
          <span className='rounded-full bg-primary p-4 flex items-center justify-center w-24 h-24'>
            <HiOutlineOfficeBuilding size={64} />
          </span>
          <div className='flex flex-col gap-4'>
            <h2 className='text-xl font-bold'>Corporate SEO</h2>
            <p className='text-lg'>
              For brands with 100+ pages, it&apos;s crucial to have a team of
              experts who can strategically implement SEO to harness organic
              traffic. Ayn Media has the expertise to get the job done.
            </p>
          </div>
        </div>
        <div className='p-12 flex gap-6 justify-center bg-white rounded-lg shadow-lg hover:bg-secondary hover:text-white'>
          {' '}
          <span className='rounded-full bg-primary p-4 flex items-center justify-center w-24 h-24'>
            <CiYoutube size={64} />
          </span>
          <div className='flex flex-col gap-4'>
            <h2 className='text-xl font-bold'>Video SEO</h2>
            <p className='text-lg'>
              Wondering why your YouTube videos aren’t performing as well as
              your competitors? Video SEO plays a significant role. Optimized
              videos can increase views by 15% to 40%.
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
                  industry, delivering expert strategies.
                </p>
              </div>
              <div className='border border-gray-400/50 rounded-lg p-4 shadow-lg hover:bg-secondary hover:text-white'>
                <h1 className='text-xl font-bold'>Ethical SEO Process</h1>
                <p className='text-lg font-medium'>
                  Ayn Media follows white-hat techniques to ensure long-term,
                  sustainable SEO results.
                </p>
              </div>

              <div className='border border-gray-400/50 rounded-lg p-4 shadow-lg hover:bg-secondary hover:text-white'>
                <h1 className='text-xl font-bold'>Dedicated Manager</h1>
                <p className='text-lg font-medium'>
                  We provide a dedicated manager to guide and keep you updated
                  throughout your SEO journey.
                </p>
              </div>
            </div>
            <div className='md:w-2/4 w-full'>
              <Image src={seofeature} alt='social' width={1000} height={1000} />
            </div>
            <div className='md:w-1/4 w-full flex flex-col gap-12'>
              <div className='border border-gray-400/50 rounded-lg p-4 shadow-lg hover:bg-secondary hover:text-white'>
                <h1 className='text-xl font-bold'>Periodic Review</h1>
                <p className='text-lg font-medium'>
                  Our strategic plans and regular reviews, accompanied by
                  transparent reports, set us apart from others.
                </p>
              </div>
              <div className='border border-gray-400/50 rounded-lg p-4 shadow-lg hover:bg-secondary hover:text-white'>
                <h1 className='text-xl font-bold'>Keyword Research</h1>
                <p className='text-lg font-medium'>
                  Investing time and effort in thorough SEO keyword research
                  significantly improves your rankings in a short time.
                </p>
              </div>
              <div className='border border-gray-400/50 rounded-lg p-4 shadow-lg hover:bg-secondary hover:text-white'>
                <h1 className='text-xl font-bold'>Content Marketing</h1>
                <p className='text-lg font-medium'>
                  Our content team, backed by industry expertise, enhances your
                  SEO results with high-quality, targeted content.
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
