// pages/index.js
import Head from "next/head";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Relationship Insights - Homepage</title>
        <meta
          name="description"
          content="Evaluate your relationship potential based on past relationship data."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col items-center justify-center min-h-screen bg-white">
        {/* Core Content Container */}
        <div className="flex flex-col items-center justify-center bg-pink-200 w-full max-w-md mx-auto my-auto h-full min-h-screen text-center">
          {/* Heart Icon with 'E' - This can be an emoji or an actual image */}
          <div className="text-5xl mb-4">❤️</div>
          <div className="text-3xl font-bold text-gray-800"></div>

          {/* Main Title */}
          <h1 className="text-xl font-bold text-gray-800 mt-2">
            GIRLFRIEND MANAGER
          </h1>

          {/* Slogan */}
          <p className="text-gray-700 italic mt-4 px-6">
            " The right person at the uncertain time "
          </p>

          {/* Sign up / Log in Button */}
          <div className="mt-10">
            <Link href="/login">
              <button
                className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-6 rounded-full"
                href="/login"
              >
                Sign up / Log in
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
