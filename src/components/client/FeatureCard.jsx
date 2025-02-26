'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  FaCloud, 
  FaShieldAlt, 
  FaMoneyBillWave, 
  FaBolt, 
  FaWallet, 
  FaRobot, 
  FaUsers, 
  FaUserSecret, 
  FaDoorOpen, 
  FaSmile, 
  FaVideo, 
  FaImage, 
  FaMapMarkerAlt, 
  FaAppStore 
} from 'react-icons/fa';

const iconMap = {
  'ic_cloud.svg': FaCloud,
  'ic_safe.svg': FaShieldAlt,
  'ic_free.svg': FaMoneyBillWave,
  'ic_fast.svg': FaBolt,
  'ic_wallet.svg': FaWallet,
  'ic_bot.svg': FaRobot,
  'ic_groups.svg': FaUsers,
  'ic_privacy.svg': FaUserSecret,
  'ic_open.svg': FaDoorOpen,
  'ic_fun.svg': FaSmile,
  'ic_videocall.svg': FaVideo,
  'ic_moments.svg': FaImage,
  'ic_nearby.svg': FaMapMarkerAlt,
  'ic_miniprograms.svg': FaAppStore
};

export default function FeatureCard({ feature }) {
  const [imageError, setImageError] = useState(false);
  const IconComponent = iconMap[feature.icon] || FaCloud;
  
  return (
    <div className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
      <div className="w-40 h-40 flex items-center justify-center mb-8 relative">
        {!imageError ? (
          <Image 
            src={`/images/${feature.icon}`} 
            alt={feature.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-contain"
            onError={() => setImageError(true)}
          />
        ) : (
          <IconComponent className="text-blue-500 text-7xl" />
        )}
      </div>
      <h3 className="text-3xl font-medium text-gray-700 mb-4 hover:text-blue-500 transition-colors duration-300">{feature.title}</h3>
      <p className="text-gray-500 max-w-xs text-lg">{feature.description}</p>
    </div>
  );
} 