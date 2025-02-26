'use client'

import { useState } from 'react';
import Image from 'next/image';
import { FaAndroid, FaApple, FaWindows, FaDownload } from 'react-icons/fa'
import { useTranslation } from 'react-i18next';
import DownloadButtons from './client/DownloadButtons'

export default function Hero({ isMobile }) {
  const [screenshotError, setScreenshotError] = useState(false);
  const { t } = useTranslation();

  if (isMobile) {
    return (
      <section className="pt-16 pb-6 bg-white">
        <div className="px-4">
          <div className="text-center">
            <h1 className="text-3xl font-medium text-gray-800 mb-2">
              {t('hero.title')}
              <br/>
              {t('hero.subtitle')}
            </h1>
            
            <DownloadButtons isMobile={true} />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-24 pb-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-left">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              {t('hero.title')}
              <br/>
              <span className="text-gray-800">{t('hero.subtitle')}</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-12">
              {t('hero.description')}
            </p>
            
            <DownloadButtons isMobile={false} />
          </div>
          
          <div className="hidden md:block relative h-[500px]">
            {!screenshotError ? (
              <Image 
                src="/images/chat-screenshot.png" 
                alt="Potato App Screenshot" 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain"
                onError={() => setScreenshotError(true)}
              />
            ) : (
              <div className="absolute inset-0 bg-gray-100 rounded-xl overflow-hidden flex flex-col">
                <div className="h-12 bg-blue-500 flex items-center px-4">
                  <div className="w-8 h-8 rounded-full bg-white"></div>
                  <div className="ml-3">
                    <div className="h-3 w-24 bg-white rounded-full"></div>
                    <div className="h-2 w-16 bg-white bg-opacity-70 rounded-full mt-1"></div>
                  </div>
                </div>
                <div className="flex-1 p-4">
                  <div className="flex mb-4">
                    <div className="w-8 h-8 rounded-full bg-blue-200 flex-shrink-0"></div>
                    <div className="ml-2 bg-blue-100 p-2 rounded-lg rounded-tl-none">
                      <div className="h-2 w-32 bg-blue-300 rounded-full"></div>
                      <div className="h-2 w-24 bg-blue-300 rounded-full mt-1"></div>
                    </div>
                  </div>
                  <div className="flex justify-end mb-4">
                    <div className="mr-2 bg-green-100 p-2 rounded-lg rounded-tr-none">
                      <div className="h-2 w-32 bg-green-300 rounded-full"></div>
                      <div className="h-2 w-40 bg-green-300 rounded-full mt-1"></div>
                      <div className="h-2 w-20 bg-green-300 rounded-full mt-1"></div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-green-200 flex-shrink-0"></div>
                  </div>
                  <div className="flex mb-4">
                    <div className="w-8 h-8 rounded-full bg-blue-200 flex-shrink-0"></div>
                    <div className="ml-2 bg-blue-100 p-2 rounded-lg rounded-tl-none">
                      <div className="h-2 w-40 bg-blue-300 rounded-full"></div>
                      <div className="h-2 w-32 bg-blue-300 rounded-full mt-1"></div>
                      <div className="h-2 w-24 bg-blue-300 rounded-full mt-1"></div>
                    </div>
                  </div>
                </div>
                <div className="h-12 bg-gray-200 flex items-center px-4">
                  <div className="h-8 flex-1 bg-white rounded-full mx-2"></div>
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
} 