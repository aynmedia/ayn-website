/** @format */

import React from 'react';
import Image from 'next/image';
import abouthead from '@/../../public/images/about/abouthead.svg';
import image1 from '@/../../public/images/about/image1.jpg';
import image2 from '@/../../public/images/about/image2.jpg';
import image3 from '@/../../public/images/about/image3.jpg';
import image4 from '@/../../public/images/about/image4.jpg';

import Rotate from '../components/animations/rotateAnimation';
import LogoSlider from '../components/logoslider';
const page = () => {
  return (
    <div className='pb-48'>
      <div className='max-w-7xl md:mx-auto mx-4 my-12 '>
        <div className='flex flex-col md:flex-row items-center gap-4'>
          <Rotate>
            <h1 className='md:text-7xl text-4xl font-bold'>
              About AYN Media & Technologies
            </h1>
          </Rotate>
          <Rotate>
            <p className='text-lg font-medium'>
              AYN Media & Technologies Pvt. Ltd., was founded in 2020 and has
              quickly established itself as a leading Digital Marketing Agency
              Our young and dynamic team offers full-service branding, digital
              marketing, and ad film production, delivering results-driven
              projects that help businesses thrive in the competitive digital
              landscape.
            </p>
          </Rotate>
        </div>

        <div className='flex flex-col md:flex-row items-center gap-4 my-12'>
          <Rotate>
            <p className='text-lg font-medium'>
              As a creative brand builder and strategist, AYN Media &
              Technologies empowers organizations to increase revenue by
              generating more leads and driving business growth. We help brands
              capitalize on opportunities to boost sales and expand their reach.
              Our digital marketing services focus on crafting innovative
              strategies, implementing cutting-edge technologies, and delivering
              solutions that maximize business success and growth.
            </p>
          </Rotate>
        </div>
        <div className='bg-primary h-[400px] w-full overflow-hidden my-12'>
          {/* <div className='relative'>
            <Video />
          </div> */}
        </div>
        <div className='flex md:flex-row flex-col gap-4'>
          <div className='w-full md:w-1/2 flex flex-col gap-4'>
            <p>We help you to</p>
            <Rotate>
              <h1 className='text-4xl font-bold'>REACH EVERY WHERE</h1>
            </Rotate>
            <Image
              src={abouthead}
              alt='social-media'
              width={800}
              height={800}
            />
          </div>
          <div className='w-full md:w-1/2 flex flex-col gap-4 my-12 '>
            <h1 className='text-2xl font-bold'>Introduction</h1>
            <p>
              Our busy hive of experienced thinkers, writers, and designers is
              dedicated to buzzing alongside you, transforming your business
              goals into focused brand strategies. We believe in nurturing our
              clients with the utmost care and responsibility, providing them
              with strategized platforms to thrive like youthful bees. Together,
              we&apos;ll launch your brand with an identity that sets you apart
              from the swarm. With a bold, honest, and imaginative approach, we
              deliver the sweet results our clients crave, building lasting
              relationships on the wings of creativity.
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
            <h1 className='text-2xl font-bold'>STRATEGY</h1>
            <p>
              We craft winning strategies by aligning your brand to your
              business vision and help you achieve your goals with branding and
              marketing through a research driven methodology, as well as
              creative advocacy through internal strength and external
              partnerships.
            </p>
            <h1 className='text-2xl font-bold'>CREATION</h1>
            <p>
              Once your strategy is crafted, we make your brand come to life
              through visual identity and collaterals, promotional and
              goal-driven campaigns, web architecture and design, creative
              content and storytelling.
            </p>
            <h1 className='text-2xl font-bold'>PERFORMANCE</h1>
            <p>
              Serving your strategy and ‘creation’ goals with action, and
              helping you achieve a competitive advantage in the marketplace
              while attaining profitable growth.
            </p>
          </div>
        </div>
        <div className='flex flex-col md:flex-row gap-4 my-12'>
          <div className='w-full md:1/3'>
            <Image src={image1} alt='social-media' width={800} height={800} />
          </div>
          <div className='w-full md:1/3'>
            <Image src={image3} alt='social-media' width={800} height={800} />
          </div>
          <div className='w-full md:1/3 flex flex-col justify-around'>
            <Image src={image2} alt='social-media' width={800} height={800} />
            <Image src={image4} alt='social-media' width={800} height={800} />
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
      </div>{' '}
      <LogoSlider />
    </div>
  );
};

export default page;
