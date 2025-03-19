"use client";
import React, { Suspense } from "react";
import ComparisonTable from "./ComparisonTable";
import Navbar2 from "../../components/Navbar2";
import { FaCompass, FaArrowLeft } from "react-icons/fa";

const TablePage = () => {
  return (
    <div className="flex flex-col bg-[#572649] w-full max-w-md mx-auto min-h-screen text-left">
      <Navbar2 />
      <div className="w-full bg-[#572649] text-white py-4 flex flex-col justify-center items-center px-4 pt-16">
        <div className="w-full flex items-center justify-center relative mb-2">
          <button className="absolute left-0 text-white text-2xl">
            <FaArrowLeft />
          </button>
          <div className="flex flex-col items-center">
            <FaCompass className="text-4xl mb-2" />
            <h1 className="text-3xl">Comparison Mode</h1>
          </div>
        </div>

        {/* Wrap ComparisonTable in Suspense */}
        <Suspense fallback={<div>Loading comparison...</div>}>
          <ComparisonTable />
        </Suspense>
      </div>
    </div>
  );
};

export default TablePage;
