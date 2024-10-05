import React, { useState } from "react";
import { Player } from "../types/types";
import { Monster } from '../types/types';
import { Item } from "../types/types";
import { TodoList } from "./components/TodoList";

type PlayerStatsProps = {
  player: Player;
};

type MonsterStatsProps = {
  monster: Monster;
};

type InventoryProps = {
  inventory: Item[];
  useItem: (index: number) => void;
};

interface Todo {
  text: string;
  priority: 'high' | 'medium' | 'low';
  complete: boolean;
}

const gameState = {
  playerPosition: 0,
  playerStrength: 0,
  playerDefense: 0,
  playerCurrentHealth: 0,
  playerMaxHealth: 0,
  playerXP: 0,
  playerInventory: 0,
  playerAlive: true,
  monsterPosition: 0,
  monsterAlive: true,
  monsterStrength: 0,
  monsterDefense: 0,
  monsterHealth: 0,
  monsterLuck: 0,
  monsterInventory: 0,
  gameLevel: 0,

  };

const PlayerStats: React.FC<PlayerStatsProps> = ({ player }) => (
  gameState.playerStrength = { player.strength };
  gameState.playerDefense = { player.defense };
  gameState.playerCurrentHealth =: { player.health };
  gameState.playerMaxHealth = { player.maxHealth };
  gameState.playerXP = { player.experience };


  const [playerStats, setPlayerStats] = useState(false);

  const storeGame = () => {
    setPlayerStats(true);
    localStorage.setItem("Player", JSON.stringify(gameState));
    console.log(JSON.parse(localStorage.getItem("Player") || ""));
  };
  const restoreGame = () => {
    const playerRestore = JSON.parse(localStorage.getItem("gameState") || "");
    console.log(playerRestore);
  };
  const removeGame = () => {
    localStorage.clear();
  };

  return (
    <>
      <div className="App">
        <div>
          <button onClick={storeGame}>Done</button>
        </div>
        <div>
          <button onClick={restoreGame}>Restore</button>
        </div>
        <div>
          <button onClick={removeGame}>Remove</button>
        </div>
      </div>
    </>
  );
}
export default GameStorage;
