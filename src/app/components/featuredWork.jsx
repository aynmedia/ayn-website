/** @format */
'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { workImages } from '../lib/work';
import BounceAnimation from './animations/bounceAnimation';
import { MdArrowOutward } from 'react-icons/md';

gsap.registerPlugin(ScrollTrigger);
const FeaturedWork = () => {
  const sectionRef = useRef();
  const itemsRef = useRef();
  const cardRef = useRef([]);

  useEffect(() => {
    if (window.innerWidth > 768) {
      gsap.to(itemsRef.current, {
        fontSize: '9rem',
        textAlign: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        y: '1500',
        duration: 0.5,
        ease: 'easeInOut',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
          markers: true,
        },
      });
      cardRef.current.forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            opacity: 0.9234,
            transform: `perspective(6000px) translate3d(0px, 0px, -1000px) rotateX(90deg) scale(0.75, 0.75)`,
          },
          {
            opacity: 1,
            transform:
              'perspective(6000px) translate3d(0px, 0px, 0px) rotateX(0deg) scale(1, 1)',
            duration: 1.5,
            ease: 'easeOut',
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
              end: 'top 30%',
              scrub: 1,
              markers: false,
            },
          }
        );
      });
    }
  }, []);

  return (
    <section ref={sectionRef} className='py-10 bg-secondary h-full relative'>
      <h2
        ref={itemsRef}
        className='text-5xl font-bold text-center text-white mb-10 uppercase'>
        Featured Work
      </h2>
      <div className='grid grid-cols-2 gap-x-4'>
        <div className='flex flex-col gap-y-4 my-6'>
          {workImages.slice(0, 3).map((image, index) => (
            <div
              key={index}
              className='w-full flex justify-center mb-4 opacity-80'
              ref={(el) => (cardRef.current[index] = el)}>
              <Image
                src={image}
                alt={`work-image-${index + 1}`}
                width={600}
                height={600}
              />
            </div>
          ))}
        </div>
        <div className='flex flex-col gap-y-4 my-6'>
          {workImages.slice(3, 6).map((image, index) => (
            <div
              key={index}
              className={`w-full flex justify-center mb-4 ${
                index === 0 ? 'mt-[50%]' : ''
              }`}
              ref={(el) => (cardRef.current[index + 3] = el)}>
              <Image
                src={image}
                alt={`work-image-${index + 4}`}
                width={600}
                height={600}
              />
            </div>
          ))}
        </div>
      </div>
      <div className='my-12 flex justify-center'>
        <BounceAnimation>
          <button class='relative  rounded-full text-black bg-white font-roboto text-xl font-thin overflow-hidden p-4 w-48 h-48 transition-transform duration-200 ease-in-out transform hover:scale-105 focus:outline-none group hover:text-white'>
            <span className='flex justify-center w-full'>
              Explore Us <MdArrowOutward size={32} />
            </span>
            <span class='absolute inset-0 bg-yellow-400 rounded-full transform -translate-x-full rotate-10 transition-transform duration-200 ease-out group-hover:translate-x-0 z-[-1]'></span>
          </button>
        </BounceAnimation>
      </div>
    </section>
  );
};

export default FeaturedWork;
