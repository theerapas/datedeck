import React from 'react';
import { FaApple, FaGoogle, FaFacebook } from 'react-icons/fa';
import Head from 'next/head';

const page = () => {
  return (
    <>
      <Head>
        <title>Log in</title>
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
      </Head>
      <div className="flex flex-col items-center justify-center bg-pink-200 w-full max-w-md mx-auto my-auto h-full min-h-screen text-center">
        {/* Log in title */}
        <h1 className="text-4xl font-bold text-gray-800 mb-15" style={{ fontFamily: "'Press Start 2P', cursive" }}>Log in</h1>

        {/* Social Login Buttons */}
        <button className="flex items-center justify-between w-4/5 bg-white text-gray-800 py-2 rounded-4xl shadow-md mb-3 px-4">
          <FaApple className="mr-2 text-black" size={30}/>
          <span className="flex-grow text-center">Continue with Apple</span>
        </button>

        <button className="flex items-center justify-between w-4/5 bg-white text-gray-800 py-2 rounded-4xl shadow-md mb-3 px-4">
          <FaGoogle className="mr-2 text-red-500" size={28} />
          <span className="flex-grow text-center">Continue with Google</span>
        </button>

        <button className="flex items-center justify-between w-4/5 bg-white text-gray-800 py-2 rounded-4xl shadow-md mb-6 px-4">
          <FaFacebook className="mr-2 text-blue-600" size={30}/>
          <span className="flex-grow text-center">Continue with Facebook</span>
        </button>

        {/* Email & Password Fields */}
        <div className="w-4/5 text-left">
          <label className="block text-sm font-medium text-gray-700 bg-">Email</label>
          <input type="email" placeholder="Email" className="w-full px-4 py-2  rounded-md text-gray-800 mb-4 bg-white" />

          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input type="password" placeholder="Password" className="w-full px-4 py-2  rounded-md text-gray-800 mb-6 bg-white" />
        </div>

        {/* Log in Button */}
        <button className="w-4/5 bg-gray-800 text-white py-2 rounded-full text-lg font-bold mb-4">
          Log in
        </button>

        {/* Links */}
        <p className="text-sm text-gray-700 mb-2 cursor-pointer">Forgot your password?</p>
        <p className="text-sm text-gray-700">
          Don’t have an account? <span className="text-blue-500 cursor-pointer"><a href="/signUp">Sign up</a></span>
        </p>
      </div>
    </>
  );
};

export default page;