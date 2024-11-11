/** @format */
'use client';
import React, { Children, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SlideupAnimation = ({ children }) => {
  const slideupRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      slideupRef.current,
      { y: 500, opacity: 1 },
      {
        y: -700,
        opacity: 1,
        duration: 0.3,
        scrollTrigger: {
          trigger: slideupRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: true,
        },
      }
    );
  }, []);

  return <div ref={slideupRef}>{children}</div>;
};

export default SlideupAnimation;
