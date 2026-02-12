
export default function ServicesSection() {
  const features = [
    {
      icon: 'ri-user-settings-line',
      title: 'Mechanic-First Experience',
      description: 'Built from the ground up for mechanics\' workflow and daily challenges',
      gradient: 'from-teal-500 to-emerald-500'
    },
    {
      icon: 'ri-search-2-line',
      title: 'Smart Quote Matching',
      description: 'Get the best matching quotes from suppliers across regions instantly',
      gradient: 'from-emerald-500 to-cyan-500'
    },
    {
      icon: 'ri-truck-line',
      title: 'Next-Day Delivery',
      description: 'Fast delivery for hot-moving parts to keep workshops running smoothly',
      gradient: 'from-cyan-500 to-teal-500'
    },
    {
      icon: 'ri-shield-check-line',
      title: '100% Verified Suppliers',
      description: 'All suppliers are thoroughly verified across all auto component categories',
      gradient: 'from-teal-600 to-emerald-600'
    }
  ];

  return (
    <section id="#services" className="py-20 bg-gradient-to-br from-gray-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
              Revolutionizing India's
            </span>
            <br />
            Spare Parts Industry
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Spares Connect is a reliable spare parts marketplace that connects workshops, suppliers
            and automotive companies through accurate sourcing, verified quotations and
            dependable fulfilment.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-teal-200"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>

              {/* Icon */}
              <div className={`relative w-16 h-16 flex items-center justify-center bg-gradient-to-br ${feature.gradient} rounded-xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <i className={`${feature.icon} text-2xl text-white`}></i>
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-teal-700 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>

              {/* Hover Arrow */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <i className="ri-arrow-right-up-line text-teal-500 text-lg"></i>
              </div>
            </div>
          ))}
        </div>

        {/* Multi-Channel Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 border border-teal-200/30 shadow-2xl relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-16.569 13.431-30 30-30v60c-16.569 0-30-13.431-30-30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>

          <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-teal-700 to-emerald-700 bg-clip-text text-transparent">
                Multi-Channel Part Requests
              </h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Our system allows mechanics to request multiple parts across categories using text, voice, or images.
                No more time wasted on phone calls or visiting multiple suppliers.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 flex items-center justify-center bg-teal-100 rounded-lg">
                    <i className="ri-settings-3-line text-teal-600"></i>
                  </div>
                  <span className="text-gray-700 font-medium">Engine, chassis, electricals & more</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 flex items-center justify-center bg-teal-100 rounded-lg">
                    <i className="ri-mic-line text-teal-600"></i>
                  </div>
                  <span className="text-gray-700 font-medium">Voice, text, and image input</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 flex items-center justify-center bg-teal-100 rounded-lg">
                    <i className="ri-map-pin-line text-teal-600"></i>
                  </div>
                  <span className="text-gray-700 font-medium">Location-based discovery</span>
                </div>
              </div>
            </div>

            {/* Stats Highlight */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl p-8 text-center border border-teal-200/50 shadow-lg">
                <div className="text-5xl font-bold text-teal-600 mb-4">50,000+</div>
                <div className="text-xl text-gray-700 font-semibold">Verified Parts Available</div>
                <div className="mt-4 flex justify-center">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="ri-star-fill text-yellow-500"></i>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
