/** @format */

import React from 'react';

const AboutHome = () => {
  return (
    <div className='py-24'>
      <div className='max-w-7xl md:mx-auto px-4 flex flex-col md:flex-row justify-between items-center w-full gap-6 overflow-hidden'>
        <div className='md:w-1/2 w-full flex flex-col gap-6'>
          <h1 className='text-4xl font-bold text-center'>Our Mission</h1>
          <p className='text-lg'>
            Our mission is to empower businesses by providing top-notch
            <b> Digital Marketing Services in Chennai</b> that deliver
            measurable results. We aim to bridge the gap between your brand and
            its audience, using data-driven strategies that maximize ROI and
            foster long-term growth.
          </p>
        </div>
        <div className='md:w-1/2 w-full flex flex-col gap-6'>
          <h1 className='text-4xl font-bold text-center'>Our Vision</h1>
          <p className='text-lg'>
            To be recognized as the <b>best digital marketing company</b> by
            consistently delivering innovative and effective marketing solutions
            that set new industry standards. We envision a future where every
            business, regardless of size, has access to the tools and strategies
            needed to thrive in the digital landscape.
          </p>
        </div>
      </div>
      <div className='w-full flex flex-col gap-6 max-w-7xl md:mx-auto px-4 justify-center text-center pt-8 pb-12'>
        <h1 className='text-4xl font-bold text-center'>Our Core Values</h1>
        <p className='text-lg'>
          <b> Innovation:</b> We stay ahead of the curve by implementing the
          latest digital marketing trends and technologies.
          <br />
          <b> Integrity: </b>At the heart of what we do are honesty and
          transparency. <br />
          <b>Customer-Centricity:</b> Our clients success is our success; we
          prioritize your goals and work tirelessly to achieve them.
          <br />
          <b> Excellence:</b> We are committed to delivering outstanding results
          that exceed expectations.
        </p>
      </div>
    </div>
  );
};

export default AboutHome;
