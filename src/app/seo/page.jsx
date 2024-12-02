/** @format */
'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { BsCheckCircle } from 'react-icons/bs';
import { RiTeamLine } from 'react-icons/ri';
import { SlBadge } from 'react-icons/sl';
import { GrUserExpert } from 'react-icons/gr';
import { RiSeoLine } from 'react-icons/ri';
import { BiStoreAlt } from 'react-icons/bi';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';
import { CiYoutube } from 'react-icons/ci';
import Image from 'next/image';
import seo from '@/../../public/images/services/seo.jpg';
import social from '@/../../public/images/services/social.svg';
import seofeature from '@/../../public/images/services/seofeature.svg';
import heroImage from '@/../../public/images/services/header.jpg';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const ServicesPage = () => {
  const headlineRef = useRef(null);
  const subheadlineRef = useRef(null);
  const seoSectionRef = useRef(null);
  const whyChooseSectionRef = useRef(null);
  const expertiseSectionRef = useRef(null);
  const featuresSectionRef = useRef(null);

  useEffect(() => {
    const animateElements = (refs) => {
      refs.forEach((ref) => {
        if (ref.current) {
          gsap.fromTo(
            ref.current,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              scrollTrigger: {
                trigger: ref.current,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        }
      });
    };

    animateElements([
      headlineRef,
      subheadlineRef,
      seoSectionRef,
      whyChooseSectionRef,
      expertiseSectionRef,
      featuresSectionRef,
    ]);

    // Animate individual list items and cards with staggered effect
    gsap.utils.toArray('.animate-item').forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  return (
    <div className='pt-48'>
      <div className='max-w-7xl md:mx-auto mx-4'>
        <div className='flex flex-col md:flex-row items-center gap-4'>
          <h1 ref={headlineRef} className='md:text-7xl text-4xl font-bold'>
            Drive More Traffic to Your Website
          </h1>

          <p ref={subheadlineRef} className='text-md font-medium'>
            The best SEO and Search Engine Marketing company that delivers
            results.
          </p>
        </div>

        <div className='flex flex-col md:flex-row items-center gap-4 my-12'>
          <p className='text-md font-medium'>
            Consumers spend an average of 13 minutes reading Local SEO reviews
            before making a decision
          </p>
        </div>
        <div className='bg-primary h-[400px] w-full overflow-hidden my-12'>
          <Image src={heroImage} alt='hero' objectFit='cover' />
        </div>
        <div ref={seoSectionRef} className='flex md:flex-row flex-col'>
          <div className='w-full md:w-1/2 flex flex-col gap-4'>
            <h1 className='text-4xl font-bold'>
              Search Engine Optimization (SEO) and Local SEO
            </h1>
            <p className='text-md font-medium'>
              Google's organic rankings are directly tied to your SEO, which
              drives the number of organic leads you generate. 60% of marketers
              report that leads from SEO have a high-quality conversion rate. We
              achieve this through a streamlined process.
            </p>
            <ul className='text-md font-medium flex flex-col gap-4'>
              {[
                'SEO leads have a 14% higher close rate',
                '39% of buyers are influenced by relevant search results',
                'Nearly 1 in 3 searches are location-based (Local SEO)',
              ].map((item, index) => (
                <li key={index} className='flex gap-4 animate-item'>
                  <BsCheckCircle size={24} className='text-primary' />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className='w-full md:w-1/2 flex flex-col gap-4 justify-center items-center'>
            <Image src={seo} alt='social-media' width={500} height={500} />
          </div>
        </div>
        <div
          ref={whyChooseSectionRef}
          className='flex md:flex-row flex-col mt-12'>
          <div className='w-full md:w-1/2 flex flex-col gap-4 justify-center items-center'>
            <Image src={social} alt='social' width={600} height={600} />
          </div>
          <div className='w-full md:w-1/2 flex flex-col gap-4'>
            <h1 className='text-4xl font-bold'>Why Choose Ayn Media?</h1>
            <p className='text-md font-medium'>
              If you&apos;re searching for the best SEO company in Chennai, Ayn
              Media is your ideal partner. We've helped clients achieve a 45%
              increase in organic results through effective SEO strategies. From
              website optimization to off-page optimization, we're committed to
              delivering superior results.
            </p>
            {[
              {
                icon: <RiTeamLine size={64} />,
                title: 'Experienced Team',
                description:
                  'Our proven keyword strategies minimize the need for extensive A/B testing in the SEO process.',
              },
              {
                icon: <GrUserExpert size={64} />,
                title: 'Expert in Keyword Research',
                description:
                  'We focus on strategic keyword research to reduce competition and drive better results.',
              },
              {
                icon: <SlBadge size={64} />,
                title: 'Proven Track Record',
                description:
                  "On average, we've increased our clients' traffic by 14% to 45% through targeted SEO strategies.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className='flex gap-4 mb-2 p-8 hover:shadow-xl rounded-lg animate-item'>
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
      <div ref={expertiseSectionRef} className='bg-secondary py-24 w-full'>
        <div className='max-w-7xl md:mx-auto mx-4 flex flex-col items-center justify-center gap-6'>
          <h1 className='text-3xl font-bold text-white'>Our Expertise</h1>
        </div>
      </div>
      <div className='max-w-7xl md:mx-auto mx-4 relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 my-12 '>
        <div className='absolute inset-0 flex justify-between opacity-10 -z-10 '>
          {[...Array(4)].map((_, index) => (
            <span key={index} className='w-[2px] bg-gray-500 h-full'></span>
          ))}
        </div>

        {[
          {
            icon: <RiSeoLine size={64} />,
            title: 'Local SEO',
            description:
              "If your business isn't visible in local searches, you're missing out on ready-to-purchase customers. 30% of customers are more likely to buy from a business that's easily accessible through search.",
          },
          {
            icon: <BiStoreAlt size={64} />,
            title: 'E Commerce SEO',
            description:
              'ECommerce owners looking to boost organic sales can benefit from our tailored services. We optimize your product searches and search behavior to position your website at the top.',
          },
          {
            icon: <HiOutlineOfficeBuilding size={64} />,
            title: 'Corporate SEO',
            description:
              "For brands with 100+ pages, it's crucial to have a team of experts who can strategically implement SEO to harness organic traffic. Ayn Media has the expertise to get the job done.",
          },
          {
            icon: <CiYoutube size={64} />,
            title: 'Video SEO',
            description:
              "Wondering why your YouTube videos aren't performing as well as your competitors? Video SEO plays a significant role. Optimized videos can increase views by 15% to 40%.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className='p-12 flex gap-6 justify-center bg-white rounded-lg shadow-lg hover:bg-secondary hover:text-white animate-item'>
            <span className='rounded-full bg-primary p-4 flex items-center justify-center w-24 h-24'>
              {item.icon}
            </span>
            <div className='flex flex-col gap-4'>
              <h2 className='text-md font-bold'>{item.title}</h2>
              <p className='text-md'>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div ref={featuresSectionRef} className='py-12'>
        <div className='max-w-7xl md:mx-auto mx-4 flex flex-col items-center justify-center gap-6'>
          <h1 className='text-3xl font-bold'>Our Special Features</h1>
          <p className='text-md font-medium'>
            We offer a wide range of services to help you achieve your marketing
            goals. From social media marketing to content creation, we have the
            tools and expertise to help you succeed.
          </p>
          <div className='flex flex-col md:flex-row gap-4'>
            <div className='md:w-1/4 w-full flex flex-col gap-12'>
              {[
                {
                  title: 'Experienced Team',
                  description:
                    'Our team brings over 5 years of experience in the digital industry, delivering expert strategies.',
                },
                {
                  title: 'Ethical SEO Process',
                  description:
                    'Ayn Media follows white-hat techniques to ensure long-term, sustainable SEO results.',
                },
                {
                  title: 'Dedicated Manager',
                  description:
                    'We provide a dedicated manager to guide and keep you updated throughout your SEO journey.',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className='border border-gray-400/50 rounded-lg p-4 shadow-lg hover:bg-secondary hover:text-white animate-item'>
                  <h1 className='text-md font-bold'>{item.title}</h1>
                  <p className='text-md font-medium'>{item.description}</p>
                </div>
              ))}
            </div>
            <div className='md:w-2/4 w-full'>
              <Image src={seofeature} alt='social' width={1000} height={1000} />
            </div>
            <div className='md:w-1/4 w-full flex flex-col gap-12'>
              {[
                {
                  title: 'Periodic Review',
                  description:
                    'Our strategic plans and regular reviews, accompanied by transparent reports, set us apart from others.',
                },
                {
                  title: 'Keyword Research',
                  description:
                    'Investing time and effort in thorough SEO keyword research significantly improves your rankings in a short time.',
                },
                {
                  title: 'Content Marketing',
                  description:
                    'Our content team, backed by industry expertise, enhances your SEO results with high-quality, targeted content.',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className='border border-gray-400/50 rounded-lg p-4 shadow-lg hover:bg-secondary hover:text-white animate-item'>
                  <h1 className='text-md font-bold'>{item.title}</h1>
                  <p className='text-md font-medium'>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
