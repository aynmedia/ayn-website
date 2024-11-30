/** @format */

import Image from 'next/image';
import AboutHome from './components/about_home';
import CallToAction from './components/calltoaction';
import Ceo from './components/ceo';
import FeaturedWork from './components/featuredWork';
import Hero from './components/hero';
import LogoSlider from './components/logoslider';
import ServicesHome from './components/servicesHome';
import Testimonials from './components/testimonial';
import Whoweare from './components/whoweare';
import heroImage from '@/../../public/images/Ayn_Media.webp';

export default function Home() {
  return (
    <div>
      <Hero />
      <div>
        <Image src={heroImage} alt='hero' width={2100} height={1000} />
      </div>
      <LogoSlider />
      <Whoweare />
      <AboutHome />
      <ServicesHome />
      <FeaturedWork />
      <Ceo />
      <Testimonials />
      <CallToAction />
    </div>
  );
}
