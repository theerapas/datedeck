"use client";
import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Navbar2 from '../../components/Navbar2';
import { FaCompass, FaArrowLeft } from 'react-icons/fa';

const TablePage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  // Sample data for characters and their scores
  const charactersData = {
    'nong_somsri': {
      id: 'nong_somsri',
      name: 'Nong Somsri',
      image: '/images/nong_somsri.png',
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
      image: '/images/nong_somying.png',
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
      image: '/images/p_to.png',
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
      image: '/images/p_lengsab.png',
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
      image: '/images/nong_oreo.png',
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
      image: '/images/robin.png',
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
      image: '/images/nong_polo.png',
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

  const highestScores = {
    'Over all Rating': 85,
    'Communication Effectiveness': 10,
    'Emotional Stability': 9,
    'Affection Consistency': 8,
    'Flexibility level': 10,
    'Supportiveness': 9,
    'Openness': 7,
    'Conflict Resolution Skills': 6,
    'Kindness && Generosity': 10
  };

  useEffect(() => {
    // Get the selected card ID from the URL query parameters
    const cardId = searchParams.get('cardId');
    if (cardId && charactersData[cardId]) {
      setSelectedCharacter(charactersData[cardId]);
    } else {
      // Fallback to default character if no valid ID is provided
      setSelectedCharacter(charactersData['nong_polo']);
    }
  }, [searchParams]);

  const handleBack = () => {
    router.back();
  };

  if (!selectedCharacter) {
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
          {/* Character name */}
          <div className="text-center text-white mb-4 text-xl font-bold">
            {selectedCharacter.name}
          </div>
          
          {/* Character image */}
          <div className="w-full flex justify-center mb-6">
            <div className="bg-[#70365c] w-64 h-36 rounded-lg overflow-hidden">
              <img 
                src={selectedCharacter.image} 
                alt={selectedCharacter.name} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Comparison table */}
          <div className="w-full border border-white/30 rounded-lg overflow-hidden">
            {/* Table header */}
            <div className="grid grid-cols-3 bg-[#6c2f5c] text-white">
              <div className="p-3 border-r border-white/30"></div>
              <div className="p-3 text-center border-r border-white/30 font-medium">Highest</div>
              <div className="p-3 text-center font-medium">{selectedCharacter.name}</div>
            </div>
            
            {/* Table rows */}
            {Object.entries(highestScores).map(([category, highScore]) => {
              const characterScore = selectedCharacter.scores[category];
              const isHigher = characterScore >= highScore;
              
              return (
                <div key={category} className="grid grid-cols-3 border-t border-white/30">
                  <div className="p-3 border-r border-white/30">{category}</div>
                  <div className="p-3 text-center border-r border-white/30 font-bold">{highScore}</div>
                  <div className={`p-3 text-center font-bold ${isHigher ? 'text-green-400' : 'text-red-400'}`}>
                    {characterScore}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TablePage;