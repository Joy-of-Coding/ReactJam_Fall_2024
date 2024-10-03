import { useState } from "react";
import "./App.css";
import TitleScreen from "./components/Title Screen/TitleScreen.tsx";
import IntroSplash from "./components/Splash Screens/IntroSplash.tsx";
import Game from "./components/Game.tsx";

function App() {
    const [currentAppState, setCurrentAppState] =
        useState<string>("titleScreen");

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
                    {currentAppState == "game" && <Game />}
                </div>
            </div>
        </>
    );
}

export default App;
