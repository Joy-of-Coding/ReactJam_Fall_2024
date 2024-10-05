import React, { useState, useEffect, KeyboardEvent } from "react";
import Dungeon from "./Dungeon";
import PlayerStats from "./PlayerStats";
import MonsterStats from "./MonsterStats";
import Inventory from "./Inventory";
import Controls from "./Controls";
import { Player, DungeonGrid, Monster } from "../types/types"; 
import "./Game.css";

interface GameProps {
    resetGame: () => void; // Reset function passed from App
    setCurrentAppState: (value: string | ((prevValue: string) => string)) => void;
    player: Player;
    monster: Monster;
    setPlayer: (value: Player | ((prevValue: Player) => Player)) => void;
    setMonster: (value: Monster | ((prevValue: Monster) => Monster)) => void;
    dungeon: DungeonGrid;
    setDungeon: (value: DungeonGrid | ((prevValue: DungeonGrid) => DungeonGrid)) => void;
    currDungeonNum: number;
    level: number;
    setLevel: (value: number | ((prevValue: number) => number)) => void;
}

const Game: React.FC<GameProps> = ({
    resetGame,
    setCurrentAppState,
    player,
    monster,
    setPlayer,
    setMonster,
    dungeon,
    setDungeon,
    currDungeonNum,
    level,
    setLevel,
}: GameProps) => {
    const generateDungeon = () => {
        const newDungeon = Array.from({ length: 10 }, () => Array(10).fill(" "));
        setDungeon(newDungeon);
    };

    useEffect(() => {
        generateDungeon();
    }, []);

    return (
        <div>
            <h1>Retro Dungeon Crawler</h1>
            <div className="game-board">
                <Dungeon dungeon={dungeon} player={player} monster={monster} />
                <Controls movePlayer={() => {}} level={level} setLevel={setLevel} generateDungeon={generateDungeon} />
                <PlayerStats player={player} />
                <MonsterStats monster={monster} />
                <Inventory inventory={player.inventory} useItem={() => {}} />
            </div>
            <button onClick={resetGame}>Reset Game</button> {/* Reset button */}
        </div>
    );
};

export default Game; // Ensure this is the only export default in the file
