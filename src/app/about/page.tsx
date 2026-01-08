import type { Metadata } from "next";
import BioWidget from "@/components/widgets/BioWidget";
import MusicWidget from "@/components/widgets/MusicWidget";
import PhotoCarousel from "@/components/widgets/PhotoCarousel";
import MapWidget from "@/components/widgets/MapWidget";
import TweetWidget from "@/components/widgets/TweetWidget";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Adel Wu - growth at Reducto, former Meta engineer, artist, and community builder based in San Francisco.",
  openGraph: {
    title: "About Adel Wu",
    description:
      "Growth at Reducto, former Meta engineer, artist, and community builder.",
    images: ["/images/about/profile.png"],
  },
  alternates: {
    canonical: "https://adelwu.com/about",
  },
};

const aboutPhotos: { src: string; alt: string }[] = [
  { src: "/images/about/carousel/photo-1.jpg", alt: "Photo 1" },
  { src: "/images/about/carousel/photo-2.jpg", alt: "Photo 2" },
  { src: "/images/about/carousel/photo-3.jpg", alt: "Photo 3" },
  { src: "/images/about/carousel/photo-4.jpg", alt: "Photo 4" },
  { src: "/images/about/carousel/photo-5.jpg", alt: "Photo 5" },
  { src: "/images/about/carousel/photo-6.jpg", alt: "Photo 6" },
  { src: "/images/about/carousel/photo-7.jpg", alt: "Photo 7" },
  { src: "/images/about/carousel/photo-8.jpg", alt: "Photo 8" },
  { src: "/images/about/carousel/photo-9.jpg", alt: "Photo 9" },
  { src: "/images/about/carousel/photo-10.jpg", alt: "Photo 10" },
  { src: "/images/about/carousel/photo-11.jpg", alt: "Photo 11" },
];

export default function AboutPage() {
  return (
    <div className="max-w-content-wide mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
        {/* Bio widget - left column */}
        <BioWidget />

        {/* Right side widgets */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 content-start">
          {/* Row 1: Tweet + Photo */}
          <div className="aspect-[4/3] md:aspect-square">
            <TweetWidget
              quote="what were the most iconic & memorable videos launched this year?"
              date="Dec 2025"
              twitterHandle="adelwu_"
              tweetUrl="https://x.com/adelwu_"
              profileImage="/images/about/profile.png"
              className="h-full"
            />
          </div>
          <div className="aspect-[4/3] md:aspect-square">
            <PhotoCarousel photos={aboutPhotos} className="h-full" />
          </div>
          {/* Row 2: Map spanning full width as rectangle */}
          <div className="col-span-1 md:col-span-2 aspect-[2/1]">
            <MapWidget className="h-full" />
          </div>
          {/* Row 3: Music spanning full width */}
          <div className="col-span-1 md:col-span-2 h-[352px]">
            <MusicWidget className="h-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
