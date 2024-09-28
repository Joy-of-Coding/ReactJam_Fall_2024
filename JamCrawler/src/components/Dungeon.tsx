// src/components/Dungeon.tsx
import React from 'react';
import { DungeonGrid, Player } from '../types/types';

type DungeonProps = {
  dungeon: DungeonGrid;
  player: Player;
};

const Dungeon: React.FC<DungeonProps> = ({ dungeon, player }) => {
  return (
    <div>
      {dungeon.map((row, y) => (
        <div key={y}>
          {row.map((cell, x) => (
            <span
              key={`${x}-${y}`}
              style={{ width: '20px', display: 'inline-block', textAlign: 'center' }}
            >
              {x === player.position.x && y === player.position.y ? '@' : cell}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Dungeon;
