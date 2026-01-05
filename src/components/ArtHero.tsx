"use client";

import { useState } from "react";
import Link from "next/link";

export default function ArtHero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="p-6 md:p-12 h-full flex flex-col justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight md:leading-relaxed mb-2 md:mb-4 inline-flex items-center gap-3 flex-wrap">
        <span>live guest portraits</span>
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          className={`transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
          style={{ strokeLinecap: "round", strokeLinejoin: "round" }}
        >
          {/* Face circle */}
          <circle
            cx="20"
            cy="20"
            r="16"
            fill="none"
            stroke="#F4D35E"
            strokeWidth="3"
            className="crayon-stroke"
            style={{
              strokeDasharray: 100,
              strokeDashoffset: isHovered ? 0 : 100,
              transition: "stroke-dashoffset 0.6s ease-out",
            }}
          />
          {/* Left eye */}
          <circle
            cx="14"
            cy="16"
            r="2"
            fill="#E07A5F"
            className={`transition-all duration-300 ${isHovered ? "scale-100" : "scale-0"}`}
            style={{
              transformOrigin: "14px 16px",
              transitionDelay: isHovered ? "0.3s" : "0s",
            }}
          />
          {/* Right eye */}
          <circle
            cx="26"
            cy="16"
            r="2"
            fill="#E07A5F"
            className={`transition-all duration-300 ${isHovered ? "scale-100" : "scale-0"}`}
            style={{
              transformOrigin: "26px 16px",
              transitionDelay: isHovered ? "0.4s" : "0s",
            }}
          />
          {/* Smile */}
          <path
            d="M 12 24 Q 20 32 28 24"
            fill="none"
            stroke="#E07A5F"
            strokeWidth="2.5"
            style={{
              strokeDasharray: 30,
              strokeDashoffset: isHovered ? 0 : 30,
              transition: "stroke-dashoffset 0.4s ease-out",
              transitionDelay: isHovered ? "0.5s" : "0s",
            }}
          />
        </svg>
      </h1>
      <p className="text-base md:text-lg text-text-secondary leading-relaxed max-w-prose mb-4 md:mb-8">
        give your guests a personalized, memorable, and hand-drawn souvenir they can have forever!
      </p>
      <Link
        href="#contact"
        className="btn-coral inline-block px-6 py-3 rounded-pill text-sm font-medium w-fit"
      >
        work with me!
      </Link>
    </div>
  );
}
