import { useState } from "react";
import "./App.css";
import { Flag } from "./types/Flag";
import FlagView from "./components/FlagView";
import MemoryCard from "./components/MemoryCardView";

export default function App() {
  const [flags, setFlags] = useState<Flag[]>([
    {
      id: 1,
      country: "Belgium",
      imageUrl: "https://flagsapi.com/BE/flat/64.png",
    },
    {
      id: 2,
      country: "Japan",
      imageUrl: "https://flagsapi.com/JP/flat/64.png",
    },
    {
      id: 3,
      country: "Colombia",
      imageUrl: "https://flagsapi.com/CO/flat/64.png",
    },
  ]);
  const [selectedFlagIds, setSelectedFlagIds] = useState<number[]>([]);
  const [highestScore, setHighestScore] = useState<number>(0);

  const score: number = selectedFlagIds.length;

  if (score > highestScore) {
    setHighestScore(score);
  }

  const handleCardSelect = (selectedFlag: Flag) => {
    setSelectedFlagIds((prevSelectedFlagIds) => {
      if (prevSelectedFlagIds.some((id) => id === selectedFlag.id)) {
        return [];
      }

      return [...prevSelectedFlagIds, selectedFlag.id];
    });
  };

  return (
    <>
      <h1>Memory Flags</h1>
      <div>Score: {score}</div>
      <div>Best: {highestScore}</div>
      <div>
        {flags.map((flag) => (
          <MemoryCard
            content={<FlagView key={flag.id} {...flag} />}
            handleCardSelect={() => handleCardSelect(flag)}
          />
        ))}
      </div>
    </>
  );
}
