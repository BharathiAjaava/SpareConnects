import { useEffect, useRef } from 'react';
import Button from '../Button/Button.jsx';

export default function SuppliersSection() {
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
      icon: 'ri-verified-badge-line',
      title: 'Verified Workshop Demand',
      description:
       ` Receive genuine, high-intent part requests from verified workshops actively 
looking to buy. `,
      color: 'teal',
      headingIcon: 'ri-rocket-2-line',
    },
    {
      icon: 'ri-stack-line',
      title: 'Centralized Quote & Order Management ',
      description:
        'Manage quotations and orders easily from a single, structured marketplace view.',
      color: 'teal',
      headingIcon: 'ri-organization-chart',
    },
    {
      icon: 'ri-map-pin-line',
      title: 'Reach Beyond Your Local Zone',
      description:
        'Connect with workshops outside your immediate area through a trusted marketplace. ',
      color: 'cyan',
      headingIcon: 'ri-brain-line',
    },
    {
      icon: 'ri-megaphone-line',
      title: 'Marketing & Visibility Opportunities',
      description:
        'Increase visibility for your products within a verified professional network.',
      color: 'teal',
      headingIcon: 'ri-vip-crown-line',
    },
  ];

  const howItWorksSteps = [
    {
      icon: 'ri-store-2-line',
      title: 'Receive Structured Requests',
      description:
        'Workshops submit clear part requirements through the marketplace, helping you quote accurately from the start. ',
      color: 'emerald',
      headingIcon: 'ri-verified-badge-line',
    },
    {
      icon: 'ri-send-plane-line',
      title: 'Share Your Quotation ',
      description:
        'Respond with pricing and availability from a single, organized dashboard. ',
      color: 'teal',
      headingIcon: 'ri-crosshair-line',
    },
    {
      icon: 'ri-inbox-line',
      title: 'Receive Order Confirmation',
      description:
        'Workshops review quotations and confirm orders directly on the platform. ',
      color: 'cyan',
      headingIcon: 'ri-calculator-line',
    },
    {
      icon: 'ri-tools-line',
      title: 'Confirm the Order & Prepare the Part  ',
      description:
        'Once confirmed, prepare the part for pickup. The marketplace supports smoother coordination as orders scale. ',
      color: 'emerald',
      headingIcon: 'ri-bar-chart-box-line',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="suppliers"
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* Subtle Background Pattern - No Full Background Color */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%23059669%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M20%2020c0-5.5-4.5-10-10-10s-10%204.5-10%2010%204.5%2010%2010%2010%2010-4.5%2010-10zm10%200c0-5.5-4.5-10-10-10s-10%204.5-10%2010%204.5%2010%2010%2010%2010-4.5%2010-10z%22/%3E%3C/g%3E%3C/svg%3E')]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-teal-50/30 via-transparent to-emerald-50/30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Premium Corporate Header */}
    <div className="text-center mb-12 sm:mb-16 md:mb-20 animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-1000 px-4 sm:px-6 lg:px-8">
    

      {/* Heading */}
      <div className="mb-6 sm:mb-8">
        <div className="flex flex-col sm:flex-row items-center justify-center mb-4 sm:mb-6 space-y-4 sm:space-y-0 sm:space-x-4">
          <i className="ri-building-4-line text-4xl sm:text-5xl md:text-6xl text-teal-600"></i>
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-snug sm:leading-tight">
            <span className="block bg-gradient-to-r from-teal-600 via-emerald-600 to-cyan-600 bg-clip-text text-transparent">
              ELEVATE
            </span>
            <span className="block text-gray-800 font-light text-2xl sm:text-4xl md:text-5xl lg:text-6xl">
              YOUR SUPPLY
            </span>
            <span className="block bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              EXCELLENCE
            </span>
          </h2>
        </div>

        {/* Accent Line */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="h-1 w-20 sm:w-28 md:w-32 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full"></div>
        </div>
      </div>

      {/* Paragraph */}
      <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl sm:max-w-3xl md:max-w-4xl mx-auto leading-relaxed">
        Transform your supply chain operations with our enterprise-grade B2B
        platform. Connect with verified mechanics nationwide, streamline
        operations, and accelerate growth through intelligent automation and
        data-driven insights.
      </p>
    </div>

        {/* Corporate Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-1000 group"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="bg-white/80 min-h-100 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100 hover:border-teal-200 relative overflow-hidden card-corporate">
                {/* Subtle Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-50/50 via-transparent to-emerald-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

                {/* Corporate Icon with Heading Icon */}
                <div className="relative mb-6">
                  <div
                    className={`w-20 h-20 flex items-center justify-center bg-gradient-to-br from-${advantage.color}-500 to-${advantage.color === 'emerald'
                      ? 'teal'
                      : advantage.color === 'teal'
                        ? 'cyan'
                        : 'emerald'
                      }-600 rounded-2xl shadow-2xl group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500`}
                  >
                    <i className={`${advantage.icon} text-3xl text-white`}></i>
                  </div>
                  {/* Heading Icon */}
                  {/* <div className="absolute -top-2 -right-2 w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-lg border-2 border-gray-100">
                    <i className={`${advantage.headingIcon} text-${advantage.color}-600 text-lg`}></i>
                  </div> */}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-teal-700 transition-colors duration-300">
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
            <div className="inline-flex items-center bg-white/90 backdrop-blur-sm px-10 py-6 rounded-3xl border border-gray-200 shadow-xl mb-8">
              <i className="ri-workflow-line text-3xl text-teal-600 mr-4"></i>
              <h3 className="text-4xl md:text-5xl font-bold text-gray-800">
                Enterprise Workflow -{' '}
                <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                  For Suppliers
                </span>
              </h3>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Four strategic phases designed for maximum business growth and operational excellence
            </p>
          </div>

          {/* Premium Process Steps */}
          <div className="relative">
            {/* Corporate Connection Line */}
            <div className="hidden lg:block absolute top-32 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-400 rounded-full opacity-30"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {howItWorksSteps.map((step, index) => (
                <div
                  key={index}
                  className="relative group animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-1000"
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Corporate Step Card */}
                  <div className="bg-white/90  min-h-100 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-6 border border-gray-100 hover:border-teal-200 relative z-10 overflow-hidden card-corporate">
                    {/* Subtle Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-50/40 via-transparent to-emerald-50/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

                   

                    {/* Premium Icon with Heading Icon */}
                    <div className="relative mb-8">
                      <div
                        className={`w-20 h-20 flex items-center justify-center bg-gradient-to-br from-${step.color}-500 to-${step.color === 'emerald'
                          ? 'teal'
                          : step.color === 'teal'
                            ? 'cyan'
                            : step.color === 'cyan'
                              ? 'emerald'
                              : 'teal'
                          }-600 rounded-2xl shadow-2xl group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500`}
                      >
                        <i className={`${step.icon} text-3xl text-white`}></i>
                      </div>
                      
                      {/* Heading Icon */}
                      {/* <div className="absolute -top-2 -right-2 w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-lg border-2 border-gray-100">
                        <i className={`${step.headingIcon} text-${step.color}-600 text-lg`}></i>
                      </div> */}
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <h4 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-teal-700 transition-colors duration-300">
                        {step.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Corporate Connection Arrow */}
                  {index < howItWorksSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-32 -right-4 z-20">
                      <div className="w-12 h-12 flex items-center justify-center bg-white/90 backdrop-blur-sm border-2 border-teal-200 rounded-full shadow-xl transform hover:scale-110 transition-all duration-300">
                        <i className="ri-arrow-right-s-line text-teal-600 text-lg"></i>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Premium CTA Section */}
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
            <div className="flex flex-col sm:flex-row items-center justify-center mb-6 sm:mb-8">
              <i className="ri-trophy-line text-4xl sm:text-5xl md:text-6xl text-yellow-300 sm:mr-4 mb-4 sm:mb-0"></i>
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Scale Your Business
                <br />
                <span className="bg-gradient-to-r from-yellow-200 to-amber-200 bg-clip-text text-transparent">
                  Beyond Limits
                </span>
              </h3>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-emerald-100 mb-8 sm:mb-12 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed">
              Join India&apos;s most advanced auto parts supply network. Transform your
              business with enterprise-grade tools, verified leads, and unlimited growth
              opportunities.
            </p>
          </div>

        </div>
      </div>
    </div>
      </div>
    </section>
  );
}
