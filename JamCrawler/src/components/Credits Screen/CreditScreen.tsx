import React from "react";
import "./CreditScreen.css";

interface Props {
    setCurrentAppState: (
        value: string | ((prevState: string) => string)
    ) => void;
}

export default function TitleScreen({ setCurrentAppState }: Props) {
    const titleScreenSource = "./test_title_screen.png";
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const currTarget = e.target as HTMLButtonElement;
        console.log(e);
        if (currTarget.id == "start") {
            setCurrentAppState("introSplash");
        }
    };

    return (
        <div className="flex flex-col">
            <div className="main-title">Game Title Goes Here</div>
            <img alt="picture of game title screen" src={titleScreenSource} />
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
