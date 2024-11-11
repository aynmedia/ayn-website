/** @format */
import React from 'react';
import Image from 'next/image';
import ceo from '@/../../public/images/Ayntech_CEO.webp';
import ceoSign from '@/../../public/images/CEO_Sign.png';
import Aynoffice from '@/../../public/images/aynoffice.webp';
import { gsap } from 'gsap';

const Ceo = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold text-center my-12 max-w-7xl md:mx-auto'>
        We&apos;re driven to craft meaningful brands and dynamic campaigns that
        build lasting, impactful connections between businesses and their
        audiences
      </h1>
      <div className='flex flex-col md:flex-row justify-center gap-y-12 gap-x-12 md:gap-y-0 max-w-7xl md:mx-auto mx-4 '>
        <div className='w-full md:w-5/12 '>
          <Image
            src={ceo}
            alt='ceo'
            width={600}
            height={600}
            className='sticky top-20 z-10'
          />
        </div>
        <div className='flex w-full md:w-5/12 flex-col gap-y-4 text-lg font-medium'>
          <span>
            The year 2020 saw a global transition towards adapting to different
            cultures, a trend that is expected to continue well into 2022 and
            beyond. The emergence of the new Covid-19 pandemic has posed
            challenges to the way businesses operate, and as the world moves
            towards digitalization, it has become essential to provide services
            on digital platforms. Digital marketing has become a crucial aspect
            of any business operation.
          </span>
          <span>
            At Ayn Media, we offer outstanding digital marketing services, and
            our clients can also benefit from other related services in our
            chosen market. We provide cutting-edge technologies that enable our
            clients to connect people, ideas, and data to define the right
            solution. Our great team of experts, who bring strong service ethos
            to everything they do, has earned the trust and respect of our
            clients, making us a reliable partner in every task we undertake.
          </span>
          <span>
            We strive daily to hold ourselves accountable for creating a company
            and family we can all be proud of. We are determined to not be
            satisfied with where we are, but continue to run with our vision
            with a sense of urgency and defined purpose.
          </span>
          <span className='font-bold'>
            &quot;I wish you the best of luck with your business, enjoy the
            adventure.”
          </span>
          <span className='font-bold'>
            Mr.Ayn Gajendran - CEO, Ayn Technologies
          </span>
          <span className='flex justify-end w-full'>
            <Image src={ceoSign} alt='ceo' width={200} height={200} />
          </span>
        </div>
        <div className='w-full md:w-2/12 justify-end'>
          <Image
            src={Aynoffice}
            alt='ceo'
            width={300}
            height={300}
            className='sticky top-20 z-10'
          />
        </div>
      </div>
    </div>
  );
};

export default Ceo;
