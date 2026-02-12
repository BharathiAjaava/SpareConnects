import React, { useEffect, useState } from 'react';
import Button from '../../Components/Button/Button.jsx';

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section 
      className="relative min-h-screen flex w-full p-8 items-center justify-center overflow-hidden bg-gradient-to-br from-teal-50 via-emerald-50 to-cyan-50"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-teal-400/20 to-emerald-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-cyan-400/10 to-teal-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Geometric Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 border-2 border-teal-400/30 rotate-45 animate-bounce delay-300"></div>
        <div className="absolute top-3/4 right-1/4 w-6 h-6 border-2 border-emerald-400/30 rotate-12 animate-bounce delay-700"></div>
        <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-cyan-400/40 rounded-full animate-pulse delay-1000"></div>
      </div>

      {/* Main content container with full width */}
      <div className="relative z-10 w-full px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
        
          {/* Enhanced Main Heading */}
          <h1 className={`text-5xl md:text-7xl font-bold mb-8 leading-tight transition-all duration-1200 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <span className="block text-gray-900">
              India's Smartest
            </span>
            <span className="block bg-gradient-to-r from-teal-600 via-emerald-600 to-cyan-600 bg-clip-text text-transparent transform hover:scale-105 transition-transform duration-500">
              Auto Parts Marketplace
            </span>
          </h1>

          {/* Enhanced Subtitle */}
          <p className={`text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed max-w-3xl mx-auto transition-all duration-1000 delay-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Connecting mechanics and workshops with verified auto component suppliers. 
          </p>

          {/* Enhanced Trust Indicators */}
          {/* <div className={`flex flex-wrap justify-center items-center gap-8 text-gray-600 transition-all duration-1000 delay-1500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center space-x-2 group">
              <div className="w-8 h-8 flex items-center justify-center bg-teal-100 rounded-lg group-hover:bg-teal-200 transition-colors duration-300">
                <i className="ri-shield-check-fill text-green-600"></i>
              </div>
              <span className="font-medium">100% Verified Suppliers</span>
            </div>
          
          </div> */}
        </div>
      </div>
    </section>
  );
}