/** @format */
'use client';

import React, { useEffect, useRef } from 'react';
import who from '@/../public/images/Who_we_are_BG.png';
import Image from 'next/image';
import { MdArrowOutward } from 'react-icons/md';
import BounceAnimation from './animations/bounceAnimation';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

const Whoweare = () => {
  const containerRef = useRef(null);
  const textRefs = useRef([]);

  useEffect(() => {
    if (!containerRef.current) return;

    // Sync Lenis with GSAP ScrollTrigger
    ScrollTrigger.scrollerProxy(containerRef.current, {
      scrollTop(value) {
        return arguments.length
          ? window.scrollTo({ top: value })
          : window.scrollY;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: containerRef.current.style.transform ? 'transform' : 'fixed',
    });

    // Sequential Animation
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        end: 'bottom 80%',
        scrub: true,
        once: true,
      },
    });

    // Animate split text
    textRefs.current.forEach((el) => {
      if (el) {
        const split = new SplitType(el, { type: 'lines' });
        timeline.from(split.lines, {
          opacity: 0,
          scale: 0.8,
          rotateX: 90,
          perspective: 1000,
          stagger: 0.1,
          ease: 'power3.out',
        });
      }
    });

    // Refresh ScrollTrigger on resize
    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener('resize', handleResize);

    return () => {
      // Cleanup: Kill relevant ScrollTriggers and remove resize listener
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className='flex bg-secondary text-white py-24 overflow-hidden'>
      <div className='max-w-7xl md:mx-auto mx-4 flex flex-col md:flex-row justify-between items-center w-full'>
        <div className='md:w-1/2 w-full flex justify-center'>
          <Image
            data-scroll
            data-scroll-speed='12'
            src={who}
            alt='ayn logo'
            width={500}
            height={500}
          />
        </div>
        <div className='md:w-1/2 w-full justify-end'>
          <span
            ref={(el) => (textRefs.current[0] = el)}
            className='text-lg text-gray-200'>
            Who We Are
          </span>
          <h1
            ref={(el) => (textRefs.current[1] = el)}
            className='text-2xl md:text-4xl font-bold py-4'>
            Life isn’t all about selling. Sometimes, you just need to be
            yourself.
          </h1>
          <div className='flex flex-row gap-12'>
            <div className='hidden md:block w-1/4 border-r border-gray-400'></div>
            <div className='flex flex-col w-full md:w-3/4 gap-6 text-lg'>
              <span ref={(el) => (textRefs.current[2] = el)}>
                AYN Media & Technologies is a leading Digital Marketing Agency
                dedicated to helping businesses of all sizes succeed online.
                We’re a hive of passionate marketers, designers, developers,
                writers, and strategists — a team that thrives on challenges.
                Our mission is simple: to help you become the best version of
                your brand. We transform your business goals into a clear,
                compelling brand voice and bring it to life through innovative
                digital marketing strategies that create a seamless brand
                experience.
              </span>
              <span ref={(el) => (textRefs.current[3] = el)}>
                We offer complete digital marketing services, including SEO,
                social media marketing, web development, content creation, and
                PPC advertising. Some call us an ad agency, a creative agency, a
                marketing company, or even the business model of the future. The
                truth is, we’re all of those and more. In today’s fast-paced,
                multi-channel world, businesses need fresh, inventive approaches
                to connect with their audience — and that’s where we come in.
                We&apos;re here to help you succeed across every domain and
                truly everywhere.
              </span>
              <div className='my-12'>
                <BounceAnimation>
                  <button className='relative rounded-full text-black bg-white font-roboto text-xl font-thin overflow-hidden p-4 w-48 h-48 transition-transform duration-200 ease-in-out transform hover:scale-105 focus:outline-none group hover:text-white'>
                    <span className='flex justify-center w-full'>
                      Explore Us <MdArrowOutward size={32} />
                    </span>
                    <span className='absolute inset-0 bg-yellow-400 rounded-full transform -translate-x-full rotate-10 transition-transform duration-200 ease-out group-hover:translate-x-0 z-[-1]'></span>
                  </button>
                </BounceAnimation>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whoweare;
