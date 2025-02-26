'use client'

import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import FeatureCard from './client/FeatureCard';
import MobileFeature from './client/MobileFeature';

export default function Features({ features, isMobile }) {
  const { t } = useTranslation();

  if (isMobile) {
    return (
      <section className="py-6 bg-white">
        <div className="px-4">
          <h2 className="text-2xl font-medium text-gray-800 mb-6">{t('features.title')}</h2>
          
          <div className="space-y-6">
            {features.map((feature, index) => (
              <MobileFeature key={index} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-medium text-gray-800 text-center mb-16">{t('features.title')}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  )
}

function getFeatureColor(title) {
  // This function can be used to assign specific background colors for mobile icons
  return "";
} 