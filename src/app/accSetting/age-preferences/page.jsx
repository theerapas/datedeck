'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

const AgePreferences = () => {
  const router = useRouter()
  const [age, setAge] = useState('')
  const [marriageAge, setMarriageAge] = useState('')

  const handleNext = () => {
    if (!age) {
      alert('Please enter your age')
      return
    }

    // Save the data (you can implement your own storage solution)
    const preferences = {
      age: parseInt(age),
      marriageAge: marriageAge ? parseInt(marriageAge) : 0
    }
    
    // You can save this data to your preferred storage (localStorage, context, redux, etc)
    console.log('Saving preferences:', preferences)
    
    // Navigate to the next page in your flow
    router.push('/dashboard') // Update this to your next route
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-md p-8 bg-[#572649] min-h-screen flex flex-col items-center">
        <div className="text-white text-center w-full max-w-sm">
          {/* Settings Icon */}
          <div className="mb-8">
            <svg className="w-12 h-12 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>

          <h1 className="text-2xl font-bold mb-8">Setting your Account</h1>
          
          <div className="space-y-8">
            <div className="space-y-2">
              <label className="block text-sm">How old are you?</label>
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-white text-[#572649]"
                placeholder="Enter your age"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm">
                At what age do you envision yourself getting married?
              </label>
              <input
                type="number"
                value={marriageAge}
                onChange={(e) => setMarriageAge(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-white text-[#572649]"
                placeholder="Enter preferred marriage age"
              />
              <p className="text-xs text-gray-300 mt-2">
                If you intend to keep searching without concern for time, enter 0. Otherwise,
                specify an age. Also, consider whether you'd still want to marry at 40, 50, or even
                after retirement.
              </p>
            </div>
          </div>

          <p className="text-sm mt-8 mb-4">Thanks for taking the time</p>

          <button
            onClick={handleNext}
            className="w-full bg-white text-[#572649] py-2 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Enjoy!!!
          </button>
        </div>
      </div>
    </div>
  )
}

export default AgePreferences 