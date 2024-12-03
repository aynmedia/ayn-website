/** @format */
'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { BsCheckCircle } from 'react-icons/bs';
import { PiGraphDuotone } from 'react-icons/pi';
import { FaUncharted } from 'react-icons/fa';
import { SiContentstack } from 'react-icons/si';
import { MdOutlineDesignServices } from 'react-icons/md';
import { PiSuitcaseSimpleDuotone } from 'react-icons/pi';
import { CiShop } from 'react-icons/ci';
import { GiMilkCarton } from 'react-icons/gi';
import Image from 'next/image';
import pc from '@/../../public/images/services/pc.svg';
import social from '@/../../public/images/services/social.svg';
import design from '@/../../public/images/services/design.svg';
import heroImage from '@/../../public/images/services/header.jpg';

gsap.registerPlugin(ScrollTrigger);

const WebdesignPage = () => {
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
              We Craft Memorable Experiences Through Our Designs
            </h1>
            <p className='text-md font-medium mt-4 max-w-4xl'>
              Our Design Services We breathe life into your brand with our
              comprehensive branding solutions.
            </p>
          </div>
        </div>

        <div className='bg-primary h-[400px] w-full overflow-hidden my-12'>
          <Image src={heroImage} alt='hero' objectFit='cover' />
        </div>

        <div
          ref={(el) => sectionRefs.current.push(el)}
          className='flex md:flex-row flex-col'>
          <div className='w-full md:w-1/2 flex flex-col gap-4'>
            <h1 className='text-4xl font-bold'>
              Web Design - Experience Your Brand
            </h1>
            <p className='text-md font-medium'>
              Design is more than just aesthetics; it’s about communicating your
              brand’s message and meeting its objectives. At Ayn Media, we focus
              on creating designs that are not only visually captivating but
              also communicate effectively, leaving a lasting impact on your
              users.
            </p>
            <ul className='text-md font-medium flex flex-col gap-4'>
              {[
                'Converts prospects into loyal clients',
                'Creates a memorable, lasting impression',
                'Builds customer trust',
                'Nurtures and engages your leads',
                'Grabs attention in an instant',
              ].map((item, index) => (
                <li key={index} className='flex gap-4 items-center'>
                  <BsCheckCircle size={24} className='text-primary' />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className='w-full md:w-1/2 flex flex-col gap-4 justify-center items-center'>
            <Image src={pc} alt='social-media' width={500} height={500} />
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
              From crafting user-centric, innovative designs to delivering
              memorable brand experiences, we handle it all. At Ayn Media, our
              mission is to develop dynamic, result-driven, and creative designs
              that are both visually appealing and effective.
            </p>
            {[
              {
                icon: <FaUncharted size={64} />,
                title: 'Expert Strategy',
                description:
                  'We design with purpose, creating strategies that mirror your brand’s essence.',
              },
              {
                icon: <PiGraphDuotone size={64} />,
                title: 'Unique Designs',
                description:
                  'Every design is custom-tailored to set your brand apart from the competition.',
              },
              {
                icon: <SiContentstack size={64} />,
                title: 'Content Strategy',
                description:
                  'We provide strong content strategies to complement and enhance your design.',
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
            4 Key Design Services
          </h1>
          <p className='text-md font-medium text-white text-center'>
            At Ayn Media, we specialize in delivering high-end creative design
            solutions tailored to meet the specific needs of your brand. Our
            team of skilled professionals treats design as the online face of
            your brand, ensuring it is both unique and user-friendly.
          </p>
        </div>
      </div>

      <div
        ref={(el) => sectionRefs.current.push(el)}
        className='max-w-7xl md:mx-auto mx-4 relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 my-12'>
        {[
          {
            icon: <MdOutlineDesignServices size={64} />,
            name: 'Logo Design',
            description:
              'We create logos that reflect your brand’s identity and appeal to your target market.',
          },
          {
            icon: <PiSuitcaseSimpleDuotone size={64} />,
            name: 'Corporate Design',
            description:
              'From brochures to content optimization, we revamp corporate materials to make them more attractive and effective.',
          },
          {
            icon: <CiShop size={64} />,
            name: 'Catalog Design',
            description:
              'We design product catalogs, brochures, and pamphlets with clear and compelling content to communicate your message.',
          },
          {
            icon: <GiMilkCarton size={64} />,
            name: 'Packaging Design',
            description:
              'We develop customized packaging designs that leave a lasting impression on your products and customers.',
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
                  title: 'Corporate Identity',
                  description:
                    'We help you establish a strong corporate identity seamlessly, ensuring consistency across all touchpoints.',
                },
                {
                  title: 'Logo Design',
                  description:
                    'Our logo design process bridges your brand’s mission with the needs of your audience, creating a lasting visual identity.',
                },
                {
                  title: 'Brochure Design',
                  description:
                    'We design brochures that define your communication strategy, aligning it perfectly with your brand’s voice and design expectations.',
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
              <Image src={design} alt='social' width={1000} height={1000} />
            </div>
            <div className='md:w-1/4 w-full flex flex-col gap-12'>
              {[
                {
                  title: 'Catalog Design',
                  description:
                    'Whether it’s a product catalog or service guide, we captivate your customers with effective and engaging catalog designs.',
                },
                {
                  title: 'Package Design',
                  description:
                    'Our package designs position your product in the minds of consumers, enhancing brand recall and product appeal.',
                },
                {
                  title: 'Poster Design',
                  description:
                    'We create compelling posters that impress your audience through creative design and powerful communication.',
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

export default WebdesignPage;
