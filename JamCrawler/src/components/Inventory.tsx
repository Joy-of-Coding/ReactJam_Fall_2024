// src/components/Inventory.tsx
import React from 'react';
import { Item } from '../types/types';

type InventoryProps = {
  inventory: Item[];
  useItem: (index: number) => void;
};

const Inventory: React.FC<InventoryProps> = ({ inventory, useItem }) => (
  <div>
    <h3>Inventory</h3>
    {inventory.length > 0 ? (
      inventory.map((item, index) => (
        <div key={index}>
          <span>{item.name}</span>
          <button onClick={() => useItem(index)}>Use</button>
        </div>
      ))
    ) : (
      <p>No items in inventory.</p>
    )}
  </div>
);

export default Inventory;
