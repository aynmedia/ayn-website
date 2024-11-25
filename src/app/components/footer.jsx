/** @format */

import Image from 'next/image';
import React from 'react';
import Logo from '@/../../public/images/weblogo.webp';
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaYoutube,
} from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import google from '@/../../public/images/goo-part.webp';
import meta from '@/../../public/images/Meta-partner.webp';
import { MdArrowOutward } from 'react-icons/md';
import BounceAnimation from './animations/bounceAnimation';
import { FcGoogle } from 'react-icons/fc';
import { FaStar } from 'react-icons/fa';
import footer from '@/../../public/images/footer.jpg';
import ContactHome from './contact_home';
import { FixedScrollImage } from './FixedScrollImage';
const Footer = () => {
  return (
    <>
      <ContactHome />
      <div className='relative'>
        <div className='relative py-12 md:py-24 max-w-7xl md:mx-auto mx-4  pt-24'>
          <div className='absolute inset-0 flex justify-between opacity-10 -z-10'>
            <span className='w-[2px] bg-gray-500 h-full'></span>
            <span className='w-[2px] bg-gray-500 h-full'></span>
            <span className='w-[2px] bg-gray-500 h-full'></span>
            <span className='w-[2px] bg-gray-500 h-full'></span>
          </div>
        </div>
        <div className='absolute z-100 flex justify-end w-full md:-mt-64 overflow-y-auto'>
          <Image src={footer} alt='logo' width={1200} height={550} />
        </div>
        <div className='bg-secondary w-full md:w-[88%] py-12 absolute'>
          <div className='max-w-7xl mx-4 md:mx-auto py-4 text-white flex flex-col md:flex-row gap-2'>
            <div className='w-full md:w-1/3 gap-y-12 flex flex-col'>
              <Image src={Logo} alt='logo' width={150} height={150} />
              <p className='text-gray-400 font-medium text-lg'>
                The Ayn Technologies is an integrated branding and digital
                marketing agency based in Chennai, India. With a team of over
                40+, we are an award-winning full-stack digital marketing agency
                offering creative and innovative digital and brand solutions for
                brands looking to grow their businesses
              </p>
              <div className='flex gap-4 text-gray-500 '>
                <FaFacebookSquare size={24} />
                <FaInstagramSquare size={24} />
                <FaLinkedin size={24} />
                <FaYoutube size={24} />
                <FaSquareXTwitter size={24} />
              </div>
              <div className='flex gap-x-4'>
                <Image
                  src={google}
                  alt='google partner'
                  width={150}
                  height={150}
                />{' '}
                <Image src={meta} alt='meta partner' width={150} height={150} />
              </div>
            </div>
            <div className='w-full md:w-1/3 flex flex-col text-center gap-y-6'>
              <h1 className='text-2xl font-bold'>Infomation</h1>
              <nav className='flex flex-col gap-y-4'>
                <a href='#' className='text-gray-400 font-medium text-lg'>
                  Home
                </a>
                <a href='#' className='text-gray-400 font-medium text-lg'>
                  About Us
                </a>
                <a href='#' className='text-gray-400 font-medium text-lg'>
                  Services
                </a>
                <a href='#' className='text-gray-400 font-medium text-lg'>
                  Portfolio
                </a>
                <a href='#' className='text-gray-400 font-medium text-lg'>
                  Contact Us
                </a>
              </nav>
            </div>
            <div className='w-full md:w-1/3 flex flex-col gap-y-6'>
              <h1 className='text-2xl font-bold'>Contact Us</h1>
              <p className='text-gray-400 font-medium text-lg'>
                Ayn Technologies Pvt. Ltd., No.4, 2nd Floor, Vembuli Amman Koil
                Street, Ullagaram, Madipakkam, Chennai- 600091.
              </p>
              <p className='text-gray-400 font-medium text-lg'>
                +91-89259 22232
              </p>
              <p className='text-gray-400 font-medium text-lg'>
                info@ayntech.in
              </p>
              <div className='my-2 flex justify-center'>
                <BounceAnimation>
                  <button class='relative  rounded-full text-black bg-white font-roboto text-xl font-thin overflow-hidden p-4 w-48 h-48 transition-transform duration-200 ease-in-out transform hover:scale-105 focus:outline-none group hover:text-white'>
                    <span className='flex justify-center w-full'>
                      Contact Us <MdArrowOutward size={32} />
                    </span>
                    <span class='absolute inset-0 bg-yellow-400 rounded-full transform -translate-x-full rotate-10 transition-transform duration-200 ease-out group-hover:translate-x-0 z-[-1]'></span>
                  </button>
                </BounceAnimation>
              </div>
              <p className='text-gray-400 font-medium text-lg'>
                Partner with AYN Media, the Digital Marketing Company in Chennai
                that puts your business first. Whether you’re looking to boost
                your online visibility or drive more traffic to your website,
                we’ve got you covered.
              </p>
            </div>
          </div>

          <div className='flex flex-row text-white max-w-7xl md:mx-auto mx-4 py-12'>
            <div className='md:w-1/2 w-full'>
              <div className='flex flex-row gap-x-4 items-center'>
                <FcGoogle size={48} />
                <p className='text-gray-400 font-medium text-lg'>
                  Chennai&apos;s Leading Digital Agency
                </p>
              </div>
              <div className='flex flex-row gap-x-4 items-center mt-4'>
                <p className='text-primary font-bold text-xl'>30+</p>
                <div className='flex gap-x-2 flex-row'>
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} size={24} className='text-primary' />
                  ))}
                </div>
              </div>
            </div>
            <div className='md:w-1/2 w-full flex justify-end'>
              <p className='text-white text-sm'>
                &copy; {new Date().getFullYear()} AYN Technologies. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </div>{' '}
    </>
  );
};

export default Footer;
