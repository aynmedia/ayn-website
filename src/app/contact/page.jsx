/** @format */

'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ContactPage = () => {
  const headingRef = useRef(null);
  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);
  const decorationRef = useRef(null);

  useEffect(() => {
    // Heading animation
    gsap.fromTo(
      headingRef.current,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top center+=100',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Left column animation
    gsap.fromTo(
      leftColumnRef.current,
      {
        x: -100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: leftColumnRef.current,
          start: 'top center+=150',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Right column animation with staggered children
    gsap.fromTo(
      rightColumnRef.current.children,
      {
        x: 100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: rightColumnRef.current,
          start: 'top center+=150',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Decoration elements animation
    gsap.fromTo(
      decorationRef.current.children,
      {
        scale: 0,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: 'elastic.out(1, 0.5)',
        scrollTrigger: {
          trigger: decorationRef.current,
          start: 'top center+=200',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <div className='min-h-screen bg-secondary text-white relative overflow-hidden'>
      {/* Hero Section */}
      <div ref={headingRef} className='pt-12 px-4 mb-20'>
        <div className='flex flex-col md:flex-row items-center gap-4 max-w-7xl md:mx-auto mx-4'>
          <h1 className='md:text-7xl text-4xl font-bold'>
            Leverage Your Business with Google Ads
          </h1>
          <p className='text-lg font-medium'>
            Let`&apos;`s elevate your business game with Ayn Media.
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div ref={decorationRef} className='absolute inset-0 pointer-events-none'>
        <div className='absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full'></div>
        <div className='absolute bottom-20 right-10 w-48 h-48 bg-white/5 rounded-full'></div>
        <div className='absolute top-1/2 left-1/2 w-64 h-64 bg-white/5 rounded-full transform -translate-x-1/2 -translate-y-1/2'></div>
      </div>

      {/* Main Content */}
      <div className='max-w-7xl mx-auto px-4 pb-20 relative z-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-16 items-start'>
          {/* Left Column */}
          <div
            ref={leftColumnRef}
            className='bg-white/10 backdrop-blur-sm rounded-xl p-12 transform hover:scale-105 transition-transform duration-300'>
            <h2 className='text-4xl font-bold mb-8 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent'>
              Our Office
            </h2>
            <div className='space-y-12'>
              <div className='transform hover:translate-x-2 transition-transform duration-300'>
                <h3 className='text-yellow-400 text-xl mb-3 font-medium'>
                  Location
                </h3>
                <p className='text-lg leading-relaxed opacity-90'>
                  Ayn Media Pvt. Ltd.,
                  <br />
                  No.4, 2nd Floor, Vembuli Amman Koil Street,
                  <br />
                  Ullagaram, Madipakkam, Chennai-600091.
                </p>
              </div>
              <div className='transform hover:translate-x-2 transition-transform duration-300'>
                <h3 className='text-yellow-400 text-xl mb-3 font-medium'>
                  Business Hours
                </h3>
                <p className='text-lg leading-relaxed opacity-90'>
                  Monday - Saturday: 9:00 AM - 6:00 PM
                  <br />
                  Sunday: By Appointment
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div ref={rightColumnRef} className='space-y-10 md:pl-8'>
            <div className='bg-white/10 backdrop-blur-sm p-8 rounded-xl transform hover:-translate-y-1 transition-transform duration-300'>
              <h3 className='text-2xl font-bold mb-4 flex items-center'>
                <span className='text-yellow-400 mr-3'>📱</span>
                Contact Details
              </h3>
              <p className='text-xl opacity-90'>
                Phone: +91 89259 22232
                <br />
                Email: info@ayntech.in
              </p>
            </div>

            <div className='bg-white/10 backdrop-blur-sm p-8 rounded-xl transform hover:-translate-y-1 transition-transform duration-300'>
              <h3 className='text-2xl font-bold mb-4 flex items-center'>
                <span className='text-yellow-400 mr-3'>🌐</span>
                Connect With Us
              </h3>
              <div className='grid grid-cols-2 gap-4'>
                <a
                  href='#'
                  className='bg-white/5 p-4 rounded-xl hover:bg-white/20 transition-colors duration-300 text-center'>
                  LinkedIn
                </a>
                <a
                  href='#'
                  className='bg-white/5 p-4 rounded-xl hover:bg-white/20 transition-colors duration-300 text-center'>
                  Twitter
                </a>
                <a
                  href='#'
                  className='bg-white/5 p-4 rounded-xl hover:bg-white/20 transition-colors duration-300 text-center'>
                  Instagram
                </a>
                <a
                  href='#'
                  className='bg-white/5 p-4 rounded-xl hover:bg-white/20 transition-colors duration-300 text-center'>
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
