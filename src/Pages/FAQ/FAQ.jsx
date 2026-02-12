import { useState, useEffect, useRef } from 'react';

// import Footer from '../../components/feature/Footer';

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState('general');
  const [openFAQ, setOpenFAQ] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [sectionsVisible, setSectionsVisible] = useState({});
  const sectionsRef = useRef({});

  useEffect(() => {
    // Advanced page entry animation
    const loadTimer = setTimeout(() => {
      setIsLoaded(true);
    }, 150);

    // Professional intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionName = entry.target.getAttribute('data-section');
          if (sectionName && entry.isIntersecting) {
            setSectionsVisible((prev) => ({
              ...prev,
              [sectionName]: true,
            }));
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '-30px 0px -30px 0px',
      }
    );

    // Observe sections
    Object.values(sectionsRef.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      clearTimeout(loadTimer);
      observer.disconnect();
    };
  }, []);

  const getSectionRef = (sectionName) => (el) => {
    sectionsRef.current[sectionName] = el;
  };

  const categories = [
    { id: 'general', label: 'General', icon: 'ri-question-line' },
    { id: 'mechanics', label: 'For Mechanics', icon: 'ri-tools-line' },
    { id: 'suppliers', label: 'For Suppliers', icon: 'ri-store-line' },
    { id: 'technical', label: 'Technical', icon: 'ri-settings-line' },
  ];

  const faqs = [
    {
      question: 'What is Spares Connect?',
      answer:
        "Spares Connect is a structured, high-trust spare parts marketplace connecting verified mechanics and suppliers through accurate requests, clear quotations and a reliable sourcing workflow.",
      category: 'general',
    },
    {
      question: 'Who can use the platform?',
      answer:
        `Car Mechanics, workshops, suppliers, distributors and automotive brands can all use the platform for sourcing, supplying, or promoting parts.`,
      category: 'general',
    },
    {
      question: 'Is Spares Connect a safe and verified marketplace?',
      answer:
        'Yes. All mechanics and suppliers undergo verification to ensure genuine interactions and a trusted operating environment. ',
      category: 'general',
    },
    {
      question: 'How does Spares Connect help me source parts faster? ',
      answer:
        'You receive quotations from verified suppliers in one marketplace, reducing manual calls and giving qicker clarity on availability and pricing.',
      category: 'mechanics',
    },
    {
      question: "Can I compare supplier quotations? ",
      answer:
        'Yes. You can compare pricing, availability and delivery timelines before confirming your order. , or simply type what you need. Our AI system will help identify the correct parts and match you with suppliers.',
      category: 'mechanics',
    },
    {
      question: 'How do I create a part request? ',
      answer:
        "Enter vehicle details, type the part name, upload images, or attach a handwritten note — the system structures your request for accuracy. ",
      category: 'mechanics',
    },
    {
      question: 'What kind of workshop requests will I receive?',
      answer:
        'You receive structured, detailed requests from verified mechanics, ensuring clarity and reducing unnecessary back-and-forth. ',
      category: 'suppliers',
    },
    {
      question: 'How do I send quotations? ',
      answer:
        'You respond directly from your supplier dashboard with accurate pricing and availability.',
      category: 'suppliers',
    },
    {
      question: 'How does Spares Connect help me grow my business? ',
      answer:
        'The platform gives visibility across districts, connects you with new mechanics and provides analytics for smarter stock decisions. ',
      category: 'suppliers',
    },
    {
      question: 'Is my data secure?',
      answer:
        'Yes. All user data, requests, quotations and order details are protected with strict security protocols and controlled access. ',
      category: 'technical',
    },
    {
      question: 'What devices does Spares Connect support?',
      answer:
        'The platform works on mobiles, tablets and desktops with a modern browser.',
      category: 'technical',
    },
    {
      question: 'Can I upload images or documents?',
      answer:
        `Yes. Mechanics can upload images or notes for clarity. Suppliers can upload product 
          details if required.`,
      category: 'technical',
    },
  ];

  const filteredFAQs = faqs.filter((faq) => faq.category === activeCategory);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section  id="faq"  className={`min-h-screen page-enter ${isLoaded ? 'page-enter-active' : ''}`}>


      {/* Hero Section */}
      <section
        ref={getSectionRef('hero')}
        data-section="hero"
        className={`relative py-32 bg-gradient-to-br from-teal-50 via-emerald-50 to-cyan-50 overflow-hidden section-fade-scale ${
          sectionsVisible.hero ? 'active' : ''
        }`}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;80&quot; height=&quot;80&quot; viewBox=&quot;0 0 80 80&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23059669&quot; fill-opacity=&quot;0.05&quot;%3E%3Cpath d=&quot;M40 40c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm20 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30 parallax-slow"></div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-teal-400/10 to-emerald-400/10 rounded-full blur-2xl pulse-corporate"></div>
          <div
            className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-emerald-400/10 to-cyan-400/10 rounded-full blur-2xl pulse-corporate"
            style={{ animationDelay: '1s' }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative">
          <div className={`intersection-fade-in ${sectionsVisible.hero ? 'visible' : ''}`}>
            {/* <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm border border-teal-200/50 rounded-full text-teal-700 text-sm font-semibold mb-8 shadow-lg glow-corporate">
              <div className="w-8 h-8 flex items-center justify-center bg-teal-100 rounded-full mr-3">
                <i className="ri-question-answer-line text-teal-600"></i>
              </div>
              Frequently Asked Questions
            </div> */}

             <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            <span className="bg-gradient-to-r from-teal-700 via-emerald-600 to-cyan-600 bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
            <br />
          </h2>

            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Got <span className="text-corporate-gradient">Questions?</span>
              <br />
              <span className="text-5xl md:text-6xl text-gray-700">We Have Answers</span>
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Find comprehensive answers to all your questions about SparesConnect. From getting started
              to advanced features, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section
        ref={getSectionRef('content')}
        data-section="content"
        className={`py-24 bg-white relative section-slide-up ${
          sectionsVisible.content ? 'active' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Category Tabs */}
          <div
            className={`flex flex-wrap justify-center gap-4 mb-16 stagger-children ${
              sectionsVisible.content ? 'active' : ''
            }`}
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id);
                  setOpenFAQ(null);
                }}
                className={`flex items-center px-8 py-4 rounded-2xl font-semibold transition-all duration-500 transform hover:scale-105 corporate-hover btn-corporate ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-teal-600 to-emerald-600 text-white shadow-2xl glow-corporate'
                    : 'bg-white text-gray-700 hover:bg-teal-50 border border-gray-200 hover:border-teal-200 shadow-lg'
                }`}
              >
                <i className={`${category.icon} mr-3 text-xl`}></i>
                {category.label}
              </button>
            ))}
          </div>

          {/* FAQ Items */}
          <div className="max-w-5xl mx-auto">
            <div
              className={`space-y-6 stagger-children ${
                sectionsVisible.content ? 'active' : ''
              }`}
            >
              {filteredFAQs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 overflow-hidden card-corporate glow-corporate"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-10 py-8 text-left flex items-center justify-between hover:bg-gradient-to-r hover:from-teal-50 hover:to-emerald-50 transition-all duration-300"
                  >
                    <span className="text-xl font-bold text-gray-900 pr-6 leading-relaxed">
                      {faq.question}
                    </span>
                    <div
                      className={`w-12 h-12 flex items-center justify-center bg-gradient-to-br from-teal-100 to-emerald-100 rounded-2xl flex-shrink-0 transition-all duration-500 ${
                        openFAQ === index
                          ? 'rotate-180 bg-gradient-to-br from-teal-600 to-emerald-600'
                          : ''
                      }`}
                    >
                      <i
                        className={`ri-arrow-down-s-line text-2xl transition-colors duration-300 ${
                          openFAQ === index ? 'text-white' : 'text-teal-600'
                        }`}
                      ></i>
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-700 ease-in-out ${
                      openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-10 pb-8">
                      <div className="h-px bg-gradient-to-r from-teal-200 via-emerald-200 to-cyan-200 mb-6"></div>
                      <p className="text-lg text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
         
        </div>
      </section>

      {/* <Footer /> */}
    </section>
  );
}
