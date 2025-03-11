// pages/register.js

"use client";
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match. Please re-enter.");
      return;
    }

    // In a real application, you would send registration data to your backend
    console.log('Registration Attempt:', { email, password });
    // Placeholder for actual registration logic - for MVP, just console log
    alert('Registration functionality is a placeholder for MVP. Check console for submitted data.');
    // After successful registration in a real app, you might redirect to login or dashboard
  };

  return (
    <>
      <Head>
        <title>Relationship Insights - Register</title>
        <meta name="description" content="Register for Relationship Insights and start evaluating your relationships." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        {/* Core Content Container (Mobile-First Design - Centered) */}
        <div className="core-container bg-white shadow-md rounded-lg overflow-hidden w-full max-w-md mx-auto my-auto">
          <div className="px-8 py-12 sm:px-10">
            {/* Register Page Content */}
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
              Create a New Account
            </h1>

            <form onSubmit={handleRegister} className="space-y-6">
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
                  placeholder="Choose a Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength="6" // Example: Require password of at least 6 characters
                />
              </div>
              <div>
                <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-bold mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Confirm Your Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Register
                </button>
                <Link href="/login" legacyBehavior>
                  <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                    Already have an account? Login
                  </a>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}