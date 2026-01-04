import type { Metadata } from "next";
import Link from "next/link";
import Widget from "@/components/widgets/Widget";
import LogoCarousel from "@/components/LogoCarousel";
import EventInquiryForm from "@/components/EventInquiryForm";

export const metadata: Metadata = {
  title: "Work | Adel Wu",
  description: "View my portfolio and book me for your next event.",
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
  { id: 1, title: "Wedding Portrait", category: "Weddings" },
  { id: 2, title: "Corporate Event", category: "Corporate" },
  { id: 3, title: "Birthday Celebration", category: "Private" },
  { id: 4, title: "Gala Portrait", category: "Corporate" },
  { id: 5, title: "Anniversary", category: "Private" },
  { id: 6, title: "Reception", category: "Weddings" },
];

export default function ArtPage() {
  return (
    <div className="max-w-content-wide mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-16">
      <div className="space-y-4">
        {/* Hero Widget */}
        <Widget>
          <div className="p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-normal leading-relaxed mb-4">
              Live guest portraits
            </h1>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-prose mb-8">
              Give your guests a personalized, memorable, and hand-drawn souvenir they can have forever! I do either 60 second line art portraits or 5 minute watercolor paintings live, at your event.
            </p>
            <Link
              href="#contact"
              className="inline-block px-6 py-3 bg-text-primary text-bg-page rounded-pill text-sm font-medium hover:bg-text-secondary transition-colors"
            >
              Work with me!
            </Link>
          </div>
        </Widget>

        {/* Logo Carousel Widget */}
        <Widget title="Who I've worked with">
          <LogoCarousel logos={clientLogos} />
        </Widget>

        {/* Portfolio Gallery Widget */}
        <Widget title="Previous events">
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`group relative aspect-[4/5] bg-bg-subtle rounded-card overflow-hidden ${
                    index % 3 === 0 ? "-rotate-1" : index % 3 === 1 ? "rotate-1" : "-rotate-2"
                  } hover:rotate-0 transition-transform duration-DEFAULT`}
                >
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-text-muted p-6">
                    <svg className="w-12 h-12 mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm">{item.title}</span>
                    <span className="text-xs text-text-tertiary mt-1">{item.category}</span>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-DEFAULT" />
                </div>
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
      </div>
    </div>
  );
}
