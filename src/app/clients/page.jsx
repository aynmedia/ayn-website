/** @format */

'use client';

import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { logoImages } from '../lib/logos';
import Image from 'next/image';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const ClientsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const containerRef = useRef(null);
  const logoRefs = useRef([]);
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const highlightRef = useRef(null);

  // Calculate pagination
  const totalPages = Math.ceil(logoImages.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = logoImages.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    // Reset logo refs array
    logoRefs.current = logoRefs.current.slice(0, currentItems.length);

    // GSAP animation for header elements
    const headerTimeline = gsap.timeline();
    headerTimeline
      .from(headingRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      })
      .from(
        highlightRef.current,
        {
          width: 0,
          duration: 0.6,
          ease: 'power3.inOut',
        },
        '-=0.5'
      )
      .from(
        descriptionRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
        },
        '-=0.3'
      );

    // GSAP animation for logos
    const ctx = gsap.context(() => {
      logoRefs.current.forEach((logo, index) => {
        gsap.fromTo(
          logo,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            delay: index * 0.1,
            scrollTrigger: {
              trigger: logo,
              start: 'top bottom-=100',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    containerRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='bg-white min-h-screen' ref={containerRef}>
      {/* <div ref={headingRef} className='pt-12 px-4 mb-20'>
        <div className='flex flex-col md:flex-row items-center gap-4 max-w-7xl md:mx-auto mx-4'>
          <h1 ref={highlightRef} className='md:text-7xl text-4xl font-bold'>
            Our Growing Network
          </h1>
          <p ref={descriptionRef} className='text-lg font-medium'>
            Join our network of industry-leading organizations who have chosen
            to partner with us in their journey towards innovation and
            excellence.
          </p>
        </div> */}
      {/* </div> */}
      {/* Hero Section */}
      {/* <div className='bg-black text-white py-24 mb-16'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='max-w-3xl mx-auto text-center'>
            <h1
              ref={headingRef}
              className='text-5xl md:text-6xl font-bold mb-6'>
              Trusted by Industry Leaders
            </h1>
            <div
              ref={highlightRef}
              className='w-24 h-1 bg-yellow-400 mx-auto mb-8'></div>
            <p
              ref={descriptionRef}
              className='text-lg md:text-xl text-gray-300 leading-relaxed'>
              We're proud to collaborate with forward-thinking companies across
              the globe. Our partnerships have resulted in groundbreaking
              innovations and transformative solutions that shape the future of
              industry.
            </p>
          </div>
        </div>
      </div> */}

      {/* Main Content */}
      <div className='max-w-7xl mx-auto px-4 py-16'>
        {/* Section Title */}
        <div className='text-center mb-16'>
          <h2 className='text-3xl font-bold text-black mb-4'>
            Our Growing Network
          </h2>
          <p className='text-gray-600 max-w-2xl mx-auto'>
            Join our network of industry-leading organizations who have chosen
            to partner with us in their journey towards innovation and
            excellence.
          </p>
          <div className='w-24 h-1 bg-yellow-400 mx-auto mt-6'></div>
        </div>

        {/* Logo Grid */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-16'>
          {currentItems.map((logo, index) => (
            <div
              key={logo.id}
              ref={(el) => (logoRefs.current[index] = el)}
              className='bg-white rounded-lg p-2 border border-gray-400/50 hover:shadow-xl transition-shadow duration-300'>
              <Image
                src={logo.src}
                alt={logo.name}
                className='object-contain w-full h-full'
              />
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className='flex justify-center items-center space-x-2'>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className='px-4 py-2 rounded-lg bg-yellow-400 text-black disabled:opacity-50 disabled:cursor-not-allowed hover:bg-yellow-500 transition-colors'>
            Previous
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`w-10 h-10 rounded-lg ${
                currentPage === index + 1
                  ? 'bg-black text-white'
                  : 'bg-yellow-400 text-black hover:bg-yellow-500'
              } transition-colors`}>
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className='px-4 py-2 rounded-lg bg-yellow-400 text-black disabled:opacity-50 disabled:cursor-not-allowed hover:bg-yellow-500 transition-colors'>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientsPage;
