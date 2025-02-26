import { useState, useEffect } from 'react';
import { FaRocket, FaCommentAlt, FaNewspaper, FaArrowUp } from 'react-icons/fa';

export default function Sidebar() {
  const [showScrollTop, setShowScrollTop] = useState(false);

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

  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40">
      <div className="flex flex-col space-y-6">
        <SidebarItem icon={<FaCommentAlt />} label="Chat" />
        <SidebarItem icon={<FaRocket />} label="Features" />
        <SidebarItem icon={<FaNewspaper />} label="News" />
        
        {showScrollTop && (
          <button 
            onClick={scrollToTop}
            className="bg-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
            aria-label="Scroll to top"
          >
            <FaArrowUp className="text-blue-500 group-hover:text-blue-600 transition-colors" />
          </button>
        )}
      </div>
    </div>
  );
}

function SidebarItem({ icon, label }) {
  return (
    <div className="relative group">
      <div className="bg-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
        <div className="text-blue-500 text-xl group-hover:text-blue-600 transition-colors">
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