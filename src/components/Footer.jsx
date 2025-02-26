import { FaTwitter, FaGithub, FaGooglePlay } from 'react-icons/fa'

export default function Footer({ isMobile }) {
  if (isMobile) {
    return (
      <footer className="bg-white text-gray-600 pt-4 pb-8 border-t border-gray-200">
        <div className="px-4">
          <div className="border-b border-gray-200 pb-4 mb-4">
            <h4 className="text-blue-500 font-medium mb-4">Official Community</h4>
            <div className="grid grid-cols-4 gap-4 text-center">
              <a href="#twitter" className="flex flex-col items-center">
                <div className="w-8 h-8 mb-1">
                  <img src="/images/twitter-icon.png" alt="Twitter" className="w-full h-full" />
                </div>
                <span className="text-xs">Twitter</span>
              </a>
              <a href="#business" className="flex flex-col items-center">
                <div className="w-8 h-8 mb-1">
                  <img src="/images/email-icon.png" alt="Business" className="w-full h-full" />
                </div>
                <span className="text-xs">Business</span>
              </a>
              <a href="#tech" className="flex flex-col items-center">
                <div className="w-8 h-8 mb-1">
                  <img src="/images/tech-icon.png" alt="Technology" className="w-full h-full" />
                </div>
                <span className="text-xs">Technology</span>
              </a>
              <a href="#admin" className="flex flex-col items-center">
                <div className="w-8 h-8 mb-1">
                  <img src="/images/admin-icon.png" alt="Administrator" className="w-full h-full" />
                </div>
                <span className="text-xs">Administrator</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-gray-700 font-medium mb-2">Subscribe to us</h4>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter your email to subscribe"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-l-lg focus:outline-none"
              />
              <button className="bg-blue-500 text-white px-4 py-2 rounded-r-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-white text-gray-600 py-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-xl font-medium text-gray-800 mb-6">Mobile Apps</h4>
            <ul className="space-y-4">
              <li><a href="#android" className="hover:text-blue-500 transition-colors">Android</a></li>
              <li><a href="#ios" className="hover:text-blue-500 transition-colors">iOS</a></li>
              <li><a href="#github" className="hover:text-blue-500 transition-colors">GitHub</a></li>
              <li><a href="#googleplay" className="hover:text-blue-500 transition-colors">Google Play</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-medium text-gray-800 mb-6">Desktop Apps</h4>
            <ul className="space-y-4">
              <li><a href="#macos" className="hover:text-blue-500 transition-colors">macOS</a></li>
              <li><a href="#windows" className="hover:text-blue-500 transition-colors">Windows</a></li>
              <li><a href="#linux" className="hover:text-blue-500 transition-colors">Linux</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-medium text-gray-800 mb-6">Official Community</h4>
            <ul className="space-y-4">
              <li><a href="#twitter" className="hover:text-blue-500 transition-colors">Follow Twitter</a></li>
              <li><a href="#business" className="hover:text-blue-500 transition-colors">Business Email</a></li>
              <li><a href="#support" className="hover:text-blue-500 transition-colors">Technical Support Email</a></li>
              <li><a href="#admin" className="hover:text-blue-500 transition-colors">Administrator Email</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-medium text-gray-800 mb-6">Subscribe to us</h4>
            <div className="mb-4">
              <input 
                type="email" 
                placeholder="Enter your email to subscribe"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <button className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors">
              Email subscription
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
} 