"use client";
// pages/login.js
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
    // In a real application, you would send these credentials to your backend for authentication
    console.log('Login Attempt:', { email, password });
    // Placeholder for actual login logic - for MVP, just console log
    alert('Login functionality is a placeholder for MVP. Check console for submitted data.');
  };

  return (
    <>
      <Head>
        <title>Relationship Insights - Login</title>
        <meta name="description" content="Login to Relationship Insights and start evaluating your relationships." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        {/* Core Content Container (Mobile-First Design - Centered) */}
        <div className="core-container bg-white shadow-md rounded-lg overflow-hidden w-full max-w-md mx-auto my-auto">
          <div className="px-8 py-12 sm:px-10">
            {/* Login Page Content */}
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
              Login to Your Account
            </h1>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Your Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Log In
                </button>
                <Link href="/register" legacyBehavior>
                  <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                    Register
                  </a>
                </Link>
              </div>
            </form>

            {/* Optional: Add "Forgot Password?" Link below the form if needed for full functionality */}
            {/* <div className="mt-4 text-center">
              <a href="#" className="inline-block align-baseline font-bold text-sm text-gray-500 hover:text-gray-800">
                Forgot Password?
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}