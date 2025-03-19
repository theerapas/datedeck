"use client";
import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useRouter } from "next/navigation";
import { db, auth } from "../../config/firebase";
import { collection, addDoc, doc, setDoc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import Navbar2 from '../components/Navbar2';

const page = () => {
  const percentage = 27;

  return (
    <div className="flex flex-col bg-[#572649] w-full max-w-md mx-auto min-h-screen text-left">
      {/* Navbar2 at the top */}
      <Navbar2 />
      
      {/* Main content area */}
      <div className="w-full bg-[#572649] text-white flex flex-col px-4">
        {/* Header */}
        <div className="flex justify-between items-center pt-4 pb-2">
          <h1 className="text-white text-2xl font-medium">DashBoard</h1>
          <button className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
            </svg>
          </button>
        </div>

        {/* Separator line */}
        <div className="w-full h-px bg-white/30 mb-4"></div>
        
        {/* Monthly Report Section */}
        <h2 className="text-white text-xl mb-1">Monthly Report</h2>
        <p className="text-gray-400 text-sm mb-2">Your current girlfriend</p>
        
        {/* Girlfriend Card - With Improved Text Readability */}
        <div 
          className="rounded-xl p-6 mb-6 relative" 
          style={{ 
            backgroundImage: "url('https://th.wallhaven.cc/small/r7/r79rjw.jpg')", 
            backgroundSize: "cover", 
            backgroundPosition: "center"
          }}
        >
          {/* Semi-transparent overlay to improve text contrast */}
          <div className="absolute inset-0 bg-black/50 rounded-xl"></div>
          
          <div className="flex items-start gap-6 relative z-10">
            {/* Left column for image and rating */}
            <div className="flex flex-col justify-center items-center pt-6">
              <div className="w-30 h-30 rounded-lg overflow-hidden mb-3  border-white/70">
                {/* Image remains unaffected */}
                <div 
                  className="w-full h-full bg-cover bg-center" 
                  style={{ backgroundImage: "url('https://img.itch.zone/aW1nLzIwMDcwMzg1LnBuZw==/original/ZrHJ73.png')" }}
                ></div>
              </div>
              <div className="text-center">
                <p className="text-white text-sm font-medium">Rating : <span className="text-lg font-bold">85</span></p>
              </div>
            </div>
            
            {/* Right column for name and attributes with improved visibility */}
            <div className="flex-1 pt-2">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <h2 className="text-white text-lg font-bold">Nong_Somsri</h2>
              </div>
              <div className="space-y-2">
                <p className="text-white text-sm bg-black/20 p-1 pl-2 rounded boder">🏆 Communication Effectiveness</p>
                <p className="text-white text-sm bg-black/20 p-1 pl-2 rounded">🏆 Kindness && Generosity</p>
                <p className="text-white text-sm bg-black/20 p-1 pl-2 rounded">🏆 Flexibility level</p>
              </div>
            </div>
          </div>
        </div>

        {/* Decision Tracker */}
        <div className="bg-gradient-to-br from-[#3D1A33] to-[#4D2A43] rounded-xl p-6 mb-6 shadow-lg shadow-pink-500/20 border border-pink-500/20 relative overflow-hidden group">
          {/* Animated background effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          {/* Decorative corner elements */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-pink-500/30"></div>
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-pink-500/30"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-pink-500/30"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-pink-500/30"></div>

          <h3 className="text-white text-xl font-bold mb-4 flex items-center">
            <span className="mr-2">🎯</span>
            Decision Tracker
          </h3>

          <div className="flex items-center justify-center mb-4 relative">
            <div className="w-32 h-32 transform group-hover:scale-105 transition-transform duration-300">
              <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                styles={buildStyles({
                  textColor: "#fff",
                  pathColor: "#ff6384",
                  trailColor: "#3D1A33",
                  textSize: "24px",
                  rotation: 0.75,
                  strokeLinecap: "round",
                  pathTransitionDuration: 1,
                })}
              />
            </div>
            {/* Glowing effect on hover */}
            <div className="absolute inset-0 bg-pink-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          <p className="text-gray-300 text-sm text-center mb-4 font-medium">
            You just pass through
          </p>

          <div className="flex items-center justify-center gap-3 mt-2 bg-white/5 rounded-lg p-3">
            <span className="text-white text-2xl font-bold">{percentage}%</span>
            <span className="text-gray-400 text-lg">of 37</span>
          </div>

          <p className="text-gray-300 text-sm text-center mt-4 font-medium">
            Get yourself more girlfriends to analyze
          </p>
        </div>

        {/* Stats */}
        <div className="flex justify-between text-white mb-4">
          <p>Average rating : 65</p>
          <p>Cards in deck : 15</p>
        </div>

        {/* Girlfriend Rankings Table */}
        <div className="bg-[#3D1A33] rounded-xl overflow-hidden mb-6">
          <table className="w-full text-white">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="py-2 px-4 text-left">#</th>
                <th className="py-2 px-4 text-left">Girlfriend name</th>
                <th className="py-2 px-4 text-right">Rating</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'Nong_Somsri', rating: 85, highlight: true },
                { name: 'Nong_Polo', rating: 79 },
                { name: 'Nong_Oreo', rating: 72 },
                { name: 'P_to', rating: 70 },
                { name: 'P_lengsab', rating: 65 },
                { name: 'Nong_Somying', rating: 50 },
                { name: 'Robin', rating: 42 },
              ].map((gf, index) => (
                <tr 
                  key={index} 
                  className={`border-b border-gray-700 last:border-0 ${gf.highlight ? 'text-orange-400' : ''}`}
                >
                  <td className="py-2 px-4">{index + 1}</td>
                  <td className="py-2 px-4">{gf.name}</td>
                  <td className="py-2 px-4 text-right">{gf.rating}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default page;