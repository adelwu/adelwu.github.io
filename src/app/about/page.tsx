import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Adel Wu",
  description: "Learn about Adel Wu - growth at Reducto, former Meta engineer, artist, and community builder.",
};

export default function AboutPage() {
  return (
    <div className="max-w-content mx-auto px-6 md:px-12 lg:px-16">
      {/* Where I'm From Section */}
      <section className="pt-24 md:pt-32 pb-8 md:pb-12">
        <p className="text-sm text-text-tertiary uppercase tracking-widest mb-8">
          Where I&apos;m from
        </p>
        <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
          <p>
            I was born and raised in Naperville, Illinois. It&apos;s a Chicago suburb famously known for
            its residents claiming &quot;they&apos;re from Chicago&quot;. My parents immigrated from Shanghai
            in the 80s, and I fiercely love my Chinese-American Midwestern upbringing. I went to school
            at University of Pennsylvania to study{" "}
            <a
              href="https://cg.cis.upenn.edu/dmd.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-primary"
            >
              <span className="underline">art + CS</span> ↗
            </a>
            .
          </p>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="py-8 md:py-12">
        <p className="text-sm text-text-tertiary uppercase tracking-widest mb-8">
          What I do
        </p>
        <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
          <p>
            Today I do growth at{" "}
            <a
              href="https://reducto.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-primary"
            >
              <span className="underline">Reducto</span> ↗
            </a>
            , which is a bunch of things. Previously, I was a software engineer
            at Meta and also founded a slew of my own art businesses selling{" "}
            <a
              href="https://www.instagram.com/madebyadel_/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-primary"
            >
              <span className="underline">handmade jewelry</span> ↗
            </a>{" "}
            and{" "}
            <a
              href="https://www.etsy.com/shop/ClementineStudiosCo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-primary"
            >
              <span className="underline">artwork</span> ↗
            </a>
            .
          </p>
        </div>
      </section>

      {/* Where I'm At Section */}
      <section className="py-8 md:py-12">
        <p className="text-sm text-text-tertiary uppercase tracking-widest mb-8">
          Where I&apos;m at
        </p>
        <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
          <p>
            Today, I live in San Francisco, California. When I&apos;m not working, you can usually find me
            cafe hopping, dancing, or trying the newest restaurants.
          </p>
        </div>
      </section>

      {/* What I'm Looking For Section */}
      <section className="py-8 md:py-12">
        <p className="text-sm text-text-tertiary uppercase tracking-widest mb-8">
          What I&apos;m looking for
        </p>
        <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
          <p>
            To do cool things with cool people. I love building community, meeting new people, and
            being creative together!
          </p>
        </div>
      </section>

    </div>
  );
}
