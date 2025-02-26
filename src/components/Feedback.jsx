import { useState } from 'react';
import Image from 'next/image';
import { FaUser } from 'react-icons/fa';

export default function Feedback() {
  const [avatarErrors, setAvatarErrors] = useState({
    1: false,
    2: false,
    3: false
  });

  const handleAvatarError = (id) => {
    setAvatarErrors(prev => ({
      ...prev,
      [id]: true
    }));
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-medium text-gray-800 text-center mb-16">What our users say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 relative mr-4">
                  {!avatarErrors[item] ? (
                    <Image 
                      src={`/images/avatar-${item}.jpg`} 
                      alt={`User ${item}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="rounded-full object-cover"
                      onError={() => handleAvatarError(item)}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-blue-100 rounded-full">
                      <FaUser className="text-blue-500 text-xl" />
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">User {item}</h3>
                  <p className="text-gray-500 text-sm">Regular user</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Potato Chat has completely changed how I communicate with friends and family. 
                The interface is intuitive and the features are exactly what I need."
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 