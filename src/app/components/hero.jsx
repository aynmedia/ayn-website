/** @format */
'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { FaChartLine } from 'react-icons/fa6';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  // Create refs for animating elements
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const ctaContainerRef = useRef(null);
  const imageRef = useRef(null);
  const statsRef = useRef(null);
  const whyUsRef = useRef(null);

  useEffect(() => {
    // Timeline for initial load animations
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Initial load animations
    tl.fromTo(
      headingRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    )
      .fromTo(
        paragraphRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1 },
        '-=0.7'
      )
      .fromTo(
        ctaContainerRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1 },
        '-=0.7'
      );

    // Scroll-triggered animations
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      statsRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: statsRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      whyUsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: whyUsRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Cleanup function
    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section className='py-24 text-white bg-black '>
      <div className='mx-auto max-w-7xl px-4 flex flex-col md:flex-row items-center justify-start gap-5  pt-24'>
        <div className='flex flex-col w-full md:w-1/2 items-center'>
          <h1 ref={headingRef} className='text-6xl font-medium opacity-0'>
            Stay ahead of the game with our innovative approach.
          </h1>
          <p
            ref={paragraphRef}
            className='mt-4 text-xs leading-relaxed text-gray-500 opacity-0'>
            A award winning Digital,Social Media, Performance Marketing agency
            in Chennai. Ayn Media provides a 360 degree Digital marketing across
            india including SEO, Social Media, Digital Marketing, Content
            Management, Website building, Graphic Designing and much more. We
            are creative brand builder, strategist, helps organization to
            achieve REVENUE with more leads with more business.
          </p>
          <div
            ref={ctaContainerRef}
            className='flex justify-start items-center gap-12 w-full mt-8 opacity-0'>
            <button className='bg-primary hover:bg-yellow-400 text-secondary font-bold py-4 px-8 rounded-full flex'>
              Schedule a Call
              <FaArrowRightLong size={24} className='ml-4' />
            </button>
            <Link
              className='underline hover:text-primary font-bold'
              href='/portfolio'>
              Explore our works
            </Link>
          </div>
          <div className='flex justify-start w-full my-10'>
            <h1 className='text-xs text-gray-400 font-medium'>
              We help brand to capitalize the opportunities to achieve the sales
              and growth. Our digital marketing services believe in the
              creations, development of strategies, implementation of the latest
              state of the art technology services leads to maximize the
              business and growth.
            </h1>
          </div>
        </div>
        <div className='flex flex-col w-full md:w-1/2 items-center gap-4 md:my-0 my-12'>
          <div className='flex flex-row w-full gap-4'>
            <div className='w-3/5 rounded-3xl flex flex-col'>
              <div
                ref={imageRef}
                className='relative overflow-hidden rounded-tl-[300px] w-full h-full opacity-0'>
                <Image
                  src='/images/Hero_Section_DG.webp'
                  alt='Laptop Image'
                  className='w-full h-full object-fit rounded-3xl'
                  width={600}
                  height={1400}
                />

                <div className='absolute top-4 right-4 bg-secondary text-primary w-12 h-12 rounded-full flex items-center justify-center shadow-lg'>
                  <FaChartLine size={24} />
                </div>
              </div>
            </div>
            <div
              ref={statsRef}
              className='w-2/5 bg-gray-500/10 rounded-3xl p-8 gap-5 flex flex-col opacity-0'>
              <h1 className='text-6xl font-bold text-center'>120+ </h1>
              <p className='text-gray-500'>
                Business loves to work with us, and they trust us to deliver
                results.
              </p>
              <div className='w-full bg-gray-400 h-1.5 dark:bg-gray-700'>
                <div className='bg-primary h-1.5 w-3/4'></div>
              </div>
            </div>
          </div>
          <div
            ref={whyUsRef}
            className='relative w-full h-64 bg-gray-500/10 rounded-3xl p-8 text-white opacity-0'>
            <div className='relative z-10'>
              <p className='text-sm uppercase tracking-wide text-gray-400 mb-1'>
                Why us?
              </p>
              <h2 className='text-4xl font-semibold'>
                Drive more traffic <br /> and product sales
              </h2>
            </div>

            <div className='absolute bottom-4 right-6 flex items-end space-x-4 z-10'>
              <div className='bg-primary w-16 h-16 rounded'></div>
              <div className='bg-primary w-16 h-32 rounded'></div>
              <div className='bg-primary w-16 h-48 rounded'></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
