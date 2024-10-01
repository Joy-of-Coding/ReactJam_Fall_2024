// src/components/PlayerStats.tsx
import "./PlayerStats.css"
import React from 'react';
import { Player } from '../types/types';

type PlayerStatsProps = {
  player: Player;
};

const PlayerStats: React.FC<PlayerStatsProps> = ({ player }) => (
  <div className="player-stats">
     <div className="vitals">
    <h2>Player Stats</h2>
   
    <p>💪 Strength: {player.strength}</p>
    <p>🔋 Stamina: {player.stamina}</p>
    <p>❤️ Health: {player.health}</p>
    <p>🍀 Luck: {player.luck}</p>
    </div>
  </div>
);

export default PlayerStats;
