import Link from "next/link";
import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white shadow-lg rounded-t-2xl px-6 py-8 md:py-12">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-6 md:space-y-0">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image src="/tourism-logo.jpeg" width={120} height={50} alt="Ekiti Tourism Logo" />
          </Link>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-lg font-medium text-green-600">
            <Link href="/" className="hover:text-green-800 transition duration-300">
              Home
            </Link>
            <Link href="/about" className="hover:text-green-800 transition duration-300">
              About Us
            </Link>
            <Link href="/places" className="hover:text-green-800 transition duration-300">
              Attractions
            </Link>
            <Link href="/events" className="hover:text-green-800 transition duration-300">
              Events
            </Link>
            <Link href="/support" className="hover:text-green-800 transition duration-300">
              Contact
            </Link>
          </nav>
        </div>

        {/* Divider */}
        <hr className="my-6 border-t border-gray-300" />

        {/* Bottom Text */}
        <div className="text-center text-gray-600 text-lg">
          &copy; {new Date().getFullYear()}{" "}
          <Link href="/" className="font-semibold text-green-600 hover:text-green-800 transition duration-300">
            Ekiti Tourism™
          </Link>
          . All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
