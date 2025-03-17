"use client";
import React, { useEffect, useState } from 'react';
import { FaUserPlus, FaSearch } from 'react-icons/fa';
import Card from '../components/Card';
import Loading from '../components/Loading';
import Navbar2 from '../components/Navbar2';

const Page = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from API
    const fetchData = async () => {
      // Replace with your actual API endpoint
      const response = await fetch('https://api.example.com/cards');
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  // Test data
  const testData = [
    { name: 'Nong_Somsri', quote: '“Miss your mom more than you ;)”', rating: 85, date: '10/11/67 - Current' },
    { name: 'Name', quote: '“Quote”', rating: 'XX', date: 'Date - Current' },
    { name: "Sarah", quote: "“I'm a software engineer”", rating: 100, date: "10/11/67 - Current" },
  ];

  return (
    <div className="flex flex-col bg-[#572649] w-full max-w-md mx-auto min-h-screen text-left relative">
      <Loading />
      
      
      <Navbar2 />
      {/* header */}
      <div className="w-full bg-transparent text-white py-4 flex justify-between items-center px-4 fixed top-16 z-40 max-w-md">
        <h1 className="text-xl font-bold">Girlfriend Deck</h1>
        <div className="flex space-x-4">
          <FaUserPlus size={24} />
          <FaSearch size={24} />
        </div>
      </div>

      {/* content */}
      <div className="w-full overflow-y-auto mt-32 pt-4 px-4 border-t border-white">
        {testData.map((item, index) => (
          <Card key={index} name={item.name} quote={item.quote} rating={item.rating} date={item.date} />
        ))}
      </div>
    </div>
  );
};

export default Page;