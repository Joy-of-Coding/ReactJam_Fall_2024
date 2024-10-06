import React from "react";
import "./TitleScreen.css";
 

interface Props {
  setCurrentAppState: (value: string | ((prevState: string) => string)) => void;
}

export default function TitleScreen({ setCurrentAppState }: Props) {
  const titleScreenSource = "./Bessie.webp";

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const currTarget = e.target as HTMLButtonElement;
    if (currTarget.id === "start") {
      setCurrentAppState("introSplash"); // Move to intro splash screen
    }
    if (currTarget.id === "credits") {
      setCurrentAppState("CreditScreen"); // Move to credits screen
    }
    if (currTarget.id === "Info") {
      setCurrentAppState("InfoScreen"); // Move to info screen
    }
  };

  return (
    <div className="flex flex-col">
      <div className="main-title">Get'er Done-geon</div>
      <img className="picture" alt="Bessie" src={titleScreenSource} />
      <p className="text-xl mb-4 text-center max-w-md font-Helvetica Neue">
        ARE YOU READY FOR THE ADVENTURE TO BEGIN?
      </p>
      <div className="flex flex-row buttons-row">
        <button className="start-button" onClick={handleClick} id="start">
          Start Game
        </button>
        <button className="credits-button" onClick={handleClick} id="credits">
          Credits
        </button>
        <button className="info-button" onClick={handleClick} id="Info">
          How-to
        </button>
      </div>
    </div>
  );
}
