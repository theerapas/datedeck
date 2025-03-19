'use client'

import React, { useState } from 'react';
import { IoInformationCircle } from "react-icons/io5";
import { FaArrowLeft } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { db, auth } from "../../../config/firebase"; // Ensure you import your Firestore instance
import { collection, addDoc, updateDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { doc } from "firebase/firestore";

const AddCard = () => {
  const router = useRouter();
  const [showInfo, setShowInfo] = useState(false);
  const [selectedPortrait, setSelectedPortrait] = useState(null);
  const [showPortraitSelector, setShowPortraitSelector] = useState(false);
  const [name, setName] = useState('');
  const [quote, setQuote] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const isFormValid = () => {
    return selectedPortrait && 
           name.trim() !== '' && 
           startDate !== '' && 
           endDate !== '';
  };

  // Available portraits from comparison page
  const availablePortraits = [
    { id: 'nong_somsri', name: 'Nong_somsri', image: 'https://stardewvalleywiki.com/mediawiki/images/a/ab/Penny.png' },
    { id: 'nong_somying', name: 'Nong_somying', image: 'https://stardewvalleywiki.com/mediawiki/images/1/1b/Haley.png' },
    { id: 'p_to', name: 'P_To', image: 'https://stardewvalleywiki.com/mediawiki/images/8/8b/Shane.png' },
    { id: 'p_lengsab', name: 'P_lengsab', image: 'https://stardewvalleywiki.com/mediawiki/images/8/88/Abigail.png' },
    { id: 'nong_oreo', name: 'Nong_oreo', image: 'https://img.itch.zone/aW1nLzE1NzQ4ODIxLnBuZw==/original/ARVAWl.png' },
    { id: 'robin', name: 'Robin', image: 'https://stardewvalleywiki.com/mediawiki/images/e/e6/Leah.png' },
    { id: 'nong_polo', name: 'Nong_polo', image: 'https://preview.redd.it/portrait-creator-v0-2dfmrh32cv1d1.png?width=256&format=png&auto=webp&s=61ddaa90b97be5911435b4e8000111b38ba90720' },
    { id: 'dum_esso', name: 'Dum_esso', image: 'https://stardewvalleywiki.com/mediawiki/images/f/f9/Demetrius.png' },
    { id: 'doc_occ', name: 'Doc_occ', image: 'https://stardewvalleywiki.com/mediawiki/images/9/95/Harvey.png' }
  ];

  const [sliderValues, setSliderValues] = useState({
    CommunicationEffectiveness: 5,
    KindnessAndGenerosity: 5,
    FlexibilityLevel: 5,
    EmotionalStability: 5,
    AffectionConsistency: 5,
    Supportiveness: 5,
    Openness: 5,
    ConflictResolution: 5
  });

  const handleSliderChange = (name, value) => {
    setSliderValues(prev => ({
      ...prev,
      [name]: parseInt(value)
    }));
  };

  const definitions = {
    CommunicationEffectiveness: "Communication Effectiveness - Measures clear, open communication and conflict resolution.",
    KindnessAndGenerosity: "Kindness and Generosity - Assesses selflessness, compassion, and consideration.",
    FlexibilityLevel: "Flexibility Level - Measures adaptability to planned and unexpected situations.",
    EmotionalStability: "Emotional Stability - Assesses composure, stress management, and emotional steadiness.",
    AffectionConsistency: "Affection Consistency - Evaluates regular expressions of love through words and actions.",
    Supportiveness: "Supportiveness - Assesses willingness to encourage, advise, and assist a partner.",
    Openness: "Openness - Evaluates openness to new experiences and adventures.",
    ConflictResolution: "Conflict Resolution - Measures the ability to resolve conflicts constructively."
  };

  const handleGoBack = () => {
    router.back();
  };

  const handleSave = () => {
    if (!selectedPortrait) {
      alert('Please select a portrait first');
      return;
    }
    if (!name.trim()) {
      alert('Please enter a name');
      return;
    }
    if (!startDate) {
      alert('Please select a start date');
      return;
    }
    if (!endDate) {
      alert('Please select an end date');
      return;
    }
    // Here you would implement the save logic
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log("User is signed in:", user.uid);
        const userDocRef = doc(db, "USERS", user.uid);
        const averageRating =
          Object.values(sliderValues).reduce((sum, value) => sum + value, 0) /
          Object.values(sliderValues).length;

        const cardData = {
          imgurl: selectedPortrait.image,
          userId: user.uid,
          portrait: selectedPortrait.id,
          partnerName: name.trim(),
          quote: quote.trim(),
          description: description.trim(),
          relationshipStartDate: new Date(startDate + "T00:00:00"), // Set time to midnight
          relationshipEndDate: new Date(endDate + "T00:00:00"), // Set time to midnight
          stats: sliderValues,
          createdAt: new Date(), // Add a timestamp for when the card is created
          overallRating: averageRating, // Calculate the average rating from sliderValues
          deleted: false, // Add a flag to indicate if the card is deleted
          enchanted: false, // Add a flag to indicate if the card is enchanted
          isFavourited: false, // Add a flag to indicate if the card is favourited
        };
        try {
          // Prepare the card data
          // Add the card data to the "CARDS" collection in Firestore
          const docRef = await addDoc(collection(db, "CARDS"), cardData);
          await updateDoc(doc(db, "CARDS", docRef.id), {
            cardId: docRef.id,
          });
          console.log("Card successfully saved with ID:", docRef.id);

          // Navigate back to the girlfriend deck page
          router.push("/girlfriendDeck");
        } catch (error) {
          console.error("Error saving card:", error);
          alert("An error occurred while saving the card. Please try again.");
        }
      } else {
        console.log("User is not signed in");
      }
    });
  };

  return (
    <div className="flex flex-col bg-[#572649] w-full max-w-md mx-auto min-h-screen text-white">
      {/* Header */}
      <div className="w-full bg-[#572649] py-4 px-4 flex justify-between items-center">
        <button onClick={handleGoBack} className="text-white hover:scale-110 transition-transform duration-200 cursor-pointer">
          <FaArrowLeft size={24} />
        </button>
        <h1 className="text-lg font-medium cursor-pointer">Add Card</h1>
        <button
          onClick={() => setShowInfo(!showInfo)}
          className="text-white hover:text-gray-200 transition-colors cursor-pointer"
        >
          <IoInformationCircle size={24} />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-4 py-2">
        {/* Portrait Selection */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Portrait Image</label>
          <div className="flex flex-col items-center">
            {/* Selected Portrait Display */}
            <div 
              className="relative w-40 h-40 mx-auto rounded-lg overflow-hidden bg-[#3D1B33] border-2 border-dashed border-white/30 flex items-center justify-center mb-4 cursor-pointer"
              onClick={() => setShowPortraitSelector(!showPortraitSelector)}
            >
              {selectedPortrait ? (
                <img 
                  src={selectedPortrait.image} 
                  alt={selectedPortrait.name} 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-center">
                  <p className="text-sm text-white/70">Click to select portrait</p>
                </div>
              )}
            </div>

            {/* Portrait Grid Selector */}
            {showPortraitSelector && (
              <div className="w-full bg-[#3D1B33] rounded-lg p-4 mb-4">
                <div className="grid grid-cols-3 gap-3">
                  {availablePortraits.map((portrait) => (
                    <div
                      key={portrait.id}
                      className={`relative aspect-square rounded-lg overflow-hidden cursor-pointer border-2 ${
                        selectedPortrait?.id === portrait.id 
                          ? 'border-white' 
                          : 'border-transparent'
                      } hover:border-white/50 transition-all`}
                      onClick={() => {
                        setSelectedPortrait(portrait);
                        setShowPortraitSelector(false);
                      }}
                    >
                      <img
                        src={portrait.image}
                        alt={portrait.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Name Input */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">
            Name <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter partner name"
            className="w-full px-4 py-2 rounded-lg bg-[#3D1B33] text-white placeholder-white/50 border border-white/20"
            required
          />
        </div>

        {/* Quote and Description */}
        <div className="mb-6 space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Quote</label>
            <input
              type="text"
              value={quote}
              onChange={(e) => setQuote(e.target.value)}
              placeholder="Enter a memorable quote"
              className="w-full px-4 py-2 rounded-lg bg-[#3D1B33] text-white placeholder-white/50 border border-white/20"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter a description"
              className="w-full px-4 py-2 rounded-lg bg-[#3D1B33] text-white placeholder-white/50 border border-white/20 h-24 resize-none"
            />
          </div>
        </div>

        {/* Date Selection */}
        <div className="mb-6 space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              Start Date <span className="text-red-400">*</span>
            </label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-[#3D1B33] text-white border border-white/20"
              lang="en"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">
              End Date <span className="text-red-400">*</span>
            </label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-[#3D1B33] text-white border border-white/20"
              lang="en"
              required
            />
          </div>
        </div>

        {/* Stats Sliders */}
        <div className="space-y-6 mb-6">
          {Object.entries(sliderValues).map(([key, value]) => (
            <div key={key} className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="block text-sm font-medium">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </label>
                <span className="text-sm font-medium bg-white text-[#572649] px-2 py-1 rounded-md">
                  {value}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="10"
                value={value}
                onChange={(e) => handleSliderChange(key, e.target.value)}
                className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          ))}
        </div>

        {/* Save Button */}
        <button
          onClick={handleSave}
          disabled={!isFormValid()}
          className={`w-full py-3 rounded-lg transition-all duration-300 transform 
          ${isFormValid() 
            ? 'bg-gradient-to-r from-[#e8926f] to-[#f5b256] hover:scale-[1.02] hover:shadow-lg hover:shadow-orange-500/50 active:scale-95 cursor-pointer' 
            : 'bg-gray-500 cursor-not-allowed opacity-50'
          } font-medium mb-6 relative overflow-hidden group`}
        >
          <div className={`absolute inset-0 w-full h-full bg-gradient-to-r from-orange-400 to-yellow-400 opacity-0 
          ${isFormValid() ? 'group-hover:opacity-20' : ''} transition-opacity duration-300`}></div>
          <div className="relative z-10 flex items-center justify-center">
            <span className="mr-2">Save Card</span>
          </div>
        </button>
      </div>

      {/* Info Modal */}
      {showInfo && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-[#572649] p-6 rounded-lg max-w-md w-full border border-white">
            <h2 className="text-xl font-bold mb-4">Stat Definitions</h2>
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
  );
};

export default AddCard; 