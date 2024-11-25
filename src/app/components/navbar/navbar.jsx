/** @format */
'use client';

import Logo from '@/../../public/images/weblogo.webp';
import Image from 'next/image';
import Link from 'next/link';
import { menuItems } from '../../lib/menuItems';
import DesktopMenu from './desktopMenu';
import { MdOutlineMessage } from 'react-icons/md';
import MobileMenu from './mobileMenu';

export default function Navbar() {
  return (
    <nav className='px-3.5 lg:px-12 flex items-center justify-between w-full max-w-8xl mx-auto py-2 '>
      <div>
        <Link href='/'>
          <Image src={Logo} alt='logo' width={100} height={100} />
        </Link>
      </div>
      <ul className='items-center lg:flex hidden'>
        {menuItems.map((item, index) => (
          <DesktopMenu key={index} menu={item} />
        ))}
      </ul>
      <div className='flex justify-center gap-x-5'>
        <button className='bg-secondary text-white px-6 py-4 rounded-md hover:bg-primary hover:text-black font-bold flex gap-4 items-center'>
          Lets Talk
          <MdOutlineMessage size={32} />
        </button>
        <div className='flex items-center gap-x-4 lg:hidden'>
          <MobileMenu menu={menuItems} />
        </div>
      </div>
    </nav>
  );
}
