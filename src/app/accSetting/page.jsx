'use client'

import React, { useState } from 'react'
import { IoInformationCircle } from "react-icons/io5";
import { useRouter } from 'next/navigation'
import { db } from "../../config/firebase";

const page = () => {
  const router = useRouter()
  const [showInfo, setShowInfo] = useState(false);
  const [sliderValues, setSliderValues] = useState({
    communicationEffectiveness: 50,
    emotionalStability: 50,
    affectionConsistency: 50,
    flexibilityLevel: 50,
    supportiveness: 50,
    openness: 50,
    conflictResolutionSkills: 50,
    kindnessGenerosity: 50
  });

  const handleSliderChange = (name, value) => {
    setSliderValues(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const definitions = {
    communicationEffectiveness: "Measures clear, open communication and conflict resolution.",
    emotionalStability: "Assesses composure, stress management, and emotional steadiness.",
    affectionConsistency: "Evaluates regular expressions of love through words and actions.",
    flexibilityLevel: "Measures adaptability to planned and unexpected situations.",
    supportiveness: "Assesses willingness to encourage, advise, and assist a partner.",
    openness: "Evaluates openness to new experiences and adventures.",
    conflictResolutionSkills: "Measures the ability to resolve conflicts constructively.",
    kindnessGenerosity: "Assesses selflessness, compassion, and consideration."
  };

  const handleNext = () => {
    router.push('/accSetting/age-preferences')
  }

  const handleSkip = () => {
    router.push('/accSetting/age-preferences')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white h-full">
            <div className="w-full max-w-md p-8 bg-[#572649] h-full min-h-screen justify-center flex flex-col">
            {/* DO IN THIS  */}
              <div className="text-white">
                <div className="flex items-center justify-between mb-6">
                  <h1 className="text-2xl font-bold">Setting your Account</h1>
                  <button
                    onClick={() => setShowInfo(!showInfo)}
                    className="text-white hover:text-gray-200 transition-colors"
                  >
                    <IoInformationCircle size={24} />
                  </button>
                </div>
                
                <p className="text-sm mb-6">Tell me more about yourself<br />for comprehensive analysis</p>

                {/* Sliders */}
                <div className="space-y-6">
                  {Object.entries(sliderValues).map(([key, value]) => (
                    <div key={key} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <label className="block text-sm font-medium">
                          {key.replace(/([A-Z])/g, ' $1').trim().split(' ').map(word => 
                            word.charAt(0).toUpperCase() + word.slice(1)
                          ).join(' ')}
                        </label>
                        <span className="text-sm font-medium bg-white text-[#572649] px-2 py-1 rounded-md">
                          {value}%
                        </span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={value}
                        step={10}
                        onChange={(e) => handleSliderChange(key, e.target.value)}
                        className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                  ))}
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8">
                  <button 
                    onClick={handleSkip}
                    className="px-6 py-2 bg-white text-[#572649] rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    Skip
                  </button>
                  <button 
                    onClick={handleNext}
                    className="px-6 py-2 bg-white text-[#572649] rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    Next
                  </button>
                </div>

                {/* Info Modal */}
                {showInfo && (
                  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
                    <div className="bg-[#572649] p-6 rounded-lg max-w-md w-full border border-white">
                      <h2 className="text-xl font-bold mb-4">Key Relationship Qualities & Scoring</h2>
                      <div className="space-y-4">
                        {Object.entries(definitions).map(([key, definition]) => (
                          <div key={key} className="space-y-1">
                            <h3 className="font-medium">
                              {key.replace(/([A-Z])/g, ' $1').trim()}
                            </h3>
                            <p className="text-sm text-gray-200">{definition}</p>
                          </div>
                        ))}
                      </div>
                      <button
                        onClick={() => setShowInfo(false)}
                        className="mt-6 w-full bg-white text-[#572649] py-2 rounded-lg hover:bg-gray-200 transition-colors"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
        </div>
  )
}

export default page