// src/types/types.ts
export type Position = { x: number; y: number };

export type Item = {
    name: string;
    symbol: string;
    effect: (player: Player) => Player;
};

export type Player = {
    position: Position;
    strength: number;
    defense: number;
    health: number;
    experience: number;
    inventory: Item[];
    isAlive: boolean;
};

export type Monster = {
    position: Position;
    strength: number;
    defense: number;
    health: number;
    luck: number;
    inventory: Item[];
    isAlive: boolean;
};

export type Todo = {
    id: number;
    text: string;
    completed: boolean;
    priority: 'high' | 'medium' | 'low';
};

export type DungeonGrid = string[][];

export type PlayerCombatStats = {
    attack: number;
    defense: number;
    exp: number;
};

export type monsterCombatStats = {
    attack: number;
    defense: number;
    hp: number;
};

// export interface Todo {
//   id: number;
//   text: string;
//   completed: boolean;
//   priority: 'red' | 'yellow' | 'green';
//   luckValue: number;
// }