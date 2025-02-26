'use client'

import { useState, useEffect } from 'react';
import { FaRocket, FaCommentAlt, FaNewspaper, FaArrowUp } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

export default function Sidebar({ isMobile }) {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Position sidebar on the right side for both mobile and desktop
  // Just adjust the size and position slightly for mobile
  const sidebarPosition = isMobile 
    ? "fixed right-2 bottom-20 z-40" 
    : "fixed right-6 top-1/2 transform -translate-y-1/2 z-40";
  
  const itemSize = isMobile ? "p-3" : "p-4";
  const iconSize = isMobile ? "text-lg" : "text-xl";
  const spacing = isMobile ? "space-y-3" : "space-y-6";

  return (
    <div className={sidebarPosition}>
      <div className={spacing}>
        <SidebarItem 
          icon={<FaRocket />} 
          label={t('sidebar.features')} 
          onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })}
          itemSize={itemSize}
          iconSize={iconSize}
        />
        <SidebarItem 
          icon={<FaCommentAlt />} 
          label={t('sidebar.feedback')} 
          onClick={() => document.getElementById('feedback').scrollIntoView({ behavior: 'smooth' })}
          itemSize={itemSize}
          iconSize={iconSize}
        />
        <SidebarItem 
          icon={<FaNewspaper />} 
          label={t('sidebar.news')} 
          onClick={() => document.getElementById('news').scrollIntoView({ behavior: 'smooth' })}
          itemSize={itemSize}
          iconSize={iconSize}
        />
        {showScrollTop && (
          <SidebarItem 
            icon={<FaArrowUp />} 
            label={t('sidebar.backToTop')} 
            onClick={scrollToTop}
            itemSize={itemSize}
            iconSize={iconSize}
          />
        )}
      </div>
    </div>
  );
}

function SidebarItem({ icon, label, onClick, itemSize, iconSize }) {
  return (
    <div className="relative group">
      <div 
        className={`bg-white ${itemSize} rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer`}
        onClick={onClick}
      >
        <div className={`text-blue-500 ${iconSize} group-hover:text-blue-600 transition-colors`}>
          {icon}
        </div>
      </div>
      
      {/* Tooltip that appears on hover */}
      <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-white px-3 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        {label}
      </div>
    </div>
  );
} 