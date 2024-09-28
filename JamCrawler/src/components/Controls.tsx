// src/components/Controls.tsx
import React from 'react';

type ControlsProps = {
  movePlayer: (dx: number, dy: number) => void;
};

const Controls: React.FC<ControlsProps> = ({ movePlayer }) => (
  <div>
    <button onClick={() => movePlayer(-1, 0)}>←</button>
    <button onClick={() => movePlayer(0, -1)}>↑</button>
    <button onClick={() => movePlayer(1, 0)}>→</button>
    <button onClick={() => movePlayer(0, 1)}>↓</button>
  </div>
);

export default Controls;
