import Head from "next/head";
import Link from "next/link";
import Loading from "./Loading"; // Import the Loading component

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

      <Loading /> {/* Add the Loading component here */}

      <div className="flex flex-col items-center justify-center min-h-screen bg-white">
        {/* Core Content Container - Keeping original size constraints */}
        <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto my-auto h-full min-h-screen text-center bg-gradient-to-b from-pink-100 to-purple-200 relative">
          {/* Top Mini Nav */}
          <div className="absolute top-4 right-4 flex space-x-3 text-sm text-gray-700">
            <Link href="/about">
              <span className="hover:text-pink-600 cursor-pointer">About</span>
            </Link>
            <Link href="/features">
              <span className="hover:text-pink-600 cursor-pointer">Features</span>
            </Link>
          </div>

          {/* Heart Icon with enhanced styling */}
          <div className="bg-white rounded-full p-3 shadow-md mb-4">
            <div className="text-5xl">❤️</div>
          </div>

          {/* Main Title with better styling */}
          <h1 className="text-3xl font-bold text-pink-600 tracking-wide px-6 py-2 rounded-lg ">
            GIRLFRIEND MANAGER
          </h1>

          {/* Slogan with improved typography */}
          <p className="text-gray-700 italic mt-6 px-6 font-medium">
            " The right person at the uncertain time "
          </p>

          {/* Feature Mini Cards - Contained within the original width */}
          <div className="flex flex-col space-y-3 mt-8 w-4/5">
            <div className="bg-white bg-opacity-80 p-3 rounded-md shadow-sm flex items-center">
              <span className="text-2xl mr-3">💌</span>
              <span className="text-base text-gray-700">Track your relationships</span>
            </div>
            <div className="bg-white bg-opacity-80 p-3 rounded-md shadow-sm flex items-center">
              <span className="text-2xl mr-3">📊</span>
              <span className="text-base text-gray-700">Get personalized insights</span>
            </div>
          </div>

          {/* Sign up / Log in Button with enhanced styling */}
          <div className="mt-8">
            <Link href="/login">
              <button
                className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-8 rounded-full shadow-md transition-all duration-200"
                href="/login"
              >
                Sign up / Log in
              </button>
            </Link>
          </div>

          {/* Mini testimonial that fits in the constrained width */}
          <div className="mt-8 bg-opacity-70 p-4 rounded-md w-4/5 text-base">
            <p className="text-gray-600 italic">"This app transformed my dating life!"</p>
            <p className="text-gray-700 font-medium mt-1 text-sm">- Happy User</p>
          </div>
        </div>
      </div>
    </>
  );
}