/** @format */
'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { BsCheckCircle } from 'react-icons/bs';
import { FaUncharted } from 'react-icons/fa';
import { PiTreeStructure } from 'react-icons/pi';
import { MdOutlinePermDeviceInformation } from 'react-icons/md';
import Image from 'next/image';
import socialMedia from '@/../../public/images/services/socialmarketing.svg';
import social from '@/../../public/images/services/social.svg';
import youtube from '@/../../public/images/services/youtube.svg';
import heroImage from '@/../../public/images/services/header.jpg';
import { IoCameraOutline } from 'react-icons/io5';
import { RiLineChartLine } from 'react-icons/ri';
import { FaCameraRetro } from 'react-icons/fa';
import { LuMedal } from 'react-icons/lu';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const YoutubePage = () => {
  const heroTitleRef = useRef(null);
  const heroSubtitleRef = useRef(null);
  const heroStatsRef = useRef(null);
  const heroImageRef = useRef(null);
  const marketingSectionRef = useRef(null);
  const serviceSectionsRefs = useRef([]);
  const expertiseSectionRefs = useRef([]);
  const specialFeaturesSectionRefs = useRef([]);

  useEffect(() => {
    // Hero Section Animations
    gsap.fromTo(
      heroTitleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );

    gsap.fromTo(
      heroSubtitleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: 'power3.out' }
    );

    gsap.fromTo(
      heroStatsRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.6, ease: 'power3.out' }
    );

    // Hero Image Animation
    gsap.fromTo(
      heroImageRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.5, ease: 'power3.out' }
    );

    // Marketing Section Animations
    gsap.fromTo(
      marketingSectionRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: marketingSectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Service Sections Staggered Animation
    serviceSectionsRefs.current.forEach((ref, index) => {
      gsap.fromTo(
        ref,
        { opacity: 0, x: index % 2 === 0 ? -100 : 100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ref,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    // Expertise Section Staggered Animation
    expertiseSectionRefs.current.forEach((ref, index) => {
      gsap.fromTo(
        ref,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: ref,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    // Special Features Section Animation
    specialFeaturesSectionRefs.current.forEach((ref, index) => {
      gsap.fromTo(
        ref,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: ref,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  return (
    <div className='pt-48'>
      <div className='max-w-7xl md:mx-auto mx-4'>
        <div className='flex flex-col md:flex-row items-center gap-4'>
          <h1 ref={heroTitleRef} className='md:text-7xl text-4xl font-bold'>
            Grow Your Brand with YouTube
          </h1>
          <p ref={heroSubtitleRef} className='text-md font-medium'>
            The best YouTube marketing service is here at Ayn Media.
          </p>
        </div>

        <div
          ref={heroStatsRef}
          className='flex flex-col md:flex-row items-center gap-4 my-12'>
          <p className='text-xl font-medium'>
            YouTube is localized in 100 countries and available in 80 languages
          </p>
        </div>
        <div
          ref={heroImageRef}
          className='bg-primary h-[400px] w-full overflow-hidden my-12'>
          <Image src={heroImage} alt='hero' objectFit='cover' />
        </div>
        <div ref={marketingSectionRef} className='flex md:flex-row flex-col'>
          {/* Existing marketing section content remains the same */}
          <div className='w-full md:w-1/2 flex flex-col gap-4'>
            <h1 className='text-4xl font-bold'>YouTube Marketing</h1>

            <p className='text-md font-medium'>
              The key to YouTube advertising success lies in its simplicity.
              Content creators can easily share content with a vast audience,
              and users can consume it with just a click. YouTube advertising is
              a powerful tool for marketers to reach the right audience
              effectively.
            </p>
            <ul className='text-xl font-medium flex flex-col gap-4'>
              <li className='flex gap-4'>
                <BsCheckCircle size={24} className='text-primary' />
                2.3 billion active users on YouTube
              </li>
              <li className='flex gap-4'>
                <BsCheckCircle size={24} className='text-primary' /> The second
                most popular search engine after Google
              </li>

              <li className='flex gap-4'>
                <BsCheckCircle size={24} className='text-primary' /> 70% of
                YouTube views come from mobile devices
              </li>
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
          ref={(el) => {
            if (el) serviceSectionsRefs.current[0] = el;
          }}
          className='flex md:flex-row flex-col mt-12'>
          {/* Rest of the existing content remains the same */}
          <div className='w-full md:w-1/2 flex flex-col gap-4 justify-center items-center'>
            <Image src={social} alt='social' width={600} height={600} />
          </div>
          <div className='w-full md:w-1/2 flex flex-col gap-4'>
            {' '}
            <h1 className='text-4xl font-bold'>Why Choose Ayn Media?</h1>
            <p className='text-md font-medium'>
              Ayn Media, one of the top YouTube marketing and advertising
              agencies in Chennai, recommends YouTube for clients focused on
              brand awareness with a secondary goal of lead generation. We
              specialize in 360º services, from content creation to ad
              management.
            </p>
            {/* Existing service sections */}
            <div
              ref={(el) => {
                if (el) serviceSectionsRefs.current[1] = el;
              }}
              className='flex gap-4 mb-2 p-8 hover:shadow-xl rounded-lg'>
              <span className='rounded-full bg-primary p-4 flex items-center justify-center w-24 h-24'>
                <FaCameraRetro size={64} />
              </span>
              <div className='flex flex-col gap-2'>
                <h1 className='text-2xl font-bold'>Content Creators</h1>
                <p className='text-md font-medium'>
                  Our content experts craft content that speaks, sells, and
                  resonates with your audience.
                </p>
              </div>
            </div>
            {/* Remaining sections follow the same pattern */}
          </div>
        </div>
      </div>

      {/* Expertise Section */}
      <div className='bg-secondary py-24 w-full'>
        <div className='max-w-7xl md:mx-auto mx-4 flex flex-col items-center justify-center gap-6'>
          <h1 className='text-3xl font-bold text-white'>Our Expertise</h1>
        </div>
      </div>

      <div className='max-w-7xl md:mx-auto mx-4 relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 my-12'>
        {[
          {
            icon: <IoCameraOutline size={64} />,
            title: 'Content Creators',
            description:
              'Our team of experts supports you in every aspect of content creation, video production, editing, and delivery.',
          },
          {
            icon: <PiTreeStructure size={64} />,
            title: 'Content Strategy',
            description:
              'The success of content marketing is 50% content and 50% strategy. We offer proven content strategies that yield significant results.',
          },
          {
            icon: <RiLineChartLine size={64} />,
            title: 'Marketing Strategy',
            description:
              'With 5+ years of experience in digital marketing and sales, our team helps attract new subscribers and increase reach.',
          },
          {
            icon: <MdOutlinePermDeviceInformation size={64} />,
            title: 'Video SEO',
            description:
              "If your YouTube videos aren't reaching the right audience, Video SEO is the solution. SEO-optimized videos can increase views by 15% to 40%.",
          },
        ].map((section, index) => (
          <div
            key={section.title}
            ref={(el) => {
              if (el) expertiseSectionRefs.current[index] = el;
            }}
            className='p-12 flex gap-6 justify-center bg-white rounded-lg shadow-lg hover:bg-secondary hover:text-white'>
            <span className='rounded-full bg-primary p-4 flex items-center justify-center w-24 h-24'>
              {section.icon}
            </span>
            <div className='flex flex-col gap-4'>
              <h2 className='text-xl font-bold'>{section.title}</h2>
              <p className='text-md'>{section.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Special Features Section */}
      <div className='py-12'>
        <div className='max-w-7xl md:mx-auto mx-4 flex flex-col items-center justify-center gap-6'>
          <h1 className='text-3xl font-bold'>Our Special Features</h1>
          <p className='text-xl font-medium'>
            We offer a wide range of services to help you achieve your marketing
            goals. From social media marketing to content creation, we have the
            tools and expertise to help you succeed.
          </p>
          <div className='flex flex-col md:flex-row gap-4'>
            <div className='md:w-1/4 w-full flex flex-col gap-12'>
              {[
                {
                  title: 'Experienced Team',
                  description:
                    'Our team brings over 5 years of experience in the digital industry.',
                },
                {
                  title: 'Ethical SEO Process',
                  description:
                    'Ayn Media follows white-hat methods to deliver long-term, sustainable results.',
                },
                {
                  title: 'Dedicated Manager',
                  description:
                    'We provide a dedicated manager to guide you and keep you updated on progress.',
                },
              ].map((feature, index) => (
                <div
                  key={feature.title}
                  ref={(el) => {
                    if (el) specialFeaturesSectionRefs.current[index] = el;
                  }}
                  className='border border-gray-400/50 rounded-lg p-4 shadow-lg hover:bg-secondary hover:text-white'>
                  <h1 className='text-xl font-bold'>{feature.title}</h1>
                  <p className='text-md font-medium'>{feature.description}</p>
                </div>
              ))}
            </div>
            <div className='md:w-2/4 w-full'>
              <Image src={youtube} alt='social' width={1000} height={1000} />
            </div>
            <div className='md:w-1/4 w-full flex flex-col gap-12'>
              {[
                {
                  title: 'Periodic Review',
                  description:
                    'Our strategic plans, regular reviews, and transparent reports set us apart from others.',
                },
                {
                  title: 'Content Research',
                  description:
                    "We invest time and effort into content research, transforming your brand's reach and impact.",
                },
                {
                  title: 'Content Marketing',
                  description:
                    'Our content team, with proven industry expertise, can amplify your videos and boost engagement.',
                },
              ].map((feature, index) => (
                <div
                  key={feature.title}
                  ref={(el) => {
                    if (el) specialFeaturesSectionRefs.current[index + 3] = el;
                  }}
                  className='border border-gray-400/50 rounded-lg p-4 shadow-lg hover:bg-secondary hover:text-white'>
                  <h1 className='text-xl font-bold'>{feature.title}</h1>
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

export default YoutubePage;
