// src/components/MonsterStats.tsx
import React from 'react';
import { Monster } from '../types/types';

type MonsterStatsProps = {
  monster: Monster;
};

const MonsterStats: React.FC<MonsterStatsProps> = ({ monster }) => (
  <div className='monster-stats'>
    <div className='vitals'>
      <h2 id="h2Stat">Monster Stats</h2>
      <div className="container">
        <div className="leftAlign" >
          <p id="leftMargin">💪</p>
          <p id="leftMargin">🔋</p>
          <p id="leftMargin">❤️</p>
        
        </div>
        <div className="leftAlign" >
          <p>Strength:</p>
          <p>Defense:</p>
          <p>Health:</p>
          
        </div>  
        <div className="leftAlign" >
          <p>{monster.strength}</p>
          <p>{monster.defense}</p>
          <p>{monster.health}</p>
          
        </div>
      </div> 

    </div>
  </div>
);

export default MonsterStats;