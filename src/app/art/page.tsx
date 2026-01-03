import type { Metadata } from "next";
import LogoCarousel from "@/components/LogoCarousel";
import EventInquiryForm from "@/components/EventInquiryForm";

export const metadata: Metadata = {
  title: "Art & Booking | Adel Wu",
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

export default function ArtPage() {
  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">My Art</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Experience live portrait artistry that brings your events to life.
        </p>
      </section>

      {/* Client Logo Carousel */}
      <section className="mb-16">
        <h2 className="text-center text-sm font-medium text-gray-500 uppercase tracking-wider mb-6">
          Trusted by amazing clients
        </h2>
        <LogoCarousel logos={clientLogos} />
      </section>

      {/* Portfolio Gallery Placeholder */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Portfolio
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center text-gray-400"
            >
              <span className="text-sm">Portfolio Image {i}</span>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-500 mt-4 text-sm">
          Add your portfolio images to the public/images folder
        </p>
      </section>

      {/* Inquiry Form Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
            Book Me for Your Event
          </h2>
          <p className="text-gray-600 mb-8 text-center max-w-xl mx-auto">
            Fill out the form below and I&apos;ll get back to you as soon as possible.
          </p>
          <EventInquiryForm />
        </div>
      </section>
    </div>
  );
}
