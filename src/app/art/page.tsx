import type { Metadata } from "next";
import Link from "next/link";
import Widget from "@/components/widgets/Widget";
import ServiceCard from "@/components/widgets/ServiceCard";
import LogoCarousel from "@/components/LogoCarousel";
import EventInquiryForm from "@/components/EventInquiryForm";
import VideoCard from "@/components/VideoCard";
import FAQ from "@/components/FAQ";
import PhotoCarousel from "@/components/widgets/PhotoCarousel";

export const metadata: Metadata = {
  title: "Live Event Art",
  description:
    "Book Adel Wu for live guest portraits at your wedding, corporate event, or private party. Quick sketches and watercolor portraits available.",
  openGraph: {
    title: "Live Event Art by Adel Wu",
    description:
      "Book live guest portraits for weddings, corporate events, and private parties.",
    images: ["/images/art/art-1.jpg"],
  },
  alternates: {
    canonical: "https://adelwu.com/art",
  },
};

const clientLogos = [
  { src: "/images/logos/meta_logo.svg", alt: "Meta" },
  { src: "/images/logos/pbp_logo.svg", alt: "PBP" },
  { src: "/images/logos/saluhall_logo.svg", alt: "Salu Hall" },
  { src: "/images/logos/yelp_logo.svg", alt: "Yelp" },
  { src: "/images/logos/18c_logo.svg", alt: "18c" },
  { src: "/images/logos/artbattle_logo.svg", alt: "Art Battle" },
  { src: "/images/logos/calacademy_logo.svg", alt: "California Academy of Sciences" },
  { src: "/images/logos/juniorleague_logo.svg", alt: "Junior League" },
  { src: "/images/logos/meetyouthere_logo.svg", alt: "Meet You There" },
];

const portfolioItems = [
  { id: 1, videoSrc: "/videos/event-1.mp4" },
  { id: 2, videoSrc: "/videos/event-2.mp4" },
  { id: 3, videoSrc: "/videos/event-3.mp4" },
  { id: 4, videoSrc: "/videos/event-4.mp4" },
  { id: 5, videoSrc: "/videos/event-5.mp4" },
  { id: 6, videoSrc: "/videos/event-6.mp4" },
];

const heroPhotos: { src: string; alt: string }[] = [
  { src: "/images/art/art-1.jpg", alt: "Art 1" },
  { src: "/images/art/art-2.JPG", alt: "Art 2" },
  { src: "/images/art/art-3.JPG", alt: "Art 3" },
  { src: "/images/art/art-4.jpg", alt: "Art 4" },
  { src: "/images/art/art-5.jpg", alt: "Art 5" },
  { src: "/images/art/art-6.jpg", alt: "Art 6" },
  { src: "/images/art/art-7.JPG", alt: "Art 7" },
  { src: "/images/art/art-8.JPG", alt: "Art 8" },
  { src: "/images/art/art-9.JPG", alt: "Art 9" },
  { src: "/images/art/art-10.jpg", alt: "Art 10" },
];

export default function ArtPage() {
  return (
    <div className="max-w-content-wide mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-16">
      <div className="space-y-4">
        {/* Hero Section */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-4">
          <Widget>
            <div className="p-8 md:p-12 h-full flex flex-col justify-center">
              <h1 className="text-3xl md:text-4xl font-normal leading-relaxed mb-4">
                Live guest portraits
              </h1>
              <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-prose mb-8">
                Give your guests a personalized, memorable, and hand-drawn souvenir they can have forever!
              </p>
              <Link
                href="#contact"
                className="inline-block px-6 py-3 bg-text-primary text-bg-page rounded-pill text-sm font-medium hover:bg-text-secondary transition-colors w-fit"
              >
                Work with me!
              </Link>
            </div>
          </Widget>
          <div className="aspect-square md:aspect-auto md:h-full">
            <PhotoCarousel photos={heroPhotos} className="h-full" showIcon={false} />
          </div>
        </div>

        {/* Logo Carousel Widget */}
        <Widget title="Who I've worked with">
          <LogoCarousel logos={clientLogos} />
        </Widget>

        {/* Service Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ServiceCard
            icon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            }
            title="Quick Sketch"
            description="Fast line art portraits perfect for high-volume events and parties. Guests get a fun, personalized keepsake in a couple minutes."
            duration="~60 seconds each"
          />
          <ServiceCard
            icon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            }
            title="Watercolor Portrait"
            description="Stylized watercolor paintings for intimate gatherings and special events. Guests pick up their pieces at the end of the night!"
            duration="~10 minutes each"
          />
        </div>

        {/* Portfolio Gallery Widget */}
        <Widget title="Previous events">
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioItems.map((item) => (
                <VideoCard
                  key={item.id}
                  videoSrc={item.videoSrc}
                />
              ))}
            </div>
            <a
              href="https://www.tiktok.com/@linebarf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-text-secondary hover:text-text-primary mt-8 text-sm transition-colors group"
            >
              See more on my Tiktok!
              <svg
                className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </a>
          </div>
        </Widget>

        {/* Contact Form Widget */}
        <Widget title="Book me">
          <div id="contact" className="p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-normal mb-4">
              Let&apos;s work together
            </h2>
            <p className="text-text-secondary mb-8 max-w-form">
              Fill out the form below and I&apos;ll get back to you as soon as possible.
            </p>
            <EventInquiryForm />
          </div>
        </Widget>

        {/* FAQ Widget */}
        <Widget title="Frequently asked questions">
          <div className="p-6 md:p-8">
            <FAQ />
          </div>
        </Widget>
      </div>
    </div>
  );
}
