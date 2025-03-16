import React from 'react';
import { FaApple, FaGoogle, FaFacebook } from 'react-icons/fa';
import Head from 'next/head';
import Loading from '../components/Loading';

const page = () => {
  return (
    <>
      <Head>
        <title>Sign up</title>
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
      </Head>

      

      <div className="flex flex-col items-center justify-center bg-gradient-to-b from-pink-100 to-purple-200 w-full max-w-md mx-auto my-auto h-full min-h-screen text-center">
        {/* Sign up title */}
        <h1 className="text-4xl font-bold text-gray-800 mb-15" style={{ fontFamily: "'Press Start 2P', cursive" }}>Sign up</h1>

        {/* Sign up Form */}
        <div className="w-4/5 text-left">
          <label className="block text-sm font-medium text-gray-700">Username</label>
          <input type="text" placeholder="Username" className="w-full px-4 py-2  rounded-md text-gray-800 mb-4 bg-white" />

          <label className="block text-sm font-medium text-gray-700 bg-">Email</label>
          <input type="email" placeholder="Email" className="w-full px-4 py-2  rounded-md text-gray-800 mb-4 bg-white" />

          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input type="password" placeholder="Password" className="w-full px-4 py-2  rounded-md text-gray-800 mb-6 bg-white" />
        </div>

        {/* Sign up Button */}
        <button className="w-4/5 bg-gray-800 text-white py-2 rounded-full text-lg font-bold mb-4">
          Sign up
        </button>

        {/* Terms of Service */}
        <div className="w-4/5 text-left mb-4">
          <input type="checkbox" className="mr-2" />
          <label className="text-sm text-gray-700">agree all Term of Services</label>
        </div>

        {/* Social Sign up Buttons */}
        <button className="flex items-center justify-between w-4/5 bg-white text-gray-800 py-2 rounded-4xl shadow-md mb-3 px-4">
          <FaApple className="mr-2 text-black" size={30} />
          <span className="flex-grow text-center">Continue with Apple</span>
        </button>

        <button className="flex items-center justify-between w-4/5 bg-white text-gray-800 py-2 rounded-4xl shadow-md mb-3 px-4">
          <FaGoogle className="mr-2 text-red-500" size={28}/>
          <span className="flex-grow text-center">Continue with Google</span>
        </button>

        <button className="flex items-center justify-between w-4/5 bg-white text-gray-800 py-2 rounded-4xl shadow-md mb-6 px-4">
          <FaFacebook className="mr-2 text-blue-600" size={30} />
          <span className="flex-grow text-center">Continue with Facebook</span>
        </button>

        {/* Links */}
        <p className="text-sm text-gray-700">
          Already have an account? <span className="text-blue-500 cursor-pointer"><a href="/login">Log in</a></span>
        </p>
      </div>
    </>
  );
};

export default page;