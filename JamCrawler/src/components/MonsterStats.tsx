// src/components/MonsterStats.tsx
import React from 'react';
import { Monster } from '../types/types';

type MonsterStatsProps = {
  monster: Monster;
};

const MonsterStats: React.FC<MonsterStatsProps> = ({ monster }) => (
  <div className='monster-stats'>
    <h2>Monster Stats</h2>
    <div className='vitals'>
    <p>💪 Strength: {monster.strength}</p>
    <p>🔋 Stamina: {monster.stamina}</p>
    <p>❤️ Health: {monster.health}</p>
    <p>🍀 Luck: {monster.luck}</p>
    </div>
  </div>
);

export default MonsterStats;