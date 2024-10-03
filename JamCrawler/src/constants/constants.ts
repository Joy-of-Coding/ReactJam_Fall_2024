// src/constants/constants.ts
export const GRID_SIZE = 10;
export const PLAYER_CHAR = '🧑‍🌾';
export const MONSTER_CHAR = '🐍';
export const WALL_CHAR = '🪨';
export const EMPTY_CHAR = ' ';
export const POTION_CHAR = '🧪';
export const SWORD_CHAR = '🗡️';
export const LUCK_CHAR = '🍀';
export const HELMET_CHAR = '🪖'

import { Item } from '../types/types';

export const ITEMS: { [key: string]: Item } = {
  healthPotion: {
    name: 'Health Potion',
    symbol: POTION_CHAR,
    effect: (player) => ({ ...player, health: Math.min(player.health + 20, 100) }),
  },
  helmet: {
    name: 'Helmet',
    symbol: HELMET_CHAR,
    effect: (player) => ({ ...player, stamin: Math.min(player.stamina + 2) }),
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
