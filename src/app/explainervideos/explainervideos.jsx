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

const ExplainerVideos = () => {
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
              Clarify your brand's purpose, message, and journey
            </h1>
            <p className='text-md font-medium mt-4 max-w-4xl'>
              We simplify the complex, making it easy to understand.
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
            <h1 className='text-4xl font-bold'>
              Explainer Videos - Simplifying the Complex
            </h1>
            <p className='text-md font-medium'>
              Explainer videos are concise, engaging visuals that break down
              complex topics into easy-to-understand concepts. These videos
              communicate the essence of your brand, making it accessible and
              clear for your target audience. With the right balance of
              simplicity and creativity, explainer videos provide clarity while
              capturing attention.
            </p>
            <ul className='text-md font-medium flex flex-col gap-4'>
              {[
                'Spark interest',
                'Increase engagement on landing pages',
                'Versatile for multiple platforms',
                'Capture attention in a short span',
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
              At Ayn Media, we know that clarity is key. Whether explaining
              intricate data, high-tech products, or everyday services, we make
              it easy for your audience to understand. Our creative team brings
              innovative ideas to life, producing videos that are both
              professional and engaging.
            </p>
            {[
              {
                icon: <MdRebaseEdit size={64} />,
                title: 'Strategy Experts',
                description:
                  'We craft well-thought-out strategies that align with your brand’s message.',
              },
              {
                icon: <TiSortAlphabetically size={64} />,
                title: 'Unique Designs',
                description:
                  'Our customized designs ensure your brand stands out.',
              },
              {
                icon: <MdOutlineSupportAgent size={64} />,
                title: 'Content Strategy',
                description:
                  'We enhance your video content, ensuring it delivers a powerful message.',
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
            4 Major Services of Explainer Videos
          </h1>
          <p className='text-md font-medium text-white text-center'>
            At Ayn Media, we specialize in creating explainer videos that cater
            to your brand's specific needs. Our experienced team ensures your
            brand message is communicated effectively through unique,
            high-quality videos.
          </p>
        </div>
      </div>

      <div
        ref={(el) => sectionRefs.current.push(el)}
        className='max-w-7xl md:mx-auto mx-4 relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 my-12'>
        {[
          {
            icon: <GiVideoCamera size={64} />,
            name: 'Animated Explainer Videos',
            description:
              'Use animation to bring products, services, and concepts to life in an engaging way.',
          },
          {
            icon: <PiSuitcaseSimpleDuotone size={64} />,
            name: 'Product Explainer Videos',
            description:
              'Showcase your products clearly, generate more leads, and boost sales.',
          },
          {
            icon: <FaYoutube size={64} />,
            name: 'Whiteboard Explainer Videos',
            description:
              'Use whiteboard animation to communicate your message with eye-catching visuals.',
          },
          {
            icon: <FaShopify size={64} />,
            name: 'Corporate Videos',
            description:
              'Highlight your company’s vision, culture, services, and client portfolio through professional corporate videos.',
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
                    'We help you effectively communicate your corporate identity with ease and precision.',
                },
                {
                  title: 'Stop Motion Videos',
                  description:
                    'We bring your brand to life by seamlessly merging frames to create engaging motion, helping your brand reach new heights.',
                },
                {
                  title: 'Motion Graphics Videos',
                  description:
                    'We craft motion graphic videos that are not only visually appealing but also cost-effective, giving your brand a professional look.',
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
                    'We combine visually stunning graphics with engaging content and data to provide your audience with an insightful, easy-to-understand visual representation.',
                },
                {
                  title: 'Whiteboard Videos',
                  description:
                    'We simplify complex information with creative whiteboard animations, capturing your audience’s attention and conveying your message effectively',
                },
                {
                  title: 'Live Shoot Videos',
                  description:
                    'We create high-quality live shoot videos, shot with precision and edited flawlessly to captivate your viewers.',
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

export default ExplainerVideos;
