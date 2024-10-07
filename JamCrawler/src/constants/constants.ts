// src/constants/constants.ts
export const GRID_SIZE = 10;

export const PLAYER_CHAR = "🧑‍🌾";
export const WALL_CHAR = "🪨";
export const EMPTY_CHAR = " ";
export const POTION_CHAR = "🧪";
export const SWORD_CHAR = "🗡️";
export const DOOR_CHAR = "🚪";
export const HELMET_CHAR = "🪖";
export const MONSTER_TYPES = [
    { name: "Snake", symbol: "🐍" },
    { name: "Zombie", symbol: "🧟‍♂️" },
    { name: "Skeleton", symbol: "💀" },
    { name: "Ogre", symbol: "👹" },
    { name: "Drow", symbol: "🧌" },
];

import { Item } from "../types/types";


export const ITEMS: { [key: string]: Item } = {
    healthPotion: {
        name: "Health Potion",
        symbol: POTION_CHAR,
        effect: (player) => ({
            ...player,
            health: Math.min(player.health + 25, player.maxHealth),
        }),
    },
    helmet: {
        name: "Helmet",
        symbol: HELMET_CHAR,
        effect: (player) => ({
            ...player,
            defense: Math.min(player.defense + 2),
        }),
    },
    sword: {
        name: "Sword",
        symbol: SWORD_CHAR,
        effect: (player) => ({ ...player, strength: player.strength + 5 }),
    },
    doorway: {
        name: "Door Way",
        symbol: DOOR_CHAR,
        effect: (player) => ({ ...player, luck: player.experience + 1000 }),
    },
};
