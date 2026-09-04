'use client'
import React from 'react';
import Image from 'next/image';
const Page = () => {
        return (
            <div>
                <h1>This is about page</h1>
                <Image src="/mypics.jpeg" alt='vercel' width={200} height={400} />
                <Image src="/mypics.jpeg" alt='vercel' width={200} height={400} />
            </div>
        );
}

export default Page;
