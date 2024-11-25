/** @format */

import React from 'react';
import EnquiryForm from '../lib/form';
import { MessageCircle, Clock, Award, Zap } from 'lucide-react';

const ContactHome = () => {
  return (
    <main className='min-h-screen bg-primary mb-64'>
      <div className='mx-4 md:mx-auto max-w-7xl py-12 md:py-24'>
        <div className='flex flex-col md:flex-row items-start justify-center gap-8 md:gap-12'>
          <section className='w-full md:w-1/2 text-center md:text-left'>
            <h1 className='text-3xl md:text-4xl font-bold leading-tight'>
              Still Waiting For Us To Make The First Move?
            </h1>

            <div className='mt-8 space-y-6'>
              <div>
                <h2 className='text-2xl font-semibold text-slate-900'>
                  Your Vision, Our Expertise: Let&apos;s Create Something
                  Extraordinary
                </h2>
                <p className='mt-3 text-slate-900 text-lg'>
                  Ready to transform your ideas into impactful digital
                  solutions? Our team of experts is here to bring your vision to
                  life with cutting-edge technology and creative excellence.
                </p>
              </div>

              <div className='space-y-4 text-lg'>
                <div className='flex items-start gap-3'>
                  <MessageCircle className='w-6 h-6 text-blue-600 mt-1 flex-shrink-0' />
                  <div>
                    <h3 className='font-bold text-gray-800'>
                      Expert Consultation
                    </h3>
                    <p className='text-slate-900'>
                      Get personalized insights and strategic guidance from our
                      seasoned professionals who understand your industry's
                      unique challenges.
                    </p>
                  </div>
                </div>

                <div className='flex items-start gap-3'>
                  <Clock className='w-6 h-6 text-blue-600 mt-1 flex-shrink-0' />
                  <div>
                    <h3 className='font-bold text-gray-800'>
                      Quick Response Time
                    </h3>
                    <p className='text-slate-900'>
                      We value your time. Our team typically responds within 24
                      hours, ensuring your project gets off to a swift start.
                    </p>
                  </div>
                </div>

                <div className='flex items-start gap-3'>
                  <Award className='w-6 h-6 text-blue-600 mt-1 flex-shrink-0' />
                  <div>
                    <h3 className='font-bold text-gray-800'>
                      Proven Track Record
                    </h3>
                    <p className='text-slate-900'>
                      Join our growing list of satisfied clients who have
                      successfully launched their digital ventures with our
                      support.
                    </p>
                  </div>
                </div>
              </div>

              <div className='rounded-lg text-lg'>
                <div className='flex items-start gap-3'>
                  <Zap className='w-6 h-6 text-blue-600 mt-1 flex-shrink-0' />
                  <div>
                    <h3 className='font-bold text-gray-800'>Why Start Now?</h3>
                    <p className='text-slate-900 '>
                      The digital landscape moves fast. Get ahead of your
                      competition by starting your journey today. Our team is
                      ready to help you navigate the complexities and deliver
                      results that matter.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='mt-6 text-lg text-gray-900 flex items-center gap-2'>
              <Clock className='w-4 h-4' />
              Average response time: Less than 24 hours
            </div>
          </section>

          <section className='w-full md:w-1/2' aria-label='Contact form'>
            <div className='bg-primary p-6'>
              <div className='mb-6'>
                <h2 className='text-xl font-bold text-gray-800'>
                  Let&apos;s Discuss Your Project
                </h2>
                <p className='text-slate-900 mt-2'>
                  Fill out the form below, and we'll get back to you with
                  insights tailored to your needs.
                </p>
              </div>
              <EnquiryForm />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default ContactHome;
