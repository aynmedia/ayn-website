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
        lerp: 0.1,
        smoothWheel: true,
        smoothWheelSpeed: 0.5,
        duration: 1.5,
        smoothTouch: true,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      }}
      root>
      {children}
    </ReactLenis>
  );
};
