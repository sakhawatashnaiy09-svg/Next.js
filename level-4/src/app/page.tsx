"use client";
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
const Page = () => {
  const router = useRouter();
  return (
    <div>
        <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/services">Services</Link></li>
        </ul>
       <button onClick={() => router.push('/about')}>Go to About</button>
    </div>
  );
}

export default Page;
