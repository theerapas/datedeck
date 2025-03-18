"use client";
import React from 'react';

const CharacterCard = ({ card, onClick, isSelected }) => {
  return (
    <div className="cursor-pointer" onClick={() => onClick(card)}>
      <div className={`bg-white/10 p-1 rounded-lg border-2 border-[#e8926f] ${isSelected ? 'ring-2 ring-white' : ''}`}>
        <div className="relative aspect-[3/4] overflow-hidden rounded-md">
          <img 
            src={card.image} 
            alt={card.name}
            className="w-full h-full object-cover" 
          />
        </div>
      </div>
      <div className="text-center text-sm text-white mt-1">
        {card.name}
      </div>
    </div>
  );
};

export default CharacterCard;