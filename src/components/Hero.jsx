import { FaAndroid, FaApple, FaWindows, FaDownload } from 'react-icons/fa'

export default function Hero({ isMobile }) {
  if (isMobile) {
    return (
      <section className="pt-16 pb-6 bg-white">
        <div className="px-4">
          <div className="text-center">
            <h1 className="text-3xl font-medium text-gray-800 mb-2">
              Easy and safe
              <br/>
              Reliable messaging
            </h1>
            
            <div className="mt-6 mb-8">
              <a href="#iphone" className="bg-blue-500 text-white px-6 py-3 rounded-full flex items-center justify-center mx-auto w-64 mb-3">
                <FaApple className="mr-2" /> iPhone Download
              </a>
              <a href="#android" className="bg-blue-500 text-white px-6 py-3 rounded-full flex items-center justify-center mx-auto w-64 mb-3">
                <FaAndroid className="mr-2" /> Android Download
              </a>
              <a href="#internal" className="bg-blue-100 text-blue-800 px-6 py-3 rounded-full flex items-center justify-center mx-auto w-64 mb-3">
                <span className="mr-2">🔒</span> Internal test version (China Area)
              </a>
              <a href="#beta" className="text-blue-500 text-sm">
                How to download beta version?
              </a>
            </div>
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
              Easy and safe
              <br/>
              <span className="text-gray-800">Reliable messaging</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-12">
              With POTATO, you can send and receive messages and calls quickly, easily and securely around the world via your mobile phone.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <a href="#android" className="bg-blue-50 text-gray-800 px-6 py-4 rounded-lg flex items-center hover:bg-blue-100 transition-colors">
                <FaAndroid className="mr-4 text-xl" /> Android
              </a>
              <a href="#windows" className="bg-blue-50 text-gray-800 px-6 py-4 rounded-lg flex items-center hover:bg-blue-100 transition-colors">
                <FaWindows className="mr-4 text-xl" /> Windows
              </a>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <a href="#iphone" className="bg-blue-50 text-gray-800 px-6 py-4 rounded-lg flex items-center hover:bg-blue-100 transition-colors">
                <FaApple className="mr-4 text-xl" /> iPhone
              </a>
              <a href="#macos" className="bg-blue-50 text-gray-800 px-6 py-4 rounded-lg flex items-center hover:bg-blue-100 transition-colors">
                <FaApple className="mr-4 text-xl" /> macOS
              </a>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a href="#learn" className="bg-blue-50 text-gray-800 px-6 py-4 rounded-lg flex items-center hover:bg-blue-100 transition-colors">
                Learn More
              </a>
            </div>
          </div>
          
          <div className="hidden md:block">
            <img 
              src="/images/chat-screenshot.png" 
              alt="Potato App Screenshot" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
} 