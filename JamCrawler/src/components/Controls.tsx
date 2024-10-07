// src/components/Controls.tsx
import React from "react";
import "./Controls.css";

type ControlsProps = {
    movePlayer: (dx: number, dy: number) => void;
    level: number;
    setLevel: (arg1: number) => void;
};

const Controls: React.FC<ControlsProps> = ({ movePlayer, setLevel, level }) => (
    <div>
        <div className="flex flex-col">
            <div className="flex flew-row">
                <button onClick={() => movePlayer(0, -1)}>↑</button>
            </div>
            <div className="flex flex-row">
                <button
                    className="left-arrow"
                    onClick={() => movePlayer(-1, 0)}
                >
                    ←
                </button>
                <button
                    className="right-arrow"
                    onClick={() => movePlayer(1, 0)}
                >
                    →
                </button>
            </div>
            <button onClick={() => movePlayer(0, 1)}>↓</button>
        </div>
        <button
            className="next-level"
            onClick={() => {
                setLevel(level + 1);
            }}
        >
            Reset Game
        </button>
    </div>
);

export default Controls;
