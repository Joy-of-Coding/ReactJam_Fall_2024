// src/components/Game.tsx

import React, { useState, useEffect, useCallback } from 'react';

const GRID_SIZE = 10;
const PLAYER_CHAR = '@';
const WALL_CHAR = '#';
const EMPTY_CHAR = '.';
const POTION_CHAR = '!';
const SWORD_CHAR = '+';
const LUCK_CHAR = '*';

type Position = { x: number; y: number };

type Item = {
  name: string;
  symbol: string;
  effect: (player: Player) => Player;
};

type Player = {
  position: Position;
  strength: number;
  stamina: number;
  health: number;
  luck: number;
  inventory: Item[];
};

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

const ITEMS: { [key: string]: Item } = {
  healthPotion: {
    name: 'Health Potion',
    symbol: POTION_CHAR,
    effect: (player) => ({ ...player, health: Math.min(player.health + 20, 100) }),
  },
  sword: {
    name: 'Sword',
    symbol: SWORD_CHAR,
    effect: (player) => ({ ...player, strength: player.strength + 5 }),
  },
  luckCharm: {
    name: 'Luck Charm',
    symbol: LUCK_CHAR,
    effect: (player) => ({ ...player, luck: player.luck + 5 }),
  },
};

export default function Game() {
  const [dungeon, setDungeon] = useState<string[][]>([]);
  const [player, setPlayer] = useState<Player>({
    position: { x: 1, y: 1 },
    strength: 10,
    stamina: 100,
    health: 100,
    luck: 0,
    inventory: [],
  });
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState('');

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

    setDungeon(newDungeon);
    setPlayer({
      position: { x: 1, y: 1 },
      strength: 10,
      stamina: 100,
      health: 100,
      luck: 0,
      inventory: [],
    });
  }, []);

  useEffect(() => {
    generateDungeon();
  }, [generateDungeon]);

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

  const renderDungeon = () => {
    return dungeon.map((row, y) => (
      <div key={y}>
        {row.map((cell, x) => (
          <span
            key={`${x}-${y}`}
            style={{ width: '20px', display: 'inline-block', textAlign: 'center' }}
          >
            {x === player.position.x && y === player.position.y ? PLAYER_CHAR : cell}
          </span>
        ))}
      </div>
    ));
  };

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
      setNewTodo('');
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
    <div>
      <h2>This is the Game Component</h2>
      <h1>Retro Dungeon Crawler</h1>
      <div style={{ display: 'flex', gap: '20px' }}>
        <div>
          {renderDungeon()}
        </div>
        <div>
          <h2>Player Stats</h2>
          <p>Strength: {player.strength}</p>
          <p>Stamina: {player.stamina}</p>
          <p>Health: {player.health}</p>
          <p>Luck: {player.luck}</p>
          <h3>Inventory</h3>
          {player.inventory.length > 0 ? (
            player.inventory.map((item, index) => (
              <div key={index}>
                <span>{item.name}</span>
                <button onClick={() => useItem(index)}>Use</button>
              </div>
            ))
          ) : (
            <p>No items in inventory.</p>
          )}
        </div>
      </div>
      <div>
        <button onClick={() => movePlayer(-1, 0)}>←</button>
        <button onClick={() => movePlayer(0, -1)}>↑</button>
        <button onClick={() => movePlayer(1, 0)}>→</button>
        <button onClick={() => movePlayer(0, 1)}>↓</button>
      </div>
      <button onClick={generateDungeon}>New Dungeon</button>
      <div>
        <h2>Todo List</h2>
        <div>
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a new todo"
          />
          <button onClick={addTodo}>Add</button>
        </div>
        {todos.length > 0 ? (
          todos.map((todo) => (
            <div key={todo.id}>
              <div>
                <input
                  type="checkbox"
                  id={`todo-${todo.id}`}
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                />
                <label
                  htmlFor={`todo-${todo.id}`}
                  style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                >
                  {todo.text}
                </label>
              </div>
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </div>
          ))
        ) : (
          <p>No todos added.</p>
        )}
      </div>
    </div>
  );
}
