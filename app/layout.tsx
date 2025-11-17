// app/layout.tsx
import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "African Safaris | Premium Uganda Experiences",
    template: "%s | African Safaris"
  },
  description: "Tailor-made safaris across Uganda – national parks, gorilla trekking, Nile adventures and more with African Safaris.",
  keywords: ["uganda safaris", "gorilla trekking", "african tours", "wildlife adventures"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${robotoMono.variable} antialiased bg-white font-sans`}
      >
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}