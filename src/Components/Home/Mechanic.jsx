import { useEffect, useRef } from 'react';
import Button from '../Button/Button.jsx';

export default function MechanicSection() {
  const sectionRef = useRef(null);


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0', 'translate-y-8');

            // Stop observing the element after it becomes visible
            observer.unobserve(entry.target);
          } else {
            entry.target.classList.add('opacity-0', 'translate-y-8');
            entry.target.classList.remove('animate-fade-in');
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);


  const advantages = [
    {
      icon: 'ri-file-list-3-line',
      title: 'Compare Quotes from Verified Suppliers',
      description: 'Access multiple supplier quotations in one trusted marketplace.',
      color: 'teal'
    },
    {
      icon: 'ri-time-line',
      title: ' Save Time on Availability Checks',
      description: 'View part availability without extra follow-ups.',
      color: 'emerald'
    },
    {
      icon: 'ri-price-tag-3-line',
      title: 'Discount & Clearance Alerts ',
      description: 'Timely alerts from verified suppliers on genuine spare parts ',
      color: 'teal'
    },
    {
      icon: 'ri-focus-3-line',
      title: ' Less Searching, More Working',
      description: 'Spend less time sourcing and more time fixing.',
      color: 'teal'
    }
  ];

  const howItWorksSteps = [
    {
      icon: 'ri-send-plane-line',
      title: 'Submit Your Request',
      description: 'Enter details & upload images for accurate identification ',
      color: 'teal'
    },
    {
      icon: 'ri-clipboard-line',
      title: 'Receive Suppliers Quotations ',
      description: 'Verified suppliers respond with accurate quotations through the marketplace',
      color: 'emerlad'
    },
    {
      icon: 'ri-checkbox-circle-line',
      title: 'Compare & Choose',
      description: 'Review prices and delivery options to select what works best for you',
      color: 'teal'
    },
    {
      icon: 'ri-check-double-line',
      title: 'Confirm & Track',
      description: 'Place your order and stay updated as it moves through each stage',
      color: 'emerlad'
    },

  ];

  return (
    <section ref={sectionRef} id="mechanics" className="py-24 bg-gradient-to-br from-gray-50 to-slate-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2523059669%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Corporate Header */}
        <div className="text-center mb-20 animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-1000">
          
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            <span className="bg-gradient-to-r from-teal-700 via-emerald-600 to-cyan-600 bg-clip-text text-transparent">
              Transform Your Workshop
            </span>
            <br />
            <span className="text-gray-800">Operations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Elevate your automotive service capabilities with our enterprise-grade parts sourcing platform.
            Designed for professional mechanics who demand excellence, efficiency, and reliability.
          </p>
        </div>

        {/* Corporate Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-1000 group"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="bg-white/70  min-h-85 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-white/20 hover:border-teal-200/50 relative overflow-hidden">
                {/* Subtle Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-teal-50/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Premium Icon */}
                <div className={`relative w-20 h-20 flex items-center justify-center bg-gradient-to-br from-${advantage.color}-500 to-${advantage.color === 'teal' ? 'emerald' : advantage.color === 'emerald' ? 'cyan' : 'teal'}-600 rounded-2xl mb-8 shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                  <i className={`${advantage.icon} text-3xl text-white`}></i>
                  <div className="absolute -inset-2 bg-gradient-to-br from-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-teal-700 transition-colors duration-300">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {advantage.description}
                  </p>
                </div>

               
              
              </div>
            </div>
          ))}
        </div>

        {/* Corporate Process Section */}
        <div className="mb-24">
          <div className="text-center mb-16 animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-1000">
            <div className="inline-block bg-white/80 backdrop-blur-sm px-8 py-4 rounded-2xl border border-teal-200/50 shadow-lg mb-8">
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900">
                Professional Workflow - <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">For Mechanics</span>
              </h3>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Four strategic steps engineered for maximum efficiency and professional results
            </p>
          </div>

          {/* Enhanced Process Steps */}
          <div className="relative">
            {/* Corporate Connection Line */}
            <div className="hidden lg:block absolute top-32 left-0 right-0 h-1 bg-gradient-to-r from-teal-300 via-emerald-300 to-cyan-300 rounded-full opacity-30"></div>

            <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-8">
              {howItWorksSteps.map((step, index) => (
                <div
                  key={index}
                  className="relative group animate-on-scroll opacity-0 translate-y-8 transition-all min-h-100"
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Corporate Step Card */}
                  <div className="bg-white/80 backdrop-blur-sm  min-h-85 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-white/30 hover:border-teal-200/50 relative z-10 overflow-hidden">
                    {/* Premium Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gray-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>


                    {/* Premium Icon */}
                    <div className={`w-20 h-20 flex items-center justify-center bg-gradient-to-br from-${step.color}-500 to-${step.color === 'teal' ? 'emerald' : step.color === 'emerald' ? 'cyan' : step.color === 'cyan' ? 'teal' : 'emerald'}-600 rounded-2xl mb-8 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative`}>
                      <i className={`${step.icon} text-3xl text-white`}></i>
                      <div className="absolute -inset-2 bg-gradient-to-br from-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-teal-700 transition-colors duration-300">
                        {step.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Corporate Connection Arrow */}
                  {index < howItWorksSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-32 -right-4 z-20">
                      <div className="w-12 h-12 flex items-center justify-center bg-white border-4 border-teal-300 rounded-full shadow-xl transform hover:scale-110 transition-all duration-300">
                        <i className="ri-arrow-right-s-line text-teal-600 text-lg"></i>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Corporate CTA Section */}
        <div className="text-center animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-teal-700 via-emerald-600 to-cyan-600 rounded-3xl sm:rounded-[2rem] p-6 sm:p-10 md:p-16 relative overflow-hidden shadow-2xl">
            {/* Corporate Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="grid grid-cols-12 gap-2 transform rotate-12 scale-150">
                {[...Array(144)].map((_, i) => (
                  <div key={i} className="w-1 h-1 bg-white rounded-full"></div>
                ))}
              </div>
            </div>

            <div className="relative z-10">
              {/* Badge */}
              <div className="mb-6">

                {/* Heading */}
                <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 sm:mb-6 leading-snug sm:leading-tight">
                  Ready to Elevate Your <br className="hidden sm:block" />
                  Professional Standards?
                </h3>

                {/* Description */}
                <p className="text-base sm:text-lg md:text-xl text-teal-100 mb-8 sm:mb-10 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed">
                  Transform your workshop operations with enterprise-grade tools trusted by
                  thousands of professional mechanics across India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
