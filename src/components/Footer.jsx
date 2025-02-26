import Image from 'next/image';
import Link from 'next/link';
import SubscribeForm from './client/SubscribeForm';
import SocialLinks from './client/SocialLinks';

export default function Footer({ isMobile }) {
  if (isMobile) {
    return (
      <footer className="bg-white text-gray-600 pt-4 pb-20 border-t border-gray-200">
        <div className="px-4">
          <div className="border-b border-gray-200 pb-4 mb-4">
            <h4 className="text-blue-500 font-medium mb-4">Official Community</h4>
            <SocialLinks isMobile={true} />
          </div>
          
          <div>
            <h4 className="text-gray-700 font-medium mb-2">Subscribe to us</h4>
            <SubscribeForm />
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
              <li><Link href="#android" className="hover:text-blue-500 transition-colors">Android</Link></li>
              <li><Link href="#ios" className="hover:text-blue-500 transition-colors">iOS</Link></li>
              <li><Link href="#github" className="hover:text-blue-500 transition-colors">GitHub</Link></li>
              <li><Link href="#googleplay" className="hover:text-blue-500 transition-colors">Google Play</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-medium text-gray-800 mb-6">Desktop Apps</h4>
            <ul className="space-y-4">
              <li><Link href="#macos" className="hover:text-blue-500 transition-colors">macOS</Link></li>
              <li><Link href="#windows" className="hover:text-blue-500 transition-colors">Windows</Link></li>
              <li><Link href="#linux" className="hover:text-blue-500 transition-colors">Linux</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-medium text-gray-800 mb-6">Official Community</h4>
            <ul className="space-y-4">
              <li><Link href="#twitter" className="hover:text-blue-500 transition-colors">Follow Twitter</Link></li>
              <li><Link href="#business" className="hover:text-blue-500 transition-colors">Business Email</Link></li>
              <li><Link href="#support" className="hover:text-blue-500 transition-colors">Technical Support Email</Link></li>
              <li><Link href="#admin" className="hover:text-blue-500 transition-colors">Administrator Email</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-medium text-gray-800 mb-6">Subscribe to us</h4>
            <SubscribeForm />
          </div>
        </div>
      </div>
    </footer>
  )
} 