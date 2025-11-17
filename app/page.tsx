"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import { DestinationsSection } from "@/components/DestinationsSection";
import { ToursSection } from "@/components/ToursSection";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <DestinationsSection/>
      <ToursSection/>
      <Footer />
    </div>
  );
}