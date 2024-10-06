import React, { useEffect, useState } from "react";
import { Player } from "../types/types";
import { Monster } from "../types/types";
// import { Item } from "../types/types";
// import TodoList from "./TodoList";

type PlayerStatsProps = {
  player: Player;
};

type MonsterStatsProps = {
  monster: Monster;
};

// type InventoryProps = {
//   inventory: Item[];
//   useItem: (index: number) => void;
// };

// interface Todo {
//   text: string;
//   priority: 'high' | 'medium' | 'low';
//   complete: boolean;
// }

const GameStorage: React.FC<PlayerStatsProps> = ({ player }) => {
  const [gameDict, setGameDict] = useState({});

  useEffect(() => {
    const storedDict = localStorage.getItem("gameDict");

    if (storedDict) {
      const gameStateName = [
        "playerPosition",
        "playerStrength",
        "playerDefense",
        "playerCurrentHealth",
        "playerMaxHealth",
        "playerXP",
        "playerInventory",
        "playerAlive",
        "monsterPosition",
        "monsterAlive",
        "monsterStrength",
        "monsterDefense",
        "monsterHealth",
        "monsterLuck",
        "monsterInventory",
        "gameLevel",
      ];
      const gameStateValue = [
        player.position,
        player.strength,
        player.defense,
        player.health,
        player.maxHealth,
        player.experience,
        player.inventory,
        player.isAlive,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
      ];
      for (let i = 0; i < gameStateName.length; i++) {
        gameDict[gameStateName[i]] = gameStateValue[i];
      }

      setGameDict(JSON.parse(storedDict));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("gameDict", JSON.stringify(gameDict));
    console.log(localStorage.getItem("gameDict"));
  }, [gameDict]);

  return <div></div>;
};

export default GameStorage;
