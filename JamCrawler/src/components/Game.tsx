// src/components/Game.tsx
import "./Game.css";
import React, { useState, useEffect, useCallback, KeyboardEvent } from "react";
import Dungeon from "./Dungeon";
import PlayerStats from "./PlayerStats";
import MonsterStats from "./MonsterStats";
import Inventory from "./Inventory";
import Controls from "./Controls";
import TodoList from "./TodoList";
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
    setCurrentAppState: (
        value: string | ((prevValue: string) => string)
    ) => void;
    player: Player;
    monster: Monster;
    setPlayer: (value: Player | ((prevValue: Player) => Player)) => void;
    setMonster: (value: Monster | ((prevValue: Monster) => Monster)) => void;
    dungeon: DungeonGrid;
    setDungeon: (
        value: DungeonGrid | ((prevValue: DungeonGrid) => DungeonGrid)
    ) => void;
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
    const [todos, setTodos] = useState<Todo[]>([]);
    const generateDungeon = () => {
        const newDungeon = Array.from({ length: GRID_SIZE }, () =>
            Array(GRID_SIZE).fill(EMPTY_CHAR)
        );

        // RIVER-Specifically adds walls to perimiter defined by grid size
        for (let i = 0; i < GRID_SIZE; i++) {
            newDungeon[0][i] = WALL_CHAR;
            newDungeon[GRID_SIZE - 1][i] = WALL_CHAR;
            newDungeon[i][0] = WALL_CHAR;
            newDungeon[i][GRID_SIZE - 1] = WALL_CHAR;
        }

        // Set dungeon without items for level 1
        /*
        console.log("Dungeon setup complete for level 1.");
        setDungeon(newDungeon);
        */

        // RIVER-This generates monster to map ONCE at random coordinates
        const monsterX = Math.floor(Math.random() * (GRID_SIZE - 2)) + 1;
        const monsterY = Math.floor(Math.random() * (GRID_SIZE - 2)) + 1;

        setMonster((prev) => ({
            ...prev,
            position: { x: monsterX, y: monsterY },
        }));
        console.log("Monster placed at (${monsterX}, ${monsterY})");

        // RIVER-Adding one sword and two potions to level 1

        // RIVER-This function helps generate random empty coordinate
        const getRandomEmptyPosition = () => {
            let x, y;
            do {
                x = Math.floor(Math.random() * (GRID_SIZE - 2)) + 1;
                y = Math.floor(Math.random() * (GRID_SIZE - 2)) + 1;
            } while (newDungeon[y][x] !== EMPTY_CHAR || (x === 1 && y === 1));
            return { x, y };
        };

        // RIVER-Placing one sword
        const swordPos = getRandomEmptyPosition();
        newDungeon[swordPos.y][swordPos.x] = SWORD_CHAR;
        console.log(`Sword placed at (${swordPos.x}, ${swordPos.y})`);

        // RIVER-Placing one helmet
        const helmetPos = getRandomEmptyPosition();
        newDungeon[helmetPos.y][helmetPos.x] = HELMET_CHAR;
        console.log(`Helmet placed at (${helmetPos.x}, ${helmetPos.y})`);

        // Place two potions
        for (let i = 0; i < 2; i++) {
            const potionPos = getRandomEmptyPosition();
            newDungeon[potionPos.y][potionPos.x] = POTION_CHAR;
            console.log(
                `Potion ${i + 1} placed at (${potionPos.x}, ${potionPos.y})`
            );
        }

        setDungeon(newDungeon);
    };

    const handleKeyPress = (e: KeyboardEvent) => {
        //e.preventDefault();
        //console.log(e);
        if (e.key == "ArrowLeft") {
            e.preventDefault();
            movePlayer(-1, 0);
            e.preventDefault();
        }
        if (e.key == "ArrowRight") {
            e.preventDefault();
            movePlayer(1, 0);
            e.preventDefault();
        }
        if (e.key == "ArrowDown") {
            e.preventDefault();
            movePlayer(0, 1);
            e.preventDefault();
        }
        if (e.key == "ArrowUp") {
            e.preventDefault();
            movePlayer(0, -1);
            e.preventDefault();
        }
    };

    useEffect(() => {
        if (currDungeonNum == level) {
            console.log("generating new dungeon");
            generateDungeon();
            setLevel((prev) => prev + 1);
        }
    }, []);

    const movePlayer = (dx: number, dy: number) => {
        let combatNewPos = {
            x: player.position.x + dx,
            y: player.position.y + dy,
        };
        setPlayer((prev) => {
            const newPos = { x: prev.position.x + dx, y: prev.position.y + dy };
            if (
                newPos.x < 0 ||
                newPos.x >= GRID_SIZE ||
                newPos.y < 0 ||
                newPos.y >= GRID_SIZE
            ) {
                return prev;
            }
            const cellContent = dungeon[newPos.y][newPos.x];
            if (cellContent === WALL_CHAR) {
                return prev;
            }

            let newPlayer = {
                ...prev,
                position: newPos,
                defense: Math.max(prev.defense - 1, 0),
            };

            if (
                cellContent === POTION_CHAR ||
                cellContent === HELMET_CHAR ||
                cellContent === SWORD_CHAR ||
                cellContent === LUCK_CHAR
            ) {
                const item =
                    cellContent === POTION_CHAR
                        ? ITEMS.healthPotion
                        : cellContent === SWORD_CHAR
                        ? ITEMS.sword
                        : cellContent === HELMET_CHAR
                        ? ITEMS.helmet
                        : ITEMS.luckCharm;
                newPlayer.inventory = [...newPlayer.inventory, item];
                setDungeon((prevDungeon) => {
                    const newDungeon = prevDungeon.map((row) => [...row]);
                    newDungeon[newPos.y][newPos.x] = EMPTY_CHAR;
                    return newDungeon;
                });
            }

            return newPlayer;
        });
        if (
            combatNewPos.x == monster.position.x &&
            combatNewPos.y == monster.position.y &&
            monster.isAlive
        ) {
            console.log("combat time!");
            // change game state to "combat"
            setCurrentAppState("combat");
            // from inside CombatStage we need to update combatResult with the winner
        }
    };

    const useItem = (index: number) => {
        setPlayer((prev) => {
            if (index >= prev.inventory.length) return prev;
            const item = prev.inventory[index];
            const newPlayer = item.effect({ ...prev });
            newPlayer.inventory = [
                ...prev.inventory.slice(0, index),
                ...prev.inventory.slice(index + 1),
            ];
            return newPlayer;
        });
    };

    const addTodo = (text: string) => {
        if (text.trim() !== "") {
            setTodos((prev) => [
                ...prev,
                {
                    id: Date.now(),
                    text,
                    completed: false,
                    priority: 'low'// Adjust the priority as needed or allow user input here
                },
            ]);
        }
    };

    const toggleTodo = (id: number) => {
        setTodos((todos) =>
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
        setPlayer((prev) => ({ ...prev, experience: prev.experience + 1 }));
    };

    const deleteTodo = (id: number) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
    };

    return (
        <>
            <h1 className="grit">Get'er Done-geon Crawler</h1>

            <div className="game-board" tabIndex={0} onKeyDown={handleKeyPress}>
                <div className="column">
                    <TodoList
                        todos={todos}
                        addTodo={addTodo}
                        toggleTodo={toggleTodo}
                        deleteTodo={deleteTodo}
                    />
                </div>

                <div className="dungeon-container column-2">
                    <h2>Level {currDungeonNum}</h2>
                    <Dungeon
                        dungeon={dungeon}
                        player={player}
                        monster={monster}
                    />
                    <Controls
                        movePlayer={movePlayer}
                        level={level}
                        setLevel={setLevel}
                        generateDungeon={generateDungeon}
                    />

                    <div className="stats">
                        <PlayerStats player={player} />
                        <MonsterStats monster={monster} />
                    </div>
                </div>

                <div className="inventory-container column">
                    <Inventory inventory={player.inventory} useItem={useItem} />
                </div>
            </div>
        </>
    );
}
