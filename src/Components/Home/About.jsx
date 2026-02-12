

export default function About() {

  const content = [
    {
      icon: "ri-mic-line",
      title: "Multi-format Part Request",
      desc: "Text, voice, or upload an image — we'll decode it and match suppliers",
    },
    {
      icon: "ri-map-pin-line",
      title: "District-first Sourcing",
      desc: "Get hyperlocal availability before expanding to pan-India suppliers",
    },
    {
      icon: "ri-shield-check-line",
      title: "Trusted Supplier Network",
      desc: "Every supplier is verified — no middlemen, no unlisted sources",
    },
    {
      icon: "ri-notification-3-line",
      title: "Custom Requests & Hot-Selling Alerts",
      desc: "Stay ahead with live stock notifications and exclusive deals",
    },
    {
      icon: "ri-tools-line",
      title: "Mechanic-first Platform",
      desc: "Built ground-up for actual field users, not corporate procurement teams",
    },
  ]
  return (
    <section id="about" className="py-16 bg-gradient-to-br from-gray-50 to-slate-100">
      <div className="container mx-auto px-6">
        {/* Header */}
        <header className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            <span className="bg-gradient-to-r from-teal-700 via-emerald-600 to-cyan-600 bg-clip-text text-transparent">
              About us
            </span>
            <br />
          </h2>
          <p className="text-gray-800 mt-2 text-xl font-medium">
            Transforming India's auto parts ecosystem through technology and trust
          </p>
        </header>

        <div className="about-content">
          {/* About Statements */}
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <p className="text-gray-700 text-lg font-medium">
              Spares Connect is a reliable spare parts marketplace that connects workshops, suppliers
              and automotive companies through accurate sourcing, verified quotations and
              dependable fulfilment.
            </p>

            <p className="text-gray-700 text-lg font-medium">
              We operate as the infrastructure layer that enables fast, precise and transparent spareparts transactions — allowing workshops to source confidently, suppliers to serve
              efficiently and companies to connect with a verified professional network across the
              automotive ecosystem.
            </p>
          </div>

          {/* Vision & Mission */}
          <div className="grid grid-cols-1  md:grid-cols-2 gap-8 mt-16">
            <div className="bg-white shadow-md rounded-2xl p-8 text-center border-t-4 border-teal-600
                w-full max-w-xl mx-auto">
              <div className="flex justify-center items-center mb-4 ">
                <div className="w-16 h-16 flex items-center justify-center rounded-lg text-white text-4xl bg-gradient-to-r from-teal-700  to-emerald-600">
                  <i className="ri-eye-line"></i>
                </div>
              </div>
              <h2 className="text-2xl font-semibold mb-3 ">Our  Vision</h2>
              <p className="text-gray-600 font-medium">
                To become India’s most reliable and widely trusted spare parts marketplace — the default
                system for accurate sourcing, dependable supply, and confident collaboration across
                workshops, suppliers, and automotive companies
              </p>
            </div>

            <div className="bg-white shadow-md rounded-2xl p-8 text-center border-t-4 border-teal-600
                w-full max-w-xl mx-auto">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 flex items-center justify-center rounded-lg text-white  text-4xl bg-gradient-to-r from-teal-700 to-emerald-600">
                  <i className="ri-rocket-2-line"></i>
                </div>
              </div>
              <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
              <p className="text-gray-600 font-medium">
                Our mission is to build a trusted car spare parts marketplace in India that helps
                workshops, suppliers and companies’ source, supply and connect with confidence

              </p>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}

