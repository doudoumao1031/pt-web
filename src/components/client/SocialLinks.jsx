'use client'

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaTwitter, FaEnvelope, FaCode, FaUserCog } from 'react-icons/fa';

export default function SocialLinks({ isMobile }) {
  const [imageErrors, setImageErrors] = useState({
    twitter: false,
    business: false,
    tech: false,
    admin: false
  });

  const handleImageError = (name) => {
    setImageErrors(prev => ({
      ...prev,
      [name]: true
    }));
  };

  if (isMobile) {
    return (
      <div className="grid grid-cols-4 gap-4 text-center">
        <Link href="#twitter" className="flex flex-col items-center">
          <div className="w-8 h-8 mb-1 relative">
            {!imageErrors.twitter ? (
              <Image 
                src="/images/twitter-icon.png" 
                alt="Twitter" 
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-contain"
                onError={() => handleImageError('twitter')}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-blue-50 rounded-full">
                <FaTwitter className="text-blue-500 text-xl" />
              </div>
            )}
          </div>
          <span className="text-xs">Twitter</span>
        </Link>
        <Link href="#business" className="flex flex-col items-center">
          <div className="w-8 h-8 mb-1 relative">
            {!imageErrors.business ? (
              <Image 
                src="/images/email-icon.png" 
                alt="Business" 
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-contain"
                onError={() => handleImageError('business')}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-green-50 rounded-full">
                <FaEnvelope className="text-green-500 text-xl" />
              </div>
            )}
          </div>
          <span className="text-xs">Business</span>
        </Link>
        <Link href="#tech" className="flex flex-col items-center">
          <div className="w-8 h-8 mb-1 relative">
            {!imageErrors.tech ? (
              <Image 
                src="/images/tech-icon.png" 
                alt="Technology" 
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-contain"
                onError={() => handleImageError('tech')}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-purple-50 rounded-full">
                <FaCode className="text-purple-500 text-xl" />
              </div>
            )}
          </div>
          <span className="text-xs">Technology</span>
        </Link>
        <Link href="#admin" className="flex flex-col items-center">
          <div className="w-8 h-8 mb-1 relative">
            {!imageErrors.admin ? (
              <Image 
                src="/images/admin-icon.png" 
                alt="Administrator" 
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-contain"
                onError={() => handleImageError('admin')}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-50 rounded-full">
                <FaUserCog className="text-gray-500 text-xl" />
              </div>
            )}
          </div>
          <span className="text-xs">Administrator</span>
        </Link>
      </div>
    );
  }

  return null;
} 