import React, { useState } from "react";

function GameStorage() {
  const player = {
    level: 1,
    str: 20,
    dex: 20,
    hps: 100,
  };

  const [playerStats, setPlayerStats] = useState(false);

  const storeGame = () => {
    setPlayerStats(true);
    localStorage.setItem("Player", JSON.stringify(player));
    console.log(JSON.parse(localStorage.getItem("Player") || ""));
  };
  const restoreGame = () => {
    const playerRestore = JSON.parse(localStorage.getItem("Player") || "");
    console.log(playerRestore);
  };
  const removeGame = () => {
    localStorage.clear();
  };

  return (
    <>
      <div className="App">
        <div>
          <button onClick={storeGame}>Done</button>
        </div>
        <div>
          <button onClick={restoreGame}>Restore</button>
        </div>
        <div>
          <button onClick={removeGame}>Remove</button>
        </div>
      </div>
    </>
  );
}
export default GameStorage;

// import React from "react";

// const Storage = () => {
//   return <div>Storage</div>;
// };

// export default Storage;

// import { useState, useEffect } from "react";

// function getStorageValue(key, defaultValue) {
//   // getting stored value
//   const saved = localStorage.getItem(key);
//   const initial = JSON.parse(saved);
//   return initial || defaultValue;
// }

// export const useLocalStorage = (key, defaultValue) => {
//   const [value, setValue] = useState(() => {
//     return getStorageValue(key, defaultValue);
//   });

//   useEffect(() => {
//     // storing input name
//     localStorage.setItem(key, JSON.stringify(value));
//   }, [key, value]);

//   return [value, setValue];
// };

// // From sam in WEd party
// const gameState = {
//   playerPosition: { x: 100, y: 200 },
//   score: 1500,
//   level: 3,
// };

// localStorage.setItem("gameState", JSON.stringify(gameState));

// const savedState = JSON.parse(localStorage.getItem("gameState"));

// if (savedState) {
//   player.position = savedState.playerPosition;
//   player.score = savedState.score;
//   currentLevel = savedState.level;
// }
