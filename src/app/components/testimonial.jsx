/** @format */
'use client';
import React, { useRef, useState } from 'react';
import TestimonialsList from '../lib/testimonial';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

import 'swiper/css';
import 'swiper/css/navigation';

const Testimonials = () => {
  const swiperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(1);

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <div className='relative py-12 md:py-24 max-w-7xl md:mx-auto mx-4'>
      <div className='absolute inset-0 flex justify-between opacity-10 -z-10'>
        <span className='w-[2px] bg-gray-500 h-full'></span>
        <span className='w-[2px] bg-gray-500 h-full'></span>
        <span className='w-[2px] bg-gray-500 h-full'></span>
        <span className='w-[2px] bg-gray-500 h-full'></span>
      </div>
      <div className='flex justify-center my-8'>
        <h1 className='text-md text-gray-700 font-medium text-center border border-gray-700 rounded-full p-2'>
          Testimonials
        </h1>
      </div>
      <h1 className='text-3xl font-bold text-center max-w-7xl md:mx-auto'>
        Happy words from our valuable clients!
      </h1>
      <Swiper
        ref={swiperRef}
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex + 1)}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        className='mySwiper'
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        style={{ position: 'relative' }}>
        {TestimonialsList.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className='testimonial-slide flex flex-col p-4'>
              <Image
                src={testimonial.image}
                alt={`testimonial-${index + 1}`}
                width={150}
                height={150}
              />
              <p className='text-lg my-12'>{testimonial.quote}</p>
              <h2 className='text-xl font-bold'>{testimonial.company}</h2>
              <h3 className='text-xl font-medium'>{testimonial.name}</h3>
              <h4 className='text-sm text-gray-500 font-bold'>
                {testimonial.title}
              </h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='flex flex-row gap-6 items-center justify-center mt-8 text-center'>
        <div onClick={goPrev}>
          <BsArrowLeft size={32} />
        </div>
        <div className='text-center font-medium text-gray-500'>
          <p className='text-lg text-gray-500'>
            {`${currentIndex} of ${TestimonialsList.length}`}
          </p>
        </div>
        <div onClick={goNext}>
          <BsArrowRight size={32} />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
