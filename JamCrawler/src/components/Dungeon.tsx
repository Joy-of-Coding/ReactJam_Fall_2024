// src/components/Dungeon.tsx
import React from "react";
import { DungeonGrid, Player, Monster } from "../types/types";
import "./Dungeon.css";
const SNAKE_ICON = "🐍";
const ZOMBIE_ICON = "🧟‍♂️";
const SKELETON_ICON = "💀";
const OGRE_ICON = "👹";
const DROW_ICON = "🧌";
const MONSTER_ARRAY = [
  SNAKE_ICON,
  ZOMBIE_ICON,
  SKELETON_ICON,
  OGRE_ICON,
  DROW_ICON,
];

type DungeonProps = {
  dungeon: DungeonGrid;
  player: Player;
  monster: Monster;
  currDungeonNum: number;
};

const Dungeon: React.FC<DungeonProps> = ({
  dungeon,
  player,
  monster,
  currDungeonNum,
}) => {
  // console.log(MONSTER_ARRAY[currDungeonNum - 1]);
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
                ? MONSTER_ARRAY[currDungeonNum - 1]
                : cell}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Dungeon;
