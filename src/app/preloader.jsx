/** @format */
'use client';
import React, { useEffect, useRef, useState } from 'react';
import SmoothScrollerWrapper from './components/animations/smoothscrollwrapper';

const Preloader = ({ children }) => {
  const [preloader, setPreloader] = useState(true);
  const [timer, setTimer] = useState(3);
  const id = useRef(null);
  const clear = () => {
    window.clearTimeout(id.current);
    setPreloader(false);
  };
  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);
  return (
    <>
      {preloader ? (
        <div className='fixed top-0 left-0 w-full h-full bg-secondary z-50 flex items-center justify-center flex-col gap-8'>
          <div className='w-24 h-24 border-4 border-white border-dotted rounded-full animate-spin'></div>
          <p className='text-white text-2xl font-bold'>Loading...</p>
        </div>
      ) : (
        <SmoothScrollerWrapper>{children}</SmoothScrollerWrapper>
      )}
    </>
  );
};

export default Preloader;
