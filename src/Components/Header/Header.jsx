import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../Button/Button.jsx';
import logo from "../../assets/sparesconnect-logo.webp"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isHomePage = location.pathname === '/';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6  lg:px-8 ">

        <div className="flex items-center justify-between  h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 group transition-all duration-300 hover:scale-105"
          >
              <img src={logo} className='h-10 md:h-10'/>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {isHomePage ? (
              <>
                <a href="#home" className="text-gray-700 hover:text-teal-600 font-medium transition-colors duration-300">
                  Home
                </a>
        
                <a href="#about" className="text-gray-700 hover:text-teal-600 font-medium transition-colors duration-300">
                  About
                </a>
                <a href="#mechanics" className="text-gray-700 hover:text-teal-600 font-medium transition-colors duration-300">
                  For Mechanics
                </a>
                <a href="#suppliers" className="text-gray-700 hover:text-teal-600 font-medium transition-colors duration-300">
                  For Suppliers
                </a>

                  <a href="#faq" className="text-gray-700 hover:text-teal-600 font-medium transition-colors duration-300">
                   FAQ
                </a>
              
                <a href="#contact" className="text-gray-700 hover:text-teal-600 font-medium transition-colors duration-300">
                  Contact
                </a>
              </>
            ) : (
              <>
                <Link to="/" className="text-gray-700 hover:text-teal-600 font-medium transition-colors duration-300">
                  Home
                </Link>
              
                <Link to="/#about" className="text-gray-700 hover:text-teal-600 font-medium transition-colors duration-300">
                  About
                </Link>
                <Link to="/#mechanics" className="text-gray-700 hover:text-teal-600 font-medium transition-colors duration-300">
                  For Mechanics
                </Link>
                <Link to="/#suppliers" className="text-gray-700 hover:text-teal-600 font-medium transition-colors duration-300">
                  For Suppliers
                </Link>

                <Link to="/faq" className="text-gray-700 hover:text-teal-600 font-medium transition-colors duration-300">
                 FAQ
                </Link>
                
                <Link to="/#contact" className="text-gray-700 hover:text-teal-600 font-medium transition-colors duration-300">
                  Contact
                </Link>
              </>
            )}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            {/* <Button 
              variant="primary" 
              className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white font-semibold px-6 py-2 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 whitespace-nowrap btn-corporate"
            >
              <i className="ri-user-add-line mr-2"></i>
              Join Platform
            </Button> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-300"
          >
            <i className={`${isMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-xl text-gray-700`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <nav className="py-4 space-y-2 border-t border-gray-200">
            {isHomePage ? (
              <>
                <a href="#home" className="block px-4 py-2 text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-all duration-300" onClick={() => setIsMenuOpen(false)}>
                  Home
                </a>
                <a href="#about" className="block px-4 py-2 text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-all duration-300" onClick={() => setIsMenuOpen(false)}>
                  About
                </a>
                <a href="#mechanics" className="block px-4 py-2 text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-all duration-300" onClick={() => setIsMenuOpen(false)}>
                  For Mechanics
                </a>
                <a href="#suppliers" className="block px-4 py-2 text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-all duration-300" onClick={() => setIsMenuOpen(false)}>
                  For Suppliers
                </a>

                <a href="#faq" className="block px-4 py-2 text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-all duration-300" onClick={() => setIsMenuOpen(false)}>
                  FAQ
                </a>
              
                <a href="#contact" className="block px-4 py-2 text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-all duration-300" onClick={() => setIsMenuOpen(false)}>
                  Contact
                </a>
              </>
            ) : (
              <>
                <Link to="/" className="block px-4 py-2 text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-all duration-300" onClick={() => setIsMenuOpen(false)}>
                  Home
                </Link>
                <Link to="/#services" className="block px-4 py-2 text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-all duration-300" onClick={() => setIsMenuOpen(false)}>
                  Services
                </Link>
                <Link to="/#about" className="block px-4 py-2 text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-all duration-300" onClick={() => setIsMenuOpen(false)}>
                  About
                </Link>
                <Link to="/#mechanics" className="block px-4 py-2 text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-all duration-300" onClick={() => setIsMenuOpen(false)}>
                  For Mechanics
                </Link>
                <Link to="/#suppliers" className="block px-4 py-2 text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-all duration-300" onClick={() => setIsMenuOpen(false)}>
                  For Suppliers
                </Link>
                 <Link to="/#faq" className="block px-4 py-2 text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-all duration-300" onClick={() => setIsMenuOpen(false)}>
                 FAQ
                </Link>
                
                <Link to="/#contact" className="block px-4 py-2 text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-all duration-300" onClick={() => setIsMenuOpen(false)}>
                  Contact
                </Link>
              </>
            )}
            <div className="px-4 pt-4">
              {/* <Button 
                variant="primary" 
                size="sm"
                className="w-full bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white font-semibold shadow-lg whitespace-nowrap"
              >
                <i className="ri-user-add-line mr-2"></i>
                Join Platform
              </Button> */}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
