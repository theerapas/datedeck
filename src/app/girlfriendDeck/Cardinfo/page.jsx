"use client";
import React, { useEffect, useState } from 'react';
import { FaEdit, FaStar, FaArrowLeft, FaTrash } from 'react-icons/fa';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';

const CardInfo = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const cardId = searchParams.get('id');
  const [card, setCard] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, fetch the specific card data using cardId
    const fetchCardData = async () => {
      try {
        setLoading(true);
        // Replace with actual API call in production
        // const response = await fetch(`https://api.example.com/cards/${cardId}`);
        // const data = await response.json();
        // setCard(data);
        
        // For demo purposes, using mock data
        setTimeout(() => {
          setCard({
            id: cardId || '1',
            name: 'Nong_Somsri',
            date: '10/11/67 - Current',
            quote: '"Miss your mom more than you ;)"',
            rating: 85,
            profileImage: '/nong_somsri.png', // Replace with actual image path
            description: 'As I walked through the bustling streets, lost in thought, I caught sight of her—a woman of striking beauty. She stood by a cafe window, her silhouette framed by the golden hues of the setting sun.',
            stats: {
              coms: 10,
              kind: 7,
              flex: 10,
              emo: 8,
              aff: 9,
              sup: 6,
              open: 5,
              conf: 3
            },
            blessing: {
              title: 'Blessing Ritual',
              description: 'You are so lucky!',
              effect: 'Your card is blessed to have such a beautiful and wonderful mother!'
            },
            isFavorite: true
          });
          setLoading(false);
        }, 500);
      } catch (error) {
        console.error("Failed to fetch card data:", error);
        setLoading(false);
      }
    };

    fetchCardData();
  }, [cardId]);

  const handleGoBack = () => {
    router.back();
  };

  if (loading) {
    return (
      <div className="flex flex-col bg-[#572649] w-full max-w-md mx-auto min-h-screen items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
      </div>
    );
  }

  // Function to render the radar chart for stats
  const renderRadarChart = () => {
    const stats = card.stats;
    const centerX = 150;
    const centerY = 150;
    const radius = 80;
    
    // Calculate points for each stat on the radar
    const statPoints = [
      { key: 'coms', angle: 0, value: stats.coms },
      { key: 'kind', angle: 45, value: stats.kind },
      { key: 'flex', angle: 90, value: stats.flex },
      { key: 'emo', angle: 135, value: stats.emo },
      { key: 'aff', angle: 180, value: stats.aff },
      { key: 'sup', angle: 225, value: stats.sup },
      { key: 'open', angle: 270, value: stats.open },
      { key: 'conf', angle: 315, value: stats.conf }
    ];
    
    // Calculate polygon points
    const points = statPoints.map(stat => {
      const distance = (stat.value / 10) * radius;
      const x = centerX + distance * Math.cos(stat.angle * Math.PI / 180);
      const y = centerY + distance * Math.sin(stat.angle * Math.PI / 180);
      return `${x},${y}`;
    }).join(' ');
    
    return (
      <div className="relative w-full">
        <svg width="300" height="300" viewBox="0 0 300 300" className="mx-auto">
          {/* Background circles */}
          <circle cx={centerX} cy={centerY} r={radius * 0.3} fill="none" stroke="#ffffff33" strokeWidth="1" />
          <circle cx={centerX} cy={centerY} r={radius * 0.6} fill="none" stroke="#ffffff33" strokeWidth="1" />
          <circle cx={centerX} cy={centerY} r={radius} fill="none" stroke="#ffffff33" strokeWidth="1" />
          
          {/* Lines from center to each stat point */}
          {statPoints.map((stat, index) => (
            <line 
              key={`line-${index}`}
              x1={centerX}
              y1={centerY}
              x2={centerX + radius * Math.cos(stat.angle * Math.PI / 180)}
              y2={centerY + radius * Math.sin(stat.angle * Math.PI / 180)}
              stroke="#ffffff33"
              strokeWidth="1"
            />
          ))}
          
          {/* Stat polygon */}
          <polygon 
            points={points} 
            fill="rgba(255, 255, 255, 0.3)" 
            stroke="#ffffff" 
            strokeWidth="2"
          />
          
          {/* Stat points */}
          {statPoints.map((stat, index) => {
            const x = centerX + (stat.value / 10) * radius * Math.cos(stat.angle * Math.PI / 180);
            const y = centerY + (stat.value / 10) * radius * Math.sin(stat.angle * Math.PI / 180);
            return (
              <circle 
                key={`point-${index}`}
                cx={x}
                cy={y}
                r="4"
                fill="white"
              />
            );
          })}
          
          {/* Stat labels */}
          {statPoints.map((stat, index) => {
            const labelDistance = radius * 1.2;
            const x = centerX + labelDistance * Math.cos(stat.angle * Math.PI / 180);
            const y = centerY + labelDistance * Math.sin(stat.angle * Math.PI / 180);
            return (
              <text 
                key={`label-${index}`}
                x={x}
                y={y}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="white"
                fontSize="12"
              >
                {stat.key.charAt(0).toUpperCase() + stat.key.slice(1)}
              </text>
            );
          })}
          
          {/* Stat values */}
          {statPoints.map((stat, index) => {
            const valueDistance = (stat.value / 10) * radius;
            const x = centerX + valueDistance * Math.cos(stat.angle * Math.PI / 180);
            const y = centerY + valueDistance * Math.sin(stat.angle * Math.PI / 180);
            // Position the value text slightly offset from the point
            const textX = x + 15 * Math.cos(stat.angle * Math.PI / 180);
            const textY = y + 15 * Math.sin(stat.angle * Math.PI / 180);
            return (
              <text 
                key={`value-${index}`}
                x={textX}
                y={textY}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="white"
                fontSize="10"
              >
                {stat.value}
              </text>
            );
          })}
        </svg>
      </div>
    );
  };

  return (
    <div className="flex flex-col bg-[#572649] w-full max-w-md mx-auto min-h-screen text-white">
      {/* Header */}
      <div className="w-full bg-[#572649] py-4 px-4 flex justify-between items-center">
        <button onClick={handleGoBack} className="text-white">
          <FaArrowLeft size={24} />
        </button>
        <div className="flex items-center">
          <div className="h-2 w-2 bg-green-500 rounded-full mr-2"></div>
          <h1 className="text-lg font-medium">{card.name}</h1>
          <span className="text-xs ml-2 opacity-70">{card.date}</span>
        </div>
        <button className="text-white">
          <FaEdit size={24} />
        </button>
      </div>
      
      {/* Card Content */}
      <div className="flex-1 overflow-y-auto px-4 py-2">
        {/* Card image with background */}
        <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4 bg-gradient-to-b from-[#774068] to-[#8B4C7A]">
          {card.profileImage ? (
            <div className="relative w-full h-full flex justify-center">
              <div className="absolute w-full h-full bg-cover bg-center" style={{ 
                backgroundImage: `url(/landscape_bg.png)`,
                filter: 'blur(1px)'
              }}></div>
              <div className="relative z-10 h-full flex items-center justify-center">
                <div className="h-40 w-40 relative">
                  <Image 
                    src={card.profileImage} 
                    alt={card.name}
                    layout="fill"
                    objectFit="contain"
                    className="pixelated"
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="h-32 w-32 bg-[#6D375F] rounded-full flex items-center justify-center">
                <span className="text-2xl">{card.name.charAt(0)}</span>
              </div>
            </div>
          )}
          
          {/* Favorite star */}
          {card.isFavorite && (
            <div className="absolute top-2 right-2">
              <FaStar size={24} className="text-yellow-400" />
            </div>
          )}
        </div>
        
        {/* Quote */}
        <div className="flex items-center mb-4">
          <div className="text-xl font-medium text-center w-full py-2">
            {card.quote}
          </div>
        </div>
        
        {/* Description */}
        <div className="mb-6 text-sm opacity-80">
          {card.description}
        </div>
        
        {/* Blessing Box */}
        {/* {card.blessing && (
          <div className="bg-[#6D375F] rounded-lg p-4 mb-6">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-2">
                🙏
              </div>
              <h3 className="font-medium">{card.blessing.title}</h3>
            </div>
            <p className="text-xs opacity-70 mb-1">{card.blessing.description}</p>
            <p className="text-sm">{card.blessing.effect}</p>
          </div>
        )} */}
        
        {/* Rating */}
        <div className="flex justify-center items-center mb-4">
          <div className="text-center">
            <p className="text-sm opacity-70">Rating :</p>
            <p className="text-2xl font-bold">{card.rating}</p>
          </div>
        </div>
        
        {/* Stats Radar Chart */}
        {card.stats && renderRadarChart()}
        
        {/* Delete button */}
        <div className="flex justify-end my-4">
          <button className="bg-red-500 p-2 rounded-full">
            <FaTrash size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardInfo;