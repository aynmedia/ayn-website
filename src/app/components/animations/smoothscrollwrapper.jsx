/** @format */

'use client';

import { ReactLenis, useLenis } from '@studio-freight/react-lenis';

export const SmoothScrollProvider = ({ children }) => {
  const lenis = useLenis();
  return (
    <ReactLenis
      lenis={lenis}
      options={{
        smooth: true,
        lerp: 0.05, // Reduced from 0.1 for smoother interpolation
        smoothWheel: true,
        smoothWheelSpeed: 0.3, // Decreased for gentler scrolling
        duration: 1.2, // Slightly shorter duration for more responsive feel
        smoothTouch: true,
        wheelMultiplier: 0.8, // Reduced scroll speed for more controlled movement
        easing: (t) => 1 - Math.pow(1 - t, 4), // Softer easing curve
      }}
      root>
      {children}
    </ReactLenis>
  );
};

export default SmoothScrollProvider;
