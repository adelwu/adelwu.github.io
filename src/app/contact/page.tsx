"use client";

import Link from "next/link";

// Email is constructed at runtime to prevent bot scraping
const getEmailHref = () => {
  const user = "dlw8320";
  const domain = "gmail.com";
  return `mailto:${user}@${domain}`;
};

const contactLinks = [
  { name: "Email", value: "Email me", href: "email" },
  { name: "Twitter", value: "@adelwu_", href: "https://x.com/adelwu_" },
  { name: "LinkedIn", value: "Adel Wu", href: "https://www.linkedin.com/in/adelwu/" },
  { name: "TikTok", value: "@linebarf", href: "https://www.tiktok.com/@linebarf" },
  { name: "Instagram", value: "@art_awu", href: "https://www.instagram.com/art_awu" },
];

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-16">
      {/* Hero Section */}
      <section className="py-24 md:py-32">
        <h1 className="text-3xl md:text-4xl font-normal leading-relaxed mb-8">
          Get in <span className="gradient-text">touch</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-2xl">
          Have a question or want to book me for your event? Reach out through any of the channels below.
        </p>
      </section>

      {/* Contact Links */}
      <section className="py-16 md:py-24 border-t border-gray-100">
        <p className="text-sm text-gray-400 uppercase tracking-widest mb-12">
          Connect
        </p>
        <div className="space-y-8">
          {contactLinks.map((link) => {
            const href = link.href === "email" ? getEmailHref() : link.href;
            const isExternal = !href.startsWith("mailto");
            return (
              <a
                key={link.name}
                href={href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="group flex items-center justify-between py-4 border-b border-gray-100 hover:border-gray-300 transition-colors"
              >
                <div>
                  <p className="text-sm text-gray-400 mb-1">{link.name}</p>
                  <p className="text-lg group-hover:text-gray-600 transition-colors">
                    {link.value}
                  </p>
                </div>
                <svg
                  className="w-4 h-4 text-gray-300 group-hover:text-gray-600 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </a>
            );
          })}
        </div>
      </section>

      {/* CTA to Art Page */}
      <section className="py-16 md:py-24 border-t border-gray-100 text-center">
        <p className="text-lg text-gray-500 mb-8">
          Ready to book me for your event?
        </p>
        <Link
          href="/art"
          className="inline-block text-sm tracking-wide border-b border-gray-900 pb-1 hover:border-gray-400 hover:text-gray-600 transition-all duration-300"
        >
          Fill out inquiry form
        </Link>
      </section>
    </div>
  );
}
