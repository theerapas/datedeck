"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // Use usePathname instead of useRouter
import { ClipLoader } from "react-spinners";

const Loading = () => {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const pathname = usePathname(); // Tracks route changes

  useEffect(() => {
    setLoading(true);
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 10 : 100));
    }, 100);

    const timeout = setTimeout(() => {
      setLoading(false);
      clearInterval(interval);
    }, 1000); // Simulate loading state

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [pathname]); // Runs when pathname changes

  return (
    loading && (
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-white bg-opacity-75 z-50">
        <ClipLoader size={50} color={"#FF69B4"} loading={loading} />
        <p className="mt-4 text-pink-600 font-bold text-lg">Loading, please wait...</p>
        <div className="w-3/4 mt-4 bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-pink-600 h-2.5 rounded-full transition-all duration-100"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    )
  );
};

export default Loading;
