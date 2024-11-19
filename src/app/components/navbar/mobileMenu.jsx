/** @format */
'use client';
import { menuItems } from '@/app/lib/menuItems';
import React from 'react';
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { RxHamburgerMenu } from 'react-icons/rx';
import { FaChevronDown } from 'react-icons/fa6';
import Link from 'next/link';

const MobileMenu = ({ menu }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState(null);
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    setClicked(null);
  };
  return (
    <div className='flex items-center gap-x-4 cursor-pointer z-10 overflow-y-hidden'>
      <button
        className='lg:hidden z-[999] relative cursor-pointer'
        onClick={toggleDrawer}>
        {isOpen ? (
          <AiOutlineClose size={32} className='text-white' />
        ) : (
          <RxHamburgerMenu size={32} />
        )}
      </button>
      <div
        className={`fixed left-0 right-0 top-0 overflow-y-auto h-full bg-secondary text-white backdrop-blur p-6 pt-24 ${
          isOpen ? 'block animate-slideIn' : 'hidden'
        }`}>
        <ul className='ml-5'>
          {menu.map(({ name, href, subMenu }, index) => {
            const hasSubMenu = subMenu?.length > 0;
            const isClicked = clicked === index;
            return (
              <li key={name}>
                <span
                  className='flex justify-between items-center p-3 font-bold text-lg rounded-md hover:bg-primary hover:text-secondary'
                  onClick={() => setClicked(isClicked ? null : index)}>
                  {name}
                  {hasSubMenu && <FaChevronDown size={18} />}
                </span>
                {hasSubMenu && (
                  <ul
                    className={`transition-all duration-300 ease-in-out ${
                      isClicked ? 'block' : 'hidden'
                    }`}>
                    {subMenu.map((item, index) => (
                      <li
                        key={index}
                        className='p-3 flex items-center  font-bold text-lg rounded-md hover:bg-primary hover:text-secondary px-12'>
                        <Link href={item.href}>{item.name}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
