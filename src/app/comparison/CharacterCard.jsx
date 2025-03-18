"use client";
import React from 'react';

const CharacterCard = ({ card, onClick, isSelected, isDisabled }) => {
  // Default score value - you can pass this in with the card object
  const score = card.score || Math.floor(Math.random() * 100); // Fallback random score if not provided

  return (
    <div 
      className={`cursor-pointer ${isDisabled ? 'opacity-50 pointer-events-none' : ''}`}
      onClick={() => !isDisabled && onClick(card)}
    >
      <div className={`bg-white/10 p-1 rounded-lg border-2 ${isSelected ? 'border-[#e8926f] ring-2 ring-white' : 'border-transparent'}`}>
        <div className="relative overflow-hidden rounded-md">
          {/* Image container with pink background */}
          <div className="bg-[#CD8181] bg-opacity-80 p-1.5">
            <div className="aspect-[3/4]">
              <img 
                src={card.image} 
                alt={card.name}
                className="w-full h-full object-cover" 
              />
            </div>
            
            {/* Score section that stays within the pink div */}
            <div className="bg-[pink-400] bg-opacity-90 py-1 px-2 text-center">
              <p className="text-white font-bold text-sm">Rating {score}</p>
            </div>
          </div>
          
          {isSelected && (
            <div className="absolute top-2 right-2 bg-orange-500 rounded-full w-5 h-5 flex items-center justify-center text-white text-xs">
              ✓
            </div>
          )}
        </div>
      </div>
      <div className="text-center text-sm text-white mt-1">
        {card.name}
      </div>
    </div>
  );
};

export default CharacterCard;