/** @format */

'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import ceo from '@/../../public/images/Ayntech_CEO.webp';
import ceoSign from '@/../../public/images/CEO_Sign.png';
import Aynoffice from '@/../../public/images/aynoffice.webp';

const Ceo = () => {
  const containerRef = useRef(null);
  const textRefs = useRef([]);
  const ceoContainerRef = useRef(null);
  const officeContainerRef = useRef(null);

  useEffect(() => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);

    // Initialize Lenis smooth scrolling
    const lenis = new Lenis({
      lerp: 0.07,
      smooth: true,
      direction: 'vertical',
    });

    // Lenis scroll event handling
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    // Prevent scrolling during initial load
    gsap.set('body', { overflow: 'auto' });

    // Text Animation
    textRefs.current.forEach((el) => {
      if (el) {
        const split = new SplitType(el, { type: 'lines' });

        gsap.from(split.lines, {
          opacity: 0,
          y: 50,
          rotationX: 50,
          transformOrigin: '0% 50% -50',
          stagger: 0.1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            end: 'top 50%',
            toggleActions: 'play none none reverse',
          },
        });
      }
    });

    // Image Parallax
    const imageContainers = [
      {
        container: ceoContainerRef.current,
        image: ceoContainerRef.current?.querySelector('img'),
      },
      {
        container: officeContainerRef.current,
        image: officeContainerRef.current?.querySelector('img'),
      },
    ];

    imageContainers.forEach(({ container, image }) => {
      if (container && image) {
        gsap.fromTo(
          image,
          {
            yPercent: -80,
            ease: 'none',
          },
          {
            yPercent: 20,
            ease: 'none',
            scrollTrigger: {
              trigger: container,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          }
        );
      }
    });

    // Cleanup
    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.ticker.remove();
    };
  }, []);

  return (
    <div ref={containerRef} className='overflow-hidden'>
      <h1
        ref={(el) => (textRefs.current[0] = el)}
        className='text-xl md:text-3xl font-bold text-center my-12 max-w-7xl md:mx-auto mx-4'>
        We&apos;re driven to craft meaningful brands and dynamic campaigns that
        build lasting, impactful connections between businesses and their
        audiences
      </h1>
      <div className='flex flex-col md:flex-row justify-center gap-y-12 gap-x-12 md:gap-y-0 max-w-7xl md:mx-auto mx-4'>
        <div
          ref={ceoContainerRef}
          className='w-full md:w-5/12 relative h-[600px] overflow-hidden img-container'>
          <Image
            src={ceo}
            alt='ceo'
            fill
            priority
            className='object-cover absolute top-0 left-0 -z-10'
          />
        </div>
        <div className='flex w-full md:w-5/12 flex-col gap-y-4 text-lg font-medium'>
          <span ref={(el) => (textRefs.current[1] = el)}>
            The year 2020 saw a global transition towards adapting to different
            cultures, a trend that is expected to continue well into 2022 and
            beyond. The emergence of the new Covid-19 pandemic has posed
            challenges to the way businesses operate, and as the world moves
            towards digitalization, it has become essential to provide services
            on digital platforms. Digital marketing has become a crucial aspect
            of any business operation.
          </span>
          <span ref={(el) => (textRefs.current[2] = el)}>
            At Ayn Media, we offer outstanding digital marketing services, and
            our clients can also benefit from other related services in our
            chosen market. We provide cutting-edge technologies that enable our
            clients to connect people, ideas, and data to define the right
            solution. Our great team of experts, who bring strong service ethos
            to everything they do, has earned the trust and respect of our
            clients, making us a reliable partner in every task we undertake.
          </span>
          <span ref={(el) => (textRefs.current[3] = el)}>
            We strive daily to hold ourselves accountable for creating a company
            and family we can all be proud of. We are determined to not be
            satisfied with where we are, but continue to run with our vision
            with a sense of urgency and defined purpose.
          </span>
          <span className='font-bold' ref={(el) => (textRefs.current[4] = el)}>
            &quot;I wish you the best of luck with your business, enjoy the
            adventure."
          </span>
          <span className='font-bold' ref={(el) => (textRefs.current[5] = el)}>
            Mr.Ayn Gajendran - CEO, Ayn Technologies
          </span>
          <span className='flex justify-end w-full'>
            <Image src={ceoSign} alt='ceo' width={200} height={200} />
          </span>
        </div>
        <div
          ref={officeContainerRef}
          className='w-full md:w-2/12 relative h-[300px] overflow-hidden img-container'>
          <Image
            src={Aynoffice}
            alt='office'
            fill
            priority
            className='object-cover absolute top-0 left-0 -z-10'
          />
        </div>
      </div>
    </div>
  );
};

export default Ceo;
