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
            <div>
                <button>Continue</button>
            </div>
        </div>
    );
}
