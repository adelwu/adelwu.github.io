import Image from "next/image";
import Widget from "./Widget";

interface MapWidgetProps {
  className?: string;
}

const MAPS_URL = "https://maps.app.goo.gl/AHuaswSZCoUhsUWUA";

export default function MapWidget({ className = "" }: MapWidgetProps) {
  return (
    <Widget className={className}>
      <a
        href={MAPS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative w-full h-full group"
      >
        <Image
          src="/images/about/sf_favorites_map.png"
          alt="My favorite places in San Francisco"
          fill
          loading="lazy"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />

        {/* App icon overlay */}
        <div className="absolute top-4 left-4 w-9 h-9 rounded-lg overflow-hidden shadow-sm bg-white">
          <Image
            src="/images/icons/google-maps.svg"
            alt="Google Maps"
            fill
            loading="lazy"
            className="object-cover"
          />
        </div>
        <div className="absolute top-6 right-6 flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-pill text-sm text-text-primary shadow-sm">
          See my favorite spots
          <svg
            className="w-4 h-4 text-text-muted group-hover:text-text-secondary transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M7 17L17 7M17 7H7M17 7V17"
            />
          </svg>
        </div>
      </a>
    </Widget>
  );
}
