'use client'

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaTwitter, FaBars } from 'react-icons/fa'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

export default function Navbar({ isMobile }) {
  const [menuOpen, setMenuOpen] = useState(false);

  if (isMobile) {
    return (
      <nav className="fixed w-full bg-white shadow-sm z-50">
        <div className="px-4">
          <div className="flex justify-between h-14 items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="group">
                <div className="w-32 relative h-8">
                  <Image 
                    src="/images/ic_header_logo.svg" 
                    alt="Potato Chat"
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>
            </div>
            
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-500 focus:outline-none"
            >
              <FaBars className="h-5 w-5" />
            </button>
          </div>
          
          {menuOpen && (
            <div className="py-2 border-t border-gray-200">
              <Link href="#home" className="block py-2 text-blue-500">HOME</Link>
              <Link href="#apps" className="block py-2 text-gray-600">APPS</Link>
              <Link href="#developer" className="block py-2 text-gray-600">DEVELOPER</Link>
              <Link href="#faq" className="block py-2 text-gray-600">FAQ</Link>
              <Link href="#privacy" className="block py-2 text-gray-600">PRIVACY</Link>
              <Link href="#news" className="block py-2 text-gray-600">NEWS</Link>
            </div>
          )}
        </div>
      </nav>
    );
  }

  return (
    <nav className="fixed w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="group transition-all duration-300">
              <div className="relative w-40 h-12 transform group-hover:scale-105 transition-transform">
                <Image 
                  src="/images/ic_header_logo.svg" 
                  alt="Potato Chat"
                  fill
                  className="object-contain group-hover:drop-shadow-lg transition-all"
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 group-hover:shadow-lg group-hover:shadow-blue-200 transition-opacity"></div>
              </div>
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-12">
            <Link href="#home" className="text-blue-500 border-b-2 border-blue-500 pb-1 font-medium">HOME</Link>
            <Link href="#apps" className="text-gray-400 hover:text-blue-500 font-medium">APPS</Link>
            <Link href="#developer" className="text-gray-400 hover:text-blue-500 font-medium">DEVELOPER</Link>
            <Link href="#faq" className="text-gray-400 hover:text-blue-500 font-medium">FAQ</Link>
            <Link href="#privacy" className="text-gray-400 hover:text-blue-500 font-medium">PRIVACY</Link>
            <Link href="#news" className="text-gray-400 hover:text-blue-500 font-medium">NEWS</Link>
          </div>

          <div className="flex items-center space-x-6">
            <div className="flex items-center text-gray-500">
              <span>English</span>
              <ChevronDownIcon className="h-5 w-5 ml-1" />
            </div>
            <Link href="#twitter" className="text-gray-400 hover:text-blue-500">
              <FaTwitter className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 