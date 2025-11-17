// components/Footer.tsx (with deactivated tour and destination links)
"use client";

import React from 'react';
import Link from 'next/link';
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  MessageCircle,
  Shield,
  Award,
  Users,
  Heart,
  ArrowRight,
  Star,
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Destinations', href: '/destinations' },
    { name: 'Safari Tours', href: '/tours' },
    { name: 'Gorilla Trekking', href: '/tours/gorilla-trekking' },
    { name: 'Wildlife Safaris', href: '/tours/wildlife-safaris' },
  ];

  const destinations = [
    { 
      name: 'Queen Elizabeth NP', 
      href: '/destinations/queen-elizabeth-national-park',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=200&h=120&fit=crop',
      theme: 'Land of Climbing Lions'
    },
    { 
      name: 'Bwindi Forest', 
      href: '/destinations/bwindi-impenetrable-forest',
      image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=200&h=120&fit=crop',
      theme: 'Mountain Gorilla Sanctuary'
    },
    { 
      name: 'Murchison Falls', 
      href: '/destinations/murchison-falls-national-park',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=120&fit=crop',
      theme: 'The Mighty Nile Explosion'
    },
  ];

  const tours = [
    { 
      name: 'Gorilla Trekking', 
      href: '/tours/gorilla-trekking',
      image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=200&h=120&fit=crop',
      theme: 'Once-in-a-Lifetime Encounter'
    },
    { 
      name: 'Big Five Safari', 
      href: '/tours/big-five-safari',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=200&h=120&fit=crop',
      theme: 'Classic Wildlife Adventure'
    },
    { 
      name: 'Nile River Rafting', 
      href: '/tours/nile-river-rafting',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=120&fit=crop',
      theme: 'Thrilling White Water'
    },
  ];

  const company = [
    { name: 'Our Story', href: '/about' },
    { name: 'Meet Our Team', href: '/about#team' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
  ];

  const trustBadges = [
    { icon: Award, text: 'Licensed Tour Operator' },
    { icon: Shield, text: 'Verified Company' },
    { icon: Users, text: 'Local Experts' },
    { icon: Heart, text: 'Sustainable Tourism' },
  ];

  return (
    <footer className="bg-white text-gray-700 border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center gap-3 mb-6 group">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-800 rounded-xl shadow-lg group-hover:shadow-xl transition-shadow">
                  <span className="text-xl text-white">🦁</span>
                </div>
                <div>
                  <div className="text-xl font-bold text-gray-900">African Safaris Ltd</div>
                  <div className="text-xs text-amber-600 font-medium uppercase tracking-widest">
                    Uganda&apos;s Premier Safari Company
                  </div>
                </div>
              </Link>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Since 1990, we&apos;ve been creating unforgettable safari experiences in Uganda. 
                Trust the original Uganda safari experts for authentic wildlife adventures and 
                genuine cultural encounters.
              </p>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {trustBadges.map((badge, index) => {
                  const Icon = badge.icon;
                  return (
                    <div key={index} className="flex items-center gap-2">
                      <Icon className="h-4 w-4 text-amber-500" />
                      <span className="text-xs text-gray-600">{badge.text}</span>
                    </div>
                  );
                })}
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                <a
                  href="https://facebook.com"
                  className="w-10 h-10 bg-gray-100 hover:bg-amber-500 rounded-lg flex items-center justify-center transition-colors group"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5 text-gray-500 group-hover:text-white" />
                </a>
                <a
                  href="https://instagram.com"
                  className="w-10 h-10 bg-gray-100 hover:bg-amber-500 rounded-lg flex items-center justify-center transition-colors group"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5 text-gray-500 group-hover:text-white" />
                </a>
                <a
                  href="https://twitter.com"
                  className="w-10 h-10 bg-gray-100 hover:bg-amber-500 rounded-lg flex items-center justify-center transition-colors group"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5 text-gray-500 group-hover:text-white" />
                </a>
                <a
                  href="https://youtube.com"
                  className="w-10 h-10 bg-gray-100 hover:bg-amber-500 rounded-lg flex items-center justify-center transition-colors group"
                  aria-label="YouTube"
                >
                  <Youtube className="h-5 w-5 text-gray-500 group-hover:text-white" />
                </a>
                <a
                  href="https://wa.me/256772123456"
                  className="w-10 h-10 bg-gray-100 hover:bg-green-500 rounded-lg flex items-center justify-center transition-colors group"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="h-5 w-5 text-gray-500 group-hover:text-white" />
                </a>
              </div>
            </div>

            {/* Destinations with Images - Deactivated */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Featured Destinations</h3>
              <div className="space-y-3">
                {destinations.map((destination) => (
                  <div
                    key={destination.name}
                    className="group flex items-center gap-3 p-2 rounded-lg transition-all duration-200 cursor-not-allowed opacity-70"
                  >
                    <div className="relative w-16 h-12 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={destination.image}
                        alt={destination.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-gray-900 text-sm">
                        {destination.name}
                      </div>
                      <div className="text-xs text-gray-500 mt-0.5">
                        {destination.theme}
                      </div>
                    </div>
                  </div>
                ))}
                {/* View All Link - Deactivated */}
                <div className="flex items-center gap-2 text-gray-400 font-medium text-sm mt-2 cursor-not-allowed">
                  View All Destinations
                  <ArrowRight className="h-3 w-3" />
                </div>
              </div>
            </div>

            {/* Tours with Images - Deactivated */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Tours</h3>
              <div className="space-y-3">
                {tours.map((tour) => (
                  <div
                    key={tour.name}
                    className="group flex items-center gap-3 p-2 rounded-lg transition-all duration-200 cursor-not-allowed opacity-70"
                  >
                    <div className="relative w-16 h-12 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={tour.image}
                        alt={tour.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-gray-900 text-sm">
                        {tour.name}
                      </div>
                      <div className="text-xs text-gray-500 mt-0.5">
                        {tour.theme}
                      </div>
                    </div>
                  </div>
                ))}
                {/* View All Link - Deactivated */}
                <div className="flex items-center gap-2 text-gray-400 font-medium text-sm mt-2 cursor-not-allowed">
                  View All Tours
                  <ArrowRight className="h-3 w-3" />
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-amber-600 transition-colors text-sm flex items-center gap-1 group"
                    >
                      <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Company</h3>
              <ul className="space-y-3">
                {company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-600 hover:text-amber-600 transition-colors text-sm flex items-center gap-1 group"
                    >
                      <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info Bar */}
      <div className="border-b border-gray-100 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
            {/* Phone */}
            <div className="flex items-center justify-center gap-4 text-center md:text-left">
              <div className="bg-amber-500 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-sm text-gray-500">Call Us</div>
                <div className="text-lg font-semibold text-gray-900">+256 772 123 456</div>
                <div className="text-xs text-gray-500">24/7 Safari Support</div>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center justify-center gap-4 text-center md:text-left">
              <div className="bg-amber-500 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-sm text-gray-500">Email Us</div>
                <div className="text-lg font-semibold text-gray-900">info@africansafarisltd.com</div>
                <div className="text-xs text-gray-500">Quick Response Guaranteed</div>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-center justify-center gap-4 text-center md:text-left">
              <div className="bg-amber-500 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-sm text-gray-500">Visit Us</div>
                <div className="text-lg font-semibold text-gray-900">Kampala, Uganda</div>
                <div className="text-xs text-gray-500">Plot 123, Kampala Road</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-b border-gray-100 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                🌍 Safari Insights & Special Offers
              </h3>
              <p className="text-gray-600">
                Subscribe to our newsletter for expert safari tips, exclusive deals, and 
                Uganda travel updates.
              </p>
            </div>
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-gray-900 placeholder-gray-500 transition-colors"
              />
              <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-gray-500 text-sm text-center md:text-left">
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <span>© {currentYear} African Safaris Ltd. All rights reserved.</span>
                <span className="hidden md:inline">•</span>
                <span className="hidden md:inline">Established 1990</span>
              </div>
              <div className="flex items-center gap-4 mt-2 justify-center md:justify-start">
                <span className="flex items-center gap-1">
                  <Star className="h-3 w-3 text-amber-500" />
                  <span>Uganda&apos;s Premier Safari Company</span>
                </span>
              </div>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 justify-center md:justify-end">
              <Link href="/privacy-policy" className="hover:text-amber-600 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-amber-600 transition-colors">
                Terms of Service
              </Link>
              <Link href="/cancellation-policy" className="hover:text-amber-600 transition-colors">
                Cancellation Policy
              </Link>
              <Link href="/sitemap" className="hover:text-amber-600 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>

          {/* Trust Seals */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-6 pt-6 border-t border-gray-200">
            {[
              { text: '🛡️ Licensed by Uganda Tourism Board', color: 'text-blue-600' },
              { text: '🌿 Sustainable Tourism Certified', color: 'text-green-600' },
              { text: '⭐ 5-Star Rated Safaris', color: 'text-amber-600' },
              { text: '🤝 Local Community Partners', color: 'text-purple-600' },
            ].map((seal, index) => (
              <div key={index} className={`flex items-center gap-2 text-xs ${seal.color}`}>
                {seal.text}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/256772123456"
          className="bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 transform hover:scale-110 group"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="h-7 w-7" />
          <div className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs rounded-full px-2 py-1 shadow-lg">
            Live
          </div>
        </a>
      </div>
    </footer>
  );
};

export default Footer;