/** @format */
'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { BsBox2Heart, BsCheckCircle } from 'react-icons/bs';
import { CiFacebook, CiInstagram, CiLinkedin, CiYoutube } from 'react-icons/ci';
import Image from 'next/image';
import photo from '@/../../public/images/services/photo.png';
import social from '@/../../public/images/services/social.svg';
import photographer from '@/../../public/images/services/photographer.svg';
import heroImage from '@/../../public/images/services/header.jpg';
import { SiTicktick } from 'react-icons/si';
import { BiSupport } from 'react-icons/bi';
import { MdRebaseEdit } from 'react-icons/md';
import { GiEarrings, GiLargeDress } from 'react-icons/gi';
import { FaShopify } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const Photography = () => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    sectionRefs.current.forEach((section) => {
      gsap.fromTo(
        section.children,
        {
          opacity: 0,
          y: 50,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  return (
    <div className='pt-48 '>
      <div className='max-w-7xl md:mx-auto mx-4 '>
        <div
          ref={(el) => sectionRefs.current.push(el)}
          className='flex flex-col md:flex-row items-center gap-4 '>
          <div className='flex gap-4'>
            <h1 className='md:text-7xl text-4xl font-bold'>
              Make Your Products Speak & Sell with Expert Product Photography
            </h1>
            <p className='text-md font-medium mt-4 max-w-4xl'>
              Top-Quality Product Photography Services by Ayn Media's Chennai
              Team
            </p>
          </div>
        </div>

        <div
          ref={(el) => sectionRefs.current.push(el)}
          className='flex flex-col md:flex-row items-center gap-4 my-12'>
          <p className='text-md font-medium'>
            Over 3.5 billion people worldwide actively use social
            media—that&apos;s an immense pool of potential clients waiting to be
            reached. In today's digital age, establishing a robust online
            presence is essential.
          </p>
        </div>

        <div className='bg-primary h-[400px] w-full overflow-hidden my-12'>
          <Image src={heroImage} alt='hero' objectFit='cover' />
        </div>

        <div
          ref={(el) => sectionRefs.current.push(el)}
          className='flex md:flex-row flex-col'>
          <div className='w-full md:w-1/2 flex flex-col gap-4'>
            <h1 className='text-4xl font-bold'>
              Product Photography Services at Ayn Media
            </h1>
            <p className='text-md font-medium'>
              Our Product Photography service is designed to showcase your
              products in the most effective and impactful way. We help present
              your products beautifully, highlighting their features and
              ensuring they stand out to your customers. Our expert photo and
              image editing services add that perfect finishing touch for a
              polished and professional look.
            </p>
            <ul className='text-md font-medium flex flex-col gap-4'>
              {[
                'Expert Photography Team',
                'All-in-One Solution',
                'Product Image Editing',
                'Customer Location Photoshoots',
              ].map((item, index) => (
                <li key={index} className='flex gap-4 items-center'>
                  <BsCheckCircle size={24} className='text-primary' />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className='w-full md:w-1/2 flex flex-col gap-4 justify-center items-center'>
            <Image src={photo} alt='social-media' width={500} height={500} />
          </div>
        </div>

        <div
          ref={(el) => sectionRefs.current.push(el)}
          className='flex md:flex-row flex-col mt-12'>
          <div className='w-full md:w-1/2 flex flex-col gap-4 justify-center items-center'>
            <Image src={social} alt='social' width={600} height={600} />
          </div>
          <div className='w-full md:w-1/2 flex flex-col gap-4'>
            <h1 className='text-4xl font-bold'>Why Choose Ayn Media?</h1>
            <p className='text-md font-medium'>
              At Ayn Media, we know the importance of high-quality imagery and
              customer support. Whether it's cutting-edge editing, color
              correction, or re-imagining images for commercial purposes, our
              experienced team ensures your product photos are flawless and
              align with your brand's vision.
            </p>
            {[
              {
                icon: <MdRebaseEdit size={64} />,
                title: 'Editing Experts',
                description:
                  'We specialize in transforming photos with strategic planning and precision to deliver the best results.',
              },
              {
                icon: <SiTicktick size={64} />,
                title: 'Comprehensive Solutions',
                description:
                  'From product shoots to final edits, our team provides a full spectrum of photography services, ensuring your products shine in every shot.',
              },
              {
                icon: <BiSupport size={64} />,
                title: 'Client Support',
                description:
                  'We ensure clear and consistent communication, providing updates throughout the photoshoot and editing process.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className='flex gap-4 mb-2 p-8 hover:shadow-xl rounded-lg transition-all duration-300'>
                <span className='rounded-full bg-primary p-4 flex items-center justify-center w-24 h-24'>
                  {item.icon}
                </span>
                <div className='flex flex-col gap-2'>
                  <h1 className='text-2xl font-bold'>{item.title}</h1>
                  <p className='text-md font-medium'>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='bg-secondary py-24 w-full mt-12'>
        <div className='max-w-7xl md:mx-auto mx-4 flex flex-col items-center justify-center gap-6'>
          <h1 className='text-3xl font-bold text-white text-center'>
            4 Major Product Photography Services
          </h1>
          <p className='text-md font-medium text-white text-center'>
            At Ayn Media, we offer high-end product photography solutions
            tailored to meet your unique needs. Our approach goes beyond
            standard methods, ensuring your product images leave a lasting
            impression.
          </p>
        </div>
      </div>

      <div
        ref={(el) => sectionRefs.current.push(el)}
        className='max-w-7xl md:mx-auto mx-4 relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 my-12'>
        {[
          {
            icon: <BsBox2Heart size={64} />,
            name: 'Product & Packaging Photography',
            description:
              'Whether it’s individual products or packaging, we capture the perfect image to make your products stand out.',
          },
          {
            icon: <GiEarrings size={64} />,
            name: 'Jewelry Photography',
            description:
              'Our team takes a meticulous approach to jewelry photography, emphasizing details to enhance your product’s elegance and appeal.',
          },
          {
            icon: <GiLargeDress size={64} />,
            name: 'Fashion Photography',
            description:
              'Our expertise in fashion photography helps you showcase clothing and accessories with style and flair.',
          },
          {
            icon: <FaShopify size={64} />,
            name: 'eCommerce Photography',
            description:
              'Your eCommerce photos are crucial for customer trust and conversion. We ensure each image accurately represents your product and enhances your brands credibility.',
          },
        ].map((platform, index) => (
          <div
            key={index}
            className='p-12 flex gap-6 justify-center bg-white rounded-lg border border-gray-400/50 hover:bg-secondary hover:text-white transition-all duration-300'>
            <span className='rounded-full bg-primary p-4 flex items-center justify-center w-24 h-24'>
              {platform.icon}
            </span>
            <div className='flex flex-col gap-4'>
              <h2 className='text-md font-bold'>{platform.name}</h2>
              <p className='text-md'>{platform.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div ref={(el) => sectionRefs.current.push(el)} className='py-12'>
        <div className='max-w-7xl md:mx-auto mx-4 flex flex-col items-center justify-center gap-6'>
          <h1 className='text-3xl font-bold'>Our Special Features</h1>
          <p className='text-md font-medium text-center'>
            We offer a wide range of services to help you achieve your marketing
            goals. From social media marketing to content creation, we have the
            tools and expertise to help you succeed.
          </p>
          <div className='flex flex-col md:flex-row gap-4'>
            <div className='md:w-1/4 w-full flex flex-col gap-12'>
              {[
                {
                  title: 'Ecommerce Product Photography',
                  description:
                    'We help you create seamless and professional product photos for your eCommerce store without any hassle.',
                },
                {
                  title: 'Fashion Product Photography',
                  description:
                    'We specialize in shooting models, dresses, sportswear, and kids’s clothing, ensuring your fashion products are presented in their best light.',
                },
                {
                  title: 'Product Package Photography',
                  description:
                    'Our team delivers high-quality product package photography that fits within your budget while maintaining a premium look and feel.',
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className='border border-gray-400/50 rounded-lg p-4 shadow-none hover:bg-secondary hover:text-white transition-all duration-300'>
                  <h1 className='text-md font-bold'>{feature.title}</h1>
                  <p className='text-md font-medium'>{feature.description}</p>
                </div>
              ))}
            </div>
            <div className='md:w-2/4 w-full'>
              <Image
                src={photographer}
                alt='social'
                width={1000}
                height={1000}
              />
            </div>
            <div className='md:w-1/4 w-full flex flex-col gap-12'>
              {[
                {
                  title: 'Food Photography',
                  description:
                    'We combine stunning visuals with food styling to create mouth-watering images that bring your dishes to life.',
                },
                {
                  title: 'Jewelry Photography',
                  description:
                    'Let us highlight the intricate beauty of your jewelry with expert photography that captures every detail, drawing attention from potential buyers.',
                },
                {
                  title: 'Photo Editing Services',
                  description:
                    'Our editing services ensure your product images are polished to perfection, enhancing their appeal with precision and creativity.',
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className='border border-gray-400/50 rounded-lg p-4 shadow-none hover:bg-secondary hover:text-white transition-all duration-300'>
                  <h1 className='text-md font-bold'>{feature.title}</h1>
                  <p className='text-md font-medium'>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photography;
