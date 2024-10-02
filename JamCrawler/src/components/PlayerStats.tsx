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
    <div className="container">
      <div className="leftAlign" >
        <p>💪</p>
        <p>🔋</p>
        <p>❤️</p>
        <p>🍀</p>
      </div>
      <div className="leftAlign" >
        <p> Strength: </p>
        <p> Stamina: </p>
        <p> Health: </p>
        <p> Luck: </p>
      </div>  
      <div className="leftAlign" >
        <p>{player.strength}</p>
        <p>{player.stamina}</p>
        <p>{player.health}</p>
        <p>{player.luck}</p>
      </div>
    </div> 


    </div>
  </div>
);

export default PlayerStats;
