import { useEffect, useState } from "react";
import { Flag } from "./types/Flag";
import { Country } from "./types/Country";
import FlagView from "./components/FlagView";
import MemoryCard from "./components/MemoryCardView";
import InstructionView from "./components/InstructionView";

export default function App() {
  const [flags, setFlags] = useState<Flag[]>([]);
  const [displayedFlags, setDisplayedFlags] = useState<number[]>([]);
  const [selectedFlagIds, setSelectedFlagIds] = useState<number[]>([]);
  const [highestScore, setHighestScore] = useState<number>(0);

  const maxFlags = 12;

  useEffect(() => {
    const fetchFlags = async () => {
      try {
        const response = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,flags",
        );
        const data = await response.json();
        const flags = data.map((country: Country, index: number) => {
          return {
            id: index,
            country: country.name.common,
            imageUrl: country.flags.png,
          };
        });
        setFlags(flags);

        setDisplayedFlags(getRandomFlagIds(flags.length));
      } catch (error) {
        console.log("Error fetching flags:", error);
      }
    };

    fetchFlags();
  }, []);

  const getRandomFlagIds = (max: number): number[] => {
    const randomIds = new Set<number>();

    while (randomIds.size < maxFlags) {
      const randomFlagId: number = Math.floor(Math.random() * max);
      randomIds.add(randomFlagId);
    }

    return Array.from(randomIds);
  };

  const shuffle = <T,>(array: T[]): T[] => {
    const shuffledArray = [...array];

    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  const score: number = selectedFlagIds.length;

  if (score > highestScore) {
    setHighestScore(score);
  }

  const handleCardSelect = (selectedFlag: Flag) => {
    setSelectedFlagIds((prevSelectedFlagIds) => {
      if (prevSelectedFlagIds.some((id) => id === selectedFlag.id)) {
        return [];
      }

      setDisplayedFlags(shuffle(displayedFlags));
      return [...prevSelectedFlagIds, selectedFlag.id];
    });
  };

  return (
    <>
      <h1 className="font-bold text-4xl text-center	">Memory Flags</h1>
      <InstructionView />
      <div>Score: {score}</div>
      <div>Best: {highestScore}</div>
      <div className="flex flex-col space-y-6">
        {flags.length !== 0 &&
          displayedFlags
            .map((id) => flags[id])
            .map((flag) => (
              <MemoryCard
                key={flag.id}
                content={<FlagView {...flag} />}
                onCardSelect={() => handleCardSelect(flag)}
              />
            ))}
      </div>
    </>
  );
}
