import React, { useEffect, useState, useRef } from 'react';
import HeroSection from '../../Components/Home/Hero.jsx';
import About from '../../Components/Home/About.jsx';
import SuppliersSection from '../../Components/Home/Supplier.jsx';
import MechanicSection from '../../Components/Home/Mechanic.jsx';
import ContactSection from '../../Components/Home/Contect.jsx';
import FAQ from '../FAQ/FAQ.jsx';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [sectionsVisible, setSectionsVisible] = useState({});
  const sectionsRef = useRef({});


  useEffect(() => {
   
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    // Professional intersection observer for sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionName = entry.target.getAttribute('data-section');
          if (sectionName && entry.isIntersecting) {
            setSectionsVisible(prev => ({
              ...prev,
              [sectionName]: true
            }));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '-50px 0px -50px 0px'
      }
    );

    // Observe all sections
    Object.values(sectionsRef.current).forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  const getSectionRef = (sectionName) => (el) => {
    sectionsRef.current[sectionName] = el;
  };

 
  return (
    <div className={`min-h-screen page-enter ${isLoaded ? 'page-enter-active' : ''}`}>
 
      <main>
        <div 
          id="home"
          ref={getSectionRef('hero')}
          data-section="hero"
          className={`hero-slide-up ${isLoaded ? 'active' : ''}`}
        >
          <HeroSection />
        </div>
        
        <div 
          ref={getSectionRef('about')}
          data-section="about"
          className={`section-slide-left ${sectionsVisible.about ? 'active' : ''}`}
        >
          <About />
        </div>

         <div 
          ref={getSectionRef('mechanics')}
          data-section="mechanics"
          className={`section-slide-right ${sectionsVisible.mechanics ? 'active' : ''}`}
        >
          <MechanicSection />
        </div>

       <div 
          ref={getSectionRef('suppliers')}
          data-section="suppliers"
          className={`section-slide-up ${sectionsVisible.suppliers ? 'active' : ''}`}
        >
          <SuppliersSection />
        </div>
        
         <div 
          ref={getSectionRef('faq')}
          data-section="faq"
          className={`section-fade-scale ${sectionsVisible.contact ? 'active' : ''}`}
        >
          <FAQ />
        </div>
        
        <div 
          ref={getSectionRef('contact')}
          data-section="contact"
          className={`section-fade-scale ${sectionsVisible.contact ? 'active' : ''}`}
        >
          <ContactSection />
        </div>

      
      </main>
    </div>
  );
}