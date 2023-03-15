// 'use client';
import Link from 'next/link';
// import { useState } from 'react';

export default function Header() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  //   mobileMenu = document.getElementById("mobile-menu");
  //   mainNav = document.getElementById("main-nav");
  //   if(setIsMenuOpen) {
  //     mobileMenu.classList.remove('hidden');
  //     mainNav.classList.add('hidden');
  //   } else {
  //     mobileMenu.classList.add("hidden");
  //     mainNav.classList.remove("hidden");
  //   }
  // }

  return (
    <nav className="bg-gray-900">
      <div id='main-nav' className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-around h-16">
        <div className="flex items-center">
            <Link href="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
            <Link href="/about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</Link>
            <Link href="/portfolio" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Portfolio</Link>
            <Link href="/resume" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Resume</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
