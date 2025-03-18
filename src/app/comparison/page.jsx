"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar2 from '../components/Navbar2';
import { FaCompass, FaArrowRight, FaRedo } from 'react-icons/fa';
import CharacterCard from './CharacterCard';

const Page = () => {
  const router = useRouter();
  const [firstSelectedCard, setFirstSelectedCard] = useState(null);
  const [secondSelectedCard, setSecondSelectedCard] = useState(null);
  
  const cards = [
    { id: 'nong_somsri', name: 'Nong_somsri', image: 'https://stardewvalleywiki.com/mediawiki/images/a/ab/Penny.png' },
    { id: 'nong_somying', name: 'Nong_somying', image: 'https://stardewvalleywiki.com/mediawiki/images/1/1b/Haley.png' },
    { id: 'p_to', name: 'P_To', image: 'https://stardewvalleywiki.com/mediawiki/images/8/8b/Shane.png' },
    { id: 'p_lengsab', name: 'P_lengsab', image: 'https://stardewvalleywiki.com/mediawiki/images/8/88/Abigail.png' },
    { id: 'nong_oreo', name: 'Nong_oreo', image: 'https://img.itch.zone/aW1nLzE1NzQ4ODIxLnBuZw==/original/ARVAWl.png' },
    { id: 'robin', name: 'Robin', image: 'https://stardewvalleywiki.com/mediawiki/images/e/e6/Leah.png' },
    { id: 'nong_polo', name: 'Nong_polo', image: 'https://preview.redd.it/portrait-creator-v0-2dfmrh32cv1d1.png?width=256&format=png&auto=webp&s=61ddaa90b97be5911435b4e8000111b38ba90720' },
  ];

  const handleCardSelect = (card) => {
    // First fill the first card slot, then the second
    if (!firstSelectedCard) {
      setFirstSelectedCard(card);
    } else if (!secondSelectedCard && card.id !== firstSelectedCard.id) {
      setSecondSelectedCard(card);
    }
  };

  const handleContinue = () => {
    if (firstSelectedCard && secondSelectedCard) {
      router.push(`/comparison/table?firstCardId=${firstSelectedCard.id}&secondCardId=${secondSelectedCard.id}`);
    }
  };

  const handleReset = () => {
    setFirstSelectedCard(null);
    setSecondSelectedCard(null);
  };

  // Check if both cards are selected
  const bothCardsSelected = firstSelectedCard && secondSelectedCard;
  
  // Check if any card is selected for the reset button
  const anyCardSelected = firstSelectedCard || secondSelectedCard;

  return (
    <div className="flex flex-col bg-[#572649] w-full max-w-md mx-auto min-h-screen text-left">
      {/* Navbar2 at the top */}
      <Navbar2 />
      
      {/* Main content area with proper padding */}
      <div className="w-full bg-[#572649] text-white py-4 flex flex-col justify-center items-center px-4 pt-16">
        {/* Compass icon and title */}
        <FaCompass className="text-4xl mb-2" />
        <h1 className="text-3xl">Comparison Mode</h1>
        
        {/* Content container with border */}
        <div className="w-full border-t border-white/30 mt-2 pt-4 flex flex-col items-center pb-8">
          {/* Selected card placeholder */}
          <div className="w-full flex justify-center mb-6 flex-row">
            <div className="bg-[#70365c] w-52 h-72 rounded-lg flex items-center justify-center mx-2 p-5">
              {firstSelectedCard ? (
                <img src={firstSelectedCard.image} alt={firstSelectedCard.name} className="w-full h-full object-cover rounded-lg" />
              ) : (
                <span className="text-4xl text-gray-400">+</span>
              )}
            </div>

            <div className="bg-[#70365c] w-52 h-72 rounded-lg flex items-center justify-center mx-2 p-5">
              {secondSelectedCard ? (
                <img src={secondSelectedCard.image} alt={secondSelectedCard.name} className="w-full h-full object-cover rounded-lg" />
              ) : (
                <span className="text-4xl text-gray-400">+</span>
              )}
            </div>
          </div>

          {/* Continue and Reset buttons */}
          <div className="w-full flex justify-center mt-4 mb-6 flex-row space-x-4">
            <button
              onClick={handleContinue}
              disabled={!bothCardsSelected}
              className={`flex items-center justify-center px-8 py-3 rounded-full text-white font-medium transition-all duration-300 ${
                bothCardsSelected 
                  ? 'bg-gradient-to-r from-[#e8926f] to-[#f5b256] cursor-pointer shadow-lg shadow-orange-500/50 animate-pulse hover:shadow-orange-500/70'
                  : 'bg-gray-500 cursor-not-allowed opacity-50'
              }`}
            >
              Continue <FaArrowRight className="ml-2" />
            </button>

            <button
              onClick={handleReset}
              disabled={!anyCardSelected}
              className={`flex items-center justify-center px-8 py-3 rounded-full text-white font-medium transition-all duration-300 ${
                anyCardSelected 
                  ? 'bg-gradient-to-r from-[#e74c3c] to-[#c0392b] cursor-pointer shadow-lg shadow-red-500/50 hover:shadow-red-500/70'
                  : 'bg-gray-500 cursor-not-allowed opacity-50'
              }`}
            >
              Reset <FaRedo className="ml-2" />
            </button>
          </div>
          
          {/* Text label - updated for clarity */}
          <div className="text-center text-white/70 mb-4">
            {!firstSelectedCard 
              ? "Choose your first card to compare" 
              : !secondSelectedCard 
                ? "Choose your second card to compare" 
                : "Ready for comparison!"}
          </div>
          
          {/* Cards grid */}
          <div className="grid grid-cols-3 gap-3 px-2 w-full">
            {cards.map(card => (
              <CharacterCard 
                key={card.id}
                card={card}
                onClick={handleCardSelect}
                isSelected={firstSelectedCard?.id === card.id || secondSelectedCard?.id === card.id}
                isDisabled={firstSelectedCard?.id === card.id && !secondSelectedCard} // Prevent selecting the same card twice
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;