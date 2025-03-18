"use client";
import React, { useEffect, useState } from 'react';
import { FaUserPlus, FaSearch } from 'react-icons/fa';
import Card from '../components/Card';
import Loading from '../components/Loading';
import Navbar2 from '../components/Navbar2';

const Page = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Fetch data from API
    const fetchData = async () => {
      // Replace with your actual API endpoint
      try {
        setLoading(true);
        // Uncomment when API is ready
        // const response = await fetch('https://api.example.com/cards');
        // const result = await response.json();
        // setData(result);
        
        // Test data for development
        setTimeout(() => {
          setData([
            { 
              id: '1', 
              name: 'Nong_Somsri', 
              quote: '"Miss your mom more than you ;)"', 
              rating: 85, 
              date: '10/11/67 - Current',
              image: '/nong_somsri.png'
            },
            { 
              id: '2', 
              name: 'P_lengsab', 
              quote: '"My lyttle boy"', 
              rating: 65, 
              date: '8/3/67 - 10/10/67',
              image: '/p_lengsab.png'
            },
            { 
              id: '3', 
              name: 'Nong_Somsri', 
              quote: '"Want some candy?"', 
              rating: 70, 
              date: '1/1/67 - 8/1/67',
              image: '/nong_somsri_alt.png'
            },
            { 
              id: '4', 
              name: 'Nong_Somsri', 
              quote: '"I need your money"', 
              rating: 72, 
              date: '10/8/66 - 20/11/66',
              image: '/nong_somsri_red.png'
            },
            { 
              id: '5', 
              name: 'Nong_Somsri', 
              quote: '"Take my money (actually take my money)"', 
              rating: 50, 
              date: '10/11/67 - Current',
              image: '/nong_somsri_blue.png'
            },
          ]);
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error("Failed to fetch data:", error);
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);
  
  return (
    <div className="flex flex-col bg-[#572649] w-full max-w-md mx-auto min-h-screen text-left relative">
      {loading && <Loading />}
      
      {/* Navbar */}
      <Navbar2 />
      
      {/* Header */}
      <div className="w-full bg-transparent text-white py-3.5 flex justify-between items-center px-4 mt-16 z-40">
        <h1 className="text-xl font-bold">Girlfriend Deck</h1>
        <div className="flex space-x-4">
          <FaUserPlus size={24} />
          <FaSearch size={24} />
        </div>
      </div>
      
      {/* Content */}
      <div className="w-full overflow-y-auto flex-1 pt-4 px-4 border-t border-white/20">
        {data.map((item) => (
          <Card 
            key={item.id}
            id={item.id}
            name={item.name} 
            quote={item.quote} 
            rating={item.rating} 
            date={item.date}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;