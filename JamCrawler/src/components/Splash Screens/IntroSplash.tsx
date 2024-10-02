import React from "react";
import "./IntroSplash.css";

interface Props {
    setCurrentAppState: (
        value: string | ((prevState: string) => string)
    ) => void;
}

export default function IntroSplash({ setCurrentAppState }: Props) {
    const imgSource = "./test_pic.png";

    const handleClick = () => {
        setCurrentAppState("game");
    };

    return (
        <div className="flex flex-col">
            <div className="top-title">Intro Splash</div>
            <img src={imgSource} alt="game intro art picture" />
            <div className="advance-button">
                <button onClick={handleClick}>Continue</button>
            </div>
        </div>
    );
}

//
