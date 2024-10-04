// src/components/Game.tsx

import React, { useState, useEffect, KeyboardEvent } from "react";
import Dungeon from "./Dungeon";
import PlayerStats from "./PlayerStats";
import MonsterStats from "./MonsterStats";
import Inventory from "./Inventory";
import Controls from "./Controls";
import TodoList from "./TodoList";
import Modal from "./Modal"; // Import modal component

import {
    GRID_SIZE,
    ITEMS,
    EMPTY_CHAR,
    WALL_CHAR,
    POTION_CHAR,
    SWORD_CHAR,
    LUCK_CHAR,
    HELMET_CHAR,
} from "../constants/constants";
import { Player, Todo, DungeonGrid, Monster } from "../types/types";

interface GameProps {
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

export default function Game({
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
}: GameProps) {
    const [isGameLocked, setIsGameLocked] = useState<boolean>(true);
    const [tasksCompleted, setTasksCompleted] = useState<boolean>(false);
    const [todos, setTodos] = useState<Todo[]>([]);
    const [showModal, setShowModal] = useState<string | null>("Create and complete three to-do's!"); // Initial modal message

    useEffect(() => {
        if (todos.length === 3 && todos.every(todo => todo.completed)) {
            setTasksCompleted(true);
            setIsGameLocked(false); // Unlock game when all tasks are completed
            setShowModal("Congratulations! Dungeon is unlocked! Strike Fear!");
        } else if (todos.length === 3) {
            setShowModal("Get it Done!"); // Change modal once tasks are created
        } else {
            setShowModal("Create and complete three to-do's!"); // Initial prompt for tasks
        }
    }, [todos]);

    const generateDungeon = () => {
        if (!tasksCompleted) {
            console.log("Dungeon locked! Complete your tasks.");
            return;
        }

        const newDungeon = Array.from({ length: GRID_SIZE }, () => Array(GRID_SIZE).fill(EMPTY_CHAR));

        // Setting dungeon walls and monster
        for (let i = 0; i < GRID_SIZE; i++) {
            newDungeon[0][i] = WALL_CHAR;
            newDungeon[GRID_SIZE - 1][i] = WALL_CHAR;
            newDungeon[i][0] = WALL_CHAR;
            newDungeon[i][GRID_SIZE - 1] = WALL_CHAR;
        }

        const monsterX = Math.floor(Math.random() * (GRID_SIZE - 2)) + 1;
        const monsterY = Math.floor(Math.random() * (GRID_SIZE - 2)) + 1;

        setMonster((prev) => ({
            ...prev,
            position: { x: monsterX, y: monsterY },
        }));

        const getRandomEmptyPosition = () => {
            let x, y;
            do {
                x = Math.floor(Math.random() * (GRID_SIZE - 2)) + 1;
                y = Math.floor(Math.random() * (GRID_SIZE - 2)) + 1;
            } while (newDungeon[y][x] !== EMPTY_CHAR || (x === 1 && y === 1));
            return { x, y };
        };

        const swordPos = getRandomEmptyPosition();
        newDungeon[swordPos.y][swordPos.x] = SWORD_CHAR;

        const helmetPos = getRandomEmptyPosition();
        newDungeon[helmetPos.y][helmetPos.x] = HELMET_CHAR;

        for (let i = 0; i < 2; i++) {
            const potionPos = getRandomEmptyPosition();
            newDungeon[potionPos.y][potionPos.x] = POTION_CHAR;
        }

        setDungeon(newDungeon);
    };

    const handleKeyPress = (e: KeyboardEvent) => {
        if (isGameLocked) {
            console.log("Controls are locked until tasks are completed.");
            return;
        }

        if (e.key === "ArrowLeft") movePlayer(-1, 0);
        if (e.key === "ArrowRight") movePlayer(1, 0);
        if (e.key === "ArrowDown") movePlayer(0, 1);
        if (e.key === "ArrowUp") movePlayer(0, -1);
    };

    const movePlayer = (dx: number, dy: number) => {
        const newPos = { x: player.position.x + dx, y: player.position.y + dy };

        if (
            newPos.x < 0 ||
            newPos.x >= GRID_SIZE ||
            newPos.y < 0 ||
            newPos.y >= GRID_SIZE ||
            dungeon[newPos.y][newPos.x] === WALL_CHAR
        ) return;

        setPlayer(prev => ({
            ...prev,
            position: newPos,
        }));
    };

    return (
        <>
            <Modal showModal={showModal} setShowModal={setShowModal} /> 
            <h1 className="grit">Retro Dungeon Crawler</h1>
            <div className="game-board" tabIndex={0} onKeyDown={handleKeyPress}>
                
                {/* Left column for Inventory */}
                <div className="column inventory-column">
                    <Inventory inventory={player.inventory} />
                </div>

                {/* Middle column for Dungeon, Controls, and Stats */}
                <div className={`dungeon-container column-2 ${isGameLocked ? "muted" : ""}`}>
                    <h2>Level {currDungeonNum}</h2>
                    <Dungeon dungeon={dungeon} player={player} monster={monster} />
                    <Controls movePlayer={movePlayer} generateDungeon={generateDungeon} />
                    <div className="stats">
                        <PlayerStats player={player} />
                        <MonsterStats monster={monster} />
                    </div>
                </div>

                {/* Right column for Todo List */}
                <div className="column todo-column">
                    <TodoList todos={todos} setTodos={setTodos} />
                </div>
            </div>
        </>
    );
}

 
