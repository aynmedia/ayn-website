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
import socialMedia from '@/../../public/images/services/socialmarketing.svg';
import influencer from '@/../../public/images/services/influencer.jpg';
import heroImage from '@/../../public/images/services/header.jpg';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const InfluencerMarketingPage = () => {
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
            The Easiest Way to Reach a Larger Audience
          </h1>
          <p className='text-md font-medium'>
            Get the best Influencer Marketing services just a click away!
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
            <h1 className='text-4xl font-bold'>Influencer Marketing</h1>
            <p className='text-md font-medium'>
              Ayn Media, as a leading influencer marketing agency, recommends
              working with influencers who are authentic, have a strong base,
              and reach the right audience. Strategic planning and clear
              communication are key to a successful influencer campaign.
            </p>
            <ul className='text-md font-medium flex flex-col gap-4'>
              {[
                'Influencers work with 3-4 brands per month on average',
                '70% of marketers believe influencer marketing is more effective',
                'Significant impact in the lifestyle and fashion industries',
                'Food, entertainment, health, and fitness influencers are on the rise',
                '34% of businesses prefer influencer marketing',
              ].map((stat, index) => (
                <li key={index} className='flex gap-4'>
                  <BsCheckCircle size={24} className='text-primary' />
                  {stat}
                </li>
              ))}
            </ul>
          </div>
          <div className='w-full md:w-1/2 flex flex-col gap-4 justify-center items-center'>
            <Image
              src={socialMedia}
              alt='social-media'
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>

      <div
        ref={sectionRefs.whyChoose}
        className='mt-12 text-center max-w-7xl md:mx-auto mx-4'>
        <h1 className='text-4xl font-bold'>Why Choose Ayn Media?</h1>
        <p className='text-md font-medium mt-4'>
          At Ayn Media, we specialize in researching, evaluating, and selecting
          influencers that align with your brand’s nature, reach expectations,
          and ROI goals. We support you from the research phase all the way
          through to the launch, management, and measurement of the influencer
          campaign.
        </p>

        <div className='flex md:flex-row flex-col mt-12'>
          <div className='w-full md:w-1/2 flex flex-col gap-4 justify-center items-center'>
            {[
              {
                icon: IoMegaphoneOutline,
                title: 'Research Specialists',
                description:
                  'We are experts at finding the right influencers, which is why our clients trust us.',
              },
              {
                icon: FaUncharted,
                title: 'Marketing + Sales Strategy',
                description:
                  'We offer an integrated marketing strategy that connects sales and growth.',
              },
              {
                icon: GiTakeMyMoney,
                title: 'ROI-Focused Approach',
                description:
                  'We are committed to your budget and ensuring a high return on investment.',
              },
              {
                icon: CiMemoPad,
                title: 'Supporting Services',
                description:
                  'Ayn Media provides a comprehensive roadmap for influencer campaigns and offers hands-on support throughout execution and delivery.',
                sublist: [
                  {
                    title: 'Influencer Management',
                    description:
                      'We manage influencers and ensure consistent posting and engagement.',
                  },
                  {
                    title: 'Brand Strategy',
                    description:
                      'With our experience in brand building, we create strategies that target the right audience with the right messaging.',
                  },
                  {
                    title: 'Lead Generation Strategy',
                    description:
                      'We run effective ads to convert leads into tangible results through a strategic combination of sales and marketing.',
                  },
                  {
                    title: 'Online Reputation Management',
                    description:
                      'We provide ORM services for brands to manage and respond to customer queries and feedback online.',
                  },
                ],
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
                    {item.sublist && (
                      <ul className='text-md font-medium flex flex-col gap-4'>
                        {item.sublist.map((sublist, index) => (
                          <li
                            key={index}
                            className='flex flex-col gap-4 text-left'>
                            <h1 className='text-md font-bold'>
                              {sublist.title}
                            </h1>
                            <p className='text-md'>{sublist.description}</p>
                          </li>
                        ))}
                      </ul>
                    )}
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
                    "We work closely with influencers to provide regular analytics, ensuring you're always informed of the performance.",
                },
                {
                  title: 'Creatives',
                  description:
                    'Our creative team, armed with marketing knowledge, designs content that aligns with your brand and resonates with the audience.',
                },
                {
                  title: 'Market Study',
                  description:
                    'We offer a clear understanding of the digital landscape, ensuring that our strategies align with your business goals.',
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
                src={influencer}
                alt='social'
                width={1000}
                height={1000}
              />
            </div>
            <div className='md:w-1/4 w-full flex flex-col gap-12'>
              {[
                {
                  title: 'Optimization',
                  description:
                    'We develop tailored influencer strategies designed to increase brand awareness and foster deeper connections with your target audience.',
                },
                {
                  title: 'Media Planning',
                  description:
                    'We assist in cost-effective media planning, ensuring the efficient execution of campaigns for maximum impact.',
                },
                {
                  title: 'Dedicated Support Team',
                  description:
                    'We provide a dedicated account manager who will guide you and keep you updated throughout the process.',
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

export default InfluencerMarketingPage;
