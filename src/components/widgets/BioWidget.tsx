import Widget from "./Widget";

interface BioWidgetProps {
  className?: string;
}

export default function BioWidget({ className = "" }: BioWidgetProps) {
  return (
    <Widget className={`h-full ${className}`}>
      <div className="p-6 flex flex-col h-full space-y-8">
        {/* Where I'm From Section */}
        <div>
          <p className="text-sm text-text-tertiary uppercase tracking-widest mb-4">
            Where I&apos;m from
          </p>
          <div className="text-lg text-text-secondary leading-relaxed">
            <p>
              I was born and raised in Naperville, Illinois. It&apos;s a Chicago
              suburb famously known for its residents claiming &quot;they&apos;re
              from Chicago&quot;. My parents immigrated from Shanghai in the 80s,
              and I fiercely love my Chinese-American Midwestern upbringing. I
              went to school at University of Pennsylvania to study{" "}
              <a
                href="https://cg.cis.upenn.edu/dmd.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-primary"
              >
                <span className="underline">art + CS</span>{" "}
                <svg className="inline w-3.5 h-3.5 -mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" /></svg>
              </a>
              .
            </p>
          </div>
        </div>

        {/* What I Do Section */}
        <div>
          <p className="text-sm text-text-tertiary uppercase tracking-widest mb-4">
            What I do
          </p>
          <div className="text-lg text-text-secondary leading-relaxed">
            <p>
              Today I do growth and developer marketing at{" "}
              <a
                href="https://reducto.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-primary"
              >
                <span className="underline">Reducto</span>{" "}
                <svg className="inline w-3.5 h-3.5 -mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" /></svg>
              </a>
              , which is a bunch of things ranging from product, content, events,
              partnerships, and more. Previously, I was a software engineer at
              Meta and also founded a slew of my own art businesses selling{" "}
              <a
                href="https://www.instagram.com/madebyadel_/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-primary"
              >
                <span className="underline">handmade jewelry</span>{" "}
                <svg className="inline w-3.5 h-3.5 -mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" /></svg>
              </a>{" "}
              and{" "}
              <a
                href="https://www.etsy.com/shop/ClementineStudiosCo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-primary"
              >
                <span className="underline">artwork</span>{" "}
                <svg className="inline w-3.5 h-3.5 -mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" /></svg>
              </a>
              .
            </p>
          </div>
        </div>

        {/* Where I'm At Section */}
        <div>
          <p className="text-sm text-text-tertiary uppercase tracking-widest mb-4">
            Where I&apos;m at
          </p>
          <div className="text-lg text-text-secondary leading-relaxed">
            <p>
              Today, I live in San Francisco, California. When I&apos;m not
              working, you can usually find me cafe hopping, dancing, or trying
              the newest restaurants.
            </p>
          </div>
        </div>

        {/* What I'm Looking For Section */}
        <div>
          <p className="text-sm text-text-tertiary uppercase tracking-widest mb-4">
            What I&apos;m looking for
          </p>
          <div className="text-lg text-text-secondary leading-relaxed">
            <p>
              To do cool things with cool people. I love building community,
              meeting new people, and being creative together! I&apos;m usually
              most responsive through DMs or email.
            </p>
          </div>
        </div>
      </div>
    </Widget>
  );
}
