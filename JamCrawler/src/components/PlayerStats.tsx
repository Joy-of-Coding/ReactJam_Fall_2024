// src/components/PlayerStats.tsx
import React from 'react';
import { Player } from '../types/types';

type PlayerStatsProps = {
  player: Player;
};

const PlayerStats: React.FC<PlayerStatsProps> = ({ player }) => (
  <div>
    <h2>Player Stats</h2>
    <p>Strength: {player.strength}</p>
    <p>Stamina: {player.stamina}</p>
    <p>Health: {player.health}</p>
    <p>Luck: {player.luck}</p>
  </div>
);

export default PlayerStats;
