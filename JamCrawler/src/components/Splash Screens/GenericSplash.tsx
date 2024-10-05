import React from "react";
import { storyLine } from "./SplashScreenProps";

// TODO: all info contained in the storyLine array.
// pass state var to here containing number of dungeon player was on
interface Props {
    setCurrentAppState: (
        value: string | ((prevValue: string) => string)
    ) => void;
    currDungeonNum: number;
}

export default function GenericSplash(props: Props) {
    const handleClick = () => {
        props.setCurrentAppState("game");
    };

    return (
        <div className="flex flex-col">
            <div className="top-title">
                {storyLine[props.currDungeonNum - 1].title}
            </div>
            <img
                alt="image with game story"
                src={storyLine[props.currDungeonNum - 1].image}
                height={400}
            />
            <p className="text-xl mb-4 text-center max-w-md font-Helvetica Neue">
                {storyLine[props.currDungeonNum - 1].text}
            </p>

            <div>
                <button onClick={handleClick}>Continue</button>
            </div>
        </div>
    );
}
