'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import { usePathname } from 'next/navigation';

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileDropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        mobileDropdownRef.current &&
        !mobileDropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setIsDropdownOpen(false);
    setIsMenuOpen(false);
  }, [pathname]);

  const handleLinkClick = () => {
    setIsDropdownOpen(false);
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md py-4 px-6 md:px-24 flex justify-between items-center">
        {/* Logo */}
        <div>
          <Image src="/tourism-logo.jpeg" alt="ekiti-logo" width={80} height={80} className="object-fit" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 text-gray-700 items-center">
          <Link href="/" onClick={handleLinkClick} className="hover:border-b-2 border-gray-700 pb-1 transition-all duration-300">
            Home
          </Link>

          {/* Desktop Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="flex items-center hover:border-b-2 border-gray-700 pb-1 transition-all duration-300">
              Attractions {isDropdownOpen ? <ChevronUp className="ml-2" size={24} /> : <ChevronDown className="ml-2" size={24} />}
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute top-14 left-0 bg-white shadow-lg rounded-lg w-64 p-4 flex flex-col space-y-3 text-gray-900 z-30">
                <Link href="/attractions/tourists" onClick={handleLinkClick} className="hover:bg-yellow-100 border-gray-700 pb-1 transition-all duration-300">
                  Tourist Attractions
                </Link>
                <Link href="/attractions/hotels" onClick={handleLinkClick} className="hover:bg-yellow-100 border-gray-700 pb-1 transition-all duration-300">
                  Hotels
                </Link>
                <Link href="/attractions/shortlets" onClick={handleLinkClick} className="hover:bg-yellow-100 border-gray-700 pb-1 transition-all duration-300">
                  Shortlets
                </Link>
                <Link href="/attractions/bars-lounge" onClick={handleLinkClick} className="hover:bg-yellow-100 border-gray-700 pb-1 transition-all duration-300">
                  Bars & Lounge
                </Link>
              </div>
            )}
          </div>

          <Link href="/about" onClick={handleLinkClick} className="hover:border-b-2 border-gray-700 pb-1 transition-all duration-300">About</Link>
          <Link href="/blogs" onClick={handleLinkClick} className="hover:border-b-2 border-gray-700 pb-1 transition-all duration-300">Blogs</Link>
          <Link href="/support" onClick={handleLinkClick} className="hover:border-b-2 border-gray-700 pb-1 transition-all duration-300">Support</Link>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-4 items-center">
          <Link href="/login" onClick={handleLinkClick}> 
            <button className="text-gray-700 hover:border-b-2 border-gray-700 pb-1 transition-all duration-300">
              Login
            </button>
          </Link>

          <Link href="/signup" onClick={handleLinkClick}> 
            <button className="bg-green-500 text-white px-5 py-2 rounded-lg hover:bg-green-600 transition duration-300">
              Sign Up
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md rounded-lg p-6 flex flex-col space-y-4 md:hidden z-20">
            <Link href="/" onClick={handleLinkClick} className="text-gray-700 hover:border-b-2 border-gray-700 pb-1 transition-all duration-300">
              Home
            </Link>

            {/* Mobile Attractions Dropdown */}
            <div className="relative" ref={mobileDropdownRef}>
              <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="flex items-center justify-between w-full text-gray-700 hover:border-b-2 border-gray-700 pb-1 transition-all duration-300">
                Attractions {isDropdownOpen ? <ChevronUp className="ml-2" size={24} /> : <ChevronDown className="ml-2" size={24} />}
              </button>
              {isDropdownOpen && (
                <div className="mt-3 bg-white shadow-inner rounded-lg p-4 flex flex-col space-y-2 text-gray-900">
                  <Link href="/attractions/tourists" onClick={handleLinkClick} className="hover:bg-yellow-100 border-gray-700 pb-1 transition-all duration-300">
                    Tourist Attractions
                  </Link>
                  <Link href="/attractions/hotels" onClick={handleLinkClick} className="hover:bg-yellow-100 border-gray-700 pb-1 transition-all duration-300">
                    Hotels
                  </Link>
                  <Link href="/attractions/shortlets" onClick={handleLinkClick} className="hover:bg-yellow-100 border-gray-700 pb-1 transition-all duration-300">
                    Shortlets
                  </Link>
                  <Link href="/attractions/bars-lounge" onClick={handleLinkClick} className="hover:bg-yellow-100 border-gray-700 pb-1 transition-all duration-300">
                    Bars & Lounge
                  </Link>
                </div>
              )}
            </div>

            <Link href="/about" onClick={handleLinkClick} className="text-gray-700 hover:border-b-2 border-gray-700 pb-1 transition-all duration-300">
              About
            </Link>
            <Link href="/blogs" onClick={handleLinkClick} className="text-gray-700 hover:border-b-2 border-gray-700 pb-1 transition-all duration-300">
              Blogs
            </Link>
            <Link href="/support" onClick={handleLinkClick} className="text-gray-700 hover:border-b-2 border-gray-700 pb-1 transition-all duration-300">
              Support
            </Link>

            {/* Mobile Buttons */}
            <Link href="/login" onClick={handleLinkClick}>
              <button className="text-gray-700 hover:border-b-2 border-gray-700 pb-1 transition-all duration-300">
                Login
              </button>
            </Link>
            <Link href="/signup" onClick={handleLinkClick}>
              <button className="bg-green-500 text-white px-5 py-2 rounded-lg hover:bg-green-600 transition duration-300">
                Sign Up
              </button>
            </Link>
          </div>
        )}
      </nav>

      {/* Push content down to prevent overlap */}
      <div className="pt-20"></div>
    </>
  );
};

export default NavBar;
