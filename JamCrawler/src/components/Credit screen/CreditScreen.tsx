import React, { useState } from "react";


interface Props {
    setCurrentAppState: (
        value: string | ((prevState: string) => string)
    ) => void;
}

export default function CreditsScreen({ setCurrentAppState }: Props) {
    const CreditScreenSource = "./skeleton.webg";

    const handleClick = () => {
        // Go back to the title screen
        setCurrentAppState("titleScreen");
    };

    return (
        <div className="flex flex-col items-center">
            <img className="picture" alt="picture of game credit screen" src={CreditScreenSource} />

            <h1 className="text-3xl mb-4">Get'er Done Credits</h1>
            <ul className="text-lg mb-4">
                <li>Developers: CROWE Sam
                    Braden Kartchener
                    Katrina Wright
                    Anna Rankin
                    Caitlin Moffitt
                    John Schlautman
                    Jon Adams
                    River Barton
                    Steven Daniel
                    Suzanne Atkinson
                    TurtleWolf
                </li>
                <li>Graphics: Steven Daniel </li>
                <li>Special Thanks: Katrina Wright, Suzanne Atkinson</li>
            </ul>
            <button className="back-button" onClick={handleClick}>
                Back to Game
            </button>
        </div>
    );
}