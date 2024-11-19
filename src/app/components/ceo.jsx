/** @format */
'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import ceo from '@/../../public/images/Ayntech_CEO.webp';
import ceoSign from '@/../../public/images/CEO_Sign.png';
import Aynoffice from '@/../../public/images/aynoffice.webp';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

const Ceo = () => {
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
        start: 'top 50%',
        end: 'bottom 50%',
        duration: 3,
        scrub: true,
        markers: true,
        // once: true, // Ensure animation runs only once
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
          duration: 3,
          perspective: 1000,
          stagger: 0.5,
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
    <div ref={containerRef}>
      <h1
        ref={(el) => (textRefs.current[0] = el)}
        className='text-xl md:text-3xl font-bold text-center my-12 max-w-7xl md:mx-auto mx-4'>
        We&apos;re driven to craft meaningful brands and dynamic campaigns that
        build lasting, impactful connections between businesses and their
        audiences
      </h1>
      <div className='flex flex-col md:flex-row justify-center gap-y-12 gap-x-12 md:gap-y-0 max-w-7xl md:mx-auto mx-4 '>
        <div className='w-full md:w-5/12 '>
          <Image
            src={ceo}
            alt='ceo'
            width={600}
            height={600}
            className='sticky top-20 z-10'
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
            adventure.”
          </span>
          <span className='font-bold' ref={(el) => (textRefs.current[5] = el)}>
            Mr.Ayn Gajendran - CEO, Ayn Technologies
          </span>
          <span className='flex justify-end w-full'>
            <Image src={ceoSign} alt='ceo' width={200} height={200} />
          </span>
        </div>
        <div className='w-full md:w-2/12 justify-end'>
          <Image
            src={Aynoffice}
            alt='ceo'
            width={300}
            height={300}
            className='sticky top-20 z-10'
          />
        </div>
      </div>
    </div>
  );
};

export default Ceo;
