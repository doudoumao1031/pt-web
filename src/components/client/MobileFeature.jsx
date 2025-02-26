'use client'

import { useState } from 'react';
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

export default function MobileFeature({ feature }) {
  const [imageError, setImageError] = useState(false);
  const IconComponent = iconMap[feature.icon] || FaCloud;
  
  const getFeatureColor = (title) => {
    const colorMap = {
      'Cloud': 'text-blue-500',
      'Safe': 'text-green-500',
      'Free': 'text-purple-500',
      'Fast': 'text-yellow-500',
      'Wallet': 'text-red-500',
      'Bot': 'text-indigo-500',
      'Groups': 'text-pink-500',
      'Privacy': 'text-gray-700',
      'Open': 'text-teal-500',
      'Fun': 'text-orange-500',
      'Video Call': 'text-red-600',
      'Moments': 'text-blue-400',
      'People Nearby': 'text-green-600',
      'Mini Programs': 'text-purple-600'
    };
    
    return colorMap[title] || 'text-blue-500';
  };
  
  return (
    <div className="flex items-start">
      <div className="w-12 h-12 mr-4 flex-shrink-0 relative">
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
          <div className="w-full h-full flex items-center justify-center bg-blue-50 rounded-lg">
            <IconComponent className={`text-xl ${getFeatureColor(feature.title)}`} />
          </div>
        )}
      </div>
      <div>
        <h3 className="text-lg font-medium text-gray-700 mb-1">{feature.title}</h3>
        <p className="text-sm text-gray-500">{feature.description}</p>
      </div>
    </div>
  );
} 