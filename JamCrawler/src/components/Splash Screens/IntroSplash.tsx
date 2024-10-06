import from "react";
import "./IntroSplash.css";

interface Props {
    setCurrentAppState: (
        value: string | ((prevState: string) => string)
    ) => void;
}

export default function IntroSplash({ setCurrentAppState }: Props) {
    const imgSource = "./cave entrance.webp";

    const handleClick = () => {
        setCurrentAppState("game");
    };

    return (
        // <div className="flex flex-col">
        //     <div className="top-title">Intro Splash</div>
        //     <img src={imgSource} alt="game intro art picture" />
            
        //     <div className="advance-button">
        //         <button onClick={handleClick}>Continue</button>
        //     </div>
        // </div>
<div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">Beware Our Game</h1>
            
            <img src={imgSource} alt="game intro art picture" className="w-64 h-64 object-cover mb-6" />
            
            <p className="text-xl mb-4 text-center max-w-md font-Helvetica Neue">
            Quest: Our Farmer, George /* Allow Player Name here */, can see the hoof prints leading down into
             the inky depths of the dungeon and knows that he has no choice but to follow. He is compelled to
             get his favorite milk cow, Bessie, back to her stall before dark. "Goll darn her," George mutters
             to himself as he stumbles forward into the ghastly crevasse of Stygian Darkness.
            </p>
            
            <p className="text-lg mb-6 text-center max-w-md color-red">
                Are you ready to begin your journey? Click Start, if you dare...
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

