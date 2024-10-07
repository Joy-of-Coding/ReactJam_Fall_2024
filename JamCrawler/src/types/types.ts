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
    // maxHealth: number; In Game.tsx line 217 of Game.tsx it is causing an error
    experience: number;
    inventory: Item[];
    isAlive: boolean;
    maxHealth: number;
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
    priority: "high" | "medium" | "low";
};

export type DungeonGrid = string[][];


export type PlayerCombatStats = {
    attack: number;
    defense: number;
    health: number;
    exp: number;
};

export type monsterCombatStats = {
    attack: number;
    defense: number;
    hp: number;
};

export type GenericSplashProps = {
    level: number;
    weapon: string;
    armor: string;
    title: string;
    image: string;
    text: string;
};


