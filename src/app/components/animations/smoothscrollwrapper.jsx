/** @format */
'use client';
import ReactLenis from '@studio-freight/react-lenis';
import React from 'react';

const SmoothScrollerWrapper = ({ children }) => {
  return (
    <ReactLenis root options={{ lerp: 0.01 }}>
      {children}
    </ReactLenis>
  );
};

export default SmoothScrollerWrapper;
