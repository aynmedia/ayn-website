/** @format */
'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
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

gsap.registerPlugin(ScrollTrigger);

const SocialMediaPage = () => {
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
              Give your brand a powerful voice
            </h1>
            <p className='text-md font-medium mt-4 max-w-4xl'>
              Ayn Media – Delivering top-notch social media marketing to elevate
              your brand’s impact.
            </p>
          </div>
        </div>

        <div
          ref={(el) => sectionRefs.current.push(el)}
          className='flex flex-col md:flex-row items-center gap-4 my-12'>
          <p className='text-md font-medium'>
            Over 3.5 billion people worldwide actively use social
            media—that&apos;s an immense pool of potential clients waiting to be
            reached. In today’s digital age, establishing a robust online
            presence is essential.
          </p>
        </div>

        <div className='bg-primary h-[400px] w-full overflow-hidden my-12'>
          <Image src={heroImage} alt='hero' objectFit='cover' />
        </div>

        <div
          ref={(el) => sectionRefs.current.push(el)}
          className='flex md:flex-row flex-col'>
          <div className='w-full md:w-1/2 flex flex-col gap-4'>
            <h1 className='text-4xl font-bold'>Social Media Marketing</h1>
            <p className='text-md font-medium'>
              Over 3.5 billion people worldwide actively use social
              media—that&apos;s an immense pool of potential clients waiting to
              be reached. In today’s digital age, establishing a robust online
              presence is essential.
            </p>
            <ul className='text-md font-medium flex flex-col gap-4'>
              {[
                'Drives more traffic to your website or page',
                'Enhances brand awareness',
                'Builds customer trust',
                'Connects your brand with both loyal and new customers',
                'Demonstrates authenticity and authority',
              ].map((item, index) => (
                <li key={index} className='flex gap-4 items-center'>
                  <BsCheckCircle size={24} className='text-primary' />
                  {item}
                </li>
              ))}
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

        <div
          ref={(el) => sectionRefs.current.push(el)}
          className='flex md:flex-row flex-col mt-12'>
          <div className='w-full md:w-1/2 flex flex-col gap-4 justify-center items-center'>
            <Image src={social} alt='social' width={600} height={600} />
          </div>
          <div className='w-full md:w-1/2 flex flex-col gap-4'>
            <h1 className='text-4xl font-bold'>Why Choose Ayn Media?</h1>
            <p className='text-md font-medium'>
              From amplifying your brand’s voice to transforming loyal followers
              into valuable leads, we handle every facet of social media
              marketing. Our team of experts is dedicated to promoting your
              brand and fostering a trusted, thriving community with strategic
              calls-to-action.
            </p>
            {[
              {
                icon: <IoMegaphoneOutline size={64} />,
                title: 'Brand Voice',
                description:
                  'We give your brand a distinct voice on social media that speaks, attracts, and connects with your audience.',
              },
              {
                icon: <FaUncharted size={64} />,
                title: 'Strategic Expertise',
                description:
                  'Our team crafts a reliable, engaging strategy that strengthens brand communication through captivating content.',
              },
              {
                icon: <BsGlobe size={64} />,
                title: 'From Followers to Leads',
                description:
                  'We convert your loyal followers into prospective leads with compelling, action-oriented strategies.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className='flex gap-4 mb-2 p-8 hover:shadow-xl rounded-lg transition-all duration-300'>
                <span className='rounded-full bg-primary p-4 flex items-center justify-center w-24 h-24'>
                  {item.icon}
                </span>
                <div className='flex flex-col gap-2'>
                  <h1 className='text-2xl font-bold'>{item.title}</h1>
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
            4 Major Platforms of Social Media Marketing
          </h1>
          <p className='text-md font-medium text-white text-center'>
            India’s social media user base is expanding every second—along with
            your potential leads. Our team of social media experts crafts
            tailored marketing campaigns designed to maximize your brand’s
            impact across each platform.
          </p>
        </div>
      </div>

      <div
        ref={(el) => sectionRefs.current.push(el)}
        className='max-w-7xl md:mx-auto mx-4 relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 my-12'>
        {[
          {
            icon: <CiFacebook size={64} />,
            name: 'FACEBOOK',
            description:
              'With over 2.23 billion monthly active users, this platform is perfect for reaching diverse age groups worldwide.',
          },
          {
            icon: <CiInstagram size={64} />,
            name: 'INSTAGRAM',
            description:
              'With over 1 billion monthly users, this platform is ideal for connecting with today’s trends and engaging the youth.',
          },
          {
            icon: <CiLinkedin size={64} />,
            name: 'LINKEDIN',
            description:
              'With over 294 million monthly active users, this platform is the go-to choice for B2B marketing.',
          },
          {
            icon: <CiYoutube size={64} />,
            name: 'YOUTUBE',
            description:
              'With over 1.9 billion monthly users, YouTube stands as one of the most widely viewed and utilized marketing platforms worldwide.',
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
          <p className='text-md font-medium text-center'>
            We offer a wide range of services to help you achieve your marketing
            goals. From social media marketing to content creation, we have the
            tools and expertise to help you succeed.
          </p>
          <div className='flex flex-col md:flex-row gap-4'>
            <div className='md:w-1/4 w-full flex flex-col gap-12'>
              {[
                {
                  title: 'Facebook Marketing',
                  description:
                    'From pages to advertisements, we integrate every aspect of Facebook into our campaigns to drive impactful results.',
                },
                {
                  title: 'Instagram Marketing',
                  description:
                    'We cover it all—feeds, reels, IGTV, stories, and more—to ensure your brand shines on Instagram.',
                },
                {
                  title: 'LinkedIn Marketing',
                  description:
                    'From content sharing and networking to advertising, we handle every aspect of LinkedIn marketing.',
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
              <Image src={feature} alt='social' width={1000} height={1000} />
            </div>
            <div className='md:w-1/4 w-full flex flex-col gap-12'>
              {[
                {
                  title: 'YouTube Marketing',
                  description:
                    'We craft engaging, viral video content that resonates with your audience.',
                },
                {
                  title: 'Social Media Optimization (SMO)',
                  description:
                    'We create SMO strategies to boost brand awareness and strengthen connections with customers.',
                },
                {
                  title: 'Online Reputation Management',
                  description:
                    'We help monitor and enhance your brand’s online presence to drive better results.',
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

export default SocialMediaPage;
