'use client'

import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Sidebar from '@/components/Sidebar'
import Feedback from '@/components/Feedback'
import Footer from '@/components/Footer'
import { features } from '@/constants/features'

export default function Home() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    // Initial check
    checkIfMobile()
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile)
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile)
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isMobile={isMobile} />
      <Sidebar isMobile={isMobile} />
      <main>
        <Hero isMobile={isMobile} />
        <section id="features">
          <Features features={features} isMobile={isMobile} />
        </section>
        <section id="feedback">
          <Feedback />
        </section>
        <section id="news" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-medium text-gray-800 text-center mb-16">Latest News</h2>
            <p className="text-center text-gray-500">Stay tuned for the latest updates from Potato Chat!</p>
          </div>
        </section>
      </main>
      <Footer isMobile={isMobile} />
    </div>
  )
} 