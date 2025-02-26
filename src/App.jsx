import { BrowserRouter as Router } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Sidebar from './components/Sidebar'
import Feedback from './components/Feedback'
import Footer from './components/Footer'
import { features } from './constants/features'

export default function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  return (
    <Router>
      <div className="min-h-screen">
        <Navbar isMobile={isMobile} />
        {!isMobile && <Sidebar />}
        <main>
          <Hero isMobile={isMobile} />
          <Features features={features} isMobile={isMobile} />
          <Feedback />
        </main>
        <Footer isMobile={isMobile} />
      </div>
    </Router>
  )
} 