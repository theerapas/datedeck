"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const charactersData = {
  "nong_somsri": {
    id: "nong_somsri",
    name: "Nong Somsri",
    image: "https://stardewvalleywiki.com/mediawiki/images/a/ab/Penny.png",
    scores: {
      "Over all Rating": 75,
      "Communication Effectiveness": 8,
      "Emotional Stability": 7,
      "Affection Consistency": 8,
      "Flexibility level": 9,
      "Supportiveness": 7,
      "Openness": 6,
      "Conflict Resolution Skills": 5,
      "Kindness && Generosity": 8,
    },
  },
  "nong_somying": {
    id: "nong_somying",
    name: "Nong Somying",
    image: "https://stardewvalleywiki.com/mediawiki/images/1/1b/Haley.png",
    scores: {
      "Over all Rating": 77,
      "Communication Effectiveness": 9,
      "Emotional Stability": 6,
      "Affection Consistency": 7,
      "Flexibility level": 8,
      "Supportiveness": 9,
      "Openness": 7,
      "Conflict Resolution Skills": 6,
      "Kindness && Generosity": 8,
    },
  },
};

const ComparisonTable = () => {
  const searchParams = useSearchParams();
  const [firstCharacter, setFirstCharacter] = useState(null);
  const [secondCharacter, setSecondCharacter] = useState(null);

  useEffect(() => {
    const firstCardId = searchParams.get("firstCardId");
    const secondCardId = searchParams.get("secondCardId");

    if (firstCardId && charactersData[firstCardId]) {
      setFirstCharacter(charactersData[firstCardId]);
    } else {
      setFirstCharacter(charactersData["nong_somsri"]); // Default
    }

    if (secondCardId && charactersData[secondCardId]) {
      setSecondCharacter(charactersData[secondCardId]);
    } else {
      setSecondCharacter(charactersData["nong_somying"]); // Default
    }
  }, [searchParams]);

  if (!firstCharacter || !secondCharacter) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Comparison Mode</h1>
      <p>First: {firstCharacter.name}</p>
      <p>Second: {secondCharacter.name}</p>
    </div>
  );
};

export default ComparisonTable;
