import { useState } from "react";
import "./App.css";
import TitleScreen from "./components/Title Screen/TitleScreen.tsx";
import IntroSplash from "./components/Splash Screens/IntroSplash.tsx";
import GenericSplash from "./components/Splash Screens/GenericSplash.tsx";
import Game from "./components/Game.tsx";
import CombatEncounter from "./components/Combat/CombatEncounter.tsx";
import { Player, Todo, Monster, DungeonGrid } from "./types/types.ts";
import CreditScreen from "./components/Credit screen/CreditScreen.tsx";
import InfoScreen from "./components/Instruction/InfoScreen.tsx";
import TodoList from "./components/TodoList.tsx"; // SAM - Import TodoList
// import Modal from  "./components/Modal.tsx"; // SAM - Import Modal



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
        // SAM - New state to track if the game is unlocked
        const [isGameUnlocked, setIsGameUnlocked] = useState(false);

        // SAM - TodoList state to track todos
        const [todos, setTodos] = useState<Todo[]>([]);
    
        // SAM - Function to add a new todo
        const addTodo = (text: string, priority: "low" | "medium" | "high") => {
            if (todos.length < 3) {
                const newTodo: Todo = {
                    id: Date.now(),
                    text,
                    completed: false,
                    priority,
                };
                setTodos([...todos, newTodo]);
            }
        };
    
        // SAM - Function to toggle todo completion
        const toggleTodo = (id: number) => {
            const updatedTodos = todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            );
            setTodos(updatedTodos);
    
            // SAM - Check if all todos are complete to unlock the game
            const completedTasks = updatedTodos.filter((todo) => todo.completed);
            if (completedTasks.length === 3) {
                setIsGameUnlocked(true); // SAM - Unlock the game
            }
        };

         // SAM - Conditionally render Game component based on isGameUnlocked state
    return (
        <>
            <div>
                {/* Placeholder wrapping the Game component */}
                <div className="game-container">
                    {currentAppState == "titleScreen" && (
                        <TitleScreen setCurrentAppState={setCurrentAppState} />
                    )}
                    {currentAppState == "CreditScreen" && (
                        <CreditScreen setCurrentAppState={setCurrentAppState} />
                    )}
                    {currentAppState == "InfoScreen" && (
                        <InfoScreen setCurrentAppState={setCurrentAppState} />
                    )}

                    {currentAppState == "introSplash" && (
                        <IntroSplash setCurrentAppState={setCurrentAppState} />
                    )}
                    {currentAppState == "genericSplash" && (
                        <GenericSplash
                            setCurrentAppState={setCurrentAppState}
                            currDungeonNum={currDungeonNum}
                            setPlayer={setPlayer}
                            setMonster={setMonster}
                            setCurrDungeonNum={setCurrDungeonNum}
                            setLevel={setLevel}
                        />
                    )}
                   
                   
                    {/* SAM - Only render Game if game is unlocked */}
                    {isGameUnlocked && currentAppState === "game" && (
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
                        {/* SAM - Render TodoList until game is unlocked */}
                    {!isGameUnlocked && (
                        <TodoList
                            todos={todos}
                            setTodos={setTodos}
                            addTodo={addTodo}
                            toggleTodo={toggleTodo}

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
