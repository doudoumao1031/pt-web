'use client'

import Link from 'next/link';
import { FaAndroid, FaApple, FaWindows, FaDownload } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

export default function DownloadButtons({ isMobile }) {
  const { t } = useTranslation();

  if (isMobile) {
    return (
      <div className="mt-6 mb-8">
        <Link href="#iphone" className="bg-blue-500 text-white px-6 py-3 rounded-full flex items-center justify-center mx-auto w-64 mb-3">
          <FaApple className="mr-2" /> {t('download.iphone')}
        </Link>
        <Link href="#android" className="bg-blue-500 text-white px-6 py-3 rounded-full flex items-center justify-center mx-auto w-64 mb-3">
          <FaAndroid className="mr-2" /> {t('download.android')}
        </Link>
        <Link href="#internal" className="bg-blue-100 text-blue-800 px-6 py-3 rounded-full flex items-center justify-center mx-auto w-64 mb-3">
          <span className="mr-2">🔒</span> {t('download.internal')}
        </Link>
        <Link href="#beta" className="text-blue-500 text-sm">
          {t('download.beta')}
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <Link href="#android" className="bg-blue-50 text-gray-800 px-6 py-4 rounded-lg flex items-center hover:bg-blue-100 transition-colors">
          <FaAndroid className="mr-4 text-xl" /> {t('download.android').split(' ')[0]}
        </Link>
        <Link href="#windows" className="bg-blue-50 text-gray-800 px-6 py-4 rounded-lg flex items-center hover:bg-blue-100 transition-colors">
          <FaWindows className="mr-4 text-xl" /> {t('download.windows')}
        </Link>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <Link href="#iphone" className="bg-blue-50 text-gray-800 px-6 py-4 rounded-lg flex items-center hover:bg-blue-100 transition-colors">
          <FaApple className="mr-4 text-xl" /> {t('download.iphone').split(' ')[0]}
        </Link>
        <Link href="#macos" className="bg-blue-50 text-gray-800 px-6 py-4 rounded-lg flex items-center hover:bg-blue-100 transition-colors">
          <FaApple className="mr-4 text-xl" /> {t('download.macos')}
        </Link>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link href="#learn" className="bg-blue-50 text-gray-800 px-6 py-4 rounded-lg flex items-center hover:bg-blue-100 transition-colors">
          {t('download.learn')}
        </Link>
      </div>
    </>
  );
} 