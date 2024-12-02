/** @format */

'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import LogoSlider from '../components/logoslider';

// Import images
import howheader from '@/../../public/images/about/howheader.jpg';
import customer from '@/../../public/images/about/customer.jpg';
import seoaudit from '@/../../public/images/about/seoaudit.jpg';
import image3 from '@/../../public/images/about/image3.jpg';
import fb from '@/../../public/images/about/fb.jpg';
import aboutheader from '@/../../public/images/about/abouthead.jpg';

gsap.registerPlugin(ScrollTrigger);

const HowWeWorkPage = () => {
  const headerRef = useRef(null);
  const introRef = useRef(null);
  const servicesRef = useRef(null);
  const imageGalleryRef = useRef(null);

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

      // Services Section Animation
      gsap.fromTo(
        servicesRef.current.children,
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
            trigger: servicesRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Image Gallery Animation
      const imageItems = imageGalleryRef.current.children;
      gsap.fromTo(
        imageItems,
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
            trigger: imageGalleryRef.current,
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
        {/* Header Section */}
        <div
          ref={headerRef}
          className='flex flex-col md:flex-row items-center gap-8 mb-12'>
          <div className='space-y-4 flex'>
            <h1 className='md:text-7xl text-4xl font-bold text-gray-900'>
              How We Work at Ayn Media
            </h1>
            <p className='text-lg font-medium max-w-3xl text-gray-700 leading-relaxed'>
              At Ayn Media, we collaborate seamlessly to deliver exceptional
              outcomes. With a touch of creative teamwork and a blend of
              strategic synergy, we build relationships that thrive on success.
              Our process is like a finely tuned melody, harmonized by trust,
              open communication, and a shared commitment to excellence in
              everything we do.
            </p>
          </div>
        </div>

        {/* Header Image */}
        <div
          ref={imageGalleryRef}
          className='bg-primary h-[500px] w-full overflow-hidden my-12'>
          <Image src={aboutheader} alt='social-media' objectFit='cover' />
        </div>

        {/* Services Section */}
        <div ref={servicesRef} className='flex md:flex-row flex-col gap-8'>
          <div className='w-full md:w-1/2 flex flex-col gap-6 justify-center'>
            <div className='space-y-2'>
              <p className='text-gray-600'>We help you to</p>
              <h2 className='text-4xl font-bold text-primary'>
                REACH EVERYWHERE
              </h2>
            </div>
            <div className='overflow-hidden'>
              <Image
                src={howheader}
                alt='Ayn Media Reach Strategy'
                width={500}
                height={500}
              />
            </div>
          </div>
          <div className='w-full md:w-1/2 flex flex-col gap-6 my-12 justify-center'>
            <h2 className='text-2xl font-bold text-gray-900'>
              Buzzing with Possibilities at Ayn Media
            </h2>
            <div className='space-y-4 text-gray-700 leading-relaxed'>
              <p>
                At Ayn Media, we specialize in strategic consulting, design,
                digital marketing, and web solutions. Our in-house expertise
                covers everything from branding and marketing strategies to
                creative development, customer engagement, and performance
                measurement across both traditional and digital platforms.
              </p>
              <p>
                We don't just think outside the box—we redefine it, uncovering
                untapped opportunities that flourish like fresh ideas in full
                bloom. Driven by our mission to explore new directions, we
                deliver innovative approaches that set your brand apart,
                spreading our wings to reach the sweetest successes.
              </p>
            </div>

            <div className='space-y-8'>
              {[
                {
                  title: 'Discover Hidden Opportunities',
                  desc: 'We unveil possibilities where others see none.',
                },
                {
                  title: 'Explore New Directions',
                  desc: 'Our mission is to chart paths with bold, innovative strategies.',
                },
                {
                  title: 'Create Meaningful Impact',
                  desc: 'We design unique approaches to elevate your brand.',
                },
                {
                  title: 'Provide Complete Integration',
                  desc: 'A single hub for seamless, end-to-end solutions.',
                },
              ].map((item, index) => (
                <div key={index} className='border-l-4 border-primary pl-4'>
                  <h3 className='text-xl font-semibold text-gray-900'>
                    {item.title}
                  </h3>
                  <p className='text-gray-600'>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div
          ref={imageGalleryRef}
          className='grid md:grid-cols-3 grid-cols-1 gap-6 my-12'>
          <div className='md:col-span-1 rounded-lg overflow-hidden shadow-lg'>
            <Image
              src={customer}
              alt='Customer Engagement'
              layout='responsive'
              className='w-full h-auto object-cover'
            />
          </div>

          <div className='md:col-span-1 flex flex-col gap-6'>
            <div className='rounded-lg overflow-hidden shadow-lg'>
              <Image
                src={seoaudit}
                alt='SEO Audit'
                layout='responsive'
                className='w-full h-auto object-cover'
              />
            </div>
            <div className='rounded-lg overflow-hidden shadow-lg'>
              <Image
                src={fb}
                alt='Facebook Marketing'
                layout='responsive'
                className='w-full h-auto object-cover'
              />
            </div>
          </div>

          <div className='md:col-span-1 rounded-lg overflow-hidden shadow-lg'>
            <Image
              src={image3}
              alt='Digital Strategy'
              layout='responsive'
              className='w-full h-auto object-cover'
            />
          </div>
        </div>
      </div>
      <LogoSlider />
    </div>
  );
};

export default HowWeWorkPage;
