'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <>
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md py-4 px-6 md:px-24 flex justify-between items-center">
        {/* Logo Section */}
        <div>
          <Image
            src="/tourism-logo.jpeg"
            alt="ekiti-logo"
            width={80}
            height={80}
            className="object-fit"
          />
        </div>

        {/* Navigation Links - Large Screens */}
        <div className="hidden md:flex space-x-8 gap-12 text-gray-700 items-center">
          <Link href="/" className="hover:border-b-2 border-gray-700 pb-1 transition-all duration-300">
            Home
          </Link>

          {/* Dropdown Menu */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center hover:border-b-2 border-gray-700 pb-1 transition-all duration-300"
            >
              Attractions
              {isDropdownOpen ? (
                <ChevronUp className="ml-2" size={24} />
              ) : (
                <ChevronDown className="ml-2" size={24} />
              )}
            </button>

            {isDropdownOpen && (
              <div className="absolute top-14 left-0 bg-white shadow-lg rounded-lg w-64 p-4 flex flex-col space-y-3 text-2xl text-gray-900 z-30">
                <Link href="/attractions" className="hover:bg-yellow-100 border-gray-700 pb-1 transition-all duration-300">
                  Tourist Attractions 
                </Link>
                <Link href="/hotels" className="hover:bg-yellow-100 border-gray-700 pb-1 transition-all duration-300">
                  Hotels 
                </Link>
                <Link href="/shortlets" className="hover:bg-yellow-100 border-gray-700 pb-1 transition-all duration-300">
                  Shortlets
                </Link>
                <Link href="/bars-lounge" className="hover:bg-yellow-100 border-gray-700 pb-1 transition-all duration-300">
                  Bars & Lounge
                </Link>
              </div>
            )}
          </div>

          <Link href="/about" className="hover:border-b-2 border-gray-700 pb-1 transition-all duration-300">
            About 
          </Link>
          <Link href="/blogs" className="hover:border-b-2 border-gray-700 pb-1 transition-all duration-300">
            Blogs
          </Link>
          <Link href="/support" className="hover:border-b-2 border-gray-700 pb-1 transition-all duration-300">
            Support
          </Link>
        </div>

        {/* Login & Sign Up */}
        <div className="hidden md:flex space-x-4 items-center">
          <button className="text-gray-700 hover:border-b-2 border-gray-700 pb-1 transition-all duration-300">
            Login
          </button>
          <button className="bg-purple-900 text-white px-5 py-2 rounded-lg hover:bg-purple-700 transition duration-300">
            Sign Up
          </button>
        </div>

        {/* Hamburger Menu - Small Screens */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-20 left-0 w-full bg-white shadow-md rounded-lg p-6 flex flex-col space-y-4 md:hidden z-20">
            <Link href="/" className="text-gray-700 hover:border-b-2 border-gray-700 pb-1 transition-all duration-300">
              Home
            </Link>

            {/* Mobile Dropdown for Attractions */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center justify-between w-full text-gray-700 hover:border-b-2 border-gray-700 pb-1 transition-all duration-300"
              >
                Attractions
                {isDropdownOpen ? <ChevronUp className="ml-2" size={24} /> : <ChevronDown className="ml-2" size={24} />}
              </button>

              {isDropdownOpen && (
                <div className="mt-3 bg-white shadow-inner rounded-lg p-4 flex flex-col space-y-2 text-2xl text-gray-900">
                  <Link href="/attractions" className="hover:bg-yellow-100 border-gray-700 pb-1 transition-all duration-300">
                    Tourist Attractions
                  </Link>
                  <Link href="/hotels" className="hover:bg-yellow-100 border-gray-700 pb-1 transition-all duration-300">
                    Hotels
                  </Link>
                  <Link href="/shortlets" className="hover:bg-yellow-100 border-gray-700 pb-1 transition-all duration-300">
                    Shortlets
                  </Link>
                  <Link href="/bars-lounge" className="hover:bg-yellow-100 border-gray-700 pb-1 transition-all duration-300">
                    Bars & Lounge
                  </Link>
                </div>
              )}
            </div>

            <Link href="/about" className="text-gray-700 hover:border-b-2 border-gray-700 pb-1 transition-all duration-300">
              About
            </Link>
            <Link href="/blogs" className="text-gray-700 hover:border-b-2 border-gray-700 pb-1 transition-all duration-300">
              Blogs
            </Link>
            <Link href="/support" className="text-gray-700 hover:border-b-2 border-gray-700 pb-1 transition-all duration-300">
              Support
            </Link>
            <div className="flex flex-col space-y-2">
              <button className="text-gray-700 border-gray-700 pb-1 transition-all duration-300">
                Login
              </button>
              <button className="bg-purple-600 text-white px-5 py-2 rounded-lg hover:bg-purple-700 transition duration-300">
                Sign Up
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Prevent content from being hidden behind the fixed navbar */}
      <div className="pt-20"></div>
    </>
  );
};

export default NavBar;
