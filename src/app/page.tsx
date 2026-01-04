import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-content mx-auto px-6 md:px-12 lg:px-16">
      {/* Hero Section - Statement-based intro */}
      <section className="py-24 md:py-32 lg:py-40">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal leading-relaxed mb-8">
          <span className="gradient-text">Adel</span> is a live event portrait artist.
        </h1>
        <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-prose">
          Capturing the essence of your special moments through the art of live portraiture.
          Every stroke tells a story.
        </p>
      </section>

      {/* Services Section - Tilted cards */}
      <section className="py-16 md:py-24">
        <p className="text-sm text-text-tertiary uppercase tracking-widest mb-12">
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
              className={`group p-6 border border-border-default rounded-card ${service.rotation} hover:rotate-0 hover:scale-[1.02] transition-all duration-DEFAULT hover:border-border-hover hover:shadow-sm`}
            >
              <h3 className="text-xl font-normal mb-3 group-hover:text-text-secondary transition-colors">
                {service.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section - Minimal */}
      <section className="py-16 md:py-24 text-center">
        <p className="text-lg text-text-secondary mb-8">
          Ready to make your event special?
        </p>
        <Link
          href="/art"
          className="inline-block text-sm tracking-wide border-b border-border-strong pb-1 hover:border-border-active hover:text-text-secondary transition-all duration-DEFAULT"
        >
          Get in touch
        </Link>
      </section>
    </div>
  );
}
