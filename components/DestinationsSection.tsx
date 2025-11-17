"use client";
import React, { useEffect, useMemo, useState } from "react";
import {
  Mountain,
  Waves,
  MapPin,
  Star,
  Clock,
  Users,
  ArrowRight,
  X,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Info,
  Sparkles,
  Filter,
} from "lucide-react";
import appData from "@/data/data.json";

/* ------------------------------------------------------------------ */
/* Types                                                              */
/* ------------------------------------------------------------------ */

type Destination = {
  id: string;
  title: string;
  image: string;
  gallery: string[];
  type: "park" | "lake" | "wildlife" | "adventure";
  location: string;
  idealDuration: string;
  rating: number;
  price: string;
  featured?: boolean;
  overview: string;
  activities: string[];
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  bestTime: string;
  goodFor: string[];
  permitInfo?: { required: boolean; note?: string };
};

type AppData = {
  brand: {
    name: string;
    tagline: string;
  };
  destinations: (Destination & { slug?: string })[];
  tours: any[];
};

/* ------------------------------------------------------------------ */
/* Data from shared JSON                                              */
/* ------------------------------------------------------------------ */

const { destinations } = appData as AppData;

/* ------------------------------------------------------------------ */
/* UI helpers                                                         */
/* ------------------------------------------------------------------ */

const getTypeIcon = (type: Destination["type"]) => {
  switch (type) {
    case "park":
      return <Mountain className="h-3 w-3 sm:h-4 sm:w-4" />;
    case "lake":
      return <Waves className="h-3 w-3 sm:h-4 sm:w-4" />;
    case "wildlife":
      return <Users className="h-3 w-3 sm:h-4 sm:w-4" />;
    case "adventure":
      return <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />;
    default:
      return <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />;
  }
};

const typePill = (type: Destination["type"]) => {
  const base = "px-2 py-1 sm:px-3 sm:py-1.5 rounded-full text-xs font-medium border backdrop-blur-sm inline-flex items-center gap-1";
  const map: Record<Destination["type"], string> = {
    park: "bg-emerald-500/10 text-emerald-700 border-emerald-200",
    lake: "bg-blue-500/10 text-blue-700 border-blue-200",
    wildlife: "bg-amber-500/10 text-amber-700 border-amber-200",
    adventure: "bg-purple-500/10 text-purple-700 border-purple-200",
  };
  return `${base} ${map[type]}`;
};

/* ------------------------------------------------------------------ */
/* Card Component                                                     */
/* ------------------------------------------------------------------ */

function DestinationCard({
  destination,
  onOpen,
}: {
  destination: Destination;
  onOpen: (d: Destination) => void;
}) {
  return (
    <div className="group relative bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-amber-200/50">
      {destination.featured && (
        <div className="absolute top-2 left-2 sm:top-3 sm:left-3 z-10">
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-2 py-1 sm:px-2.5 sm:py-1 rounded-full text-[10px] font-semibold shadow-lg shadow-amber-500/25 backdrop-blur-sm flex items-center gap-1">
            <Sparkles className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
            <span className="hidden xs:inline">Featured</span>
          </div>
        </div>
      )}

      {/* Image */}
      <div className="relative overflow-hidden">
        <div className="h-40 sm:h-44 md:h-48 overflow-hidden">
          <img
            src={destination.image}
            alt={destination.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        <div className="absolute bottom-2 left-2 right-2 sm:bottom-3 sm:left-3 sm:right-3 flex items-center justify-between">
          <span className={typePill(destination.type)}>
            {getTypeIcon(destination.type)}
            <span className="capitalize hidden xs:inline">
              {destination.type === "park" ? "Park" : 
               destination.type === "lake" ? "Lake" : 
               destination.type === "wildlife" ? "Wildlife" : "Adventure"}
            </span>
          </span>
          <div className="flex items-center gap-1 bg-white/90 backdrop-blur-sm px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full">
            <Star className="h-3 w-3 text-amber-500 fill-amber-500" />
            <span className="text-xs font-semibold">{destination.rating}</span>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="p-3 sm:p-4 md:p-5">
        <div className="flex items-center gap-1 text-gray-600 mb-1.5">
          <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
          <span className="text-xs sm:text-sm font-medium truncate">
            {destination.location}
          </span>
        </div>

        <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 line-clamp-2 leading-tight min-h-[2.5rem]">
          {destination.title}
        </h3>

        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1.5 text-gray-600 text-xs sm:text-sm">
            <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
            <span>{destination.idealDuration}</span>
          </div>
          <div className="text-right">
            <div className="text-[10px] xs:text-xs text-gray-500 uppercase tracking-wide">
              From
            </div>
            <div className="text-sm sm:text-base md:text-lg font-bold text-amber-700">
              {destination.price}
            </div>
          </div>
        </div>

        <button
          onClick={() => onOpen(destination)}
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 group/btn hover:shadow-lg text-sm sm:text-base"
        >
          Explore
          <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 group-hover/btn:translate-x-0.5 transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Modal Component                                                    */
/* ------------------------------------------------------------------ */

function DestinationModal({
  destination,
  onClose,
}: {
  destination: Destination | null;
  onClose: () => void;
}) {
  const [imgIndex, setImgIndex] = useState(0);

  const next = () =>
    setImgIndex((i) => (i + 1) % Math.max(1, destination?.gallery.length ?? 1));
  const prev = () =>
    setImgIndex(
      (i) =>
        (i - 1 + (destination?.gallery.length ?? 1)) %
        (destination?.gallery.length ?? 1)
    );

  useEffect(() => {
    if (!destination) return;
    setImgIndex(0);
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = original;
      window.removeEventListener("keydown", onKey);
    };
  }, [destination, onClose, next, prev]);

  if (!destination) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="relative bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-2xl w-full max-w-6xl max-h-[95vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex-shrink-0 flex items-center justify-between p-3 sm:p-4 lg:p-6 bg-white/95 backdrop-blur-md border-b border-gray-100">
          <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 flex-wrap">
            <span className={typePill(destination.type)}>
              {getTypeIcon(destination.type)}
              <span className="capitalize ml-1 hidden xs:inline">
                {destination.type}
              </span>
            </span>
            <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 text-xs sm:text-sm text-gray-600">
              <span className="flex items-center gap-1">
                <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="hidden sm:inline">{destination.location}</span>
              </span>
              <span className="flex items-center gap-1">
                <Star className="h-3 w-3 sm:h-4 sm:w-4 text-amber-500 fill-amber-500" />
                {destination.rating}
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 sm:p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 flex-shrink-0"
            aria-label="Close modal"
          >
            <X className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 p-3 sm:p-4 lg:p-6">
            {/* Gallery - Sticky on desktop */}
            <div className="space-y-3 sm:space-y-4 xl:sticky xl:top-0">
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-gray-100">
                <div className="aspect-[4/3]">
                  <img
                    src={destination.gallery[imgIndex] ?? destination.image}
                    alt={`${destination.title} ${imgIndex + 1}`}
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>

                {destination.gallery.length > 1 && (
                  <>
                    <button
                      onClick={prev}
                      className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 rounded-full bg-white/90 hover:bg-white shadow-lg backdrop-blur-sm transition-all duration-200"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4" />
                    </button>
                    <button
                      onClick={next}
                      className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 rounded-full bg-white/90 hover:bg-white shadow-lg backdrop-blur-sm transition-all duration-200"
                      aria-label="Next image"
                    >
                      <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
                    </button>
                  </>
                )}

                <div className="absolute bottom-2 right-2 bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs">
                  {imgIndex + 1} / {Math.max(1, destination.gallery.length)}
                </div>
              </div>

              {/* Thumbnails */}
              {destination.gallery.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-1">
                  {[destination.image, ...destination.gallery].slice(0, 5).map((src, i) => {
                    const active = imgIndex === i;
                    return (
                      <button
                        key={i}
                        onClick={() => setImgIndex(i)}
                        className={`flex-shrink-0 w-12 h-10 sm:w-16 sm:h-12 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                          active
                            ? "border-amber-500 ring-1 ring-amber-200"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                        aria-label={`View image ${i + 1}`}
                      >
                        <img
                          src={src}
                          alt=""
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Scrollable Content */}
            <div className="space-y-4 sm:space-y-6">
              <div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                  {destination.title}
                </h2>

                <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-gray-600 mb-3">
                  <span className="flex items-center gap-1 text-sm sm:text-base">
                    <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                    {destination.idealDuration}
                  </span>
                  <span className="text-base sm:text-lg lg:text-xl font-bold text-amber-700">
                    {destination.price}
                  </span>
                </div>

                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  {destination.overview}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 text-base sm:text-lg">
                    Highlights
                  </h4>
                  <ul className="space-y-2">
                    {destination.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="flex-shrink-0 w-1.5 h-1.5 bg-amber-500 rounded-full mt-2" />
                        <span className="text-gray-700 text-sm">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 text-base sm:text-lg">
                    Activities
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {destination.activities.map((a, i) => (
                      <span
                        key={i}
                        className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs border border-gray-200"
                      >
                        {a}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-3 text-base sm:text-lg">
                    Included
                  </h4>
                  <ul className="space-y-2">
                    {destination.inclusions.map((x, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-gray-700 text-sm"
                      >
                        <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 text-emerald-600 flex-shrink-0" />
                        {x}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-3 text-base sm:text-lg">
                    Not Included
                  </h4>
                  <ul className="space-y-2">
                    {destination.exclusions.map((x, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-gray-700 text-sm"
                      >
                        <X className="h-3 w-3 sm:h-4 sm:w-4 text-gray-400 flex-shrink-0" />
                        {x}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-xl sm:rounded-2xl p-3">
                  <Clock className="h-4 w-4 text-amber-600 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-amber-800 text-sm">
                      Best Time to Visit
                    </div>
                    <div className="text-amber-700 text-sm">
                      {destination.bestTime}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {destination.goodFor.map((g, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-white border border-gray-300 text-gray-700 rounded-full text-xs"
                    >
                      {g}
                    </span>
                  ))}
                </div>
              </div>

              {destination.permitInfo?.required && (
                <div className="flex items-start gap-2 bg-blue-50 border border-blue-200 rounded-xl sm:rounded-2xl p-3">
                  <Info className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div className="text-blue-800">
                    <div className="font-semibold text-sm">Permit Required</div>
                    <div className="text-xs">
                      {destination.permitInfo.note}
                    </div>
                  </div>
                </div>
              )}

              <div className="flex flex-col xs:flex-row gap-2 sm:gap-3 pt-2 sm:pt-4">
                <button className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 to-amber-800 hover:from-amber-700 hover:to-amber-900 text-white font-semibold py-2.5 sm:py-3 px-4 rounded-lg sm:rounded-xl transition-all duration-300 text-sm sm:text-base">
                  Plan Your Safari
                  <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 bg-white text-gray-700 hover:text-amber-700 font-medium py-2.5 sm:py-3 px-4 rounded-lg sm:rounded-xl border border-gray-300 hover:border-amber-300 transition-all duration-300 text-sm sm:text-base">
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
      className={`px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 rounded-full font-semibold text-xs sm:text-sm transition-all duration-300 backdrop-blur-sm whitespace-nowrap ${
        isActive
          ? "bg-amber-600 text-white shadow-lg shadow-amber-500/25"
          : "bg-white/80 text-gray-700 hover:bg-amber-50 hover:text-amber-700 border border-gray-200 hover:border-amber-200"
      }`}
    >
      {filter.label}
    </button>
  );
}

/* ------------------------------------------------------------------ */
/* Main Section                                                       */
/* ------------------------------------------------------------------ */

export function DestinationsSection() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [openDest, setOpenDest] = useState<Destination | null>(null);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const filters = [
    { id: "all", label: "All" },
    { id: "park", label: "Parks" },
    { id: "lake", label: "Lakes" },
    { id: "wildlife", label: "Wildlife" },
    { id: "adventure", label: "Adventure" },
  ];

  const filtered = useMemo(
    () =>
      activeFilter === "all"
        ? destinations
        : destinations.filter((d) => d.type === activeFilter),
    [activeFilter]
  );

  return (
    <section id="destinations" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-amber-50/30">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-800 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 border border-amber-200">
            <Sparkles className="h-3 w-3 sm:h-4 sm:w-4" />
            Premium Safari Experiences
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6">
            Discover Uganda&apos;s{" "}
            <span className="bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
              Wild Beauty
            </span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto px-2">
            Immerse yourself in breathtaking landscapes, incredible wildlife, and unforgettable adventures.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-6 sm:mb-8 md:mb-12">
          {/* Mobile Filter Toggle */}
          <div className="flex sm:hidden items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Destinations</h3>
            <button
              onClick={() => setShowMobileFilters(!showMobileFilters)}
              className="flex items-center gap-2 bg-white border border-gray-300 rounded-full px-3 py-1.5 text-sm font-medium"
            >
              <Filter className="h-4 w-4" />
              Filter
            </button>
          </div>

          {/* Filters Container */}
          <div className={`${showMobileFilters ? 'block' : 'hidden'} sm:block`}>
            <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 md:gap-3">
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

        {/* Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-8 sm:mb-12 md:mb-16">
          {filtered.map((d) => (
            <DestinationCard key={d.id} destination={d} onOpen={setOpenDest} />
          ))}
        </div>

        {/* No Results */}
        {filtered.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500 text-lg mb-4">No destinations found</div>
            <button
              onClick={() => setActiveFilter("all")}
              className="bg-amber-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
            >
              Show All Destinations
            </button>
          </div>
        )}

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-amber-500/5 to-amber-600/10 rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 border border-amber-200/50 backdrop-blur-sm">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">
              Ready for Your Adventure?
            </h3>
            <p className="text-gray-600 mb-4 sm:mb-6 md:mb-8 max-w-2xl mx-auto text-sm sm:text-base">
              Let our expert guides craft your perfect Ugandan safari experience.
            </p>
            <div className="flex flex-col xs:flex-row items-center justify-center gap-2 sm:gap-3 md:gap-4">
              <button className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-amber-800 hover:from-amber-700 hover:to-amber-900 text-white font-semibold px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-lg sm:rounded-xl transition-all duration-300 hover:shadow-lg text-sm sm:text-base w-full xs:w-auto justify-center">
                Start Planning
                <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
              </button>
              <button className="inline-flex items-center gap-2 bg-white text-gray-700 hover:text-amber-700 font-medium px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-lg sm:rounded-xl border border-gray-300 hover:border-amber-300 transition-all duration-300 text-sm sm:text-base w-full xs:w-auto justify-center">
                View Sample Itineraries
              </button>
            </div>
          </div>
        </div>
      </div>

      <DestinationModal
        destination={openDest}
        onClose={() => setOpenDest(null)}
      />
    </section>
  );
}

// Export the component as default
export default DestinationsSection;