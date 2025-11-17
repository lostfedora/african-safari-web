// app/about/page.tsx
import React from 'react';
import Link from 'next/link';
import {
  Calendar,
  Users,
  Award,
  Globe,
  Shield,
  Star,
  ArrowRight,
  MapPin,
  Trophy,
  CheckCircle,
  Heart,
  Leaf,
  Sparkles,
  Zap,
  Mountain,
  Waves,
  Car,
  Compass,
} from 'lucide-react';
import Navbar from '@/components/Navbar';

export default function AboutPage() {
  const stats = [
    { number: '1990', label: 'Founded in Uganda', icon: Calendar },
    { number: '30+', label: 'Years of Excellence', icon: Trophy },
    { number: '50+', label: 'Uganda Safari Routes', icon: MapPin },
    { number: '100%', label: 'Uganda Focus', icon: Heart },
  ];

  const ugandaSpecialties = [
    {
      icon: Heart,
      title: 'Gorilla Trekking Experts',
      description: 'Pioneers in Bwindi and Mgahinga gorilla experiences since the early 1990s',
      color: 'from-red-500 to-pink-600'
    },
    {
      icon: Globe,
      title: 'Complete Uganda Coverage',
      description: 'From Kidepo Valley in the north to Lake Bunyonyi in the south',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Users,
      title: 'Local Community Partnerships',
      description: 'Strong relationships with Ugandan communities built over 30 years',
      color: 'from-amber-500 to-amber-600'
    },
    {
      icon: Leaf,
      title: 'Uganda Conservation Champions',
      description: 'Active supporters of Uganda Wildlife Authority and national parks',
      color: 'from-emerald-500 to-emerald-600'
    },
  ];

  const ugandaHighlights = [
    {
      region: 'Southwest Uganda',
      experiences: ['Mountain Gorilla Tracking', 'Bwindi Impenetrable Forest', 'Lake Bunyonyi', 'Queen Elizabeth National Park'],
      icon: Mountain,
      color: 'bg-emerald-500/10 text-emerald-700 border-emerald-200'
    },
    {
      region: 'Western Uganda',
      experiences: ['Kibale Chimpanzee Tracking', 'Rwenzori Mountains', 'Semuliki Valley', 'Crater Lakes'],
      icon: Compass,
      color: 'bg-purple-500/10 text-purple-700 border-purple-200'
    },
    {
      region: 'Northern Uganda',
      experiences: ['Murchison Falls', 'Kidepo Valley', 'Ziwa Rhino Sanctuary', 'Karamoja Culture'],
      icon: Car,
      color: 'bg-amber-500/10 text-amber-700 border-amber-200'
    },
    {
      region: 'Eastern Uganda',
      experiences: ['Sipi Falls', 'Mount Elgon', 'Source of the Nile', 'Jinja Adventures'],
      icon: Waves,
      color: 'bg-blue-500/10 text-blue-700 border-blue-200'
    },
  ];

  const advantages = [
    {
      title: 'Local Permit Access',
      description: 'Priority access to gorilla permits and park reservations through our long-standing relationships',
      icon: Shield
    },
    {
      title: 'Seasonal Expertise',
      description: 'Intimate knowledge of Uganda\'s seasons, migrations, and optimal viewing times',
      icon: Calendar
    },
    {
      title: 'Community Access',
      description: 'Exclusive access to authentic cultural experiences not available to general tourists',
      icon: Users
    },
    {
      title: 'Emergency Support',
      description: 'Local emergency response network across all national parks and regions',
      icon: Zap
    },
    {
      title: 'Guide Quality',
      description: 'Ugandan guides with decades of experience in their specific regions',
      icon: Star
    },
    {
      title: 'Conservation Impact',
      description: 'Direct contribution to Uganda\'s wildlife conservation through our operations',
      icon: Leaf
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar/>
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-amber-900 via-gray-900 to-gray-950">
        <div className="absolute inset-0 bg-black/40" />
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-sm border border-amber-400/30 rounded-full px-4 py-2 mb-6">
            <Sparkles className="h-4 w-4 text-amber-400" />
            <span className="text-sm font-medium text-amber-100">
              Uganda&apos;s Safari Specialist Since 1990
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            The Original
            <span className="block bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">
              Uganda Safari Experts
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            For over three decades, we&apos;ve been exclusively dedicated to showcasing 
            the incredible beauty and diversity of Uganda—the Pearl of Africa we proudly call home.
          </p>
        </div>
      </section>

      {/* Uganda Focus Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-amber-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-amber-200">
                <Award className="h-4 w-4" />
                Uganda Born & Raised
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Born in Uganda,
                <span className="block text-amber-700">Experts in Uganda</span>
              </h2>
              <div className="space-y-4 text-gray-600 text-base sm:text-lg leading-relaxed">
                <p>
                  <strong>African Safaris Ltd was established in Uganda in 1990</strong>, 
                  making us one of the first dedicated safari companies in the country. 
                  While others have come and gone, our commitment to showcasing Uganda&apos;s 
                  wonders has never wavered.
                </p>
                <p>
                  We don&apos;t just operate in Uganda—we are Ugandan. Our team was born here, 
                  our guides grew up here, and our passion for this land runs deep. This 
                  local expertise means we know the hidden gems, the best times to visit, 
                  and the most authentic experiences.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-amber-200 shadow-lg">
                <div className="text-center mb-6">
                  <div className="text-4xl sm:text-5xl font-bold text-amber-600 mb-2">100%</div>
                  <div className="text-lg font-semibold text-gray-900">Uganda Focus</div>
                  <div className="text-gray-600 text-sm">No other destinations, just pure Uganda expertise</div>
                </div>
                
                <div className="space-y-3">
                  {[
                    'Founded and based in Uganda',
                    'Ugandan-owned and operated',
                    'Exclusive Uganda safari focus',
                    'Deep local community ties'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-amber-600 flex-shrink-0" />
                      <span className="text-gray-700 text-sm sm:text-base">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-amber-200">
              <Trophy className="h-4 w-4" />
              Our Legacy in Numbers
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Uganda Legacy
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Three decades dedicated exclusively to Uganda&apos;s safari experiences
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-amber-100 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-200 transition-colors duration-300">
                    <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-amber-600" />
                  </div>
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Uganda Specialties */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-amber-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-blue-200">
              <MapPin className="h-4 w-4" />
              Uganda Specialists
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Uganda Safari Specialists
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our exclusive focus on Uganda means unparalleled expertise and authentic experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {ugandaSpecialties.map((specialty, index) => {
              const Icon = specialty.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${specialty.color} text-white rounded-xl mb-4`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                    {specialty.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    {specialty.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Uganda Experiences Map */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-emerald-200">
              <Globe className="h-4 w-4" />
              Complete Coverage
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Uganda Coverage
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From every corner of Uganda, we bring you authentic safari experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ugandaHighlights.map((region, index) => {
              const Icon = region.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border backdrop-blur-sm mb-4 ${region.color}`}>
                    <Icon className="h-3 w-3" />
                    <span className="font-semibold">{region.region}</span>
                  </div>
                  <ul className="space-y-2">
                    {region.experiences.map((experience, expIndex) => (
                      <li key={expIndex} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{experience}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Uganda Experts */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-amber-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-purple-200">
              <Shield className="h-4 w-4" />
              Why Choose Us
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Uganda Specialists?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The advantage of working with experts who live and breathe Uganda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {advantages.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="text-center p-4 sm:p-6 hover:transform hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="bg-amber-100 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-200 transition-colors duration-300">
                    <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-amber-600" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-amber-600 to-amber-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-sm border border-amber-400/30 rounded-full px-4 py-2 mb-6">
            <Sparkles className="h-4 w-4 text-amber-300" />
            <span className="text-sm font-medium text-amber-100">
              Ready to Explore Uganda?
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
            Experience Uganda with the Experts
          </h2>
          <p className="text-lg sm:text-xl text-amber-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Let the original Uganda safari company show you the Pearl of Africa 
            through the eyes of those who know it best.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-amber-600 hover:bg-gray-100 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl transition-all duration-200 transform hover:-translate-y-1 hover:shadow-xl text-base sm:text-lg"
            >
              Plan Your Uganda Safari
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
            <Link
              href="/destinations"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl transition-all duration-200 backdrop-blur-sm text-base sm:text-lg"
            >
              Explore Uganda Destinations
            </Link>
          </div>
          <div className="mt-6 text-amber-200 text-sm">
            <MapPin className="h-4 w-4 inline mr-1" />
            Uganda&apos;s Original Safari Company • Established 1990
          </div>
        </div>
      </section>
    </div>
  );
}