// components/HeroSection.tsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Play, Star, Shield, Users, MapPin, Calendar, ArrowRight } from "lucide-react";

const HeroSection: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  const heroImages = [
    "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=800&fit=crop",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${image})` }}
            />
            {/* Simplified Overlay */}
            <div className="absolute inset-0 bg-gray-900/70" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Main Content */}
          <div className="text-white space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-sm border border-amber-400/30 rounded-full px-4 py-2">
              <Star className="h-4 w-4 text-amber-400" />
              <span className="text-sm font-medium text-amber-100">
                #1 Rated Uganda Safari Company
              </span>
            </div>

            {/* Main Heading - More Compact */}
            <div className="space-y-3">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Discover The
                <span className="block text-amber-400">Wild Heart</span>
                Of Africa
              </h1>
              <p className="text-lg text-gray-200 leading-relaxed">
                Unforgettable wildlife encounters and authentic cultural journeys in Uganda's most spectacular destinations.
              </p>
            </div>

            {/* Compact Stats */}
            <div className="flex gap-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                  <Shield className="h-4 w-4 text-green-400" />
                </div>
                <div>
                  <div className="font-semibold text-sm">100% Safe</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <Users className="h-4 w-4 text-blue-400" />
                </div>
                <div>
                  <div className="font-semibold text-sm">2,500+ Travelers</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/tours"
                className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 hover:shadow-lg"
              >
                Explore Safaris
                <ArrowRight className="h-4 w-4" />
              </Link>
              
              <button className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200">
                <Play className="h-4 w-4" />
                Watch Story
              </button>
            </div>
          </div>

          {/* Right Column - Compact Booking Card */}
          <div className="lg:pl-8">
            <div className="bg-white/95 backdrop-blur-xl rounded-xl shadow-xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Start Your Adventure
              </h3>

              <form className="space-y-3">
                {/* Destination */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
                    <MapPin className="h-3 w-3 text-amber-600" />
                    Destination
                  </label>
                  <select className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-1 focus:ring-amber-500 focus:border-amber-500">
                    <option>Choose Destination</option>
                    <option>Queen Elizabeth NP</option>
                    <option>Bwindi Forest</option>
                    <option>Murchison Falls</option>
                  </select>
                </div>

                {/* Date */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
                    <Calendar className="h-3 w-3 text-amber-600" />
                    Travel Date
                  </label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
                  />
                </div>

                {/* Travelers */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">
                      Adults
                    </label>
                    <select className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-1 focus:ring-amber-500">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">
                      Children
                    </label>
                    <select className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-1 focus:ring-amber-500">
                      <option>0</option>
                      <option>1</option>
                      <option>2</option>
                    </select>
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 rounded-lg transition-colors duration-200 text-sm mt-2"
                >
                  Check Availability
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Image Indicator Dots */}
      <div className="absolute bottom-6 right-6 z-10">
        <div className="flex gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentImage
                  ? "bg-amber-400 scale-125"
                  : "bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;