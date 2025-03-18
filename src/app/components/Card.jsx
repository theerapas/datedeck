import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Card = ({ id, name, quote, rating, date, image }) => {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/girlfriendDeck/Cardinfo?id=${id}`);
  };

  return (
    <div 
      className="bg-[#6D375F] rounded-lg p-3 mb-4 flex items-center shadow-md cursor-pointer relative"
      onClick={handleCardClick}
    >
      {/* Profile Image */}
      <div className="w-20 h-20 bg-[#572649] rounded-md overflow-hidden flex-shrink-0 mr-3">
        {image ? (
          <Image 
            src={image} 
            alt={name} 
            width={80} 
            height={80}
            className="object-cover pixelated"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-3xl text-white">
            {name.charAt(0)}
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="flex-1 text-white">
        <div className="flex items-center mb-1">
          <h3 className="font-medium text-md">{name}</h3>
          {/* Favorite indicator */}
          {Math.random() > 0.5 && (
            <span className="ml-2 text-yellow-400">★</span>
          )}
        </div>
        <p className="text-sm mb-1 opacity-80">{quote}</p>
        <div className="flex justify-between items-center text-xs opacity-70">
          <p>Rating : {rating}</p>
          <p>{date}</p>
        </div>
      </div>
      
      <div className="absolute bottom-2 right-3 text-xs text-gray-300">
        Click to view or edit
      </div>
    </div>
  );
};

export default Card;