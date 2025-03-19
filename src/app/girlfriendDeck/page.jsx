"use client";
import React, { useEffect, useState } from 'react';
import { FaUserPlus, FaSearch } from 'react-icons/fa';
import Card from '../components/Card';
import Loading from '../components/Loading';
import Navbar2 from '../components/Navbar2';
import { useRouter } from 'next/navigation';
import { collection, query, where, getDocs } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { db, auth } from "../../config/firebase"; // Ensure you import your Firestore and Auth instances

const Page = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  
  useEffect(() => {
    // Fetch data from API
    const fetchData = async () => {
      setLoading(true);
      try {
        // Get the currently logged-in user
        onAuthStateChanged(auth, async (user) => {
          if (user) {
            const cardsRef = collection(db, "CARDS");
            const q = query(cardsRef, where("userId", "==", user.uid));
            const querySnapshot = await getDocs(q);

            // Map Firestore documents to an array of card data
            const cards = querySnapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }));

            setData(cards);
          } else {
            console.error("No user is signed in.");
          }
        });
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
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
      <div className="w-full bg-transparent text-white py-3.5 flex justify-between items-center px-4 mt-2 z-40">
        <h1 className="text-xl font-bold">Girlfriend Deck</h1>
        <div className="flex space-x-4">
          <button
            onClick={() => router.push("/girlfriendDeck/addCard")}
            className="hover:scale-110 transition-transform duration-200 cursor-pointer"
          >
            <FaUserPlus size={24} />
          </button>
          <FaSearch size={24} />
        </div>
      </div>

      {/* Content */}
      <div className="w-full overflow-y-auto flex-1 pt-4 px-4 border-t border-white/20">
        {data.map((item) => (
          <Card
            name={item.partnerName} // Use Firestore field names
            quote={item.quote}
            rating={item.overallRating} // Use Firestore field names
            date={`${item.relationshipStartDate
              .toDate()
              .toLocaleDateString()} - ${item.relationshipEndDate
              .toDate()
              .toLocaleDateString()}`}
            image={item.imgurl}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;