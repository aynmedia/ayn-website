/** @format */
'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { BsCheckCircle } from 'react-icons/bs';
import { IoMegaphoneOutline } from 'react-icons/io5';
import { FaUncharted } from 'react-icons/fa';
import { BsGlobe } from 'react-icons/bs';
import { GiTakeMyMoney } from 'react-icons/gi';
import { CiMemoPad } from 'react-icons/ci';
import { GiOnTarget } from 'react-icons/gi';
import { PiStrategyDuotone } from 'react-icons/pi';
import { FaRegIdBadge } from 'react-icons/fa';
import Image from 'next/image';
import LinkedI from '@/../../public/images/services/in.png';
import linked from '@/../../public/images/linked.png';
import heroImage from '@/../../public/images/services/header.jpg';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const LinkedinMarketingPage = () => {
  const sectionRefs = {
    hero: useRef(null),
    stats: useRef(null),
    whyChoose: useRef(null),
    features: useRef(null),
  };

  useEffect(() => {
    const animateSection = (ref, options = {}) => {
      if (!ref.current) return;

      gsap.fromTo(
        ref.current.children,
        {
          opacity: 0,
          y: 50,
          ...options.fromProps,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
            ...options.scrollTriggerProps,
          },
          ...options.toProps,
        }
      );
    };

    // Animate different sections
    Object.values(sectionRefs).forEach((ref) => {
      animateSection(ref);
    });

    // Specific animations for feature cards
    gsap.utils.toArray('.feature-card').forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          x: index % 2 === 0 ? -50 : 50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    // Timeline for special features section
    const specialFeaturesTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#special-features',
        start: 'top 70%',
        toggleActions: 'play none none reverse',
      },
    });

    specialFeaturesTimeline
      .fromTo(
        '.special-feature-card',
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.5, stagger: 0.2 }
      )
      .fromTo(
        '#special-features-image',
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.7 },
        '-=0.3'
      );
  }, []);

  return (
    <div className='pt-48'>
      <div ref={sectionRefs.hero} className='max-w-7xl md:mx-auto mx-4'>
        <div className='flex flex-col md:flex-row items-center gap-4'>
          <h1 className='md:text-7xl text-4xl font-bold'>
            Get High-Quality Leads with LinkedIn
          </h1>
          <p className='text-md font-medium'>
            Start generating leads and attracting professionals today.
          </p>
        </div>

        <div className='flex flex-col md:flex-row items-center gap-4 my-12'>
          <p className='text-md font-medium'>
            Ayn Media, as one of the best LinkedIn advertising agencies in
            Chennai, offers services designed to build brand relationships,
            enhance brand leadership, generate high-quality leads, and conduct
            valuable market research.
          </p>
        </div>

        <div className='bg-primary h-[400px] w-full overflow-hidden my-12'>
          <Image src={heroImage} alt='hero' objectFit='cover' />
        </div>
      </div>

      <div ref={sectionRefs.stats} className='max-w-7xl md:mx-auto mx-4'>
        <div className='flex md:flex-row flex-col'>
          <div className='w-full md:w-1/2 flex flex-col gap-4'>
            <h1 className='text-4xl font-bold'>LinkedIn Marketing</h1>
            <p className='text-md font-medium'>
              Ayn Media provides LinkedIn advertising services with powerful
              statistics:
            </p>
            <ul className='text-md font-medium flex flex-col gap-4'>
              {[
                '61 million LinkedIn users are senior-level influencers',
                '40 million are in decision-making positions',
                '80% of B2B leads come from LinkedIn',
                '68% of LinkedIn generates 3x more conversions than Facebook',
                '38% of B2B marketers say LinkedIn is generating revenue',
                'LinkedIn offers the best Google-friendly structure',
              ].map((stat, index) => (
                <li key={index} className='flex gap-4'>
                  <BsCheckCircle size={24} className='text-primary' />
                  {stat}
                </li>
              ))}
            </ul>
          </div>
          <div className='w-full md:w-1/2 flex flex-col gap-4 justify-center items-center'>
            <Image src={linked} alt='social-media' width={500} height={500} />
          </div>
        </div>
      </div>

      <div
        ref={sectionRefs.whyChoose}
        className='mt-12 text-center max-w-7xl md:mx-auto mx-4'>
        <h1 className='text-4xl font-bold'>Why Choose Ayn Media?</h1>
        <p className='text-md font-medium mt-4'>
          From giving your brand a voice to converting loyal followers into
          potential leads, we handle every aspect of LinkedIn marketing.
        </p>

        <div className='flex md:flex-row flex-col mt-12'>
          <div className='w-full md:w-1/2 flex flex-col gap-4 justify-center items-center'>
            {[
              {
                icon: IoMegaphoneOutline,
                title: 'Lead Generation Specialists',
                description:
                  'We specialize in generating quality leads, and that’s why our clients love us.',
              },
              {
                icon: FaUncharted,
                title: 'Marketing + Sales Strategy',
                description:
                  'We integrate both marketing and sales strategies to create the perfect combo for your success.',
              },
              {
                icon: GiTakeMyMoney,
                title: 'ROI-Based Approach',
                description:
                  'We focus on delivering results within your budget, ensuring a positive return on investment.',
              },
              {
                icon: CiMemoPad,
                title: 'What Clients Can Expect',
                description:
                  'Ayn Media provides LinkedIn advertising services that deliver tangible results.',
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className='feature-card flex gap-4 mb-2 p-8 hover:shadow-lg rounded-lg'>
                  <span className='rounded-full bg-primary p-4 flex items-center justify-center w-24 h-24'>
                    <Icon size={64} />
                  </span>
                  <div className='flex flex-col gap-2'>
                    <h1 className='text-2xl font-bold'>{item.title}</h1>
                    <p className='text-md font-medium'>{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className='w-full md:w-1/2 flex flex-col gap-4'>
            {[
              {
                icon: FaRegIdBadge,
                title: 'Profile and Page Management',
                description:
                  'We manage your company’ss LinkedIn page to handle posts, likes, shares, and regular content updates.',
              },
              {
                icon: PiStrategyDuotone,
                title: 'Brand Strategy',
                description:
                  'We craft the best strategies to reach the right audience at the right time with the right message.',
              },
              {
                icon: GiOnTarget,
                title: 'Lead Generation Strategy',
                description:
                  'We focus on driving growth through effective ads and our integrated sales and marketing strategy.',
              },
              {
                icon: BsGlobe,
                title: 'Online Reputation Management',
                description:
                  'We help corporates and national brands manage and respond to online customer queries effectively.',
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className='feature-card flex gap-4 mb-2 p-8 hover:shadow-lg rounded-lg'>
                  <span className='rounded-full bg-primary p-4 flex items-center justify-center w-24 h-24'>
                    <Icon size={64} />
                  </span>
                  <div className='flex flex-col gap-2'>
                    <h1 className='text-2xl font-bold'>{item.title}</h1>
                    <p className='text-md font-medium'>{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div
        ref={sectionRefs.features}
        id='special-features'
        className='py-12 max-w-7xl md:mx-auto mx-4'>
        <div className='flex flex-col items-center justify-center gap-6'>
          <h1 className='text-3xl font-bold'>Our Special Features</h1>
          <div className='flex flex-col md:flex-row gap-4'>
            <div className='md:w-1/4 w-full flex flex-col gap-12'>
              {[
                {
                  title: 'Analytics Report',
                  description:
                    "Receive regular weekly and monthly analytics to stay informed about your campaign's performance.",
                },
                {
                  title: 'Creatives',
                  description:
                    'Our dedicated creative team combines marketing knowledge with innovation to craft compelling content.',
                },
                {
                  title: 'Market Study',
                  description:
                    'Our clients gain a clear understanding of the digital landscape and opportunities for their brand.',
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className='special-feature-card border border-gray-400/50 rounded-lg p-4 shadow-lg hover:bg-secondary hover:text-white'>
                  <h1 className='text-md font-bold'>{feature.title}</h1>
                  <p className='text-md font-medium'>{feature.description}</p>
                </div>
              ))}
            </div>
            <div className='md:w-2/4 w-full'>
              <Image
                id='special-features-image'
                src={LinkedI}
                alt='social'
                width={1000}
                height={1000}
              />
            </div>
            <div className='md:w-1/4 w-full flex flex-col gap-12'>
              {[
                {
                  title: 'Social Media Optimization (SMO)',
                  description:
                    'We develop SMO strategies that boost brand awareness and foster connections with your customers.',
                },
                {
                  title: 'Media Planning',
                  description:
                    'We assist in media planning, ensuring cost-effective strategies and seamless execution.',
                },
                {
                  title: 'Dedicated Support Team',
                  description:
                    'We provide a dedicated account manager who will guide you through every step and keep you updated.',
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className='special-feature-card border border-gray-400/50 rounded-lg p-4 shadow-lg hover:bg-secondary hover:text-white'>
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

export default LinkedinMarketingPage;
