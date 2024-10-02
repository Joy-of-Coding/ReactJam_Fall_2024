import { useState } from "react";
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import "./App.css";
import IntroSplash from "./components/Splash Screens/IntroSplash.tsx";
import Game from "./components/Game.tsx";

function App() {
    const [currentAppState, setCurrentAppState] =
        useState<string>("introSplash");

    return (
        <>
            <div>
                {/* Placeholder wrapping the Game component */}
                <div className="game-container">
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
