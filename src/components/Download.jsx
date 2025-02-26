import { FaAndroid, FaApple, FaWindows, FaLinux } from 'react-icons/fa'

export default function Download() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Download Potato</h2>
        <p className="section-subtitle">
          Available on multiple platforms - use Potato wherever you are
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-semibold mb-6">Mobile Apps</h3>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a href="#android" className="btn-primary">
                <FaAndroid className="mr-2 text-xl" /> Android
              </a>
              <a href="#ios" className="btn-secondary">
                <FaApple className="mr-2 text-xl" /> iPhone
              </a>
            </div>
            <img 
              src="/images/mobile-app.png" 
              alt="Potato Mobile App" 
              className="w-64 h-auto shadow-xl rounded-lg"
            />
          </div>
          
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-semibold mb-6">Desktop Apps</h3>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a href="#windows" className="bg-blue-800 text-white px-6 py-3 rounded-lg flex items-center hover:bg-blue-900 transition-colors">
                <FaWindows className="mr-2 text-xl" /> Windows
              </a>
              <a href="#macos" className="bg-gray-700 text-white px-6 py-3 rounded-lg flex items-center hover:bg-gray-800 transition-colors">
                <FaApple className="mr-2 text-xl" /> macOS
              </a>
              <a href="#linux" className="bg-orange-600 text-white px-6 py-3 rounded-lg flex items-center hover:bg-orange-700 transition-colors">
                <FaLinux className="mr-2 text-xl" /> Linux
              </a>
            </div>
            <img 
              src="/images/desktop-app.png" 
              alt="Potato Desktop App" 
              className="w-auto h-64 shadow-xl rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
} 