import { useState } from "react";
import "./App.css";
import TitleScreen from "./components/Title Screen/TitleScreen.tsx";
import IntroSplash from "./components/Splash Screens/IntroSplash.tsx";
import Game from "./components/Game.tsx";
import CombatEncounter from "./components/Combat/CombatEncounter.tsx";
import { Player, Monster, DungeonGrid } from "./types/types.ts";

function App() {
    const [currentAppState, setCurrentAppState] =
        useState<string>("titleScreen");
    const [player, setPlayer] = useState<Player>({
        position: { x: 1, y: 1 },
        strength: 10,
        stamina: 100,
        health: 100,
        luck: 0,
        inventory: [],
        isAlive: true,
    });
    const [monster, setMonster] = useState<Monster>({
        position: { x: 1, y: 1 },
        strength: 10,
        stamina: 100,
        health: 100,
        luck: 0,
        inventory: [],
        isAlive: true,
    });
    const [dungeon, setDungeon] = useState<DungeonGrid>([]);
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
                    {currentAppState == "game" && (
                        <Game
                            setCurrentAppState={setCurrentAppState}
                            player={player}
                            setPlayer={setPlayer}
                            monster={monster}
                            setMonster={setMonster}
                            dungeon={dungeon}
                            setDungeon={setDungeon}
                        />
                    )}
                    {currentAppState == "combat" && (
                        <CombatEncounter
                            player={player}
                            monster={monster}
                            setPlayer={setPlayer}
                            setMonster={setMonster}
                        />
                    )}
                </div>
            </div>
        </>
    );
}

export default App;
