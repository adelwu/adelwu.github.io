import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Adel Wu",
  description: "Learn about Adel Wu, a professional live event portrait artist.",
};

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
        About Me
      </h1>

      <div className="max-w-3xl mx-auto">
        {/* Bio Section */}
        <section className="mb-12">
          <div className="prose prose-lg text-gray-600 space-y-6">
            <p>
              Welcome! I&apos;m Adel Wu, a live event portrait artist based in the heart of creativity.
              I specialize in capturing the essence of your special moments through live portrait artistry.
            </p>
            <p>
              My journey as an artist began years ago, and it has led me to discover my true passion:
              bringing joy to people at their most memorable events. There&apos;s something magical about
              creating art in real-time, watching guests&apos; faces light up as their portraits come to life.
            </p>
            <p>
              I&apos;ve had the privilege of working at hundreds of weddings, corporate galas, private
              parties, and special celebrations. Each event is unique, and I bring energy and artistry
              to every portrait I create.
            </p>
          </div>
        </section>

        {/* My Approach Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">My Approach</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              I believe every portrait should tell a story. When I work at your event, I don&apos;t
              just draw faces &mdash; I capture personalities, emotions, and the spirit of the moment.
            </p>
            <p>
              My setup is designed to be unobtrusive yet engaging. Guests can watch as their
              portraits take shape, making it an interactive and memorable experience for everyone.
            </p>
          </div>
        </section>

        {/* What to Expect Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What to Expect</h2>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <span className="text-gray-400 mr-3">&#8226;</span>
              <span>Professional, friendly service from start to finish</span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-400 mr-3">&#8226;</span>
              <span>High-quality portraits your guests will treasure</span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-400 mr-3">&#8226;</span>
              <span>An engaging experience that adds entertainment value to your event</span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-400 mr-3">&#8226;</span>
              <span>Flexible scheduling to accommodate your event timeline</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
