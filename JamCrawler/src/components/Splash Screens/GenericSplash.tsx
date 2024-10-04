import React from "react";

interface Props {
    setCurrentAppState: (
        value: string | ((prevValue: string) => string)
    ) => void;
    splashTitle: string;
    imgSource: string;
    nextState: string;
}

export default function GenericSplash(props: Props) {
    const handleClick = () => {
        props.setCurrentAppState(props.nextState);
    };

    return (
        <div className="flex flex-col">
            <div className="top-title">{props.splashTitle}</div>
            <img alt="image with game story" src={props.imgSource} />
            <p className="text-xl mb-4 text-center max-w-md font-Helvetica Neue">
                     tEXT UNDER THE SPLASH SCREEN GOES HERE
            </p>
            
            <div>
                <button>Continue</button>
            </div>
        </div>
    );
}
