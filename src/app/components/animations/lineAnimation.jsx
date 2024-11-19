/** @format */

'use client';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

const AnimatedParagraph = ({ children }) => {
  const ref = useRef(null);

  useEffect(() => {
    const split = new SplitType('.line-animation', {
      type: 'lines,words',
    });
    gsap.fromTo(
      split.lines,
      {
        scale: 0.7,
        rotationX: 90,
        y: 10,
        perspective: 1000,
        opacity: 1,
      },
      {
        scale: 1,
        rotationX: 0,
        y: -10,
        opacity: 1,
        duration: 1,
        delay: 0,
        ease: 'easeInOut',
        stagger: 0.1,
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 90%',
          end: 'bottom 90%',
          scrub: true,
        },
      }
    );
  }, []);

  return <div ref={ref}>{children}</div>;
};

export default AnimatedParagraph;
