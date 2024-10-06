import React from "react";
import "./IntroSplash.css";

interface Props {
  setCurrentAppState: (value: string | ((prevState: string) => string)) => void;
}

export default function IntroSplash({ setCurrentAppState }: Props) {
  const imgSource = "./cave entrance.webp";

  const handleClick = () => {
    setCurrentAppState("genericSplash"); // Move to the next splash screen
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Beware Our Game</h1>

      <img src={imgSource} alt="game intro art picture" className="picture" />

      <p className="text-xl mb-4 text-center max-w-md font-Helvetica Neue">
        Quest: Our Farmer, George (Allow Player Name here), can see the hoof
        prints leading down into the inky depths of the dungeon and knows that
        he has no choice but to follow...
      </p>

      <button
        onClick={handleClick}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        Start Adventure
      </button>
    </div>
  );
}
