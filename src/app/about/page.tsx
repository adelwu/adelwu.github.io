import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Adel Wu",
  description: "Learn about Adel Wu, a professional live event portrait artist.",
};

export default function AboutPage() {
  return (
    <div className="max-w-content mx-auto px-6 md:px-12 lg:px-16">
      {/* Hero Section */}
      <section className="py-24 md:py-32">
        <h1 className="text-3xl md:text-4xl font-normal leading-relaxed mb-8">
          About <span className="gradient-text">me</span>
        </h1>
        <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-prose">
          {/* TODO: Update with your bio */}
          I&apos;m a live event portrait artist based in San Francisco.
          I capture the essence of your special moments through live portraiture.
        </p>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24 border-t border-border-default">
        <p className="text-sm text-text-tertiary uppercase tracking-widest mb-8">
          My story
        </p>
        <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
          {/* TODO: Update with your story */}
          <p>
            My journey as an artist began years ago, and it has led me to discover my true passion:
            bringing joy to people at their most memorable events.
          </p>
          <p>
            There&apos;s something magical about creating art in real-time, watching guests&apos; faces
            light up as their portraits come to life.
          </p>
          <p>
            I&apos;ve had the privilege of working at hundreds of weddings, corporate galas, private
            parties, and special celebrations.
          </p>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 md:py-24 border-t border-border-default">
        <p className="text-sm text-text-tertiary uppercase tracking-widest mb-8">
          My approach
        </p>
        <div className="grid md:grid-cols-2 gap-12">
          {[
            {
              title: "Storytelling",
              description: "Every portrait should tell a story. I don't just draw faces — I capture personalities, emotions, and the spirit of the moment.",
            },
            {
              title: "Engaging",
              description: "Guests can watch as their portraits take shape, making it an interactive and memorable experience for everyone.",
            },
            {
              title: "Unobtrusive",
              description: "My setup is designed to blend seamlessly into your event while still being a focal point of entertainment.",
            },
            {
              title: "Flexible",
              description: "Every event is unique. I adapt to your timeline, space, and vision to deliver the best experience.",
            },
          ].map((item) => (
            <div key={item.title} className="group">
              <h3 className="text-xl font-normal mb-3">{item.title}</h3>
              <p className="text-text-secondary leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
