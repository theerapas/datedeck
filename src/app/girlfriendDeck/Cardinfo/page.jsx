"use client";
import React, { Suspense } from "react";
import CardInfoContent from "./CardInfoContent";

const CardInfo = () => {
  return (
    <Suspense fallback={<div className="text-white">Loading Card...</div>}>
      <CardInfoContent />
    </Suspense>
  );
};

export default CardInfo;
