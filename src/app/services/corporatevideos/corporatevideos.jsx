/** @format */
'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { BsCheckCircle } from 'react-icons/bs';
import { TiSortAlphabetically } from 'react-icons/ti';
import { MdOutlineSupportAgent, MdRebaseEdit } from 'react-icons/md';
import { GiVideoCamera } from 'react-icons/gi';
import { PiSuitcaseSimpleDuotone } from 'react-icons/pi';
import { FaShopify } from 'react-icons/fa6';
import { FaYoutube } from 'react-icons/fa';
import Image from 'next/image';
import ev from '@/../../public/images/services/ev.png';
import social from '@/../../public/images/services/social.svg';
import video from '@/../../public/images/services/video.svg';
import heroImage from '@/../../public/images/services/header.jpg';

gsap.registerPlugin(ScrollTrigger);

const CorporateVideos = () => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    sectionRefs.current.forEach((section) => {
      gsap.fromTo(
        section.children,
        {
          opacity: 0,
          y: 50,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  return (
    <div className='pt-48 '>
      <div className='max-w-7xl md:mx-auto mx-4 '>
        <div
          ref={(el) => sectionRefs.current.push(el)}
          className='flex flex-col md:flex-row items-center gap-4 '>
          <div className='flex gap-4'>
            <h1 className='md:text-7xl text-4xl font-bold'>
              Video Editing Made Easy with Ayn Media
            </h1>
            <p className='text-md font-medium mt-4 max-w-4xl'>
              Our expert team of editors is here to handle all your video
              editing needs, making the process smooth and hassle-free.
            </p>
          </div>
        </div>

        <div className='bg-primary h-[400px] w-full overflow-hidden my-12'>
          <Image src={heroImage} alt='hero' objectFit='cover' />
        </div>

        <div
          ref={(el) => sectionRefs.current.push(el)}
          className='flex md:flex-row flex-col'>
          <div className='w-full md:w-1/2 flex flex-col gap-4'>
            <h1 className='text-4xl font-bold'>Video Editing with Ayn Media</h1>
            <p className='text-md font-medium'>
              Our video editing service is designed to simplify complex editing
              processes, helping clients effectively present their videos to
              their target audience. We blend simplicity and aesthetics to
              ensure clarity and impact.
            </p>
            <ul className='text-md font-medium flex flex-col gap-4'>
              {[
                'Expert Video Editors',
                'All-in-One Solution',
                'Advanced Editing Tools',
                'Excellent Customer Support',
              ].map((item, index) => (
                <li key={index} className='flex gap-4 items-center'>
                  <BsCheckCircle size={24} className='text-primary' />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className='w-full md:w-1/2 flex flex-col gap-4 justify-center items-center'>
            <Image src={ev} alt='social-media' width={500} height={500} />
          </div>
        </div>

        <div
          ref={(el) => sectionRefs.current.push(el)}
          className='flex md:flex-row flex-col mt-12'>
          <div className='w-full md:w-1/2 flex flex-col gap-4 justify-center items-center'>
            <Image src={social} alt='social' width={600} height={600} />
          </div>
          <div className='w-full md:w-1/2 flex flex-col gap-4'>
            <h1 className='text-4xl font-bold'>Why Choose Ayn Media?</h1>
            <p className='text-md font-medium'>
              At Ayn Media, we understand that quality matters. Whether it’s
              cutting and sequencing, color grading, or adding transitions, our
              experienced team handles it all. We ensure your videos are
              polished and delivered just as you envisioned.
            </p>
            {[
              {
                icon: <MdRebaseEdit size={64} />,
                title: 'Experts in Editing',
                description:
                  'We create carefully planned video content, tailored to your brand.',
              },
              {
                icon: <TiSortAlphabetically size={64} />,
                title: 'All-in-One Solution',
                description:
                  'Our professional team ensures your video stands out.',
              },
              {
                icon: <MdOutlineSupportAgent size={64} />,
                title: 'Customer Support',
                description:
                  'We keep you updated throughout the editing process.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className='flex gap-4 mb-2 p-8 hover:shadow-xl rounded-lg transition-all duration-300'>
                <span className='rounded-full bg-primary p-4 flex items-center justify-center w-24 h-24'>
                  {item.icon}
                </span>
                <div className='flex flex-col gap-2 justify-center'>
                  <h1 className='text-xl font-bold'>{item.title}</h1>
                  <p className='text-md font-medium'>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='bg-secondary py-24 w-full mt-12'>
        <div className='max-w-7xl md:mx-auto mx-4 flex flex-col items-center justify-center gap-6'>
          <h1 className='text-3xl font-bold text-white text-center'>
            4 Major Video Editing Services
          </h1>
          <p className='text-md font-medium text-white text-center'>
            At Ayn Media, we provide high-end editing solutions to meet all your
            needs. We believe in doing what’s best for your video content,
            ensuring high-quality outputs.
          </p>
        </div>
      </div>

      <div
        ref={(el) => sectionRefs.current.push(el)}
        className='max-w-7xl md:mx-auto mx-4 relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 my-12'>
        {[
          {
            icon: <GiVideoCamera size={64} />,
            name: 'Event Video Editing',
            description:
              'We specialize in editing event footage to produce the best visual storytelling.',
          },
          {
            icon: <PiSuitcaseSimpleDuotone size={64} />,
            name: 'Corporate Video Editing',
            description:
              'Our team takes a strategic approach to corporate videos for maximum clarity.',
          },
          {
            icon: <FaYoutube size={64} />,
            name: 'YouTube Video Optimization',
            description:
              'We optimize your YouTube content with the help of our content team and editors.',
          },
          {
            icon: <FaShopify size={64} />,
            name: 'eCommerce Product Videos',
            description:
              'We create impactful product videos that highlight your products and enhance brand credibility.',
          },
        ].map((platform, index) => (
          <div
            key={index}
            className='p-12 flex gap-6 justify-center bg-white rounded-lg border border-gray-400/50 hover:bg-secondary hover:text-white transition-all duration-300'>
            <span className='rounded-full bg-primary p-4 flex items-center justify-center w-24 h-24'>
              {platform.icon}
            </span>
            <div className='flex flex-col gap-4'>
              <h2 className='text-md font-bold'>{platform.name}</h2>
              <p className='text-md'>{platform.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div ref={(el) => sectionRefs.current.push(el)} className='py-12'>
        <div className='max-w-7xl md:mx-auto mx-4 flex flex-col items-center justify-center gap-6'>
          <h1 className='text-3xl font-bold'>Our Special Features</h1>
          {/* <p className='text-md font-medium text-center'>
            We offer a wide range of services to help you achieve your marketing
            goals. From social media marketing to content creation, we have the
            tools and expertise to help you succeed.
          </p> */}
          <div className='flex flex-col md:flex-row gap-4'>
            <div className='md:w-1/4 w-full flex flex-col gap-12'>
              {[
                {
                  title: 'Corporate Videos',
                  description:
                    'We help you communicate your corporate identity seamlessly.',
                },
                {
                  title: 'Event Videos',
                  description:
                    'We craft event videos that capture the essence and reach a wide audience.',
                },
                {
                  title: 'YouTube Videos',
                  description:
                    'We create high-quality YouTube videos that are cost-effective yet impactful.',
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className='border border-gray-400/50 rounded-lg p-4 shadow-none hover:bg-secondary hover:text-white transition-all duration-300'>
                  <h1 className='text-md font-bold'>{feature.title}</h1>
                  <p className='text-md font-medium'>{feature.description}</p>
                </div>
              ))}
            </div>
            <div className='md:w-2/4 w-full'>
              <Image src={video} alt='social' width={1000} height={1000} />
            </div>
            <div className='md:w-1/4 w-full flex flex-col gap-12'>
              {[
                {
                  title: 'Infographics Videos',
                  description:
                    'We combine striking visuals, engaging content, and customized graphics/statistics to present data clearly.',
                },
                {
                  title: 'eCommerce Product Images',
                  description:
                    'We enhance your product images to captivate potential buyers and boost conversions.',
                },
                {
                  title: 'Video Advertisements',
                  description:
                    'We produce compelling ad videos, meticulously edited to deliver maximum impact.',
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className='border border-gray-400/50 rounded-lg p-4 shadow-none hover:bg-secondary hover:text-white transition-all duration-300'>
                  <h1 className='text-md font-bold'>{feature.title}</h1>
                  <p className='text-md font-medium'>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporateVideos;
