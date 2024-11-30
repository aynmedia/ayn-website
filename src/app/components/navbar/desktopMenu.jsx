/** @format */
'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa6';

const DesktopMenu = ({ menu }) => {
  const [isHover, setIsHover] = useState(false);

  const toggleHoverMenu = () => {
    setIsHover(!isHover);
  };

  const hasSubMenu = menu?.subMenu?.length > 0;

  return (
    <li>
      <span
        className='flex items-center gap-1 cursor-pointer px-3 py-1 rounded-xl group font-bold  text-black/80 text-md'
        onMouseEnter={toggleHoverMenu}
        onMouseLeave={toggleHoverMenu}>
        <Link href={menu.href} className='hover:text-white'>
          {menu.name}
        </Link>
        {hasSubMenu && (
          <FaChevronDown
            size={16}
            className={`duration-200 ${isHover ? 'rotate-180' : ''}`}
          />
        )}
        {hasSubMenu && isHover && (
          <div className='sub-menu cursor-pointer z-10 text-md font-medium shadow-xl'>
            <div className='flex justify-center gap-x-4'>
              <div className='bg-white/70 w-fit p-2 rounded-md '>
                <div
                  className={`
              grid gap-7 ${
                menu.gridCols === 3
                  ? 'grid-cols-3'
                  : menu.gridCols === 2
                  ? 'grid-cols-2'
                  : 'grid-cols-1'
              }
              `}>
                  {menu.subMenu.map((item, index) => (
                    <div key={index} className='cursor-pointer text-md'>
                      <Link href={item.href} className='hover:text-primary'>
                        {item.name}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}{' '}
      </span>
    </li>
  );
};

export default DesktopMenu;
