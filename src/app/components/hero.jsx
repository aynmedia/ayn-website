/** @format */
'use client';
import gsap from 'gsap';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { FaCirclePlay } from 'react-icons/fa6';

const Hero = () => {
  useEffect(() => {
    const text = document.querySelectorAll('.animate-letters .letters');

    gsap.fromTo(
      text,
      {
        x: 50,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        ease: 'power2.inOut',
        stagger: 0.1,
        duration: 2,
      }
    );
  }, []);
  return (
    <>
      <div className='min-h-screen w-full bg-secondary flex flex-col  text-white '>
        <div className='max-w-7xl md:mx-auto px-4 flex flex-row justify-between items-center w-full'>
          <div className='w-3/4 text-[5rem] md:text-[15rem] font-bold uppercase text-primary font animate-letters -z-1'>
            {'every'.split('').map((letter, index) => (
              <span key={index} className='letters inline-block'>
                {letter === ' ' ? '' : letter}
              </span>
            ))}
          </div>
          <div className='w-1/4'>
            <div className='flex justify-center items-center'>
              <div className='group w-6 h-6 md:w-48 md:h-48 rounded-full border border-white flex justify-center items-center hover:bg-white'>
                <button className='text-white'>
                  <FaCirclePlay
                    size={48}
                    className='group-hover:text-primary'
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='max-w-7xl md:mx-auto px-4 flex flex-col md:flex-row justify-between w-full'>
          <div className='text-[6.4rem] md:text-[15rem] font-bold uppercase font animate-letters w-full sm:w-3/4'>
            {'where'.split('').map((letter, index) => (
              <span key={index} className='letters inline-block'>
                {letter === ' ' ? '' : letter}
              </span>
            ))}
          </div>
          <div className='flex flex-col md:w-1/4 md:order-first px-4'>
            <div className='text-sm font-bold underline md:text-base'>
              Best Digital Marketing Agency in Chennai: Innovative Digital
              Marketing Innovative
            </div>
            <span className='text-sm py-3 flex-wrap'>
              Digital Marketing refers to the use of creative and cutting-edge
              strategies to promote products or services online. As the Best
              Digital marketing agency in Chennai, we excel at utilizing various
              digital channels such as social media, email marketing, SEO, and
              content marketing. Our approach involves continuously exploring
              new ideas and technologies to engage with customers and help
              businesses stand out from competitors in the ever-evolving digital
              landscape. With our expertise, we ensure your brand reaches the
              right audience and achieves measurable success.
            </span>
          </div>
        </div>
        <div className='flex flex-row justify-between items-center w-full'>
          <div className='md:w-1/3 w-full flex justify-center items-center'>
            <div class='mouse_scroll'>
              <div class='mouse'>
                <div class='wheel'></div>
              </div>
              <div>
                <span class='m_scroll_arrows unu'></span>
                <span class='m_scroll_arrows doi'></span>
                <span class='m_scroll_arrows trei'></span>
              </div>
            </div>
          </div>
          <div className='md:w-2/3 w-full h-80 overflow-hidden'>
            <Image
              src='/images/Hero_Section_DG.webp'
              alt='hero-image'
              objectFit='cover'
              layout='responsive'
              width={400}
              height={100}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
