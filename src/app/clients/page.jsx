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

const categories = [
  'HealthCare',
  'Education',
  'FMCG',
  'Real Estate & Infra',
  'Beauty Care',
  'Kids',
  'Wellness',
  'F&B',
  'Industrial',
  'Automobile',
  'Business Services',
  'Hospitality',
  'Banking',
  'Government & UN',
  'Consumer Electronics',
  'Aviation',
  'Agriculture',
  'Logistics',
  'IT',
  'Fashion',
  'Home',
  'Consumer Retail',
  'Media',
  'Photography',
  'Others',
];

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
    <div className='bg-white min-h-screen pt-24' ref={containerRef}>
      <div className='max-w-7xl mx-auto px-4 py-16'>
        {/* Section Title */}
        <div className='text-center mb-16'>
          <h2 className='text-3xl font-bold text-black mb-4'>
            Our Growing Network
          </h2>
          <p className='text-gray-600 max-w-5xl mx-auto'>
            Join our network of industry-leading organizations who have chosen
            to partner with us in their journey towards innovation and
            excellence.
          </p>
          <div className='flex flex-wrap gap-2 mt-4 justify-center'>
            {categories.map((category, index) => (
              <span
                key={index}
                className='border border-x-1 border-gray-500/50 text-gray-500/80 rounded-2xl px-3 hover:bg-primary hover:text-white transition-colors'>
                {category}
              </span>
            ))}
          </div>
          <div className='w-24 h-1 bg-yellow-400 mx-auto mt-6'></div>
        </div>

        {/* Logo Grid */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-16'>
          {currentItems.map((logo, index) => (
            <div
              key={logo.id}
              ref={(el) => (logoRefs.current[index] = el)}
              className='bg-white rounded-lg p-2 '>
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
