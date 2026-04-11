"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {


    return (
        <header className='flex-cols fixed top-0 left-0 right-0 bg-white shadow-md z-50'>
            <div className="h-20 flex items-center ml-20 mr-20 justify-between">
                <Link href="/">
                    <Image src="/logo.png" alt="Logo" width={80} height={80} />
                </Link>
                <nav className='flex gap-10 items-center'>
                    <ul className='flex gap-8 items-center'>
                        <li><a href="/" className='hover:text-orange-500 text-lg font-bold '>Home</a></li>
                        <li><a href="/about" className='hover:text-orange-500 text-lg font-bold '>About-Us</a></li>
                        <li><a href="/all-cases" className='hover:text-orange-500 text-lg font-bold '>All Cases</a></li>
                        <li><a href="/report-missing" className='hover:text-orange-500 text-lg font-bold '>Report Missing</a></li>

                    </ul>
                </nav>
                <button className='border-1 px-4 py-2 rounded-2xl cursor-pointer text-white hover:bg-orange-500 bg-blue-500 duration-200'>Contact</button>
            </div>
        </header>
    );
};

export default Header;