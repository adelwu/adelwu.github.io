import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Live Event Portrait Artist
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Bringing your special moments to life through live portrait artistry at weddings, corporate events, and private celebrations.
        </p>
        <Link
          href="/art"
          className="inline-block bg-gray-900 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-700 transition-colors"
        >
          Book Me for Your Event
        </Link>
      </section>

      {/* What I Do Section */}
      <section className="py-16 border-t border-gray-200">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          What I Do
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Weddings</h3>
            <p className="text-gray-600">
              Create lasting memories with live portraits of your special day.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Corporate Events</h3>
            <p className="text-gray-600">
              Add a unique artistic touch to your company gatherings and galas.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Private Parties</h3>
            <p className="text-gray-600">
              Make birthdays, anniversaries, and celebrations unforgettable.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Ready to Make Your Event Special?
        </h2>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          Let&apos;s discuss how I can bring live portrait artistry to your next event.
        </p>
        <Link
          href="/art"
          className="inline-block border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-900 hover:text-white transition-colors"
        >
          Get in Touch
        </Link>
      </section>
    </div>
  );
}
