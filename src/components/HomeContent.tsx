"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import ProjectWidget from "@/components/widgets/ProjectWidget";

const roles = [
  { text: "illustrator", icon: "/images/icons/coral-flower.svg", color: "#E07A5F" },
  { text: "marketer", icon: "/images/icons/blue-star.svg", color: "#4361EE" },
  { text: "engineer", icon: "/images/icons/green-leaves.svg", color: "#B5C99A" },
  { text: "foodie", icon: "/images/icons/yellow-star.svg", color: "#F4D35E" },
  { text: "creative", icon: "/images/icons/purple-clover.svg", color: "#9D8EC9" },
];

const projects = [
  {
    title: "Color Through SF",
    subtitle: "A self-published and illustrated SF themed coloring book promoted through Tiktok content, now sold in 7+ stores throughout the city.",
    href: "https://www.etsy.com/listing/1853129987/color-through-san-francisco-cute-food",
    imageSrc: "/images/projects/color_through_sf.png",
  },
  {
    title: "Live Event Art",
    subtitle: "My side hobby of doing live portrait art at community events, corporate events, weddings, and more!",
    href: "/art",
    imageSrc: "/images/projects/live_art.JPG",
  },
  {
    title: "Writings",
    subtitle: "Thoughts on tech, art, and everything in between",
    href: "https://substack.com/@adelwu",
    imageSrc: "/images/projects/writings.png",
  },
  {
    title: "Made by Adel",
    subtitle: "My handmade clay earrings business started out of my college dorm during COVID. Sold out multiple drops!",
    href: "https://www.instagram.com/madebyadel_/",
    imageSrc: "/images/projects/earrings.jpg",
  },
];

export default function HomeContent() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setRoleIndex((prev: number) => (prev + 1) % roles.length);
        setIsAnimating(false);
      }, 300);
    }, 2100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-content mx-auto px-6 md:px-12 lg:px-16">
      {/* Hero Section */}
      <section className="py-16 md:py-20 lg:py-24">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal leading-relaxed flex flex-wrap items-baseline gap-3">
          <span>hi, I&apos;m adel! I&apos;m a</span>
          <span className="inline-flex items-center gap-2 overflow-hidden">
            <span
              className={`translate-y-1 transition-all duration-300 ${
                isAnimating ? "translate-y-full opacity-0" : "opacity-100"
              }`}
            >
              <Image
                src={roles[roleIndex].icon}
                alt=""
                width={40}
                height={40}
                className="w-8 h-8 md:w-10 md:h-10"
              />
            </span>
            <span
              className={`transition-all duration-300 ${
                isAnimating ? "translate-y-full opacity-0" : "translate-y-0 opacity-100"
              }`}
              style={{ color: roles[roleIndex].color }}
            >
              {roles[roleIndex].text}
            </span>
          </span>
        </h1>
        <p className="text-lg md:text-xl text-text-secondary leading-relaxed mt-6">
          currently doing growth @{" "}
          <a
            href="https://reducto.ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-primary"
          >
            <span className="underline">Reducto</span> ↗
          </a>{" "}
          and{" "}
          <a href="/art" className="text-text-primary">
            <span className="underline">live event art</span>
          </a>
          . previously swe @ Meta.
        </p>
      </section>

      {/* Projects Section */}
      <section className="py-16 md:py-24">
        <p className="text-sm text-text-tertiary uppercase tracking-widest mb-12">
          Select Projects
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
