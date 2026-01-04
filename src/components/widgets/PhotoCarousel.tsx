"use client";

import { useState } from "react";
import Image from "next/image";
import Widget from "./Widget";

interface Photo {
  src: string;
  alt: string;
}

interface PhotoCarouselProps {
  photos: Photo[];
  className?: string;
}

export default function PhotoCarousel({
  photos,
  className = "",
}: PhotoCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

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
      <div className="relative h-full">
        <Image
          src={photos[currentIndex].src}
          alt={photos[currentIndex].alt}
          fill
          className="object-cover"
        />

        {photos.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-bg-page/80 rounded-full flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors duration-fast"
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
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-bg-page/80 rounded-full flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors duration-fast"
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

            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
              {photos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-1.5 h-1.5 rounded-full transition-colors ${
                    index === currentIndex
                      ? "bg-text-primary"
                      : "bg-text-muted hover:bg-text-tertiary"
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
