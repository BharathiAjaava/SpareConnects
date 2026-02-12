import { useState } from 'react';
import Button from '../Button/Button.jsx';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  if (formData.message.length > 500) {
    setSubmitMessage('Message must not exceed 500 characters.');
    return;
  }

  setSubmitMessage('');
  setIsSubmitting(true);

  try {
    // Construct the WhatsApp message text
    const whatsappMessage = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nSubject: ${formData.subject}\nMessage: ${formData.message}`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Replace with your WhatsApp number in international format without +
    const whatsappNumber = '919655585596';

    // Construct the WhatsApp API URL
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp in new tab or app
    window.open(whatsappURL, '_blank');

    // Optional: reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });

    setSubmitMessage("Your WhatsApp message is ready to send!");
  } catch (error) {
    setSubmitMessage('There was an error preparing your WhatsApp message.');
  } finally {
    setIsSubmitting(false);
  }
};


  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-white to-teal-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
         
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contact <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">Us</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about our platform? Want to join as a workshop or supplier? 
            We'd love to hear from you. Reach out and let's connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start space-x-4 group">
                <a
                  href="tel:+919655585596"
                  className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-teal-500 to-emerald-500 rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                >
                  <i className="ri-phone-fill text-xl text-white"></i>
                </a>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-teal-600 transition-colors duration-300">
                    Phone Number
                  </h4>
                  <p className="text-gray-600">
                    <a href="tel:+919655585596" className="hover:underline">
                      +91 96555 85596
                    </a>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4 group">
                <a
                  href="mailto:kanish@sparesconnect.in"
                  className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                >
                  <i className="ri-mail-fill text-xl text-white"></i>
                </a>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-emerald-600 transition-colors duration-300">
                    Email Address
                  </h4>
                  <p className="text-gray-600">
                    <a href="mailto:kanish@sparesconnect.in" className="hover:underline">
                      kanish@sparesconnect.in
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-teal-100">
            <form onSubmit={handleSubmit} className="space-y-6" data-readdy-form id="contact-form">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm transition-all duration-300"
                    placeholder="+91 98765 43210"
                  />
                </div>
                
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message * (Max 500 characters)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  maxLength={500}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm resize-vertical transition-all duration-300"
                  placeholder="Tell us about your inquiry or how we can help you transform your auto parts business..."
                ></textarea>
                <div className="text-right text-sm text-gray-500 mt-1">
                  {formData.message.length}/500 characters
                </div>
              </div>

              <Button 
                type="submit"
                variant="primary" 
                size="lg" 
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 disabled:opacity-50 whitespace-nowrap"
              >
                <i className="ri-send-plane-line mr-2"></i>
                {isSubmitting ? 'Sending Message...' : 'Send Message'}
              </Button>

              {submitMessage && (
                <div className={`p-4 rounded-xl text-center border ${
                  submitMessage.includes('Thank you') 
                    ? 'bg-green-50 text-green-800 border-green-200' 
                    : 'bg-red-50 text-red-800 border-red-200'
                }`}>
                  {submitMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
