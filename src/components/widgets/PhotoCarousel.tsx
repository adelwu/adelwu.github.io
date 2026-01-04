"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Widget from "./Widget";

interface Photo {
  src: string;
  alt: string;
}

interface PhotoCarouselProps {
  photos: Photo[];
  className?: string;
  autoPlayInterval?: number;
  showIcon?: boolean;
}

export default function PhotoCarousel({
  photos,
  className = "",
  autoPlayInterval = 3000,
  showIcon = true,
}: PhotoCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  // Auto-play effect
  useEffect(() => {
    if (photos.length <= 1 || isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [photos.length, isHovered, autoPlayInterval]);

  if (photos.length === 0) {
    return (
      <Widget className={className}>
        <div className="h-full bg-bg-subtle flex items-center justify-center">
          <p className="text-text-tertiary text-sm">No photos yet</p>
        </div>
      </Widget>
    );
  }

  return (
    <Widget className={className}>
      <div
        className="relative h-full overflow-hidden group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {photos.map((photo, index) => (
          <Image
            key={photo.src}
            src={photo.src}
            alt={photo.alt}
            fill
            className={`object-cover transition-opacity duration-300 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* App icon overlay */}
        {showIcon && (
          <div className="absolute top-4 left-4 w-9 h-9 rounded-lg overflow-hidden shadow-sm">
            <Image
              src="/images/icons/apple-photos.svg"
              alt="Photos"
              fill
              className="object-cover"
            />
          </div>
        )}

        {photos.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-bg-page/80 rounded-full flex items-center justify-center text-text-secondary hover:text-text-primary transition-all duration-fast opacity-0 group-hover:opacity-100"
              aria-label="Previous photo"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-bg-page/80 rounded-full flex items-center justify-center text-text-secondary hover:text-text-primary transition-all duration-fast opacity-0 group-hover:opacity-100"
              aria-label="Next photo"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-fast">
              {photos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-1.5 h-1.5 rounded-full transition-colors ${
                    index === currentIndex
                      ? "bg-white"
                      : "bg-white/50 hover:bg-white/75"
                  }`}
                  aria-label={`Go to photo ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </Widget>
  );
}
