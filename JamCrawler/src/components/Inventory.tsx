// src/components/Inventory.tsx
import React from 'react';
import { Item } from '../types/types';
import './Inventory.css'

type InventoryProps = {
  inventory: Item[];
  useItem: (index: number) => void;
};

const Inventory: React.FC<InventoryProps> = ({ inventory, useItem }) => (
  <div className='inventory-container'>
    <h3>Inventory</h3>
    {inventory.length > 0 ? (
      inventory.map((item, index) => (
        <div className='inventory-item-container' key={index}>
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
