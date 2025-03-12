// pages/dashboard.js
import Head from 'next/head';
import Link from 'next/link';

export default function DashboardPage() {
  // Placeholder data for past relationships (for MVP - replace with actual data fetching later)
  const pastRelationships = [
    { id: 1, name: 'Relationship 1', rating: 4, stickers: ['❤️', '😊'] },
    { id: 2, name: 'Relationship 2', rating: 2, stickers: ['😞', '🤔'] },
    { id: 3, name: 'Relationship 3', rating: 5, stickers: ['🌟', '🥰'] },
    // ... more placeholder relationships
  ];

  return (
    <>
      <Head>
        <title>Relationship Insights - Dashboard</title>
        <meta name="description" content="Your Relationship Insights Dashboard - View and manage your past relationships." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        {/* Core Content Container (Mobile-First Design - Centered) */}
        <div className="core-container bg-white shadow-md rounded-lg overflow-hidden w-full max-w-md mx-auto my-auto">
          <div className="px-8 py-12 sm:px-10">
            {/* Dashboard Page Content */}
            <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Your Relationship Dashboard
            </h1>

            {/* Girlfriend Counter */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-gray-700 mb-2">Relationship History</h2>
              <div className="bg-gray-200 rounded-full h-4">
                <div
                  className="bg-blue-500 h-4 rounded-full"
                  style={{ width: `${(pastRelationships.length / 7) * 100}%` }} // Example progress bar - adjust max as needed
                ></div>
              </div>
              <p className="text-sm text-gray-500 mt-1">Relationships Recorded: {pastRelationships.length}/7</p> {/* Example Counter */}
            </div>

            {/* Card Deck View */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastRelationships.map((relationship) => (
                <div key={relationship.id} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-200">
                  <Link href={`/relationships/${relationship.id}`}> {/* Link to Card Detail Page - create pages/relationships/[id].js later */}
                    <a className="block">
                      <h3 className="font-semibold text-gray-800 mb-2">{relationship.name}</h3>
                      <div className="flex space-x-2 mb-2">
                        {relationship.stickers.map((sticker, index) => (
                          <span key={index} className="text-xl">{sticker}</span> // Example Stickers
                        ))}
                      </div>
                      <p className="text-gray-600 text-sm">Rating: {relationship.rating}/5</p> {/* Example Rating */}
                    </a>
                  </Link>
                </div>
              ))}
            </div>

            {/* Add New Relationship Button (Optional - could be placed elsewhere too) */}
            <div className="mt-8 text-center">
              <Link href="/relationships/new"> {/* Link to Create New Relationship Page - create pages/relationships/new.js later */}
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  Add New Relationship
                </button>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}