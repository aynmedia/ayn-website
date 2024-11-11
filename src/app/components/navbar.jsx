/** @format */
'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach((navItem) => {
      const word = navItem.textContent.trim(); // Get the word inside the link
      navItem.innerHTML = ''; // Clear the existing text content

      const staticSpan = document.createElement('span'); // Create a span for static letters
      const hoverSpan = document.createElement('span'); // Create a span for hover letters

      staticSpan.classList.add('block', 'tracking-tighter', 'relative');
      hoverSpan.classList.add(
        'absolute',
        'inset-0',
        'flex',
        'items-center',
        'justify-center',
        'text-black',
        'transform',
        '-translate-y-full',
        'transition-transform',
        'duration-500',
        'ease-in-out',
        'group-hover:translate-x-0'
      );

      word.split('').forEach((letter, index) => {
        const staticLetter = document.createElement('span');
        const hoverLetter = document.createElement('span');

        staticLetter.textContent = letter;
        hoverLetter.textContent = letter;

        // Add classes for the static and hover effect
        staticLetter.classList.add(
          'inline-block',
          'transform',
          'transition-transform',
          'duration-500',
          'ease-in-out',
          `group-hover:translate-y-full`,
          `delay-[${index * 100}ms]`
        );
        hoverLetter.classList.add(
          'inline-block',
          'transform',
          'transition-transform',
          'duration-500',
          'ease-in-out',
          `group-hover:translate-y-full`,
          `delay-[${index * 100}ms]`
        );

        // Append each letter to the respective spans
        staticSpan.appendChild(staticLetter);
        hoverSpan.appendChild(hoverLetter);
      });

      // Append the spans to the navItem
      navItem.appendChild(staticSpan);
      navItem.appendChild(hoverSpan);
    });
  }, []);
  return (
    <nav className='bg-white text-foreground p-4 sticky top-0 z-50'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link href='/'>
          <span className='text-2xl font-bold'>Your Logo</span>
        </Link>
        <div className='sm:hidden'>
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className='h-6 w-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'>
              {isOpen ? (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              ) : (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              )}
            </svg>
          </button>
        </div>
        <div className={`sm:flex ${isOpen ? 'block' : 'hidden'}`}>
          <Link
            href='/about'
            className='nav-item group relative text-lg font-bold'>
            HOME
          </Link>
          <Link href='/services'>
            <span className='mt-4 sm:mt-0 sm:ml-4 block'>Services</span>
          </Link>
          <Link href='/contact'>
            <span className='mt-4 sm:mt-0 sm:ml-4 block'>Contact</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
