import React from 'react';

const Card = ({ name, quote, rating, date }) => {
  return (
    <div className="bg-[#B55385] text-white p-4 m-2 rounded-lg flex items-center relative">
      <div className="w-16 h-16 bg-gray-300 rounded-full mr-4"></div>
      <div className="flex-grow text-left">
        <h2 className="text-lg font-bold">{name}</h2>
        <p>{quote}</p>
        <p>Rating: {rating}</p>
        <p>{date}</p>
      </div>
      <div className="absolute bottom-2 right-2 text-sm text-gray-400">Click to view or edit</div>
    </div>
  );
};

export default Card;