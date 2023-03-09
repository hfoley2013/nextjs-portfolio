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
          {/* <div className="flex md:hidden">
            <button type="button" className="text-gray-300 hover:text-white focus:outline-none focus:text-white" aria-label="Toggle menu" onClick={toggleMenu}>
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                <path fillRule="evenodd" clipRule="evenodd" d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm16 4H4v2h16v-2zM4 19h16v-2H4v2z" />
              </svg>
            </button>
          </div> */}
        </div>
      </div>
      {/* <div className="md:hidden hidden items-center justify-between" id="mobile-menu"> */}
        {/* <Link href="/" className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium">Home</Link> */}
        {/* <Link href="/about" className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium">About</Link> */}
        {/* <Link href="/portfolio" className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium">Portfolio</Link> */}
        {/* <Link href="/resume" className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium">Resume</Link> */}
      {/* </div> */}
    </nav>
  );
}
