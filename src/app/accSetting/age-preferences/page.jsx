"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { db, auth } from "../../../config/firebase";
import { collection, addDoc, doc, setDoc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

const AgePreferences = () => {
  const router = useRouter();
  const [age, setAge] = useState("");
  const [marriageAge, setMarriageAge] = useState("");
  const [girlfriendCount, setGirlfriendCount] = useState("");
  const [fadeIn, setFadeIn] = useState(false);

  // Add fade-in effect on component mount
  useEffect(() => {
    setFadeIn(true);
  }, []);

  // Handle age input - allow only integers, no decimals or other characters
  const handleAgeChange = (e) => {
    const value = e.target.value;
    // Only allow integers between 1-99
    if (
      value === "" ||
      (/^\d+$/.test(value) && parseInt(value) >= 1 && parseInt(value) <= 99)
    ) {
      setAge(value);
    }
  };

  // Handle marriage age input - validate between 1-99
  const handleMarriageAgeChange = (e) => {
    const value = e.target.value;
    // Only allow integers between 1-99
    if (
      value === "" ||
      (/^\d+$/.test(value) && parseInt(value) >= 1 && parseInt(value) <= 99)
    ) {
      setMarriageAge(value);
    }
  };

  // Handle girlfriend count input - validate non-negative integers only
  const handleGirlfriendCountChange = (e) => {
    const value = e.target.value;
    // Only allow non-negative integers (0 or greater)
    if (value === "" || (/^\d+$/.test(value) && parseInt(value) > 0)) {
      setGirlfriendCount(value);
    }
  };

  const handleNext = () => {
    if (!age) {
      alert("Please enter your age");
      return;
    }

    const maritalAgeNum = marriageAge ? parseInt(marriageAge) : 0;
    const girlfriendCountNum = girlfriendCount ? parseInt(girlfriendCount) : 0;
    const ageNum = age ? parseInt(age) : 0;

    if (
      isNaN(ageNum) ||
      ageNum < 1 ||
      ageNum > 99 ||
      Number.isInteger(ageNum) === false
    ) {
      alert("Age must be an integer between 1 and 99");
      return;
    }

    if (
      isNaN(maritalAgeNum) ||
      maritalAgeNum < 1 ||
      maritalAgeNum > 99 ||
      Number.isInteger(maritalAgeNum) === false ||
      maritalAgeNum <= ageNum
    ) {
      alert(
        "Marriage age must be an integer between 1 and 99 and more than your age"
      );
      return;
    }

    if (
      isNaN(girlfriendCountNum) ||
      girlfriendCountNum <= 0 ||
      Number.isInteger(girlfriendCountNum) === false
    ) {
      alert("Girlfriend count must be a positive integer");
      return;
    }

    onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log("User is signed in:", user.uid);
        const userDocRef = doc(db, "USERS", user.uid);
        const optimalDecisionPoint = Math.floor(
          ((maritalAgeNum - ageNum) * girlfriendCountNum) / 3
        );
        const data = {
          age: ageNum,
          marriageAge: maritalAgeNum,
          girlfriendCount: girlfriendCountNum,
          optimalDecisionPoint: optimalDecisionPoint,
        };
        try {
          await setDoc(userDocRef, data, { merge: true });
          console.log("Document successfully updated");
          router.push("/dashboard");
        } catch (e) {
          console.error("Error updating document: ", e);
        }
      } else {
        console.error("No user is signed in.");
      }
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div
        className={`w-full max-w-md p-8 bg-[#572649] min-h-screen flex flex-col items-center transition-opacity duration-500 ${
          fadeIn ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="text-white text-center w-full max-w-sm">
          {/* Settings Icon with subtle animation */}
          <div className="mb-8 hover:scale-110 transition-transform duration-300">
            <svg
              className="w-12 h-12 mx-auto"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>

          <h1 className="text-3xl font-normal mb-8">Setting your Account</h1>

          <div className="space-y-8">
            <div className="space-y-2 transform transition hover:translate-y-[-2px]">
              <label className="block text-lg">How old are you?</label>
              <input
                type="text" // Changed from number to text for better control
                value={age}
                onChange={handleAgeChange}
                className="w-full px-4 py-2 rounded-lg bg-white text-[#572649] text-lg focus:ring-2 focus:ring-white transition-all"
                placeholder="Enter your age (1-99)"
                required
              />
              <p className="text-xs text-gray-300 mt-1">
                Keep it real. No dinosaurs or toddlers.
              </p>
            </div>

            <div className="space-y-2 transform transition hover:translate-y-[-2px]">
              <label className="block text-lg leading-tight">
                At what age do you envision yourself getting married?
              </label>
              <input
                type="text" // Changed from number to text
                value={marriageAge}
                onChange={handleMarriageAgeChange}
                className="w-full px-4 py-2 rounded-lg bg-white text-[#572649] text-lg focus:ring-2 focus:ring-white transition-all"
                placeholder="Enter preferred marriage age (1-99)"
                required
              />
              <p className="text-xs text-gray-300 mt-2">
                If you intend to not get married,<br></br> enter the age you
                expect to stop dating.
              </p>
            </div>

            <div className="space-y-2 transform transition hover:translate-y-[-2px]">
              <label className="block text-lg">
                How many people have you dated in the last 3 years?
              </label>
              <input
                type="text" // Changed from number to text
                value={girlfriendCount}
                onChange={handleGirlfriendCountChange}
                className="w-full px-4 py-2 rounded-lg bg-white text-[#572649] text-lg focus:ring-2 focus:ring-white transition-all"
                placeholder="Enter number (1 or greater)"
                required
              />
              <p className="text-xs text-gray-300 mt-1">
                If it’s 1, we’re here for you. If it’s 100, teach us.
              </p>
            </div>
          </div>

          <p className="text-sm text-gray-300 mt-8 mb-4">
            Thanks for taking the time
          </p>

          <button
            onClick={handleNext}
            className="w-full bg-white text-[#572649] py-3 rounded-lg hover:bg-gray-200 transition-all duration-300 text-lg transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white"
          >
            Enjoy!!!
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgePreferences;
