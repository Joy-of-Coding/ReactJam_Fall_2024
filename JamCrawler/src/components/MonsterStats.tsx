// src/components/MonsterStats.tsx
import React from 'react';
import { Monster } from '../types/types';

type MonsterStatsProps = {
  monster: Monster;
};

const MonsterStats: React.FC<MonsterStatsProps> = ({ monster }) => (
  <div className='monster-stats'>
    <div className='vitals'>
      <h2>Monster Stats</h2>
      <div className="container">
        <div className="leftAlign" >
          <p>💪</p>
          <p>🔋</p>
          <p>❤️</p>
          <p>🍀</p>
        </div>
        <div className="leftAlign" >
          <p>Strength:</p>
          <p>Stamina:</p>
          <p>Health:</p>
          <p>Luck:</p>
        </div>  
        <div className="leftAlign" >
          <p>{monster.strength}</p>
          <p>{monster.stamina}</p>
          <p>{monster.health}</p>
          <p>{monster.luck}</p>
        </div>
      </div> 

    </div>
  </div>
);

export default MonsterStats;