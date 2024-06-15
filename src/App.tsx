import { useState } from "react";
import "./App.css";
import Flag from "./components/MemoryCard";

export default function App() {
  const [flags, setFlags] = useState([
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

  return (
    <>
      <h1>Memory Flags</h1>
      <div>Score: _</div>
      <div>Best: _</div>
      <div>
        {flags.map((flag) => (
          <Flag key={flag.id} {...flag} />
        ))}
      </div>
    </>
  );
}
