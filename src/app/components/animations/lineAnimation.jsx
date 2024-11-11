/** @format */

'use client';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AnimatedParagraph = ({ text }) => {
  const paragraphRef = useRef(null);

  useEffect(() => {
    // Find each span (each word in this case) within the paragraph
    const words = gsap.utils.toArray(paragraphRef.current.children);

    words.forEach((word, index) => {
      gsap.fromTo(
        word,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.05, // Stagger effect for each word
          ease: 'power3.out',
          scrollTrigger: {
            trigger: word,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: true,
          },
        }
      );
    });
  }, [text]);

  // Wrap each word in a span for animation
  const words = text.split(' ').map((word, index) => (
    <span key={index} className='animated-word'>
      {word}&nbsp;
    </span>
  ));

  return (
    <p ref={paragraphRef} className='animated-paragraph '>
      {words}
    </p>
  );
};

export default AnimatedParagraph;
