// src/components/Dungeon.tsx
import React from "react";
import { DungeonGrid, Player, Monster } from "../types/types";
import "./Dungeon.css";

type DungeonProps = {
    dungeon: DungeonGrid;
    player: Player;
    monster: Monster;
};

const Dungeon: React.FC<DungeonProps> = ({ dungeon, player, monster }) => {
    return (
        <div className="dungeon">
            {dungeon.map((row, y) => (
                <div key={y}>
                    {row.map((cell, x) => (
                        <span
                            key={`${x}-${y}`}
                            style={{
                                width: "20px",
                                display: "inline-block",
                                textAlign: "center",
                            }}
                        >
                            {x === player.position.x && y === player.position.y
                                ? "🧑‍🌾"
                                : x === monster.position.x &&
                                  y === monster.position.y &&
                                  monster.isAlive
                                ? "🐍"
                                : cell}
                        </span>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Dungeon;
