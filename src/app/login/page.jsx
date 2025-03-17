"use client";
import React, { useEffect, useState } from 'react';
import { FaApple, FaGoogle, FaFacebook } from 'react-icons/fa';
import Head from 'next/head';
import Loading from '../components/Loading';
const Page = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <Head>
        <title>Log in</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Loading />
      <div className="flex flex-col items-center justify-center bg-[#572649] w-full max-w-md mx-auto my-auto h-full min-h-screen text-center p-8">
        {/* Log in title */}
        <h1 className="text-4xl font-medium text-white mb-8">Login</h1>

        {/* Social Login Buttons */}
        {isClient && (
          <>
            <button className="flex items-center w-full bg-white text-gray-600 py-3 rounded-full shadow-md mb-4 px-4 cursor-pointer">
              <FaApple className="text-black" size={24} />
              <span className="flex-grow text-center">Continue with Apple</span>
            </button>

            <button
              className="flex items-center w-full bg-white text-gray-600 py-3 rounded-full shadow-md mb-4 px-4 cursor-pointer"
              onClick={signInWithGoogle}
            >
              <FaGoogle className="text-red-500" size={24} />
              <span className="flex-grow text-center">
                Continue with Google
              </span>
            </button>

            <button className="flex items-center w-full bg-white text-gray-600 py-3 rounded-full shadow-md mb-8 px-4 cursor-pointer">
              <FaFacebook className="text-blue-600" size={24} />
              <span className="flex-grow text-center">
                Continue with Facebook
              </span>
            </button>
          </>
        )}

        {/* Email & Password Fields */}
        <div className="w-full text-left">
          <label className="block text-white mb-2 text-sm">Email</label>
          <input 
            type="email" 
            placeholder="Email" 
            className="w-full px-4 py-3 rounded-lg bg-white mb-4" 
          />

          <label className="block text-white mb-2 text-sm">password</label>
          <input 
            type="password" 
            placeholder="Password" 
            className="w-full px-4 py-3 rounded-lg bg-white mb-6" 
          />
        </div>

        {/* Log in Button */}
        <button className="w-full bg-[#8B4B76] text-white py-3 rounded-full mb-4 hover:bg-[#7a4267] transition-colors">
          Log in
        </button>

        {/* Links */}
        <p className="text-white mb-4 hover:underline cursor-pointer">
          Forget your password?
        </p>
        <p className="text-white">
          Don't have an account?{" "}
          <a href="/signUp" className="font-medium hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </>
  );
};

export default Page;
