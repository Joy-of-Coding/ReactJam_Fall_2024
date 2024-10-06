import { useState } from "react";
import "./App.css";
import TitleScreen from "./components/Title Screen/TitleScreen.tsx";
import IntroSplash from "./components/Splash Screens/IntroSplash.tsx";
import GenericSplash from "./components/Splash Screens/GenericSplash.tsx";
import Game from "./components/Game.tsx";
import CombatEncounter from "./components/Combat/CombatEncounter.tsx";
import { Player, Monster, DungeonGrid } from "./types/types.ts";

function App() {
    const [currentAppState, setCurrentAppState] =
        useState<string>("titleScreen");
    const [player, setPlayer] = useState<Player>({
        position: { x: 1, y: 1 },
        strength: 10,
        defense: 5,
        health: 100,
        inventory: [],
        isAlive: true,
        experience: 0,
        maxHealth: 100,
    });
    const [monster, setMonster] = useState<Monster>({
        position: { x: 1, y: 1 },
        strength: 10,
        defense: 5,
        health: 60,
        luck: 0,
        inventory: [],
        isAlive: true,
    });
    const [dungeon, setDungeon] = useState<DungeonGrid>([]);
    const [currDungeonNum, setCurrDungeonNum] = useState<number>(1);
    const [level, setLevel] = useState<number>(1);
    return (
        <>
            <div>
                {/* Placeholder wrapping the Game component */}
                <div className="game-container">
                    {currentAppState == "titleScreen" && (
                        <TitleScreen setCurrentAppState={setCurrentAppState} />
                    )}
                    {currentAppState == "introSplash" && (
                        <IntroSplash setCurrentAppState={setCurrentAppState} />
                    )}
                    {currentAppState == "genericSplash" && (
                        <GenericSplash
                            setCurrentAppState={setCurrentAppState}
                            currDungeonNum={currDungeonNum}
                        />
                    )}
                    {currentAppState == "game" && (
                        <Game
                            setCurrentAppState={setCurrentAppState}
                            player={player}
                            setPlayer={setPlayer}
                            monster={monster}
                            setMonster={setMonster}
                            dungeon={dungeon}
                            setDungeon={setDungeon}
                            currDungeonNum={currDungeonNum}
                            level={level}
                            setLevel={setLevel}
                            setCurrDungeonNum={setCurrDungeonNum}
                        />
                    )}
                    {currentAppState == "combat" && (
                        <CombatEncounter
                            player={player}
                            monster={monster}
                            setPlayer={setPlayer}
                            setMonster={setMonster}
                            setCurrentAppState={setCurrentAppState}
                            currDungeonNum={currDungeonNum}
                            setCurrDungeonNum={setCurrDungeonNum}
                            setLevel={setLevel}
                        />
                    )}
                </div>
            </div>
        </>
    );
}

export default App;
