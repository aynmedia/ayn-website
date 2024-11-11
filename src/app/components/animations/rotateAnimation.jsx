/** @format */

'use client';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Rotate = ({ children }) => {
  const ref = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap
      .fromTo(
        ref.current,
        { scale: 0.7, rotationX: 90, y: 10 },
        {
          scale: 1,
          rotationX: 0,
          y: -10,
          opacity: 1,
          duration: 1,
          delay: 0,
          ease: 'easeInOut',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: true,
            pin: false,
            snap: false,
            ease: 'none',
            // markers: true,
          },
        }
      )
      .then(() => {
        gsap.killTweensOf(ref.current);
      });
  }, []);

  return <div ref={ref}>{children}</div>;
};

export default Rotate;
