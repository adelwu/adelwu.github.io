import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  display: "swap",
});

const siteUrl = "https://adelwu.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Adel Wu | Live Event Portrait Artist",
    template: "%s | Adel Wu",
  },
  description:
    "Professional live event portrait artist available for weddings, corporate events, and private parties in San Francisco.",
  keywords: [
    "live event artist",
    "portrait artist",
    "wedding artist",
    "corporate event entertainment",
    "San Francisco artist",
    "caricature artist",
  ],
  authors: [{ name: "Adel Wu" }],
  creator: "Adel Wu",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Adel Wu",
    title: "Adel Wu | Live Event Portrait Artist",
    description:
      "Professional live event portrait artist available for weddings, corporate events, and private parties in San Francisco.",
    images: [
      {
        url: "/images/art/art-1.jpg",
        width: 1200,
        height: 630,
        alt: "Adel Wu - Live Event Portrait Artist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adel Wu | Live Event Portrait Artist",
    description:
      "Professional live event portrait artist for weddings, corporate events, and private parties.",
    creator: "@adelwu_",
    images: ["/images/art/art-1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Adel Wu",
  url: "https://adelwu.com",
  image: "https://adelwu.com/images/about/profile.png",
  sameAs: [
    "https://x.com/adelwu_",
    "https://www.tiktok.com/@linebarf",
    "https://substack.com/@adelwu",
  ],
  jobTitle: "Live Event Portrait Artist",
  worksFor: {
    "@type": "Organization",
    name: "Reducto",
    url: "https://reducto.ai/",
  },
  knowsAbout: ["Portrait Art", "Live Event Art", "Watercolor", "Illustration"],
  areaServed: {
    "@type": "City",
    name: "San Francisco",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${lato.variable} antialiased min-h-screen flex flex-col font-sans`}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
