import { PlayerCombatStats, monsterCombatStats } from "../../types/types";

export const playerLevels = [
    {
        /* Base level to start - level 1 */
        strength: 10,
        defense: 5,
        health: 100,
        exp: 1,
    },
    {
        /* Base level to start - level 2 - +2 weapon, +1 armor, +20 health*/
        strength: 12,
        defense: 6,
        health: 120,
        exp: 1001,
    },
    {
        /* Base level to start - level 3 - +2 weapon, +1 armor, +20 health */
        strength: 14,
        defense: 7,
        health: 140,
        exp: 2001,
    },
    {
        /* Base level to start - level 4 - +2 weapon, +1 armor, +20 health */
        strength: 16,
        defense: 8,
        health: 160,
        exp: 3001,
    },
    {
        /* Base level to start - level 5 - +2 weapon, +1 armor, +20 health */
        strength: 18,
        defense: 9,
        health: 180,
        exp: 4001,
    },
];

export const monsterLevels = [
    {
        /* Base level to start - level 1 */
        strength: 10,
        defense: 5,
        hp: 60,
    },
    {
        /* Base level to start - level 2 */
        strength: 12,
        defense: 6,
        hp: 80,
    },
    {
        /* Base level to start - level 3 */
        strength: 14,
        defense: 7,
        hp: 100,
    },
    {
        /* Base level to start - level 4 */
        strength: 16,
        defense: 8,
        hp: 120,
    },
    {
        /* Base level to start - level 5 */
        strength: 18,
        defense: 9,
        hp: 140,
    },
];
