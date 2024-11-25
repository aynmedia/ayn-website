/** @format */

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

// Register plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
}

// Page transition timeline
export const createPageTransition = () => {
  const tl = gsap.timeline();

  tl.to('.page-transition', {
    scaleY: 1,
    transformOrigin: 'top',
    duration: 0.5,
    ease: 'power4.inOut',
  }).to('.page-transition', {
    scaleY: 0,
    transformOrigin: 'bottom',
    duration: 0.5,
    ease: 'power4.inOut',
  });

  return tl;
};

// Complex entrance animations
export const createEntranceAnimation = (element) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: element,
      start: 'top center+=100',
      end: 'bottom center',
      toggleActions: 'play none none reverse',
    },
  });

  tl.from(element.querySelector('.fade-up'), {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
  })
    .from(
      element.querySelector('.fade-in'),
      {
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
      },
      '-=0.5'
    )
    .from(
      element.querySelector('.scale-up'),
      {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: 'back.out(1.7)',
      },
      '-=0.5'
    );

  return tl;
};

// Parallax effect
export const createParallax = (element, speed = 0.5) => {
  gsap.to(element, {
    y: () => ScrollTrigger.maxScroll(window) * speed,
    ease: 'none',
    scrollTrigger: {
      trigger: element,
      start: 'top top',
      end: 'max',
      invalidateOnRefresh: true,
      scrub: true,
    },
  });
};

// Interactive hover effects
export const createHoverEffect = (element) => {
  const tl = gsap.timeline({ paused: true });

  tl.to(element, {
    scale: 1.05,
    duration: 0.3,
    ease: 'power2.out',
  }).to(
    element.querySelector('.hover-glow'),
    {
      opacity: 1,
      duration: 0.2,
    },
    0
  );

  return tl;
};

// Stats counter animation
export const animateStats = (element) => {
  gsap.from(element.querySelectorAll('.stat-number'), {
    textContent: 0,
    duration: 2,
    ease: 'power1.out',
    snap: { textContent: 1 },
    stagger: 0.2,
    scrollTrigger: {
      trigger: element,
      start: 'top center+=100',
    },
  });
};

// Smooth scroll setup
export const initSmoothScroll = () => {
  return ScrollSmoother.create({
    wrapper: '.smooth-wrapper',
    content: '.smooth-content',
    smooth: 1.5,
    effects: true,
  });
};

// Text split animation
export const animateText = (element) => {
  const text = element.textContent;
  element.innerHTML = '';

  return [...text].map((char, i) => {
    const span = document.createElement('span');
    span.textContent = char;
    span.style.opacity = '0';
    element.appendChild(span);

    gsap.to(span, {
      opacity: 1,
      duration: 0.1,
      delay: i * 0.03,
    });

    return span;
  });
};
