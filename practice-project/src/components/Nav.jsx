'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Nav = () => {
  const pathname = usePathname();

  return (
  <div className='flex justify-between items-center p-4 bg-gray-800 text-white'>
        <div>
            🌎Travel Guide
        </div>
        <div>
             <ul className='flex justify-between gap-4'>
              <Link href="/" className={pathname === '/' ? 'text-yellow-400' : ''}>
                <li>Home </li>
              </Link>
               <Link href="/destinations" className={pathname === '/destinations' ? 'text-yellow-400' : ''}>
                <li>Destinations</li>
              </Link>
                 <Link href="/contact" className={pathname === '/contact' ? 'text-yellow-400' : ''}>
                <li>Contact us </li>
              </Link>
             </ul>
        </div>
    </div>
    );
  };

export default Nav;
