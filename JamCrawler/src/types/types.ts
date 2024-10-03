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
    stamina: number;
    health: number;
    luck: number;
    inventory: Item[];
};

export type Monster = {
    position: Position;
    strength: number;
    stamina: number;
    health: number;
    luck: number;
    inventory: Item[];
    isAlive: boolean;
};

export type Todo = {
    id: number;
    text: string;
    completed: boolean;
};

export type DungeonGrid = string[][];
