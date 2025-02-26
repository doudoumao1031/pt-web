'use client'

import Image from 'next/image';

export default function Features({ features, isMobile }) {
  if (isMobile) {
    return (
      <section className="py-6 bg-white">
        <div className="px-4">
          <h2 className="text-2xl font-medium text-gray-800 mb-6">Advantages and specialties</h2>
          
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="flex items-start"
              >
                <div className={`w-12 h-12 mr-4 flex-shrink-0 relative`}>
                  <Image 
                    src={`/images/${feature.icon}`} 
                    alt={feature.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-700 mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Desktop version remains unchanged
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-medium text-gray-800 text-center mb-16">Advantages and specialties</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
            >
              <div className="w-40 h-40 flex items-center justify-center mb-8 relative">
                <Image 
                  src={`/images/${feature.icon}`} 
                  alt={feature.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-3xl font-medium text-gray-700 mb-4 hover:text-blue-500 transition-colors duration-300">{feature.title}</h3>
              <p className="text-gray-500 max-w-xs text-lg">{feature.description}</p>
            </div>
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