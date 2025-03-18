"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar2 from '../components/Navbar2';
import { FaCompass, FaArrowRight } from 'react-icons/fa';
import CharacterCard from './CharacterCard';

// comparison mode page
const Page = () => {
  const router = useRouter();
  const [selectedCard, setSelectedCard] = useState(null);
  
  const cards = [
    { id: 'nong_somsri', name: 'Nong_somsri', image: '/assets/nong_Somsri.png' },
    { id: 'nong_somying', name: 'Nong_somying', image: '/images/nong_somying.png' },
    { id: 'p_to', name: 'P_To', image: '/images/p_to.png' },
    { id: 'p_lengsab', name: 'P_lengsab', image: '/images/p_lengsab.png' },
    { id: 'nong_oreo', name: 'Nong_oreo', image: '/images/nong_oreo.png' },
    { id: 'robin', name: 'Robin', image: '/images/robin.png' },
    { id: 'nong_polo', name: 'Nong_polo', image: '/images/nong_polo.png' },
  ];

  const handleCardSelect = (card) => {
    setSelectedCard(card);
  };

  const handleContinue = () => {
    if (selectedCard) {
      router.push(`/comparison/table?cardId=${selectedCard.id}`);
    }
  };

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
          <div className="w-full flex justify-center mb-6">
            <div className="bg-[#70365c] w-52 h-72 rounded-lg flex items-center justify-center">
              {selectedCard ? (
                <img src={selectedCard.image} alt={selectedCard.name} className="w-full h-full object-cover rounded-lg" />
              ) : (
                <span className="text-4xl text-gray-400">+</span>
              )}
            </div>
          </div>

          {/* Continue button */}
          <div className="w-full flex justify-center mt-4 mb-6">
            <button
              onClick={handleContinue}
              disabled={!selectedCard}
              className={`flex items-center justify-center px-8 py-3 rounded-full text-white font-medium transition-all duration-300 ${
                selectedCard 
                  ? 'bg-gradient-to-r from-[#e8926f] to-[#f5b256] cursor-pointer shadow-lg shadow-orange-500/50 animate-pulse hover:shadow-orange-500/70'
                  : 'bg-gray-500 cursor-not-allowed opacity-50'
              }`}
            >
              Continue <FaArrowRight className="ml-2" />
            </button>
          </div>
          
          {/* Text label */}
          <div className="text-center text-white/70 mb-4">
            Choose your card to comparison
          </div>
          
          {/* Cards grid */}
          <div className="grid grid-cols-3 gap-3 px-2 w-full">
            {cards.map(card => (
              <CharacterCard 
                key={card.id}
                card={card}
                onClick={handleCardSelect}
                isSelected={selectedCard?.id === card.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;