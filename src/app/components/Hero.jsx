import React from 'react';
import Link from "next/link";
import Head from "next/head";


export default function Hero() {
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
      </Head>
      <div className="flex flex-col items-center justify-center bg-[#4A2B4D] w-full max-w-md mx-auto my-auto h-full min-h-screen text-center">
        <div className="w-4/5 space-y-6">
          {/* Main Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Press Start 2P', cursive" }}>
            Finding the right{" "}
            <span className="inline-flex items-center">
              p<span className="relative inline-block mx-1">
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="w-9 h-9 bg-[#FFD700] rounded-full -z-10 opacity-80"></span>
                </span>
                <span className="relative z-10 text-white">e</span>
              </span>rson
            </span>
          </h1>
         
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-[#FFD700] italic">
            In destiny's uncertain hour
          </p>


          {/* Get Started Button */}
          <Link href="/signUp">
            <button className="w-full bg-white text-[#4A2B4D] py-3 rounded-full text-lg font-bold cursor-pointer transform hover:scale-105 hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg">
              Get Started
            </button>
          </Link>


          {/* Additional Text */}
          <p className="text-sm text-white/80 mt-4">
            Already have an account? <Link href="/login" className="text-[#FFD700] hover:text-[#FFD700]/80">Log in</Link>
          </p>
        </div>
      </div>
    </>
  );
}

