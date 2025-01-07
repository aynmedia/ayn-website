/** @format */

'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import LogoSlider from '../../components/logoslider';
import howwe from '@/../../public/images/about/howwe.jpg';
import planb from '@/../../public/images/about/planb.jpg';
gsap.registerPlugin(ScrollTrigger);

const WhatWeDoPage = () => {
  const headerRef = useRef(null);
  const reachSectionRef = useRef(null);
  const visionSectionRef = useRef(null);
  const statsSectionRef = useRef(null);
  const approachSectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.fromTo(
        headerRef.current.children,
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
          stagger: 0.3,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Reach Section Animation
      gsap.fromTo(
        [
          reachSectionRef.current.children[0],
          reachSectionRef.current.children[1],
          reachSectionRef.current.children[2],
        ],
        {
          opacity: 0,
          x: -50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: reachSectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Vision Section Animation
      gsap.fromTo(
        visionSectionRef.current.children,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: visionSectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Stats Section Animation
      const statsItems = statsSectionRef.current.children;
      gsap.fromTo(
        statsItems,
        {
          opacity: 0,
          scale: 0.8,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: statsSectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Approach Section Animation
      gsap.fromTo(
        approachSectionRef.current.querySelectorAll('.approach-item'),
        {
          opacity: 0,
          x: -50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: approachSectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => ctx.revert(); // Clean up animations
  }, []);

  return (
    <div className='pt-48'>
      <div className='max-w-7xl md:mx-auto mx-4'>
        {/* Header Section */}
        <div ref={headerRef} className='flex items-center gap-4'>
          <h1 className='md:text-7xl text-4xl font-bold w-full'>What We Do</h1>
          <p className='text-lg font-medium text-center max-w-4xl'>
            At AynMedia, we work hand in hand to create extraordinary results.
            With a blend of dedicated teamwork and seamless synergy, we
            cultivate relationships that buzz with success. Our process is a
            carefully choreographed dance, where every step is guided by trust,
            communication, and a shared commitment to excellence.
          </p>
        </div>

        {/* Header Image Section */}
        <div className='flex justify-center overflow-hidden my-12'>
          <Image
            src={planb}
            alt='social-media'
            width={800}
            height={800}
            objectFit='contain'
          />
        </div>

        {/* Reach Section */}
        <div ref={reachSectionRef} className='flex md:flex-row flex-col gap-12'>
          <div className='w-full md:w-1/2 flex flex-col gap-4'>
            <p>We help you to</p>
            <h1 className='text-4xl font-bold'>REACH EVERY WHERE</h1>
            <div className=''>
              <Image
                src={howwe}
                alt='AynMedia Reach Strategy'
                width={500}
                height={500}
              />
            </div>
          </div>

          {/* Vision Section */}
          <div
            ref={visionSectionRef}
            className='w-full md:w-1/2 flex flex-col gap-4 my-12'>
            <h1 className='text-2xl font-bold'>VISION TO REALITY</h1>
            <div className='space-y-4'>
              <p>
                At AynMedia, we transform the ordinary into the extraordinary
                through a blend of strategic consulting, innovative design,
                cutting-edge digital marketing, and comprehensive web solutions.
                Our hive is equipped with a range of in-house skills, covering
                everything from brand development and marketing strategy to
                creative design, customer experience, and performance analytics
                across both traditional and digital channels.
              </p>
              <p>
                Founded in 2020, based in Chennai India we serve clients not
                only across the nation but also on an international scale. Our
                wings span far and wide, spreading our unique brand of
                creativity and expertise to help businesses thrive and bloom
                globally.
              </p>
            </div>

            <div className='space-y-8'>
              {[
                {
                  title: 'Innovative Thinking',
                  desc: 'We challenge conventional methods to uncover opportunities that others might miss, pushing the boundaries of innovation.',
                },
                {
                  title: 'Exploring New Horizons',
                  desc: 'Our mission is to discover and implement fresh, strategic solutions, venturing into uncharted territories.',
                },
                {
                  title: 'Inspired Strategies',
                  desc: 'We focus on creating impactful differentiation, crafting strategies that resonate and stand out in your industry.',
                },
                {
                  title: 'Unified Solutions',
                  desc: 'With our full suite of in-house expertise, we provide a seamless, all-inclusive solution for all your digital marketing needs.',
                },
              ].map((item, index) => (
                <div key={index} className='border-l-4 border-primary pl-4'>
                  <h3 className='text-xl font-semibold'>{item.title}</h3>
                  <p className='text-gray-600'>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div
          ref={statsSectionRef}
          className='flex flex-col md:flex-row gap-4 my-12 md:my-24 justify-center text-secondary'>
          {[
            { value: '300+', label: 'Clients' },
            { value: '2K+', label: 'Projects' },
            { value: '5', label: 'Countries' },
            { value: '50+', label: 'Industries' },
          ].map((stat, index) => (
            <div
              key={index}
              className='w-full md:w-1/4 text-center flex flex-row md:flex-col gap-4 justify-center'>
              <h2 className='text-2xl md:text-7xl font-bold'>{stat.value}</h2>
              <p className='text-xl font-bold'>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Approach Section */}
      <div
        ref={approachSectionRef}
        className='my-12 w-full bg-secondary text-white py-12'>
        <div className='max-w-7xl mx-4 md:mx-auto'>
          <h2 className='text-4xl font-bold mb-12 text-primary text-center'>
            Our Approach
          </h2>
          <div className='grid md:grid-cols-2 gap-8'>
            {[
              {
                title: 'Understanding Your Business',
                items: [
                  'Conduct in-depth research to understand your industry, target audience, and competition.',
                  'Identify your unique selling propositions (USPs) and pain points.',
                  'Define clear goals and objectives for the project.',
                ],
              },
              {
                title: 'Crafting a Tailored Strategy',
                items: [
                  'Develop a custom digital marketing plan based on your specific needs.',
                  'Combine data-driven insights with creative storytelling to create an effective strategy.',
                  'Choose the right platforms and tools to maximize reach and engagement.',
                ],
              },
              {
                title: 'Flawless Execution',
                items: [
                  'Track the performance of campaigns using real-time analytics.',
                  'Monitor key metrics such as ROI, engagement, and traffic to assess effectiveness.',
                  'Identify areas of improvement for optimization.',
                ],
              },
              {
                title: 'Delivering Results',
                items: [
                  'Focus on achieving tangible outcomes like increased visibility, engagement, and conversions.',
                  'Provide detailed reports to keep you informed about campaign performance.',
                  'Commit to exceeding client expectations with measurable growth.',
                ],
              },
            ].map((section, index) => (
              <div key={index} className='approach-item'>
                <h3 className='text-2xl font-semibold mb-4 text-primary'>
                  {section.title}
                </h3>
                <ul className='list-disc pl-5 space-y-2'>
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <LogoSlider />
    </div>
  );
};

export default WhatWeDoPage;
