// app/contact/page.tsx
import React from 'react';
import Link from 'next/link';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Shield,
  Sparkles,
} from 'lucide-react';
import Navbar from '@/components/Navbar';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar/>
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-br from-amber-900 via-gray-900 to-gray-950">
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-sm border border-amber-400/30 rounded-full px-4 py-2 mb-6">
            <Sparkles className="h-4 w-4 text-amber-400" />
            <span className="text-sm font-medium text-amber-100">
              Ready to Help
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Get in Touch
            <span className="block bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">
              Start Your Safari
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Contact our Uganda safari experts to plan your perfect adventure in the Pearl of Africa.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-amber-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-200">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                Send a Message
              </h2>
              <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
                Our safari experts will get back to you within 24 hours.
              </p>

              <form className="space-y-4 sm:space-y-6">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors text-sm sm:text-base"
                      placeholder="First name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors text-sm sm:text-base"
                      placeholder="Last name"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors text-sm sm:text-base"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors text-sm sm:text-base"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">
                    Interest
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors text-sm sm:text-base"
                  >
                    <option value="">What brings you to Uganda?</option>
                    <option value="gorilla">Gorilla Trekking</option>
                    <option value="wildlife">Wildlife Safari</option>
                    <option value="adventure">Adventure</option>
                    <option value="cultural">Cultural Experience</option>
                    <option value="honeymoon">Honeymoon</option>
                    <option value="family">Family Safari</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors resize-vertical text-sm sm:text-base"
                    placeholder="Tell us about your dream safari..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-600 to-amber-800 hover:from-amber-700 hover:to-amber-900 text-white font-semibold py-3 sm:py-4 px-6 rounded-lg transition-all duration-200 hover:shadow-lg flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <Send className="h-4 w-4 sm:h-5 sm:w-5" />
                  Send Message
                </button>

                <p className="text-xs sm:text-sm text-gray-500 text-center">
                  We respect your privacy. Your information is safe with us.
                </p>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6 sm:space-y-8">
              {/* Contact Details */}
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-200">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Contact Info
                </h3>
                
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="bg-amber-100 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Call Us</h4>
                      <p className="text-gray-600 text-sm sm:text-base">+256 772 123 456</p>
                      <p className="text-xs text-gray-500 mt-1">24/7 for urgent inquiries</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="bg-amber-100 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Email Us</h4>
                      <p className="text-gray-600 text-sm sm:text-base">info@africansafarisltd.com</p>
                      <p className="text-xs text-gray-500 mt-1">Response within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="bg-amber-100 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Visit Us</h4>
                      <p className="text-gray-600 text-sm sm:text-base">
                        Plot 123, Kampala Road<br />
                        Kampala, Uganda
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="bg-amber-100 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Office Hours</h4>
                      <p className="text-gray-600 text-sm sm:text-base">
                        Mon-Fri: 8AM-6PM<br />
                        Sat: 9AM-4PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-amber-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-amber-200">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                  Why Contact Us?
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  {[
                    'Personalized safari recommendations',
                    'Direct access to Uganda experts',
                    'Priority gorilla permit assistance',
                    'Custom itineraries tailored to you'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-amber-600 flex-shrink-0" />
                      <span className="text-gray-700 text-sm sm:text-base">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-200">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                  Quick Connect
                </h3>
                <div className="space-y-3">
                  <a
                    href="https://wa.me/256772123456"
                    className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 text-sm sm:text-base"
                  >
                    <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                    WhatsApp Chat
                  </a>
                  <a
                    href="tel:+256772123456"
                    className="w-full flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 text-sm sm:text-base"
                  >
                    <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-blue-200">
              <Sparkles className="h-4 w-4" />
              Common Questions
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Quick answers to help plan your Uganda safari
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {[
              {
                question: "How far in advance should I book?",
                answer: "We recommend 6-12 months for gorilla trekking, 3-6 months for other safaris."
              },
              {
                question: "What's the best time to visit Uganda?",
                answer: "Dry seasons (June-September, December-February) are ideal for wildlife viewing."
              },
              {
                question: "Do you help with visas?",
                answer: "Yes! We provide visa assistance and all necessary documentation."
              },
              {
                question: "What about health and safety?",
                answer: "We prioritize safety with experienced guides and comprehensive protocols."
              },
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-4 sm:p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 text-sm sm:text-base">
              Still have questions?{" "}
              <a href="mailto:info@africansafarisltd.com" className="text-amber-600 hover:text-amber-700 font-semibold">
                Email us
              </a>{" "}
              - we're happy to help!
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-amber-600 to-amber-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-sm border border-amber-400/30 rounded-full px-4 py-2 mb-6">
            <Sparkles className="h-4 w-4 text-amber-300" />
            <span className="text-sm font-medium text-amber-100">
              Start Your Adventure
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
            Ready to Begin?
          </h2>
          <p className="text-lg sm:text-xl text-amber-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Contact us today and let's plan your unforgettable Uganda safari.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="tel:+256772123456"
              className="inline-flex items-center justify-center gap-2 bg-white text-amber-600 hover:bg-gray-100 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-200 text-sm sm:text-base"
            >
              <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
              Call Now
            </a>
            <a
              href="https://wa.me/256772123456"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-200 text-sm sm:text-base"
            >
              <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
              WhatsApp
            </a>
          </div>
          <div className="mt-6 text-amber-200 text-xs sm:text-sm">
            <Clock className="h-3 w-3 sm:h-4 sm:w-4 inline mr-1" />
            Available 24/7 for your safari inquiries
          </div>
        </div>
      </section>
    </div>
  );
}