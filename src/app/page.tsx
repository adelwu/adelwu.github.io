import type { Metadata } from "next";
import HomeContent from "@/components/HomeContent";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Adel Wu - illustrator, marketer, engineer, and creative. Currently doing growth at Reducto and live event art.",
  alternates: {
    canonical: "https://adelwu.com",
  },
};

export default function Home() {
  return <HomeContent />;
}
