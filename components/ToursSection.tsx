"use client";
import React, { useEffect, useMemo, useState } from "react";
import {
  Calendar,
  Clock,
  Users,
  Star,
  MapPin,
  ArrowRight,
  Car,
  Compass,
  Mountain,
  Heart,
  Shield,
  CheckCircle,
  X,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Info,
  Sparkles,
  Zap,
  Crown,
  Filter,
} from "lucide-react";
import appData from "@/data/data.json";

/* ------------------------------------------------------------------ */
/* Types                                                              */
/* ------------------------------------------------------------------ */
type Tour = {
  id: string;
  title: string;
  description: string;
  image: string;
  duration: string;
  groupSize: string;
  difficulty: "Easy" | "Moderate" | "Challenging";
  price: string;
  originalPrice?: string;
  rating: number;
  reviewCount: number;
  category: "safari" | "adventure" | "cultural" | "wildlife";
  featured?: boolean;
  includes: string[];
  highlights: string[];
  dates: string[];
  slug?: string;
  destinationId?: string;
  exclusions?: string[];
  itinerary?: string[];
  meetingPoint?: string;
  cancellation?: string;
  addons?: string[];
  notes?: string[];
};

type AppData = {
  tours: Tour[];
};

/* ------------------------------------------------------------------ */
/* Data from shared JSON                                              */
/* ------------------------------------------------------------------ */
const { tours } = appData as AppData;

/* ------------------------------------------------------------------ */
/* Enhanced UI Helpers                                                */
/* ------------------------------------------------------------------ */
const getCategoryIcon = (category: Tour["category"]) => {
  switch (category) {
    case "safari":
      return <Car className="h-4 w-4" />;
    case "adventure":
      return <Compass className="h-4 w-4" />;
    case "cultural":
      return <Users className="h-4 w-4" />;
    case "wildlife":
      return <Mountain className="h-4 w-4" />;
    default:
      return <Compass className="h-4 w-4" />;
  }
};

const getCategoryColor = (category: Tour["category"]) => {
  switch (category) {
    case "safari":
      return "bg-orange-500/15 text-orange-700 border-orange-300";
    case "adventure":
      return "bg-emerald-500/15 text-emerald-700 border-emerald-300";
    case "cultural":
      return "bg-purple-500/15 text-purple-700 border-purple-300";
    case "wildlife":
      return "bg-blue-500/15 text-blue-700 border-blue-300";
    default:
      return "bg-gray-500/15 text-gray-700 border-gray-300";
  }
};

const getDifficultyColor = (difficulty: Tour["difficulty"]) => {
  switch (difficulty) {
    case "Easy":
      return "bg-emerald-500/20 text-emerald-700 border-emerald-300";
    case "Moderate":
      return "bg-amber-500/20 text-amber-700 border-amber-300";
    case "Challenging":
      return "bg-red-500/20 text-red-700 border-red-300";
    default:
      return "bg-gray-500/20 text-gray-700 border-gray-300";
  }
};

const typePill = (cls: string) =>
  `px-3 py-1.5 rounded-full text-sm font-semibold border-2 backdrop-blur-sm inline-flex items-center gap-2 ${cls}`;

// Fixed: Get gallery images - use main image since gallery doesn't exist in your data
const getGalleryImages = (tour: Tour): string[] => {
  return [tour.image]; // Just return the main image since there's no gallery
};

const getCurrentImage = (tour: Tour, imgIndex: number): string => {
  return tour.image; // Always return main image
};

/* ------------------------------------------------------------------ */
/* Enhanced Tour Card                                                 */
/* ------------------------------------------------------------------ */
function TourCard({
  tour,
  onOpen,
}: {
  tour: Tour;
  onOpen: (t: Tour) => void;
}) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  return (
    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 hover:border-amber-400 hover:-translate-y-2">
      {/* Featured Badge */}
      {tour.featured && (
        <div className="absolute top-4 left-4 z-20">
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-2xl shadow-amber-500/30 backdrop-blur-sm flex items-center gap-2">
            <Crown className="h-4 w-4" />
            <span>Popular</span>
          </div>
        </div>
      )}

      {/* Favorite Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setIsFavorite(!isFavorite);
        }}
        className="absolute top-4 right-4 z-20 p-3 bg-white/95 backdrop-blur-sm rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110"
        aria-label={isFavorite ? "Remove from wishlist" : "Add to wishlist"}
      >
        <Heart
          className={`h-5 w-5 transition-all duration-300 ${
            isFavorite
              ? "fill-red-500 text-red-500 scale-110"
              : "text-gray-600 hover:text-red-500"
          }`}
        />
      </button>

      {/* Image Section */}
      <div className="relative overflow-hidden">
        <div className="aspect-[4/3] overflow-hidden">
          {!imageError ? (
            <img
              src={tour.image}
              alt={tour.title}
              className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
                imageLoaded ? "opacity-100" : "opacity-0"
              }`}
              loading="lazy"
              onLoad={() => setImageLoaded(true)}
              onError={handleImageError}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
              <Compass className="h-12 w-12 text-gray-400" />
            </div>
          )}
          {!imageLoaded && !imageError && (
            <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse" />
          )}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        {/* Category & Rating */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
          <span className={typePill(getCategoryColor(tour.category))}>
            {getCategoryIcon(tour.category)}
            <span className="capitalize">
              {tour.category}
            </span>
          </span>
          <div className="flex items-center gap-2 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-full shadow-lg">
            <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
            <span className="text-sm font-bold text-gray-900">
              {tour.rating}
            </span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <div className="flex items-center gap-3 text-gray-600 mb-3">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span className="text-sm font-medium">{tour.duration}</span>
          </div>
          <div className="w-1 h-1 bg-gray-300 rounded-full" />
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            <span className="text-sm font-medium">{tour.groupSize}</span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 leading-tight group-hover:text-amber-700 transition-colors duration-300 min-h-[3rem]">
          {tour.title}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
          {tour.description}
        </p>

        {/* Difficulty & Price */}
        <div className="flex items-center justify-between mb-4">
          <span className={typePill(getDifficultyColor(tour.difficulty))}>
            {tour.difficulty}
          </span>
          <div className="text-right">
            {tour.originalPrice && (
              <div className="text-sm text-gray-500 line-through mb-1">
                {tour.originalPrice}
              </div>
            )}
            <div className="text-xl font-bold text-amber-700">
              {tour.price}
            </div>
            <div className="text-xs text-gray-500">per person</div>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={() => onOpen(tour)}
          className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 group/btn hover:shadow-lg hover:scale-105 text-base"
        >
          Book Tour
          <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Enhanced Tour Modal                                                */
/* ------------------------------------------------------------------ */
function TourModal({
  tour,
  onClose,
}: {
  tour: Tour | null;
  onClose: () => void;
}) {
  const [imgIndex, setImgIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  // Fixed: Since there's no gallery, only show single image
  const hasMultipleImages = false; // Your data doesn't have galleries

  useEffect(() => {
    if (!tour) return;
    setImgIndex(0);
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = original;
      window.removeEventListener("keydown", onKey);
    };
  }, [tour, onClose]);

  if (!tour) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Enhanced Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modern Modal Panel */}
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-7xl max-h-[95vh] overflow-hidden flex flex-col">
        {/* Sticky Header */}
        <div className="flex-shrink-0 flex items-center justify-between p-6 bg-white/98 backdrop-blur-xl border-b border-gray-200">
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-3 mb-2">
              <span className={typePill(getCategoryColor(tour.category))}>
                {getCategoryIcon(tour.category)}
                <span className="capitalize">{tour.category}</span>
              </span>
              <span className={typePill(getDifficultyColor(tour.difficulty))}>
                {tour.difficulty}
              </span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 truncate">
              {tour.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-3 rounded-xl hover:bg-gray-100 transition-colors duration-200 group ml-4 flex-shrink-0"
            aria-label="Close modal"
          >
            <X className="h-6 w-6 text-gray-600 group-hover:text-gray-800" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 p-6">
            {/* Enhanced Gallery - Sticky on desktop */}
            <div className="space-y-4 xl:sticky xl:top-0">
              <div className="relative rounded-2xl overflow-hidden bg-gray-100">
                <div className="aspect-[4/3]">
                  {!imageError ? (
                    <img
                      src={tour.image}
                      alt={tour.title}
                      className={`w-full h-full object-cover transition-opacity duration-300 ${
                        imageLoaded ? "opacity-100" : "opacity-0"
                      }`}
                      loading="eager"
                      onLoad={() => setImageLoaded(true)}
                      onError={handleImageError}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                      <Compass className="h-16 w-16 text-gray-400" />
                      <div className="text-gray-500 text-sm mt-2">Image not available</div>
                    </div>
                  )}
                  {!imageLoaded && !imageError && (
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse" />
                  )}
                </div>

                {/* Removed navigation buttons since no gallery */}
              </div>

              {/* Removed thumbnail strip since no gallery */}
            </div>

            {/* Scrollable Content */}
            <div className="space-y-6">
              {/* Quick Info */}
              <div className="flex flex-wrap items-center gap-4 text-gray-600 text-base">
                <span className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  {tour.duration}
                </span>
                <span className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  {tour.groupSize}
                </span>
                <span className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-amber-500 fill-amber-500" />
                  {tour.rating} ({tour.reviewCount} reviews)
                </span>
              </div>

              <div className="text-right mb-6">
                {tour.originalPrice && (
                  <div className="text-lg text-gray-500 line-through mb-2">
                    {tour.originalPrice}
                  </div>
                )}
                <div className="text-3xl font-bold text-amber-700">
                  {tour.price}
                </div>
                <div className="text-sm text-gray-500">per person</div>
              </div>

              <p className="text-gray-700 leading-relaxed text-base">
                {tour.description}
              </p>

              {/* Highlights */}
              <div className="space-y-4">
                <h4 className="font-bold text-gray-900 text-xl">
                  Tour Highlights
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {tour.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 bg-gray-50 rounded-xl p-4 border border-gray-200"
                    >
                      <div className="flex-shrink-0 w-2 h-2 bg-amber-500 rounded-full" />
                      <span className="text-gray-700 text-sm">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Includes & Exclusions */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="bg-emerald-50 rounded-2xl p-5 border border-emerald-200">
                  <h4 className="font-bold text-gray-900 mb-4 text-lg flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                    What's Included
                  </h4>
                  <ul className="space-y-3">
                    {tour.includes.map((x, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-gray-700 text-sm"
                      >
                        <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0" />
                        {x}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-2xl p-5 border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-4 text-lg flex items-center gap-3">
                    <X className="h-5 w-5 text-gray-500" />
                    Not Included
                  </h4>
                  <ul className="space-y-3">
                    {(tour.exclusions ?? [
                      "Personal expenses",
                      "Insurance",
                      "International flights",
                      "Tips and gratuities"
                    ]).map((x, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-gray-700 text-sm"
                      >
                        <div className="w-2 h-2 bg-gray-400 rounded-full flex-shrink-0" />
                        {x}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Upcoming Dates */}
              {tour.dates && tour.dates.length > 0 && (
                <div className="bg-amber-50 rounded-2xl p-5 border border-amber-200">
                  <h4 className="font-bold text-gray-900 mb-4 text-lg flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-amber-600" />
                    Upcoming Departures
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {tour.dates.slice(0, 6).map((d) => (
                      <div
                        key={d}
                        className="bg-white rounded-xl p-3 border border-amber-200 text-center hover:shadow-lg transition-all duration-300"
                      >
                        <div className="text-sm font-bold text-amber-700">
                          {new Date(d).toLocaleDateString(undefined, {
                            month: "short",
                            day: "numeric",
                          })}
                        </div>
                        <div className="text-xs text-gray-600">
                          {new Date(d).toLocaleDateString(undefined, {
                            year: "numeric",
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <button className="flex-1 flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 hover:shadow-lg text-base">
                  Reserve Your Spot
                  <ArrowRight className="h-5 w-5" />
                </button>
                <button className="flex-1 flex items-center justify-center gap-3 bg-white text-gray-700 hover:text-amber-700 font-semibold py-4 px-6 rounded-xl border-2 border-gray-300 hover:border-amber-300 transition-all duration-300 text-base">
                  Download Itinerary
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Filter Component                                                   */
/* ------------------------------------------------------------------ */
function FilterButton({
  filter,
  isActive,
  onClick,
}: {
  filter: { id: string; label: string };
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-3 rounded-full font-bold text-sm transition-all duration-300 backdrop-blur-sm whitespace-nowrap border-2 ${
        isActive
          ? "bg-amber-600 text-white shadow-2xl shadow-amber-500/30 border-amber-600"
          : "bg-white/90 text-gray-700 hover:bg-amber-50 hover:text-amber-700 border-gray-300 hover:border-amber-300"
      }`}
    >
      {filter.label}
    </button>
  );
}

/* ------------------------------------------------------------------ */
/* Enhanced Main Section                                              */
/* ------------------------------------------------------------------ */
export function ToursSection() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [openTour, setOpenTour] = useState<Tour | null>(null);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const filters = [
    { id: "all", label: "All Tours" },
    { id: "safari", label: "Safari" },
    { id: "adventure", label: "Adventure" },
    { id: "cultural", label: "Cultural" },
    { id: "wildlife", label: "Wildlife" },
  ];

  const filtered = useMemo(
    () =>
      activeFilter === "all"
        ? tours
        : tours.filter((t) => t.category === activeFilter),
    [activeFilter]
  );

  return (
    <section id="tours" className="py-16 bg-gradient-to-b from-white to-amber-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <div className="text-center max-w-5xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-6 py-3 rounded-full text-sm font-bold mb-8 border-2 border-blue-200">
            <Zap className="h-5 w-5" />
            Premium Guided Experiences
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-6">
            Curated{" "}
            <span className="bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
              Safari Tours
            </span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Expertly crafted adventures with small groups, luxury accommodations, and unforgettable wildlife encounters in Uganda's most breathtaking landscapes.
          </p>
        </div>

        {/* Enhanced Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: <Shield className="h-6 w-6" />,
              title: "Expert Safari Guides",
              description: "Local professionals with 10+ years experience",
              color: "from-blue-500 to-blue-600",
            },
            {
              icon: <CheckCircle className="h-6 w-6" />,
              title: "All-Inclusive Pricing",
              description: "No hidden costs, transparent breakdown",
              color: "from-emerald-500 to-emerald-600",
            },
            {
              icon: <Users className="h-6 w-6" />,
              title: "Small Group Experience",
              description: "Intimate groups, personalized attention",
              color: "from-amber-500 to-amber-600",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="text-center p-8 bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2"
            >
              <div
                className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${feature.color} text-white rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-500`}
              >
                {feature.icon}
              </div>
              <h3 className="font-bold text-gray-900 mb-3 text-xl">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Enhanced Filters */}
        <div className="mb-12">
          <div className="flex flex-col items-center">
            {/* Mobile Filter Toggle */}
            <div className="w-full sm:hidden mb-6">
              <button
                onClick={() => setShowMobileFilters(!showMobileFilters)}
                className="w-full flex items-center justify-center gap-4 bg-white border-2 border-amber-200 rounded-2xl py-4 px-6 text-amber-700 font-bold hover:bg-amber-50 transition-all duration-300"
              >
                <Filter className="h-5 w-5" />
                Filter Tours ({filtered.length} available)
                <div className={`transform transition-transform duration-300 ${showMobileFilters ? 'rotate-180' : ''}`}>
                  <ChevronDown className="h-5 w-5" />
                </div>
              </button>
            </div>

            {/* Filters Container */}
            <div className={`${showMobileFilters ? 'block' : 'hidden'} sm:block w-full`}>
              <div className="flex flex-wrap justify-center gap-3 bg-white/80 backdrop-blur-sm rounded-2xl p-4 border-2 border-amber-100">
                {filters.map((filter) => (
                  <FilterButton
                    key={filter.id}
                    filter={filter}
                    isActive={activeFilter === filter.id}
                    onClick={() => {
                      setActiveFilter(filter.id);
                      setShowMobileFilters(false);
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-16">
          {filtered.map((tour) => (
            <TourCard key={tour.id} tour={tour} onOpen={setOpenTour} />
          ))}
        </div>

        {/* No Results */}
        {filtered.length === 0 && (
          <div className="text-center py-16 bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl border-2 border-amber-200">
            <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Compass className="h-10 w-10 text-amber-600" />
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-3">
              No tours found
            </h4>
            <p className="text-gray-600 mb-8 max-w-md mx-auto text-lg">
              We couldn't find any tours matching your selected category. Try another filter or browse all our amazing adventures.
            </p>
            <button
              onClick={() => setActiveFilter("all")}
              className="inline-flex items-center gap-3 bg-amber-600 hover:bg-amber-700 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <Filter className="h-5 w-5" />
              Show All Tours
            </button>
          </div>
        )}

        {/* Enhanced CTA */}
        <div className="text-center">
          <div className="relative bg-gradient-to-br from-blue-600 via-amber-600 to-amber-800 rounded-3xl p-12 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-black/10" />
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 -translate-x-16" />
            
            <div className="relative z-10">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                Ready for Your Dream Safari?
              </h3>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-xl">
                Let our expert guides create a personalized adventure you'll remember forever
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="inline-flex items-center gap-4 bg-white text-amber-700 hover:bg-amber-50 font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl text-lg">
                  <Calendar className="h-6 w-6" />
                  Book Your Adventure
                  <ArrowRight className="h-5 w-5" />
                </button>
                <button className="inline-flex items-center gap-4 bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-xl transition-all duration-300 text-lg">
                  <Users className="h-6 w-6" />
                  Speak to Expert
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-40">
        <button className="flex items-center gap-3 bg-amber-600 hover:bg-amber-700 text-white font-bold px-6 py-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 group">
          <Calendar className="h-5 w-5" />
          <span className="hidden sm:inline">Quick Book</span>
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <TourModal tour={openTour} onClose={() => setOpenTour(null)} />
    </section>
  );
}

// Export the component as default
export default ToursSection;