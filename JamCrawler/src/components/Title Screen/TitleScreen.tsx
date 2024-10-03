import React from "react";
import "./TitleScreen.css";

interface Props {
    setCurrentAppState: (
        value: string | ((prevState: string) => string)
    ) => void;
}

export default function TitleScreen({ setCurrentAppState }: Props) {
    const titleScreenSource = "./Bessie.webp";
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const currTarget = e.target as HTMLButtonElement;
        console.log(e);
        if (currTarget.id == "start") {
            setCurrentAppState("introSplash");
        }
    };

    return (
        <div className="flex flex-col">
            <div className="main-title">Get it Done-geon</div>
            <img alt="picture of game title screen" src={titleScreenSource} />
            <p className="text-xl mb-4 text-center max-w-md font-Helvetica Neue">
            ARE YOU READY FOR THE ADVENTURE TO BEGIN?
            </p>            
            <div className="flex flex-row buttons-row">
                <button
                    className="start-button"
                    onClick={handleClick}
                    id="start"
                >
                    Start Game
                </button>
                <button className="credits-button">Credits</button>
            </div>
        </div>
    );
}
