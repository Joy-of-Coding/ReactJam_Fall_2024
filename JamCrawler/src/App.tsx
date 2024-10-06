import { useState } from "react";
import "./App.css";
import TitleScreen from "./components/Title_Screen/TitleScreen";
import IntroSplash from "./components/Splash_Screens/IntroSplash";
import GenericSplash from "./components/Splash_Screens/GenericSplash";
import Game from "./components/Game";
import TodoList from "./components/TodoList"; // Import TodoList
import CreditScreen from "./components/Credit_Screen/CreditScreen"; // Import CreditScreen SAM -updated file paths
import InfoScreen from "./components/Info/InfoScreen"; // Import InfoScreen
import { Player, Monster, DungeonGrid, Todo } from "./types/types";

// Define the App component
const App = () => {
  // State to track if the game is unlocked
  const [isGameUnlocked, setIsGameUnlocked] = useState(false);

  // State to manage splash screens and app progression
  const [currentAppState, setCurrentAppState] = useState<string>("titleScreen");

  // TodoList state to track todos
  const [todos, setTodos] = useState<Todo[]>([]);

  // Initialize player state
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

  // Initialize monster state
  const [monster, setMonster] = useState<Monster>({
    position: { x: 5, y: 5 },
    strength: 10,
    defense: 5,
    health: 100,
    luck: 0,
    inventory: [],
    isAlive: true,
  });

  // Initialize dungeon state (empty for now)
  const [dungeon, setDungeon] = useState<DungeonGrid>([[]]);

  // Initialize other game states
  const [currDungeonNum, setCurrDungeonNum] = useState<number>(1);
  const [level, setLevel] = useState<number>(1);

  // Function to add new todos
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

  // Function to toggle todo completion
  const toggleTodo = (id: number) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);

    // Unlock the game after all tasks are complete
    const completedTasks = updatedTodos.filter((todo) => todo.completed);
    if (completedTasks.length === 3) {
      setIsGameUnlocked(true);
    }
  };

  // Function to delete a todo
  const deleteTodo = (id: number) => {
    const remainingTodos = todos.filter((todo) => todo.id !== id);
    setTodos(remainingTodos);
  };

  // Render the app based on the current state
  return (
    <div>
      {/* Render the Title Screen */}
      {currentAppState === "titleScreen" && (
        <TitleScreen setCurrentAppState={setCurrentAppState} />
      )}

      {/* Render the Intro Splash Screen */}
      {currentAppState === "introSplash" && (
        <IntroSplash setCurrentAppState={setCurrentAppState} />
      )}

      {/* Render the Generic Splash Screen */}
      {currentAppState === "genericSplash" && (
        <GenericSplash
          setCurrentAppState={setCurrentAppState}
          currDungeonNum={currDungeonNum}
          setPlayer={setPlayer}
          setMonster={setMonster}
          setCurrDungeonNum={setCurrDungeonNum}
          setLevel={setLevel}
        />
      )}

      {/* Render the TodoList if splash screens are completed */}
      {currentAppState === "todoList" && !isGameUnlocked && (
        <TodoList
          todos={todos}
          setTodos={setTodos}
          addTodo={addTodo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      )}

      {/* Render the game only when it's unlocked */}
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
      )}

      {/* Render the Credit Screen */}
      {currentAppState === "CreditScreen" && (
        <CreditScreen setCurrentAppState={setCurrentAppState} />
      )}

      {/* Render the Info Screen */}
      {currentAppState === "InfoScreen" && (
        <InfoScreen setCurrentAppState={setCurrentAppState} />
      )}
    </div>
  );
};

export default App;
