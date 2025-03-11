// pages/index.js
import Head from 'next/head';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Relationship Insights - Homepage</title>
        <meta name="description" content="Evaluate your relationship potential based on past relationship data." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        {/* Core Content Container (Mobile-First Design - Centered) */}
        <div className="core-container bg-white shadow-md rounded-lg overflow-hidden w-full max-w-md mx-auto my-auto">
          <div className="px-8 py-12 sm:px-10">
            {/* Homepage Content */}
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
              Unlock Relationship Insights
            </h1>
            <p className="text-gray-700 text-center mb-8">
              Understand your relationship patterns and evaluate new connections by analyzing your past.
            </p>

            <div className="space-y-4">
              <p className="text-gray-600">
                Tired of repeating the same relationship cycles?  Relationship Insights helps you make smarter choices by learning from your history.
              </p>
              <p className="text-gray-600">
                Input data about your past relationships, compare new people of interest, and gain valuable perspective.
              </p>
            </div>

            <div className="mt-10 flex justify-center space-x-4">
              <Link href="/login">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  Get Started
                </button>
              </Link>
              {/* Future "Learn More" Link - For MVP, could be omitted or link to a section within homepage */}
              {/* <Link href="/learn-more">
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  Learn More
                </button>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}