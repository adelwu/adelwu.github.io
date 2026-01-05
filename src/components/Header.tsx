"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/art", label: "Live Art" },
];

export default function Header() {
  const pathname = usePathname();
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
      <nav className="flex justify-center overflow-x-auto scrollbar-hide">
        {/* Navigation - Pill-shaped container with horizontal scroll on mobile */}
        <div
          ref={navRef}
          className="flex items-center bg-bg-muted rounded-pill p-1.5 relative min-w-max"
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
              className={`px-6 py-2.5 rounded-pill text-sm transition-colors duration-200 relative z-10 whitespace-nowrap ${
                isActive(link.href)
                  ? "text-text-primary"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
