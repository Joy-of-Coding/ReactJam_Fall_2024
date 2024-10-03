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
} from "../constants/constants";
import { Player, Todo, DungeonGrid, Monster } from "../types/types";

export default function Game() {
  const [level, setLevel] = useState<number>(1);
  const [dungeon, setDungeon] = useState<DungeonGrid>([]);
  const [player, setPlayer] = useState<Player>({
    position: { x: 1, y: 1 },
    strength: 10,
    stamina: 100,
    health: 100,
    luck: 0,
    inventory: [],
  });
  const [monster, setMonster] = useState<Monster>({
    position: { x: 1, y: 1 },
    strength: 10,
    stamina: 100,
    health: 100,
    luck: 0,
    inventory: [],
  });
  const [todos, setTodos] = useState<Todo[]>([]);

  const generateDungeon = useCallback(() => {
    const newDungeon = Array.from({ length: GRID_SIZE }, () =>
      Array(GRID_SIZE).fill(EMPTY_CHAR)
    );

    // Add walls
    for (let i = 0; i < GRID_SIZE; i++) {
      newDungeon[0][i] = WALL_CHAR;
      newDungeon[GRID_SIZE - 1][i] = WALL_CHAR;
      newDungeon[i][0] = WALL_CHAR;
      newDungeon[i][GRID_SIZE - 1] = WALL_CHAR;
    }

    // Add some random walls and items
    if (level > 1) {
      for (let i = 0; i < 15; i++) {
        const x = Math.floor(Math.random() * (GRID_SIZE - 2)) + 1;
        const y = Math.floor(Math.random() * (GRID_SIZE - 2)) + 1;
        newDungeon[y][x] =
          Math.random() < 0.6
            ? WALL_CHAR
            : Math.random() < 0.5
            ? POTION_CHAR
            : Math.random() < 0.5
            ? SWORD_CHAR
            : LUCK_CHAR;
      }
    }

    setDungeon(newDungeon);
    setPlayer({
      position: { x: 1, y: 1 },
      strength: 10,
      stamina: 100,
      health: 100,
      luck: 0,
      inventory: [],
    });
    setMonster({
      position: {
        x: Math.floor(Math.random() * (GRID_SIZE - 2)) + 1,
        y: Math.floor(Math.random() * (GRID_SIZE - 2)) + 1,
      },
      strength: 10,
      stamina: 100,
      health: 100,
      luck: 0,
      inventory: [],
    });
  }, []);

  const handleKeyPress = (e: KeyboardEvent) => {
    e.preventDefault();
    //console.log(e);
    if (e.key == "ArrowLeft") {
      movePlayer(-1, 0);
    }
    if (e.key == "ArrowRight") {
      movePlayer(1, 0);
    }
    if (e.key == "ArrowDown") {
      movePlayer(0, 1);
    }
    if (e.key == "ArrowUp") {
      movePlayer(0, -1);
    }
  };

  useEffect(() => {
    generateDungeon();
  }, [generateDungeon, level]);

  const movePlayer = (dx: number, dy: number) => {
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
        stamina: Math.max(prev.stamina - 1, 0),
      };

      if (
        cellContent === POTION_CHAR ||
        cellContent === SWORD_CHAR ||
        cellContent === LUCK_CHAR
      ) {
        const item =
          cellContent === POTION_CHAR
            ? ITEMS.healthPotion
            : cellContent === SWORD_CHAR
            ? ITEMS.sword
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
      setTodos([...todos, { id: Date.now(), text, completed: false }]);
    }
  };

  const toggleTodo = (id: number) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
    setPlayer((prev) => ({ ...prev, luck: prev.luck + 1 }));
  };

  const deleteTodo = (id: number) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <h1>Retro Dungeon Crawler</h1>

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
          <h2>Level {level}</h2>
          <Dungeon dungeon={dungeon} player={player} monster={monster} />
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
