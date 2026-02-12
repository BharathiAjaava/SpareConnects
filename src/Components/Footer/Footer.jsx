export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Terms & Conditions", href: "/terms" },
        { label: "Cookie Policy", href: "/cookie-policy" },
        { label: "Supplier Terms", href: "/supplier-terms" },
        { label: "Mechanic Terms", href: "/mechanic-terms" },
      ],
    },
    
  ];

  return (
    <footer className="bg-gradient-to-br  from-slate-900 via-teal-900 to-emerald-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2314b8a6' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-16.569 13.431-30 30-30v60c-16.569 0-30-13.431-30-30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Links Section */}
        <div className="py-16 border-b border-teal-800/50">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index}>
                <h3 className="text-lg font-bold text-white mb-6 relative">
                  {section.title}
                  <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full"></div>
                </h3>

                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        target="_parent"
                        rel="noopener noreferrer"
                        className="text-teal-200 hover:text-white transition duration-300 cursor-pointer hover:translate-x-1 transform inline-block"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-teal-200 text-sm">
              © {currentYear} Spares Connect LLP. All rights reserved.| Revolutionizing
              India's auto parts industry.
            </div>

            <div className="text-teal-200 text-sm">
              Designed. Developed. Delivered by Ajaava Technologies
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
