"use client";

interface Logo {
  src: string;
  alt: string;
}

interface LogoCarouselProps {
  logos: Logo[];
}

export default function LogoCarousel({ logos }: LogoCarouselProps) {
  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="w-full overflow-hidden py-8">
      <div className="relative">
        <div className="flex animate-scroll">
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-8 w-32 h-16 flex items-center justify-center"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-w-full max-h-full object-contain opacity-40 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
