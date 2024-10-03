// src/constants/constants.ts

// Existing Game Constants
export const GRID_SIZE = 10;
export const PLAYER_CHAR = '🧑‍🌾';
export const MONSTER_CHAR = '🕷️';
export const WALL_CHAR = '🪨';
export const EMPTY_CHAR = ' ';
export const POTION_CHAR = '🧪';
export const SWORD_CHAR = '🗡️';
export const LUCK_CHAR = '🍀';

// Import SVG icons
import LowPriorityIcon from '../assets/icons/low-priority.png';
import MediumPriorityIcon from '../assets/icons/medium-priority.png';
import HighPriorityIcon from '../assets/icons/high-priority.png';

// To-Do List Priority Constants with SVG Images
export const PRIORITY_LOW = 'low';
export const PRIORITY_MEDIUM = 'medium';
export const PRIORITY_HIGH = 'high';

export const PRIORITIES = [
  {
    value: PRIORITY_LOW,
    label: 'Low Priority',
    icon: LowPriorityIcon,  // Assign as an icon
  },
  {
    value: PRIORITY_MEDIUM,
    label: 'Medium Priority',
    icon: MediumPriorityIcon,  // Assign as an icon
  },
  {
    value: PRIORITY_HIGH,
    label: 'High Priority',
    icon: HighPriorityIcon,  // Assign as an icon
  },
];
