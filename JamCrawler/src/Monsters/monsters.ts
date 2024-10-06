// Array of monster icons indexed by levels
export const MONSTER_ICONS = [
    '🐍', // Level 1 Monster
    '🧟‍♂️', // Level 2 Monster
    '💀', // Level 3 Monster
    '👹', // Level 4 Monster
    '🧌', // Level 5 Monster
    // You can add more based on game levels
  ];
  
  // Optional: Define a helper function to fetch a monster icon by level
  export const getMonsterIconByLevel = (level: number): string => {
    // Ensure we return a valid monster even if the level is beyond available icons
    return MONSTER_ICONS[Math.min(level - 1, MONSTER_ICONS.length - 1)];
  };