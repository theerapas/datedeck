"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { FaEdit, FaStar, FaArrowLeft, FaTrash } from "react-icons/fa";
import Image from "next/image";

const CardInfoContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const cardId = searchParams.get("id");
  const [card, setCard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  useEffect(() => {
    const fetchCardData = async () => {
      setLoading(true);

      // Mock data for testing (Replace this with Firestore fetch logic)
      setTimeout(() => {
        setCard({
          id: cardId || "1",
          name: "Nong_Somsri",
          date: "10/11/67 - Current",
          quote: '"Miss your mom more than you ;)"',
          rating: 85,
          profileImage: "/nong_somsri.png",
          description:
            "As I walked through the bustling streets, lost in thought...",
          stats: {
            coms: 10,
            kind: 7,
            flex: 10,
            emo: 8,
            aff: 9,
            sup: 6,
            open: 5,
            conf: 3,
          },
          isFavorite: true,
        });
        setLoading(false);
      }, 500);
    };

    fetchCardData();
  }, [cardId]);

  if (loading) {
    return (
      <div className="flex flex-col bg-[#572649] w-full max-w-md mx-auto min-h-screen items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col bg-[#572649] w-full max-w-md mx-auto min-h-screen text-white">
      {/* Header */}
      <div className="w-full bg-[#572649] py-4 px-4 flex justify-between items-center">
        <button onClick={() => router.push("/girlfriendDeck")} className="text-white">
          <FaArrowLeft size={24} />
        </button>
        <h1 className="text-lg font-medium">{card.name}</h1>
        <button onClick={() => router.push(`/girlfriendDeck/editCard?id=${cardId}`)} className="text-white">
          <FaEdit size={24} />
        </button>
      </div>

      {/* Card Content */}
      <div className="flex-1 overflow-y-auto px-4 py-2">
        <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4 bg-gradient-to-b from-[#774068] to-[#8B4C7A]">
          <Image
            src={card.profileImage}
            alt={card.name}
            layout="fill"
            objectFit="contain"
            className="pixelated"
          />
        </div>

        <div className="text-xl font-medium text-center">{card.quote}</div>
        <div className="mb-6 text-sm bg-[#2D1425] p-4 rounded-lg border border-white/10">
          {card.description}
        </div>

        {/* Rating */}
        <div className="flex justify-center items-center mb-4">
          <div className="text-center">
            <p className="text-sm opacity-70">Rating :</p>
            <p className="text-4xl font-bold">{card.rating}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardInfoContent;
