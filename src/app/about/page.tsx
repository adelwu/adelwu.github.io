import type { Metadata } from "next";
import BioWidget from "@/components/widgets/BioWidget";
import MusicWidget from "@/components/widgets/MusicWidget";
import PhotoCarousel from "@/components/widgets/PhotoCarousel";
import MapWidget from "@/components/widgets/MapWidget";
import TweetWidget from "@/components/widgets/TweetWidget";

export const metadata: Metadata = {
  title: "About | Adel Wu",
  description:
    "Learn about Adel Wu - growth at Reducto, former Meta engineer, artist, and community builder.",
};

const aboutPhotos: { src: string; alt: string }[] = [
  // Add your photos here:
  // { src: "/images/about/photo1.jpg", alt: "Description" },
];

export default function AboutPage() {
  return (
    <div className="max-w-content-wide mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
        {/* Bio widget - left column */}
        <BioWidget />

        {/* Right side widgets */}
        <div className="grid grid-cols-2 gap-4 content-start">
          {/* Row 1: Tweet + Photo */}
          <div className="aspect-square">
            <TweetWidget
              quote="what were the most iconic & memorable videos launched this year?"
              date="Dec 2025"
              twitterHandle="adelwu_"
              tweetUrl="https://x.com/adelwu_"
              profileImage="/images/about/profile.png"
              className="h-full"
            />
          </div>
          <div className="aspect-square">
            <PhotoCarousel photos={aboutPhotos} className="h-full" />
          </div>
          {/* Row 2: Map spanning full width as rectangle */}
          <div className="col-span-2 aspect-[2/1]">
            <MapWidget query="San Francisco" className="h-full" />
          </div>
          {/* Row 3: Music spanning full width */}
          <div className="col-span-2 aspect-[3/1]">
            <MusicWidget className="h-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
