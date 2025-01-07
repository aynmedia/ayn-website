/** @format */
'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
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

gsap.registerPlugin(ScrollTrigger);

const ServicesPage = () => {
  const sectionRefs = useRef([]);
  const contentRefs = useRef([]);

  useEffect(() => {
    // Animate sections on scroll
    sectionRefs.current.forEach((section, index) => {
      gsap.fromTo(
        section,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
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

    // Animate content elements
    contentRefs.current.forEach((content, index) => {
      gsap.fromTo(
        content,
        {
          opacity: 0,
          x: index % 2 === 0 ? -50 : 50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: content,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    // Hero title animation
    const heroTitle = document.querySelector('h1');
    if (heroTitle) {
      gsap.fromTo(
        heroTitle,
        {
          opacity: 0,
          scale: 0.8,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'back.out(1.7)',
        }
      );
    }

    // Content marketing type cards animation
    const contentTypeCards = document.querySelectorAll('.content-type-card');
    gsap.fromTo(
      contentTypeCards,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: contentTypeCards[0],
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <div className='pt-48'>
      <div
        className='max-w-7xl md:mx-auto mx-4'
        ref={(el) => sectionRefs.current.push(el)}>
        <div className='flex flex-col md:flex-row items-center gap-4'>
          <div ref={(el) => contentRefs.current.push(el)}>
            <h1 className='md:text-7xl text-4xl font-bold'>
              Let Us Tell Your Brand Story
            </h1>
          </div>
          <div ref={(el) => contentRefs.current.push(el)}>
            <p className='text-md font-medium'>
              The best content marketing service at Ayn Media.
            </p>
          </div>
        </div>

        <div
          className='flex flex-col md:flex-row items-center gap-4 my-12'
          ref={(el) => sectionRefs.current.push(el)}>
          <div ref={(el) => contentRefs.current.push(el)}>
            <p className='text-md font-medium'>
              Over 3.5 billion people worldwide actively use social
              media—that&apos;s an immense pool of potential clients waiting to
              be reached. In today's digital age, establishing a robust online
              presence is essential.
            </p>
          </div>
        </div>
        <div
          className='bg-primary h-[400px] w-full overflow-hidden my-12'
          ref={(el) => sectionRefs.current.push(el)}>
          <Image src={heroImage} alt='hero' objectFit='cover' />
        </div>
        <div
          className='flex md:flex-row flex-col'
          ref={(el) => sectionRefs.current.push(el)}>
          <div
            className='w-full md:w-1/2 flex flex-col gap-4'
            ref={(el) => contentRefs.current.push(el)}>
            <h1 className='text-4xl font-bold'>Content Marketing</h1>
            <p className='text-md font-medium'>
              Did you know that over 50% of businesses don't have a documented
              content marketing strategy? Content marketing is about creating
              and delivering strategic content that motivates users to take
              action, communicate an idea, or establish thought leadership.
            </p>
            <ul className='text-md font-medium flex flex-col gap-4'>
              {[
                'Website traffic can increase by 7X through content marketing',
                'Custom content fosters a stronger bond with customers',
                'Content marketing costs 62% less than traditional marketing',
                '50% of successful organizations use content marketing strategies',
              ].map((item, index) => (
                <li key={index} className='flex gap-4'>
                  <BsCheckCircle size={24} className='text-primary' /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div
            className='w-full md:w-1/2 flex flex-col gap-4 justify-center items-center'
            ref={(el) => contentRefs.current.push(el)}>
            <Image
              src={socialMedia}
              alt='social-media'
              width={500}
              height={500}
            />
          </div>
        </div>

        {/* Rest of the content remains the same, just add refs */}
        <div
          className='flex md:flex-row flex-col mt-12'
          ref={(el) => sectionRefs.current.push(el)}>
          <div
            className='w-full md:w-1/2 flex flex-col gap-4 justify-center items-center'
            ref={(el) => contentRefs.current.push(el)}>
            <Image src={social} alt='social' width={600} height={600} />
          </div>
          <div
            className='w-full md:w-1/2 flex flex-col gap-4'
            ref={(el) => contentRefs.current.push(el)}>
            <h1 className='text-4xl font-bold'>Why Choose Ayn Media?</h1>
            <p className='text-md font-medium'>
              Ayn Media, one of the leading content marketing agencies in
              Chennai, recommends content marketing for companies,
              entrepreneurs, and startups looking to build consistent and deeper
              brand reach in a short time. Content marketing is all about
              engaging people's interests.
            </p>
            {/* Rest of the content cards */}
            {[
              {
                icon: <IoMegaphoneOutline size={64} />,
                title: 'Content Creators',
                description:
                  'Our content experts craft content that speaks, sells, and resonates with your audience.',
              },
              {
                icon: <FaUncharted size={64} />,
                title: 'Content Strategy',
                description:
                  'We develop content strategies that reduce competition and drive better results.',
              },
              {
                icon: <BsGlobe size={64} />,
                title: 'Marketing Strength',
                description:
                  'Our content marketing experts implement these strategies, adding significant value to your brands growth.',
              },
            ].map((card, index) => (
              <div
                key={index}
                className='flex gap-4 mb-2 p-8 hover:shadow-xl rounded-lg'
                ref={(el) => contentRefs.current.push(el)}>
                <span className='rounded-full bg-primary p-4 flex items-center justify-center w-24 h-24'>
                  {card.icon}
                </span>
                <div className='flex flex-col gap-2'>
                  <h1 className='text-2xl font-bold'>{card.title}</h1>
                  <p className='text-md font-medium'>{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Content Types Section */}
        <div className='max-w-7xl md:mx-auto mx-4 relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 my-12'>
          {[
            {
              icon: <FaBlog size={64} />,
              title: 'Blogging',
              description:
                'Our team of expert writers helps with blog topic research, writing, and effective keyword implementation to drive traffic.',
            },
            {
              icon: <CiYoutube size={64} />,
              title: 'Video Creation',
              description:
                'Content marketing success is 50% content and 50% strategy. Ayn Media offers proven video production strategies that deliver broad, impactful results.',
            },
            {
              icon: <MdOutlineAlternateEmail size={64} />,
              title: 'Email Content',
              description:
                'With over 5 years of experience in digital marketing and sales, our team helps you attract new subscribers and expand your reach with engaging email content.',
            },
            {
              icon: <MdOutlinePermDeviceInformation size={64} />,
              title: 'Infographics',
              description:
                'Wondering why your content isnt reaching your audience effectively? Infographics are one of the most powerful ways to deliver content and engage your audience.',
            },
          ].map((type, index) => (
            <div
              key={index}
              className='p-12 flex gap-6 justify-center bg-white rounded-lg shadow-lg hover:bg-secondary hover:text-white content-type-card'>
              <span className='rounded-full bg-primary p-4 flex items-center justify-center w-24 h-24'>
                {type.icon}
              </span>
              <div className='flex flex-col gap-4'>
                <h2 className='text-xl font-bold'>{type.title}</h2>
                <p className='text-md'>{type.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Special Features Section */}
        <div className='py-12' ref={(el) => sectionRefs.current.push(el)}>
          <div className='max-w-7xl md:mx-auto mx-4 flex flex-col items-center justify-center gap-6'>
            <h1 className='text-3xl font-bold'>Our Special Features</h1>
            <p className='text-xl font-medium text-center'>
              We offer a wide range of services to help you achieve your
              marketing goals. From social media marketing to content creation,
              we have the tools and expertise to help you succeed.
            </p>
            <div className='flex flex-col md:flex-row gap-4'>
              {/* Feature columns remain the same */}
              <div className='md:w-1/4 w-full flex flex-col gap-12'>
                {[
                  {
                    title: 'Experienced Team',
                    description:
                      'Our team brings over 5 years of experience in the digital industry.',
                  },
                  {
                    title: 'Wide Range',
                    description:
                      'Ayn Media offers a comprehensive range of content marketing services.',
                  },
                  {
                    title: 'Dedicated Manager',
                    description:
                      'We provide a dedicated manager to guide you and keep you updated.',
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className='border border-gray-400/50 rounded-lg p-4 shadow-lg hover:bg-secondary hover:text-white'
                    ref={(el) => contentRefs.current.push(el)}>
                    <h1 className='text-xl font-bold'>{feature.title}</h1>
                    <p className='text-md font-medium'>{feature.description}</p>
                  </div>
                ))}
              </div>
              <div
                className='md:w-2/4 w-full'
                ref={(el) => contentRefs.current.push(el)}>
                <Image src={content} alt='social' width={1000} height={1000} />
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
                      'We invest time and effort into content research, transforming your brands reach.',
                  },
                  {
                    title: 'Content Production',
                    description:
                      'Our content team, equipped with proven industry knowledge, creates high-quality, impactful content.',
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className='border border-gray-400/50 rounded-lg p-4 shadow-lg hover:bg-secondary hover:text-white'
                    ref={(el) => contentRefs.current.push(el)}>
                    <h1 className='text-xl font-bold'>{feature.title}</h1>
                    <p className='text-md font-medium'>{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
