import { useState } from 'react';
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
              <a href="/" className="group">
                <div className="w-32">
                  <img 
                    src="/images/ic_header_logo.svg" 
                    alt="Potato Chat" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </a>
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
              <a href="#home" className="block py-2 text-blue-500">HOME</a>
              <a href="#apps" className="block py-2 text-gray-600">APPS</a>
              <a href="#developer" className="block py-2 text-gray-600">DEVELOPER</a>
              <a href="#faq" className="block py-2 text-gray-600">FAQ</a>
              <a href="#privacy" className="block py-2 text-gray-600">PRIVACY</a>
              <a href="#news" className="block py-2 text-gray-600">NEWS</a>
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
            <a href="/" className="group transition-all duration-300">
              <div className="relative w-40 transform group-hover:scale-105 transition-transform">
                <img 
                  src="/images/ic_header_logo.svg" 
                  alt="Potato Chat" 
                  className="w-full h-full object-contain group-hover:drop-shadow-lg transition-all"
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 group-hover:shadow-lg group-hover:shadow-blue-200 transition-opacity"></div>
              </div>
            </a>
          </div>
          
          <div className="hidden md:flex space-x-12">
            <a href="#home" className="text-blue-500 border-b-2 border-blue-500 pb-1 font-medium">HOME</a>
            <a href="#apps" className="text-gray-400 hover:text-blue-500 font-medium">APPS</a>
            <a href="#developer" className="text-gray-400 hover:text-blue-500 font-medium">DEVELOPER</a>
            <a href="#faq" className="text-gray-400 hover:text-blue-500 font-medium">FAQ</a>
            <a href="#privacy" className="text-gray-400 hover:text-blue-500 font-medium">PRIVACY</a>
            <a href="#news" className="text-gray-400 hover:text-blue-500 font-medium">NEWS</a>
          </div>

          <div className="flex items-center space-x-6">
            <div className="flex items-center text-gray-500">
              <span>English</span>
              <ChevronDownIcon className="h-5 w-5 ml-1" />
            </div>
            <a href="#twitter" className="text-gray-400 hover:text-blue-500">
              <FaTwitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
} 