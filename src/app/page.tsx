"use client";

import { useState, useEffect } from "react";
import ProjectWidget from "@/components/widgets/ProjectWidget";

const roles = [
  "illustrator",
  "marketer",
  "engineer",
  "foodie",
  "artist",
  "developer advocate",
];

const projects = [
  {
    title: "Color Through SF",
    subtitle: "A self-published SF themed coloring book documenting my favorite local spots and businesses. Promoted through Tiktok content and now sold in 7+ stores throughout the city!",
    href: "https://www.etsy.com/listing/1853129987/color-through-san-francisco-cute-food",
    imageSrc: "/images/projects/color_through_sf.png",
  },
  {
    title: "Piggie Palz NFTs",
    subtitle: "A hand-drawn NFT collection that hit over 500+ ETH trading volume.",
    href: "https://opensea.io/collection/piggiepalz",
    imageSrc: "/images/projects/piggy_palz.png",
  },
  {
    title: "Writings",
    subtitle: "Thoughts on tech, art, and everything in between",
    href: "https://substack.com/@adelwu",
    imageSrc: "/images/projects/writings.png",
  },
  {
    title: "Live Event Art",
    subtitle: "My side hobby of doing live portrait art at community events, corporate events, weddings, and more!",
    href: "/art",
    imageSrc: "/images/projects/live_art.JPG",
  },
];

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setIsAnimating(false);
      }, 300);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-content mx-auto px-6 md:px-12 lg:px-16">
      {/* Hero Section */}
      <section className="py-16 md:py-20 lg:py-24">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal leading-relaxed flex flex-wrap items-baseline">
          <span>hi, I&apos;m adel! I&apos;m a&nbsp;</span>
          <span className="h-[1.5em] overflow-hidden text-text-secondary relative">
            <span
              className={`block transition-all duration-300 ${
                isAnimating ? "translate-y-full opacity-0" : "translate-y-0 opacity-100"
              }`}
            >
              {roles[roleIndex]}
            </span>
          </span>
        </h1>
        <p className="text-lg md:text-xl text-text-secondary leading-relaxed mt-6">
          currently doing growth @ Reducto and a live event artist. welcome to my portfolio!
        </p>
      </section>

      {/* Projects Section */}
      <section className="py-16 md:py-24">
        <p className="text-sm text-text-tertiary uppercase tracking-widest mb-12">
          Projects
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectWidget
              key={project.title}
              title={project.title}
              subtitle={project.subtitle}
              href={project.href}
              imageSrc={project.imageSrc}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
