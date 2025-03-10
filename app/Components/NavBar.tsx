'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

 
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  const handleLinkClick = () => {
    setIsDropdownOpen(false);
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md py-4 px-6 md:px-24 flex justify-between items-center">
        <div>
          <Image
            src="/tourism-logo.jpeg"
            alt="ekiti-logo"
            width={80}
            height={80}
            className="object-fit"
          />
        </div>

        <div className="hidden md:flex space-x-8 gap-12 text-gray-700 items-center">
          <Link href="/" className="hover:border-b-2 border-gray-700 pb-1 transition-all duration-300">
            Home
          </Link>

          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center hover:border-b-2 border-gray-700 pb-1 transition-all duration-300"
            >
              Attractions
              {isDropdownOpen ? <ChevronUp className="ml-2" size={24} /> : <ChevronDown className="ml-2" size={24} />}
            </button>

            {isDropdownOpen && (
              <div className="absolute top-14 left-0 bg-white shadow-lg rounded-lg w-64 p-4 flex flex-col space-y-3 text-2xl text-gray-900 z-30">
                <Link href="/attractions/tourists" className="hover:bg-yellow-100 border-gray-700 pb-1 transition-all duration-300" onClick={handleLinkClick}>
                  Tourist Attractions
                </Link>
                <Link href="/attractions/hotels" className="hover:bg-yellow-100 border-gray-700 pb-1 transition-all duration-300" onClick={handleLinkClick}>
                  Hotels
                </Link>
                <Link href="/attractions/shortlets" className="hover:bg-yellow-100 border-gray-700 pb-1 transition-all duration-300" onClick={handleLinkClick}>
                  Shortlets
                </Link>
                <Link href="/attractions/bars-lounge" className="hover:bg-yellow-100 border-gray-700 pb-1 transition-all duration-300" onClick={handleLinkClick}>
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

        <div className="hidden md:flex space-x-4 items-center">
          <button className="text-gray-700 hover:border-b-2 border-gray-700 pb-1 transition-all duration-300">
            Login
          </button>
          <button className="bg-purple-900 text-white px-5 py-2 rounded-lg hover:bg-purple-700 transition duration-300">
            Sign Up
          </button>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md rounded-lg p-6 flex flex-col space-y-4 md:hidden z-20">
            <Link href="/" className="text-gray-700 hover:border-b-2 border-gray-700 pb-1 transition-all duration-300" onClick={handleLinkClick}>
              Home
            </Link>
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
                  <Link href="/attractions/tourists" className="hover:bg-yellow-100 border-gray-700 pb-1 transition-all duration-300" onClick={handleLinkClick}>
                    Tourist Attractions
                  </Link>
                  <Link href="/attractions/hotels" className="hover:bg-yellow-100 border-gray-700 pb-1 transition-all duration-300" onClick={handleLinkClick}>
                    Hotels
                  </Link>
                  <Link href="/attractions/shortlets" className="hover:bg-yellow-100 border-gray-700 pb-1 transition-all duration-300" onClick={handleLinkClick}>
                    Shortlets
                  </Link>
                  <Link href="/attractions/bars-lounge" className="hover:bg-yellow-100 border-gray-700 pb-1 transition-all duration-300" onClick={handleLinkClick}>
                    Bars & Lounge
                  </Link>
                </div>
              )}
            </div>
            <Link href="/about" className="text-gray-700 hover:border-b-2 border-gray-700 pb-1 transition-all duration-300" onClick={handleLinkClick}>
              About
            </Link>
            <Link href="/blogs" className="text-gray-700 hover:border-b-2 border-gray-700 pb-1 transition-all duration-300" onClick={handleLinkClick}>
              Blogs
            </Link>
            <Link href="/support" className="text-gray-700 hover:border-b-2 border-gray-700 pb-1 transition-all duration-300" onClick={handleLinkClick}>
              Support
            </Link>
          </div>
        )}
      </nav>
      <div className="pt-20"></div>
    </>
  );
};

export default NavBar;
