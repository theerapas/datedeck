"use client";
import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Navbar2 from '../../components/Navbar2';
import { FaCompass, FaArrowLeft } from 'react-icons/fa';

const TablePage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [firstCharacter, setFirstCharacter] = useState(null);
  const [secondCharacter, setSecondCharacter] = useState(null);

  // Sample data for characters and their scores
  const charactersData = {
    'nong_somsri': {
      id: 'nong_somsri',
      name: 'Nong Somsri',
      image: 'https://stardewvalleywiki.com/mediawiki/images/a/ab/Penny.png',
      scores: {
        'Over all Rating': 75,
        'Communication Effectiveness': 8,
        'Emotional Stability': 7,
        'Affection Consistency': 8,
        'Flexibility level': 9,
        'Supportiveness': 7,
        'Openness': 6,
        'Conflict Resolution Skills': 5,
        'Kindness && Generosity': 8
      }
    },
    'nong_somying': {
      id: 'nong_somying',
      name: 'Nong Somying',
      image: 'https://stardewvalleywiki.com/mediawiki/images/1/1b/Haley.png',
      scores: {
        'Over all Rating': 77,
        'Communication Effectiveness': 9,
        'Emotional Stability': 6,
        'Affection Consistency': 7,
        'Flexibility level': 8,
        'Supportiveness': 9,
        'Openness': 7,
        'Conflict Resolution Skills': 6,
        'Kindness && Generosity': 8
      }
    },
    'p_to': {
      id: 'p_to',
      name: 'P To',
      image: 'https://stardewvalleywiki.com/mediawiki/images/8/8b/Shane.png',
      scores: {
        'Over all Rating': 82,
        'Communication Effectiveness': 9,
        'Emotional Stability': 8,
        'Affection Consistency': 8,
        'Flexibility level': 7,
        'Supportiveness': 9,
        'Openness': 6,
        'Conflict Resolution Skills': 7,
        'Kindness && Generosity': 9
      }
    },
    'p_lengsab': {
      id: 'p_lengsab',
      name: 'P Lengsab',
      image: 'https://stardewvalleywiki.com/mediawiki/images/8/88/Abigail.png',
      scores: {
        'Over all Rating': 78,
        'Communication Effectiveness': 7,
        'Emotional Stability': 8,
        'Affection Consistency': 8,
        'Flexibility level': 9,
        'Supportiveness': 8,
        'Openness': 7,
        'Conflict Resolution Skills': 6,
        'Kindness && Generosity': 7
      }
    },
    'nong_oreo': {
      id: 'nong_oreo',
      name: 'Nong Oreo',
      image: 'https://img.itch.zone/aW1nLzE1NzQ4ODIxLnBuZw==/original/ARVAWl.png',
      scores: {
        'Over all Rating': 76,
        'Communication Effectiveness': 8,
        'Emotional Stability': 7,
        'Affection Consistency': 7,
        'Flexibility level': 8,
        'Supportiveness': 8,
        'Openness': 6,
        'Conflict Resolution Skills': 5,
        'Kindness && Generosity': 9
      }
    },
    'robin': {
      id: 'robin',
      name: 'Robin',
      image: 'https://stardewvalleywiki.com/mediawiki/images/e/e6/Leah.png',
      scores: {
        'Over all Rating': 80,
        'Communication Effectiveness': 9,
        'Emotional Stability': 7,
        'Affection Consistency': 8,
        'Flexibility level': 8,
        'Supportiveness': 8,
        'Openness': 7,
        'Conflict Resolution Skills': 6,
        'Kindness && Generosity': 9
      }
    },
    'nong_polo': {
      id: 'nong_polo',
      name: 'Nong Polo',
      image: 'https://preview.redd.it/portrait-creator-v0-2dfmrh32cv1d1.png?width=256&format=png&auto=webp&s=61ddaa90b97be5911435b4e8000111b38ba90720',
      scores: {
        'Over all Rating': 79,
        'Communication Effectiveness': 10,
        'Emotional Stability': 5,
        'Affection Consistency': 8,
        'Flexibility level': 8,
        'Supportiveness': 7,
        'Openness': 7,
        'Conflict Resolution Skills': 6,
        'Kindness && Generosity': 9
      }
    }
  };

  useEffect(() => {
    // Get the selected card IDs from the URL query parameters
    const firstCardId = searchParams.get('firstCardId');
    const secondCardId = searchParams.get('secondCardId');
    
    if (firstCardId && charactersData[firstCardId]) {
      setFirstCharacter(charactersData[firstCardId]);
    }
    
    if (secondCardId && charactersData[secondCardId]) {
      setSecondCharacter(charactersData[secondCardId]);
    }
    
    // Fallback if any card is missing
    if (!firstCardId || !charactersData[firstCardId]) {
      setFirstCharacter(charactersData['nong_polo']);
    }
    
    if (!secondCardId || !charactersData[secondCardId]) {
      setSecondCharacter(charactersData['nong_somsri']);
    }
  }, [searchParams]);

  const handleBack = () => {
    router.back();
  };

  if (!firstCharacter || !secondCharacter) {
    return <div className="flex flex-col bg-[#572649] w-full max-w-md mx-auto min-h-screen text-white justify-center items-center">
      <Navbar2 />
      <div className="mt-16">Loading...</div>
    </div>;
  }

  return (
    <div className="flex flex-col bg-[#572649] w-full max-w-md mx-auto min-h-screen text-left">
      {/* Navbar2 at the top */}
      <Navbar2 />
      
      {/* Main content area with proper padding */}
      <div className="w-full bg-[#572649] text-white py-4 flex flex-col justify-center items-center px-4 pt-16">
        {/* Back button and title */}
        <div className="w-full flex items-center justify-center relative mb-2">
          <button 
            onClick={handleBack}
            className="absolute left-0 text-white text-2xl"
          >
            <FaArrowLeft />
          </button>
          <div className="flex flex-col items-center">
            <FaCompass className="text-4xl mb-2" />
            <h1 className="text-3xl">Comparison Mode</h1>
          </div>
        </div>
        
        {/* Content container with border */}
        <div className="w-full border-t border-white/30 mt-2 pt-4 flex flex-col items-center pb-8">
          {/* Character images */}
          <div className="w-full flex justify-center mb-6 space-x-4">
            {/* First character */}
            <div className="text-center">
              <div className="bg-[#70365c] w-40 h-40 rounded-lg overflow-hidden mb-2">
                <img 
                  src={firstCharacter.image} 
                  alt={firstCharacter.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-white text-lg font-medium">
                {firstCharacter.name}
              </div>
            </div>
            
            {/* Second character */}
            <div className="text-center">
              <div className="bg-[#70365c] w-40 h-40 rounded-lg overflow-hidden mb-2">
                <img 
                  src={secondCharacter.image} 
                  alt={secondCharacter.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-white text-lg font-medium">
                {secondCharacter.name}
              </div>
            </div>
          </div>
          
          {/* Comparison table */}
          <div className="w-full border border-white/30 rounded-lg overflow-hidden">
            {/* Table header */}
            <div className="grid grid-cols-3 bg-[#6c2f5c] text-white">
              <div className="p-3 border-r border-white/30">Attributes</div>
              <div className="p-3 text-center border-r border-white/30 font-medium">{firstCharacter.name}</div>
              <div className="p-3 text-center font-medium">{secondCharacter.name}</div>
            </div>
            
            {/* Table rows */}
            {Object.entries(firstCharacter.scores).map(([category, firstScore]) => {
              const secondScore = secondCharacter.scores[category];
              const winner = firstScore > secondScore ? 'first' : firstScore < secondScore ? 'second' : 'tie';
              
              return (
                <div key={category} className="grid grid-cols-3 border-t border-white/30">
                  <div className="p-3 border-r border-white/30">{category}</div>
                  <div className={`p-3 text-center border-r border-white/30 font-bold ${winner === 'first' ? 'text-green-400' : winner === 'second' ? 'text-red-400' : ''}`}>
                    {firstScore}
                  </div>
                  <div className={`p-3 text-center font-bold ${winner === 'second' ? 'text-green-400' : winner === 'first' ? 'text-red-400' : ''}`}>
                    {secondScore}
                  </div>
                </div>
              );
            })}
            
            {/* Overall winner indication */}
            <div className="grid grid-cols-3 border-t border-white/30 bg-[#6c2f5c]">
              <div className="p-3 border-r border-white/30">Winner</div>
              <div className="p-3 text-center border-r border-white/30 font-bold">
                {firstCharacter.scores['Over all Rating'] > secondCharacter.scores['Over all Rating'] ? 
                  '🏆' : ''}
              </div>
              <div className="p-3 text-center font-bold">
                {secondCharacter.scores['Over all Rating'] > firstCharacter.scores['Over all Rating'] ? 
                  '🏆' : ''}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TablePage;