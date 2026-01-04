"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/art", label: "Live Art" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 });
  const navRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const activeIndex = navLinks.findIndex((link) => isActive(link.href));

  useEffect(() => {
    const updatePillPosition = () => {
      if (activeIndex >= 0 && linkRefs.current[activeIndex] && navRef.current) {
        const activeLink = linkRefs.current[activeIndex];
        const navRect = navRef.current.getBoundingClientRect();
        const linkRect = activeLink!.getBoundingClientRect();

        setPillStyle({
          left: linkRect.left - navRect.left,
          width: linkRect.width,
        });
      }
    };

    updatePillPosition();
    window.addEventListener("resize", updatePillPosition);
    return () => window.removeEventListener("resize", updatePillPosition);
  }, [activeIndex, pathname]);

  return (
    <header className="py-6">
      <nav className="flex justify-center">
        {/* Desktop Navigation - Pill-shaped container */}
        <div
          ref={navRef}
          className="hidden md:flex items-center bg-bg-muted rounded-pill p-1.5 relative"
        >
          {/* Animated pill background */}
          <div
            className="absolute bg-white rounded-pill shadow-sm transition-all duration-300 ease-out"
            style={{
              left: pillStyle.left,
              width: pillStyle.width,
              top: "6px",
              bottom: "6px",
            }}
          />

          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              ref={(el) => {
                linkRefs.current[index] = el;
              }}
              className={`px-6 py-2.5 rounded-pill text-sm transition-colors duration-200 relative z-10 ${
                isActive(link.href)
                  ? "text-text-primary"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 bg-bg-muted rounded-pill"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 flex justify-center">
          <div className="bg-bg-muted rounded-2xl p-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-6 py-2.5 rounded-pill text-sm transition-all duration-fast ${
                  isActive(link.href)
                    ? "bg-white text-text-primary shadow-sm"
                    : "text-text-secondary hover:text-text-primary"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
