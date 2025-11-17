// components/Navbar.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Home,
  MapPinned,
  Bus,
  Info,
  Newspaper,
  Phone,
  Menu,
  X,
  ArrowRight,
  Star,
} from "lucide-react";
import appData from "@/data/data.json";

const { brand } = appData;

/* ------------------------------------------------------------------ */
/* Navbar component                                                   */
/* ------------------------------------------------------------------ */

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleNavItemClick = (href: string) => {
    setMobileOpen(false);
    
    // Handle hash navigation
    if (href.startsWith('#')) {
      if (pathname === '/') {
        // Scroll to section on home page
        const targetId = href.substring(1);
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Navigate to home page with hash
        router.push(`/${href}`);
      }
    }
  };

  const handleHashClick = (e: React.MouseEvent, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      handleNavItemClick(href);
    }
  };

  const navItems = [
    { href: "/", icon: Home, label: "Home" },
    { href: "#destinations", icon: MapPinned, label: "Destinations" },
    { href: "#tours", icon: Bus, label: "Tours" },
    { href: "/about", icon: Info, label: "About" },
    { href: "/blog", icon: Newspaper, label: "Blog" },
    { href: "/contact", icon: Phone, label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-200/70 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Top bar */}
        <div className="hidden sm:flex items-center justify-between py-2 text-xs text-gray-600 border-b border-gray-100">
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-1.5">
              <Phone className="h-3 w-3 flex-shrink-0" />
              <span className="whitespace-nowrap">+256 123 456 789</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Star className="h-3 w-3 flex-shrink-0" />
              <span className="whitespace-nowrap">5-Star Rated Safaris</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-amber-600 font-medium whitespace-nowrap">
              24/7 Support
            </span>
          </div>
        </div>

        {/* Main nav */}
        <div className="flex items-center justify-between py-3 sm:py-4">
          {/* Brand */}
          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-3 group flex-shrink-0"
            onClick={() => handleNavItemClick("/")}
          >
            <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-amber-600 to-amber-800 rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
              <span className="text-lg sm:text-xl text-white">🦁</span>
            </div>
            <div className="leading-tight hidden sm:block">
              <div className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
                {brand.name}
              </div>
              <div className="text-[10px] sm:text-xs tracking-widest text-amber-600 font-medium uppercase">
                {brand.tagline}
              </div>
            </div>
          </Link>

          {/* Desktop menu */}
          <div className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {navItems.map((item) => (
                <NavItem
                  key={item.href}
                  href={item.href}
                  icon={item.icon}
                  onClick={(e) => {
                    if (item.href.startsWith('#')) {
                      handleHashClick(e, item.href);
                    } else {
                      handleNavItemClick(item.href);
                    }
                  }}
                  isActive={
                    item.href === "/" 
                      ? pathname === "/"
                      : !item.href.startsWith('#') && pathname?.startsWith(item.href)
                  }
                >
                  {item.label}
                </NavItem>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="hidden lg:block flex-shrink-0">
            <Link
              href="/book"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-amber-600 to-amber-800 px-5 py-2.5 sm:px-6 sm:py-3 font-semibold text-white shadow-lg shadow-amber-500/25 transition-all duration-200 hover:shadow-xl hover:shadow-amber-500/30 hover:-translate-y-0.5 text-sm"
              onClick={() => handleNavItemClick("/book")}
            >
              Book Safari <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
            </Link>
          </div>

          {/* Mobile button */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:text-amber-700 transition-colors rounded-lg hover:bg-gray-100"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            type="button"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white/98 backdrop-blur-xl animate-in slide-in-from-top duration-200">
          <div className="p-4 space-y-3">
            {navItems.map((item) => (
              <MobileNavItem
                key={item.href}
                href={item.href}
                icon={item.icon}
                onClick={(e) => {
                  if (item.href.startsWith('#')) {
                    handleHashClick(e, item.href);
                  } else {
                    handleNavItemClick(item.href);
                  }
                }}
                isActive={
                  item.href === "/" 
                    ? pathname === "/"
                    : !item.href.startsWith('#') && pathname?.startsWith(item.href)
                }
              >
                {item.label}
              </MobileNavItem>
            ))}

            <div className="pt-2">
              <Link
                href="/book"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-br from-amber-600 to-amber-800 px-6 py-3 font-semibold text-white shadow-lg text-sm transition-all duration-200 hover:shadow-xl"
                onClick={() => handleNavItemClick("/book")}
              >
                Book Safari <ArrowRight className="h-4 w-4 flex-shrink-0" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

/* ------------------------------------------------------------------ */
/* Helper components                                                  */
/* ------------------------------------------------------------------ */

function NavItem({
  children,
  href,
  icon: Icon,
  onClick,
  isActive = false,
}: {
  children: React.ReactNode;
  href: string;
  icon?: React.ComponentType<any>;
  onClick: (e: React.MouseEvent) => void;
  isActive?: boolean;
}) {
  const isHashLink = href.startsWith('#');
  
  return (
    <li>
      <Link
        href={isHashLink ? `/${href}` : href}
        className={`flex items-center gap-2 px-4 py-3 transition-colors duration-200 group relative font-medium text-sm ${
          isActive
            ? 'text-amber-700'
            : 'text-gray-700 hover:text-amber-700'
        }`}
        onClick={onClick}
        scroll={!isHashLink}
      >
        {Icon && <Icon className="h-4 w-4 flex-shrink-0" />}
        <span className="whitespace-nowrap">{children}</span>
        <div 
          className={`absolute bottom-0 left-4 right-4 h-0.5 bg-amber-600 transition-transform duration-200 ${
            isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
          }`} 
        />
      </Link>
    </li>
  );
}

function MobileNavItem({
  children,
  href,
  icon: Icon,
  onClick,
  isActive = false,
}: {
  children: React.ReactNode;
  href: string;
  icon?: React.ComponentType<any>;
  onClick: (e: React.MouseEvent) => void;
  isActive?: boolean;
}) {
  const isHashLink = href.startsWith('#');
  
  return (
    <Link
      href={isHashLink ? `/${href}` : href}
      className={`flex items-center gap-3 rounded-xl px-4 py-3 border transition-colors font-medium text-sm ${
        isActive
          ? 'bg-amber-50 text-amber-700 border-amber-200'
          : 'text-gray-700 hover:bg-amber-50 border-gray-200'
      }`}
      onClick={onClick}
      scroll={!isHashLink}
    >
      {Icon && <Icon className="h-4 w-4 flex-shrink-0" />}
      {children}
    </Link>
  );
}

export default Navbar;