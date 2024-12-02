/** @format */

'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import LogoSlider from '../components/logoslider';
import ceo from '@/../../public/images/ceo.jpg';

gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  const imageRef = useRef(null);
  const nameRef = useRef(null);
  const bioRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image Animation
      gsap.fromTo(
        imageRef.current,
        {
          opacity: 0,
          x: -50,
          scale: 0.9,
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Name and Bio Animation
      gsap.fromTo(
        [nameRef.current, bioRef.current],
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.3,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: nameRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Stats Animation
      const statItems = statsRef.current.children;
      gsap.fromTo(
        statItems,
        {
          opacity: 0,
          y: 50,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => ctx.revert(); // Clean up animations
  }, []);

  return (
    <div className='bg-white overflow-hidden'>
      <div className='max-w-7xl md:mx-auto mx-4 pt-24 md:pt-48'>
        <div className='flex md:flex-row flex-col gap-8 mt-4'>
          <div
            ref={imageRef}
            className='w-full md:w-1/2 flex items-center justify-center'>
            <div className='overflow-hidden'>
              <Image
                src={ceo}
                alt='Ayn Gajendran, CEO of AYN Media & Technologies'
                width={1500}
                height={1500}
                className='object-cover w-full h-full'
              />
            </div>
          </div>
          <div className='w-full md:w-1/2 flex flex-col gap-4 justify-center'>
            <h1 ref={nameRef} className='text-4xl font-bold text-gray-900'>
              Ayn Gajendran
            </h1>
            <p ref={bioRef} className='text-gray-600 font-semibold'>
              Founder & CEO, AYN Media & Technologies Pvt. Ltd.
            </p>

            <div
              ref={bioRef}
              className='space-y-4 text-gray-700 leading-relaxed'>
              <p>
                With over 25 years of rich experience in Sales and Marketing,
                Ayn Gajendran brings unparalleled expertise to the table. Having
                worked in senior management roles across India, the UK, and Gulf
                countries, he has been instrumental in driving success for top
                corporate brands globally.
              </p>
              <p>
                Ayn's career boasts a remarkable portfolio, with direct
                involvement in branding and marketing for over 3,500 brands. His
                deep understanding of diverse markets, cultures, and industries
                allows him to craft strategies that resonate on a global scale
                while delivering impactful results tailored to local needs.
              </p>
              <p>
                Under his visionary leadership, AYN Media has rapidly become a
                trusted name in digital marketing, helping businesses achieve
                new heights through innovative, results-oriented solutions.
              </p>
            </div>
          </div>
        </div>

        <div
          ref={statsRef}
          className='bg-gray-50 rounded-lg p-8 md:p-16 my-12 md:my-24'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8 text-center'>
            {[
              { value: '300+', label: 'Clients' },
              { value: '2K+', label: 'Projects' },
              { value: '5', label: 'Countries' },
              { value: '50+', label: 'Industries' },
            ].map((stat, index) => (
              <div key={index} className='flex flex-col items-center'>
                <h2 className='text-4xl md:text-6xl font-bold text-primary'>
                  {stat.value}
                </h2>
                <p className='text-lg font-medium text-gray-600'>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <LogoSlider />
    </div>
  );
};

export default AboutPage;
