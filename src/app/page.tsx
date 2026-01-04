import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-16">
      {/* Hero Section - Statement-based intro */}
      <section className="py-24 md:py-32 lg:py-40">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal leading-relaxed mb-8">
          <span className="gradient-text">Adel</span> is a live event portrait artist.
        </h1>
        <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-2xl">
          Capturing the essence of your special moments through the art of live portraiture.
          Every stroke tells a story.
        </p>
      </section>

      {/* Services Section - Tilted cards */}
      <section className="py-16 md:py-24">
        <p className="text-sm text-gray-400 uppercase tracking-widest mb-12">
          What I do
        </p>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {[
            {
              title: "Weddings",
              description: "Creating lasting memories with live portraits of your special day.",
              rotation: "-rotate-1",
            },
            {
              title: "Corporate Events",
              description: "Adding a unique artistic touch to company gatherings and galas.",
              rotation: "rotate-1",
            },
            {
              title: "Private Parties",
              description: "Making birthdays, anniversaries, and celebrations unforgettable.",
              rotation: "-rotate-2",
            },
          ].map((service) => (
            <div
              key={service.title}
              className={`group p-6 border border-gray-100 rounded-lg ${service.rotation} hover:rotate-0 hover:scale-[1.02] transition-all duration-300 hover:border-gray-200 hover:shadow-sm`}
            >
              <h3 className="text-xl font-normal mb-3 group-hover:text-gray-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section - Minimal */}
      <section className="py-16 md:py-24 text-center">
        <p className="text-lg text-gray-500 mb-8">
          Ready to make your event special?
        </p>
        <Link
          href="/art"
          className="inline-block text-sm tracking-wide border-b border-gray-900 pb-1 hover:border-gray-400 hover:text-gray-600 transition-all duration-300"
        >
          Get in touch
        </Link>
      </section>
    </div>
  );
}
