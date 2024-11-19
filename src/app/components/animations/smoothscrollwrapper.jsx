/** @format */
'use client';
// import { useRef } from 'react';
// import { LocomotiveScrollProvider } from 'react-locomotive-scroll';

// export const SmoothScrollProvider = ({ children, options }) => {
//   // const { scroll } = useLocomotiveScroll();
//   const containerRef = useRef(null);

//   return (
//     <LocomotiveScrollProvider
//       options={{
//         smooth: true,

//         // ... all available Locomotive Scroll instance options
//       }}
//       watch={[]}
//       containerRef={containerRef}>
//       <div data-scroll-container ref={containerRef}>
//         {children}
//       </div>
//     </LocomotiveScrollProvider>
//   );
// };
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
