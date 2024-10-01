// src/components/Controls.tsx
import React from 'react';

type ControlsProps = {
  movePlayer: (dx: number, dy: number) => void;
  level: number
  setLevel: (arg1: number)=>void
  generateDungeon: ()=> void
};

const Controls: React.FC<ControlsProps> = ({ movePlayer, setLevel, level, generateDungeon }) => (
  <div>
  <div>
    <button onClick={() => movePlayer(-1, 0)}>←</button>
    <button onClick={() => movePlayer(0, -1)}>↑</button>
    <button onClick={() => movePlayer(1, 0)}>→</button>
    <button onClick={() => movePlayer(0, 1)}>↓</button>
  </div>
  <button onClick={()=> {
    setLevel(level+1)
    generateDungeon()
    }}>Enter Next Level</button>
    </div>
);

export default Controls;
