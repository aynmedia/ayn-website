/** @format */
'use client';
import { menuItems } from '@/app/lib/menuItems';
import React, { useState } from 'react';
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
                  <Link href={href || '#'}>{name}</Link>
                  {hasSubMenu && (
                    <FaChevronDown
                      size={18}
                      className={`transform transition-transform duration-300 ${
                        isClicked ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                </span>
                {hasSubMenu && (
                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      isClicked ? 'block' : 'hidden'
                    }`}>
                    {subMenu.map((category, categoryIndex) => (
                      <div key={categoryIndex} className='mt-4'>
                        {category.category && (
                          <h3 className='text-primary font-bold px-12 mb-2'>
                            {category.category}
                          </h3>
                        )}
                        {category.items && category.items.length > 0 && (
                          <ul>
                            {category.items.map((item, itemIndex) => (
                              <li
                                key={itemIndex}
                                className='p-3 flex items-center font-bold text-lg rounded-md hover:bg-primary hover:text-secondary px-12'>
                                <Link href={item.href}>{item.name}</Link>
                              </li>
                            ))}
                          </ul>
                        )}
                        {/* Fallback for older menu structure */}
                        {!category.items && (
                          <ul>
                            <li className='p-3 flex items-center font-bold text-lg rounded-md hover:bg-primary hover:text-secondary px-12'>
                              <Link href={category.href}>{category.name}</Link>
                            </li>
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
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
