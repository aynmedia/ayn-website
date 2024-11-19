/** @format */
'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

const AboutHome = () => {
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
        // markers: true,
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
    <div ref={containerRef} className='pt-32 mb-24'>
      <div className='max-w-7xl md:mx-auto px-4 flex flex-col md:flex-row justify-between items-center w-full gap-6 overflow-hidden'>
        <div className='md:w-1/2 w-full flex flex-col gap-6'>
          <h1
            ref={(el) => (textRefs.current[0] = el)}
            className='text-4xl font-bold text-center line-animation'>
            Our Mission
          </h1>
          <p
            ref={(el) => (textRefs.current[1] = el)}
            className='text-lg line-animation'>
            Our mission is to empower businesses by providing top-notch
            <b> Digital Marketing Services in Chennai</b> that deliver
            measurable results. We aim to bridge the gap between your brand and
            its audience, using data-driven strategies that maximize ROI and
            foster long-term growth.
          </p>
        </div>
        <div className='md:w-1/2 w-full flex flex-col gap-6'>
          <h1
            ref={(el) => (textRefs.current[2] = el)}
            className='text-4xl font-bold text-center line-animation'>
            Our Vision
          </h1>
          <p
            ref={(el) => (textRefs.current[3] = el)}
            className='text-lg line-animation'>
            To be recognized as the <b>best digital marketing company</b> by
            consistently delivering innovative and effective marketing solutions
            that set new industry standards. We envision a future where every
            business, regardless of size, has access to the tools and strategies
            needed to thrive in the digital landscape.
          </p>
        </div>
      </div>
      <div className='w-full flex flex-col gap-6 max-w-7xl md:mx-auto px-4 justify-center text-center pt-8 '>
        <h1
          ref={(el) => (textRefs.current[4] = el)}
          className='text-4xl font-bold text-center line-animation'>
          Our Core Values
        </h1>
        <p
          ref={(el) => (textRefs.current[5] = el)}
          className='text-lg line-animation'>
          <b> Innovation:</b> We stay ahead of the curve by implementing the
          latest digital marketing trends and technologies.
          <br />
          <b> Integrity: </b>At the heart of what we do are honesty and
          transparency. <br />
          <b>Customer-Centricity:</b> Our clients success is our success; we
          prioritize your goals and work tirelessly to achieve them.
          <br />
          <b> Excellence:</b> We are committed to delivering outstanding results
          that exceed expectations.
        </p>
      </div>
    </div>
  );
};

export default AboutHome;
