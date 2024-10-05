import React, { useState } from "react";
import Game from "./components/Game"; // Keep Game import intact
import TodoList from "./components/TodoList"; // Import the TodoList
import Modal from "./components/Modal"; // Import Modal
import { Todo } from "./types/types"; // Import necessary types
import "./App.css"; // Import styles

const App: React.FC = () => {
    // State to manage todos and game lock
    const [todos, setTodos] = useState<Todo[]>([]);
    const [isGameLocked, setIsGameLocked] = useState(true); // Start with game locked
    const [showModal, setShowModal] = useState<string | null>("Create three to-do items and complete them to unlock the game.");

    // Add a new todo (limit to 3)
    const addTodo = (text: string, priority: "low" | "medium" | "high") => {
        if (todos.length < 3 && text.trim() !== "") {
            setTodos((prev) => [
                ...prev,
                { id: Date.now(), text, completed: false, priority },
            ]);
        }
    };

    // Toggle todo completion and check if all tasks are done
    const toggleTodo = (id: number) => {
        const updatedTodos = todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(updatedTodos);

        // Check if all tasks are completed
        if (updatedTodos.length === 3 && updatedTodos.every(todo => todo.completed)) {
            setIsGameLocked(false); // Unlock the game
            setShowModal(null);     // Hide modal
        }
    };

    // Reset the game (relock and clear todos)
    const resetGame = () => {
        setTodos([]);                // Clear todos
        setIsGameLocked(true);       // Relock the game
        setShowModal("Create three to-do items and complete them to unlock the game."); // Show modal again
    };

    return (
        <div className="app-container">
            {/* Modal to display instructions when game is locked */}
            {isGameLocked && <Modal showModal={showModal} setShowModal={setShowModal} />}

            {/* Display TodoList as a lock until the game is unlocked */}
            {isGameLocked && (
                <TodoList
                    todos={todos}
                    setTodos={setTodos}
                    addTodo={addTodo}
                    toggleTodo={toggleTodo}
                />
            )}

            {/* Once unlocked, display the Game component */}
            {!isGameLocked && (
                <Game resetGame={resetGame} />
            )}
        </div>
    );
};

export default App;
