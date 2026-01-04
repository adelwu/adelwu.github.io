import type { Metadata } from "next";
import Link from "next/link";
import LogoCarousel from "@/components/LogoCarousel";
import EventInquiryForm from "@/components/EventInquiryForm";

export const metadata: Metadata = {
  title: "Work | Adel Wu",
  description: "View my portfolio and book me for your next event.",
};

const clientLogos = [
  { src: "/images/logos/18c_logo.svg", alt: "18c" },
  { src: "/images/logos/artbattle_logo.svg", alt: "Art Battle" },
  { src: "/images/logos/calacademy_logo.svg", alt: "California Academy of Sciences" },
  { src: "/images/logos/juniorleague_logo.svg", alt: "Junior League" },
  { src: "/images/logos/meetyouthere_logo.svg", alt: "Meet You There" },
  { src: "/images/logos/meta_logo.svg", alt: "Meta" },
  { src: "/images/logos/pbp_logo.svg", alt: "PBP" },
  { src: "/images/logos/saluhall_logo.svg", alt: "Salu Hall" },
  { src: "/images/logos/yelp_logo.svg", alt: "Yelp" },
];

// TODO: Replace with your actual portfolio images
// Add images to public/images/portfolio/ folder
const portfolioItems = [
  { id: 1, title: "Wedding Portrait", category: "Weddings" },
  { id: 2, title: "Corporate Event", category: "Corporate" },
  { id: 3, title: "Birthday Celebration", category: "Private" },
  { id: 4, title: "Gala Portrait", category: "Corporate" },
  { id: 5, title: "Anniversary", category: "Private" },
  { id: 6, title: "Reception", category: "Weddings" },
];

export default function ArtPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 lg:px-16 py-24 md:py-32">
        <h1 className="text-3xl md:text-4xl font-normal leading-relaxed mb-8">
          My <span className="gradient-text">work</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-2xl">
          A collection of portraits from weddings, corporate events, and private celebrations.
        </p>
      </section>

      {/* Client Logo Carousel */}
      <section className="mb-16 md:mb-24">
        <p className="text-center text-sm text-gray-400 uppercase tracking-widest mb-8">
          Trusted by
        </p>
        <LogoCarousel logos={clientLogos} />
      </section>

      {/* Portfolio Gallery */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 mb-16 md:mb-24">
        <p className="text-sm text-gray-400 uppercase tracking-widest mb-12">
          Selected work
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className={`group relative aspect-[4/5] bg-gray-50 rounded-lg overflow-hidden ${
                index % 3 === 0 ? "-rotate-1" : index % 3 === 1 ? "rotate-1" : "-rotate-2"
              } hover:rotate-0 transition-transform duration-300`}
            >
              {/* Placeholder - replace with actual images */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-300 p-6">
                <svg className="w-12 h-12 mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-sm">{item.title}</span>
                <span className="text-xs text-gray-400 mt-1">{item.category}</span>
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
            </div>
          ))}
        </div>
        <p className="text-center text-gray-400 mt-8 text-sm">
          Add images to <code className="text-xs bg-gray-100 px-2 py-1 rounded">public/images/portfolio/</code>
        </p>
      </section>

      {/* Instagram Link */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-24 border-t border-gray-100 text-center">
        <p className="text-lg text-gray-500 mb-4">
          See more on Instagram
        </p>
        <Link
          href="https://www.instagram.com/art_awu"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-sm tracking-wide border-b border-gray-900 pb-1 hover:border-gray-400 hover:text-gray-600 transition-all duration-300"
        >
          @art_awu
        </Link>
      </section>

      {/* Inquiry Form Section */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-24 border-t border-gray-100">
        <p className="text-sm text-gray-400 uppercase tracking-widest mb-8">
          Book me
        </p>
        <h2 className="text-2xl md:text-3xl font-normal mb-4">
          Let&apos;s work together
        </h2>
        <p className="text-gray-500 mb-12 max-w-xl">
          Fill out the form below and I&apos;ll get back to you as soon as possible.
        </p>
        <EventInquiryForm />
      </section>
    </div>
  );
}
