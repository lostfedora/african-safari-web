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
  Info,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Types                                                              */
/* ------------------------------------------------------------------ */
type Tour = {
  id: string;
  title: string;
  description: string;
  image: string; // hero image
  gallery: string[]; // >= 5 images for modal carousel
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
  exclusions?: string[];
  highlights: string[];
  dates: string[];

  // Optional richer fields (used in modal if present)
  itinerary?: string[]; // bullets Day 1, Day 2...
  meetingPoint?: string;
  cancellation?: string;
  addons?: string[];
  notes?: string[];
};

/* ------------------------------------------------------------------ */
/* Data (upgraded with galleries + optional details)                  */
/* ------------------------------------------------------------------ */
const tours: Tour[] = [
  {
    id: "1",
    title: "Classic Gorilla Trekking Adventure",
    description:
      "An unforgettable journey into Bwindi Impenetrable Forest to encounter majestic mountain gorillas in their natural habitat.",
    image:
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200&h=800&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1568732142599-79a71150b0d3?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1558980664-10a5f4b7bfc5?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1566438487956-8f7b3a2c8c1a?w=1200&h=800&fit=crop",
    ],
    duration: "3 days",
    groupSize: "8 people",
    difficulty: "Challenging",
    price: "$1,500",
    originalPrice: "$1,800",
    rating: 4.9,
    reviewCount: 127,
    category: "wildlife",
    featured: true,
    includes: [
      "Gorilla permit",
      "Expert guide",
      "Accommodation",
      "All meals",
      "Transport",
    ],
    exclusions: ["Flights/visas", "Travel insurance", "Tips", "Alcoholic drinks"],
    highlights: [
      "Gorilla tracking",
      "Rainforest exploration",
      "Bird watching",
      "Cultural village visit",
    ],
    dates: ["2025-12-15", "2026-01-10", "2026-02-05"],
    itinerary: [
      "Day 1: Drive to Bwindi; community walk at sunset.",
      "Day 2: Gorilla trek (1–4 hrs typical); optional village experience.",
      "Day 3: Scenic drive back with photo stops.",
    ],
    meetingPoint: "Kampala/Entebbe hotel pickup (07:00)",
    cancellation:
      "Free cancellation up to 30 days before departure. Permits are non-refundable once issued.",
    addons: ["Chimpansee tracking (Kibale)", "Luxury lodge upgrade"],
    notes: ["Good fitness required", "Waterproof boots recommended"],
  },
  {
    id: "2",
    title: "Big Five Safari Experience",
    description:
      "Comprehensive wildlife safari through Queen Elizabeth and Murchison Falls National Parks.",
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&h=800&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1543248939-ff40856f65d4?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1596357395217-80f2bb7f4a5c?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1602466829816-d3f9a85f77ef?w=1200&h=800&fit=crop",
    ],
    duration: "5 days",
    groupSize: "6 people",
    difficulty: "Easy",
    price: "$1,200",
    rating: 4.8,
    reviewCount: 89,
    category: "safari",
    featured: true,
    includes: [
      "Game drives",
      "Boat safari",
      "Park fees",
      "Luxury lodge",
      "Professional guide",
    ],
    exclusions: ["Flights/visas", "Insurance", "Personal items", "Tips"],
    highlights: [
      "Tree-climbing lions",
      "Kazinga Channel",
      "Murchison Falls",
      "Big Five",
    ],
    dates: ["2025-12-20", "2026-01-15", "2026-02-12"],
    itinerary: [
      "Day 1: Transfer to Murchison; sunset viewpoint.",
      "Day 2: Morning game drive; boat cruise to the falls.",
      "Day 3: Top-of-the-Falls hike; transfer to Queen.",
      "Day 4: Kasenyi plains game drive; Kazinga boat safari.",
      "Day 5: Return to Kampala via crater lakes route.",
    ],
    meetingPoint: "Kampala hotel pickup (06:30) or Entebbe airport",
    cancellation: "Free cancellation up to 14 days before departure.",
  },
  {
    id: "3",
    title: "Nile River Adventure & White Water Rafting",
    description:
      "Thrilling white water rafting on the mighty Nile River combined with scenic beauty and wildlife.",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1533636721434-0e2d61030955?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1493815793585-2b61b31979f5?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1536697246787-1f7ae568d89a?w=1200&h=800&fit=crop",
    ],
    duration: "2 days",
    groupSize: "12 people",
    difficulty: "Moderate",
    price: "$350",
    rating: 4.7,
    reviewCount: 64,
    category: "adventure",
    includes: [
      "Rafting equipment",
      "Safety gear",
      "Lunch",
      "Transport",
      "Guide",
    ],
    exclusions: ["Personal insurance", "Alcoholic drinks", "Tips"],
    highlights: ["Grade 5 rapids", "River Nile", "Safety briefing", "Photography stops"],
    dates: ["2025-12-10", "2025-12-25", "2026-01-08"],
    meetingPoint: "Jinja Nile base (08:30) / Kampala pickup on request",
    cancellation: "Free date changes up to 7 days prior.",
    notes: ["Must be able to swim", "Minimum age 16"],
  },
  {
    id: "4",
    title: "Cultural Heritage & Community Tour",
    description:
      "Immerse yourself in Uganda's rich cultural heritage with visits to local communities and historical sites.",
    image:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200&h=800&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1533636721434-0e2d61030955?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1543248939-ff40856f65d4?w=1200&h=800&fit=crop",
    ],
    duration: "4 days",
    groupSize: "10 people",
    difficulty: "Easy",
    price: "$800",
    rating: 4.6,
    reviewCount: 42,
    category: "cultural",
    includes: [
      "Cultural experiences",
      "Local guides",
      "Accommodation",
      "Meals",
      "Community donations",
    ],
    exclusions: ["Alcoholic drinks", "Personal purchases", "Tips"],
    highlights: [
      "Traditional dances",
      "Local crafts",
      "Community projects",
      "Historical sites",
    ],
    dates: ["2025-12-18", "2026-01-22", "2026-02-16"],
  },
  {
    id: "5",
    title: "Mount Rwenzori Hiking Expedition",
    description:
      "Challenge yourself with a guided hike through the mystical Mountains of the Moon.",
    image:
      "https://images.unsplash.com/photo-1464822759844-d2d137033db2?w=1200&h=800&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1526328828355-79e3f1c3fa3b?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1543248939-ff40856f65d4?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1520975916090-3105956dac38?w=1200&h=800&fit=crop",
    ],
    duration: "7 days",
    groupSize: "6 people",
    difficulty: "Challenging",
    price: "$2,100",
    rating: 4.9,
    reviewCount: 38,
    category: "adventure",
    includes: [
      "Mountain guide",
      "Porters",
      "Camping equipment",
      "All meals",
      "Park fees",
    ],
    exclusions: ["Personal gear", "Insurance", "Rescue fees", "Tips"],
    highlights: ["Summit views", "Alpine vegetation", "Glacial lakes", "Unique wildlife"],
    dates: ["2025-12-25", "2026-01-20", "2026-02-25"],
    itinerary: [
      "Day 1: Nyakalengija gate; hike to first camp.",
      "Day 2–5: Ascent through bamboo & alpine zones.",
      "Day 6: Summit push (weather permitting); descend.",
      "Day 7: Exit park; drive back.",
    ],
    notes: ["Good acclimatization required", "Four-season clothing advised"],
  },
  {
    id: "6",
    title: "Bird Watcher's Paradise Tour",
    description:
      "Specialized tour for bird enthusiasts featuring Uganda's most diverse birding locations.",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=800&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1559599101-967dfc35c1f3?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1526328828355-79e3f1c3fa3b?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1543248939-ff40856f65d4?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1520975916090-3105956dac38?w=1200&h=800&fit=crop",
    ],
    duration: "6 days",
    groupSize: "8 people",
    difficulty: "Moderate",
    price: "$1,400",
    rating: 4.8,
    reviewCount: 31,
    category: "wildlife",
    includes: [
      "Expert bird guide",
      "Binoculars",
      "Field guide",
      "Accommodation",
      "All meals",
    ],
    exclusions: ["Flights", "Insurance", "Tips", "Alcoholic drinks"],
    highlights: [
      "1,000+ species",
      "Rare sightings",
      "Photography opportunities",
      "Expert guidance",
    ],
    dates: ["2025-12-12", "2026-01-18", "2026-02-14"],
    meetingPoint: "Entebbe pickup (flexible flight arrivals)",
  },
];

/* ------------------------------------------------------------------ */
/* Helpers                                                            */
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
      return "bg-orange-100 text-orange-800 border-orange-200";
    case "adventure":
      return "bg-green-100 text-green-800 border-green-200";
    case "cultural":
      return "bg-purple-100 text-purple-800 border-purple-200";
    case "wildlife":
      return "bg-blue-100 text-blue-800 border-blue-200";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
};

const getDifficultyColor = (difficulty: Tour["difficulty"]) => {
  switch (difficulty) {
    case "Easy":
      return "bg-green-100 text-green-800";
    case "Moderate":
      return "bg-yellow-100 text-yellow-800";
    case "Challenging":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const typePill = (cls: string) =>
  `px-2 py-1 rounded-full text-xs font-medium border inline-flex items-center gap-1 ${cls}`;

/* ------------------------------------------------------------------ */
/* Card (compact like Destinations)                                   */
/* ------------------------------------------------------------------ */
function TourCard({
  tour,
  onOpen,
}: {
  tour: Tour;
  onOpen: (t: Tour) => void;
}) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200 hover:border-amber-200">
      {tour.featured && (
        <div className="absolute top-3 left-3 z-10">
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-2.5 py-0.5 rounded-full text-[10px] font-semibold shadow">
            Popular
          </div>
        </div>
      )}

      <button
        onClick={() => setIsFavorite(!isFavorite)}
        className="absolute top-3 right-3 z-10 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow hover:shadow-md transition-all duration-200 hover:scale-110"
        aria-label={isFavorite ? "Remove from wishlist" : "Add to wishlist"}
      >
        <Heart
          className={`h-4 w-4 ${
            isFavorite ? "fill-red-500 text-red-500" : "text-gray-600"
          }`}
        />
      </button>

      {/* Hero */}
      <div className="relative overflow-hidden">
        <img
          src={tour.image}
          alt={tour.title}
          className="w-full h-40 md:h-44 object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
        <div
          className={`${typePill(getCategoryColor(tour.category))} absolute bottom-3 left-3`}
        >
          {getCategoryIcon(tour.category)}
          <span className="capitalize">{tour.category}</span>
        </div>
      </div>

      {/* Body (compact) */}
      <div className="p-4 md:p-5">
        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1 line-clamp-1 group-hover:text-amber-700 transition-colors">
          {tour.title}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed mb-3 line-clamp-2">
          {tour.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <span className="inline-flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {tour.duration}
            </span>
            <span className="inline-flex items-center gap-1">
              <Users className="h-4 w-4" />
              {tour.groupSize}
            </span>
            <span className={`px-2 py-1 rounded-full text-xs ${getDifficultyColor(tour.difficulty)}`}>
              {tour.difficulty}
            </span>
          </div>
          <div className="text-right">
            {tour.originalPrice && (
              <div className="text-[11px] text-gray-500 line-through">
                {tour.originalPrice}
              </div>
            )}
            <div className="text-base md:text-lg font-bold text-amber-700">
              {tour.price}
            </div>
            <div className="text-[11px] text-gray-500">per person</div>
          </div>
        </div>

        <button
          onClick={() => onOpen(tour)}
          className="w-full mt-3 md:mt-4 flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white py-2.5 md:py-3 rounded-xl font-semibold transition-all duration-200 group/btn hover:-translate-y-0.5"
          aria-label={`Book ${tour.title}`}
        >
          Book This Tour
          <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
        </button>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Modal                                                              */
/* ------------------------------------------------------------------ */
function TourModal({
  tour,
  onClose,
}: {
  tour: Tour | null;
  onClose: () => void;
}) {
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    if (!tour) return;
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tour]);

  if (!tour) return null;

  const next = () =>
    setImgIndex((i) => (i + 1) % Math.max(1, tour.gallery.length));
  const prev = () =>
    setImgIndex((i) => (i - 1 + tour.gallery.length) % tour.gallery.length);

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[120] flex items-stretch sm:items-center justify-center"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      {/* Panel */}
      <div
        className="
          relative z-[121] w-full h-full sm:h-auto sm:max-h-[90vh]
          sm:max-w-3xl lg:max-w-5xl mx-0 sm:mx-4
          bg-white rounded-none sm:rounded-2xl shadow-2xl overflow-hidden
          flex flex-col
        "
      >
        {/* Sticky header */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b bg-white/95 backdrop-blur">
          <div className="min-w-0">
            <h3 className="truncate text-lg sm:text-xl font-semibold text-gray-900">
              {tour.title}
            </h3>
            <div className="mt-1 flex flex-wrap gap-2 text-xs sm:text-sm text-gray-600">
              <span className="inline-flex items-center gap-1">
                <Clock className="h-4 w-4" /> {tour.duration}
              </span>
              <span className="inline-flex items-center gap-1">
                <Users className="h-4 w-4" /> {tour.groupSize}
              </span>
              <span className="inline-flex items-center gap-1">
                <Star className="h-4 w-4 text-amber-500 fill-amber-500" />{" "}
                {tour.rating} ({tour.reviewCount})
              </span>
              <span className="font-semibold text-amber-700">{tour.price}</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Scrollable body */}
        <div className="overflow-y-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 p-4 sm:p-6">
            {/* Gallery */}
            <div className="relative">
              <div className="relative h-56 md:h-72 lg:h-[26rem] rounded-xl overflow-hidden">
                <img
                  src={tour.gallery[imgIndex] ?? tour.image}
                  alt={`${tour.title} ${imgIndex + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <button
                  onClick={prev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/85 hover:bg-white shadow"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={next}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/85 hover:bg-white shadow"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-3 grid grid-cols-5 gap-2">
                {[tour.image, ...tour.gallery].slice(0, 5).map((src, i) => {
                  const active = (i === 0 ? -1 : i - 1) === imgIndex;
                  return (
                    <button
                      key={i}
                      onClick={() => setImgIndex(i === 0 ? 0 : i - 1)}
                      className={`h-14 rounded-lg overflow-hidden border ${
                        active ? "border-amber-500" : "border-gray-200"
                      }`}
                      aria-label={`View image ${i + 1}`}
                    >
                      <img src={src} alt="" className="w-full h-full object-cover" loading="lazy" />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Details */}
            <div>
              <p className="text-gray-700 leading-relaxed">{tour.description}</p>

              {/* Highlights */}
              <div className="mt-5">
                <h4 className="font-semibold text-gray-900 mb-2">Highlights</h4>
                <ul className="flex flex-wrap gap-2">
                  {tour.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="inline-block bg-gray-100 text-gray-800 px-2 py-1 rounded-md text-xs"
                    >
                      {h}
                    </span>
                  ))}
                </ul>
              </div>

              {/* Includes / Exclusions */}
              <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-xl border p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Includes</h4>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    {tour.includes.map((x, i) => (
                      <li key={i}>{x}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl border p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Exclusions</h4>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    {(tour.exclusions ?? ["Personal expenses", "Insurance"]).map((x, i) => (
                      <li key={i}>{x}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Upcoming Dates */}
              <div className="mt-5 rounded-xl border p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Upcoming Dates</h4>
                <div className="flex flex-wrap gap-2">
                  {tour.dates.map((d) => (
                    <span
                      key={d}
                      className="inline-flex items-center gap-1 bg-amber-50 text-amber-800 px-3 py-1 rounded-full text-xs border border-amber-200"
                    >
                      <Calendar className="h-4 w-4" />
                      {new Date(d).toLocaleDateString(undefined, {
                        year: "numeric",
                        month: "short",
                        day: "2-digit",
                      })}
                    </span>
                  ))}
                </div>
              </div>

              {/* Optional Itinerary / Policies */}
              {tour.itinerary && tour.itinerary.length > 0 && (
                <div className="mt-5 rounded-xl border p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Sample Itinerary</h4>
                  <ol className="list-decimal list-inside text-sm text-gray-700 space-y-1">
                    {tour.itinerary.map((step, i) => (
                      <li key={i}>{step}</li>
                    ))}
                  </ol>
                </div>
              )}

              {(tour.meetingPoint || tour.cancellation || tour.notes?.length) && (
                <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {tour.meetingPoint && (
                    <div className="rounded-xl border p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Meeting & Pickup</h4>
                      <p className="text-sm text-gray-700">{tour.meetingPoint}</p>
                    </div>
                  )}
                  {(tour.cancellation || tour.notes?.length) && (
                    <div className="rounded-xl border p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Good to Know</h4>
                      {tour.cancellation && (
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>Cancellation:</strong> {tour.cancellation}
                        </p>
                      )}
                      {tour.notes?.length ? (
                        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                          {tour.notes.map((n, i) => (
                            <li key={i}>{n}</li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  )}
                </div>
              )}

              {/* CTAs */}
              <div className="mt-5 mb-2 sm:mb-0 flex flex-col sm:flex-row gap-3">
                <button className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 to-amber-800 hover:from-amber-700 hover:to-amber-900 text-white font-semibold px-5 py-3 rounded-xl shadow">
                  Reserve your spot
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button className="inline-flex items-center justify-center gap-2 bg-white text-gray-700 hover:text-amber-700 font-medium px-5 py-3 rounded-xl border border-gray-300 hover:border-amber-300">
                  Download detailed itinerary (PDF)
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
/* Section                                                            */
/* ------------------------------------------------------------------ */
export function ToursSection() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [openTour, setOpenTour] = useState<Tour | null>(null);

  const filters = [
    { id: "all", label: "All Tours" },
    { id: "safari", label: "Safari Tours" },
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
    <section
      id="tours"
      className="py-16 md:py-20 bg-gradient-to-b from-amber-50/30 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Compass className="h-4 w-4" />
            Curated Experiences
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Handpicked{" "}
            <span className="bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
              Safari Tours
            </span>
          </h2>
          <p className="text-base md:text-xl text-gray-600 leading-relaxed">
            From thrilling wildlife encounters to cultural immersions—small groups, expert guides.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mb-10 md:mb-12">
          {[
            {
              icon: <Shield className="h-6 w-6" />,
              title: "Expert Guides",
              description: "Local pros with 10+ years' experience",
            },
            {
              icon: <CheckCircle className="h-6 w-6" />,
              title: "All Inclusive",
              description: "Transparent pricing—no hidden costs",
            },
            {
              icon: <Users className="h-6 w-6" />,
              title: "Small Groups",
              description: "Intimate experiences, personalized attention",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-200"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 text-amber-600 rounded-xl mb-4">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-5 md:px-6 py-2.5 md:py-3 rounded-full font-semibold text-sm transition-all duration-200 ${
                activeFilter === f.id
                  ? "bg-amber-600 text-white shadow-lg shadow-amber-500/25"
                  : "bg-white text-gray-700 hover:bg-amber-50 hover:text-amber-700 border border-gray-200 hover:border-amber-200"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 mb-10 md:mb-12">
          {filtered.map((tour) => (
            <TourCard key={tour.id} tour={tour} onOpen={setOpenTour} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-amber-600/10 rounded-2xl md:rounded-3xl p-6 md:p-8 border border-blue-200/50">
            <h3 className="text-xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
              Can't Find Your Perfect Tour?
            </h3>
            <p className="text-gray-600 mb-5 md:mb-6 max-w-2xl mx-auto text-sm md:text-base">
              Our safari experts can craft a custom itinerary tailored to your interests, budget, and schedule.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
              <button className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-600 to-amber-800 hover:from-amber-700 hover:to-amber-900 text-white font-semibold px-6 md:px-8 py-3 md:py-4 rounded-full shadow-lg shadow-amber-500/25 transition-all duration-200 hover:shadow-xl hover:shadow-amber-500/40 hover:-translate-y-0.5">
                Customize Your Tour
                <ArrowRight className="h-4 w-4" />
              </button>
              <button className="inline-flex items-center gap-3 bg-white text-gray-700 hover:text-amber-700 font-medium px-6 md:px-8 py-3 md:py-4 rounded-full border border-gray-300 hover:border-amber-300 transition-all duration-200 hover:-translate-y-0.5">
                Speak to Our Expert
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <TourModal tour={openTour} onClose={() => setOpenTour(null)} />
    </section>
  );
}
