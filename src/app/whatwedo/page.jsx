/** @format */

import React from 'react';
import Image from 'next/image';
import howwe from '@/../../public/images/about/howwe.jpg';

import Rotate from '../components/animations/rotateAnimation';
import LogoSlider from '../components/logoslider';
import ceo from '@/../../public/images/ceo.jpg';
const Page = () => {
  return (
    <div className='pb-12'>
      <div className='max-w-7xl md:mx-auto mx-4 my-12 '>
        <div className='flex flex-col items-center gap-4'>
          <Rotate>
            <h1 className='md:text-7xl text-4xl font-bold w-full'>
              What We Do
            </h1>
          </Rotate>
          <Rotate>
            <p className='text-lg font-medium'>
              At AynMedia, we work hand in hand to create extraordinary results.
              With a blend of dedicated teamwork and seamless synergy, we
              cultivate relationships that buzz with success. Our process is a
              carefully choreographed dance, where every step is guided by
              trust, communication, and a shared commitment to excellence.
            </p>
          </Rotate>
        </div>

        <div className='bg-primary h-[400px] w-full overflow-hidden my-12'>
          {/* <div className='relative'>
            <Video />
          </div> */}
        </div>
        <div className='flex md:flex-row flex-col gap-12'>
          <div className='w-full md:w-1/2 flex flex-col gap-4'>
            <p>We help you to</p>
            <Rotate>
              <h1 className='text-4xl font-bold'>REACH EVERY WHERE</h1>
            </Rotate>
            <Image src={howwe} alt='social-media' width={800} height={800} />
          </div>
          <div className='w-full md:w-1/2 flex flex-col gap-4 my-12 '>
            <h1 className='text-2xl font-bold'>VISION TO REALITY</h1>
            <p>
              At AynMedia, we transform the ordinary into the extraordinary
              through a blend of strategic consulting, innovative design,
              cutting-edge digital marketing, and comprehensive web solutions.
              Our hive is equipped with a range of in-house skills, covering
              everything from brand development and marketing strategy to
              creative design, customer experience, and performance analytics
              across both traditional and digital channels. We don&apos;t just
              think outside the box; we redefine it, uncovering untapped
              opportunities that flourish like wildflowers. Driven by our
              mission to explore new horizons, we deliver inspired approaches
              that create impactful differentiation, spreading our wings like
              diligent bees in search of sweet nectar. With our complete
              in-house capabilities, we seamlessly integrate solutions, offering
              a one-stop hive for all your needs.
            </p>
            <p>
              Founded in 2020, based in Chennai India we serve clients not only
              across the nation but also on an international scale. Our wings
              span far and wide, spreading our unique brand of creativity and
              expertise to help businesses thrive and bloom globally.
            </p>
            <p>
              Strategy, Creation and Performance are key parts of what we do.
            </p>
            <h1 className='text-2xl font-bold'>Innovative Thinking</h1>
            <p>
              We challenge conventional methods to uncover opportunities that
              others might miss, pushing the boundaries of innovation.
            </p>
            <h1 className='text-2xl font-bold'>Exploring New Horizons</h1>
            <p>
              Our mission is to discover and implement fresh, strategic
              solutions, venturing into uncharted territories.
            </p>
            <h1 className='text-2xl font-bold'>Inspired Strategies</h1>
            <p>
              We focus on creating impactful differentiation, crafting
              strategies that resonate and stand out in your industry.
            </p>
            <h1 className='text-2xl font-bold'>Unified Solutions</h1>
            <p>
              With our full suite of in-house expertise, we provide a seamless,
              all-inclusive solution for all your digital marketing needs.
            </p>
          </div>
        </div>

        <div className='flex flex-col md:flex-row gap-4 my-12 md:my-24 justify-center text-secondary'>
          <div className='w-full md:1/4 text-center flex flex-row md:flex-col gap-4 justify-center'>
            <h1 className='text-2xl md:text-7xl font-bold'>300 +</h1>
            <p className='text-xl font-bold'>Clients</p>
          </div>
          <div className='w-full md:1/4 text-center flex flex-row md:flex-col gap-4 justify-center'>
            <h1 className='text-2xl md:text-7xl font-bold'>2K +</h1>
            <p className='text-xl font-bold'>Projects</p>
          </div>
          <div className='w-full md:1/4 text-center flex flex-row md:flex-col gap-4 justify-center'>
            <h1 className='text-2xl md:text-7xl font-bold'>5</h1>
            <p className='text-xl font-bold'>Countries</p>
          </div>
          <div className='w-full md:1/4 text-center flex flex-row md:flex-col gap-4 justify-center'>
            <h1 className='text-2xl md:text-7xl font-bold'>50 +</h1>
            <p className='text-xl font-bold'>Industries</p>
          </div>
        </div>
      </div>
      {/* New Sections */}
      <div className='my-12 w-full bg-secondary text-white py-12'>
        <div className='max-w-7xl mx-4 md:mx-auto'>
          <h2 className='text-4xl font-bold mb-12 text-primary text-center'>
            Our Approach
          </h2>
          <div className='grid md:grid-cols-2 gap-8'>
            <div>
              <h3 className='text-2xl font-semibold mb-4 text-primary'>
                Understanding Your Business
              </h3>
              <ul className='list-disc pl-5 space-y-2'>
                <li>
                  Conduct in-depth research to understand your industry, target
                  audience, and competition.
                </li>
                <li>
                  Identify your unique selling propositions (USPs) and pain
                  points.
                </li>
                <li>Define clear goals and objectives for the project.</li>
              </ul>
            </div>
            <div>
              <h3 className='text-2xl font-semibold mb-4 text-primary'>
                Crafting a Tailored Strategy
              </h3>
              <ul className='list-disc pl-5 space-y-2'>
                <li>
                  Develop a custom digital marketing plan based on your specific
                  needs.
                </li>
                <li>
                  Combine data-driven insights with creative storytelling to
                  create an effective strategy.
                </li>
                <li>
                  Choose the right platforms and tools to maximize reach and
                  engagement.
                </li>
              </ul>
            </div>
            <div>
              <h3 className='text-2xl font-semibold mb-4 text-primary'>
                Flawless Execution
              </h3>
              <ul className='list-disc pl-5 space-y-2'>
                <li>
                  Track the performance of campaigns using real-time analytics.
                </li>
                <li>
                  Monitor key metrics such as ROI, engagement, and traffic to
                  assess effectiveness.
                </li>
                <li>Identify areas of improvement for optimization.</li>
              </ul>
            </div>
            <div>
              <h3 className='text-2xl font-semibold mb-4 text-primary'>
                Delivering Results
              </h3>
              <ul className='list-disc pl-5 space-y-2'>
                <li>
                  Focus on achieving tangible outcomes like increased
                  visibility, engagement, and conversions.
                </li>
                <li>
                  Provide detailed reports to keep you informed about campaign
                  performance.
                </li>
                <li>
                  Commit to exceeding client expectations with measurable
                  growth.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='max-w-7xl md:mx-auto mx-4 my-12 '>
        <div className='flex flex-col md:flex-row gap-4 my-12'>
          <div className='w-full md:w-1/2 flex flex-col gap-4 items-center'>
            <Image
              src={ceo}
              alt='ceo'
              width={450}
              height={450}
              className='rounded-lg'
            />
          </div>
          <div className='my-12 w-full md:w-1/2'>
            <h2 className='text-4xl font-bold mb-8'>Our Leadership</h2>
            <div className='bg-gray-100 p-8 rounded-lg'>
              <h3 className='text-2xl font-semibold'>Ayn Gajendran</h3>
              <p className='text-lg italic mb-4'>
                Founder & CEO, AYN Media & Technologies Pvt. Ltd.
              </p>
              <p className='mb-4'>
                With over 25 years of rich experience in Sales and Marketing,
                Ayn Gajendran brings unparalleled expertise to the table. Having
                worked in senior management roles across India, the UK, and Gulf
                countries, he has been instrumental in driving success for top
                corporate brands globally.
              </p>
              <p className='mb-4'>
                Ayn&apos;s career boasts a remarkable portfolio, with direct
                involvement in branding and marketing for over 3,500 brands. His
                deep understanding of diverse markets, cultures, and industries
                allows him to craft strategies that resonate on a global scale
                while delivering impactful results tailored to local needs.
              </p>
              <p className='mb-4'>
                Under his visionary leadership, AYN Media has rapidly become a
                trusted name in digital marketing, helping businesses achieve
                new heights through innovative, results-oriented solutions.
                Ayn&apos;s dedication to excellence and his ability to adapt to
                evolving trends ensure that every project meets the highest
                standards of quality and effectiveness.
              </p>
              <p>
                His journey is a testament to his passion for branding and his
                commitment to empowering businesses to thrive in today&apos;s
                competitive landscape.
              </p>
            </div>
          </div>
        </div>
      </div>

      <LogoSlider />
    </div>
  );
};

export default Page;
