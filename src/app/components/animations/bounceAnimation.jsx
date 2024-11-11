/** @format */
'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const BounceAnimation = ({ children }) => {
  const bounceRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      bounceRef.current,
      { scale: 0.95, y: 10 },
      {
        scale: 1,
        y: -30,
        duration: 0.5,
        ease: 'bounce.inOut',
        scrollTrigger: {
          trigger: bounceRef.current,
          scrub: true,
        },
      }
    );
  }, []);

  return <div ref={bounceRef}>{children}</div>;
};

export default BounceAnimation;
