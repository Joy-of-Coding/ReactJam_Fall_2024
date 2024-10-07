import React, { useState } from "react";
import { Todo } from "../types/types";
import "./TodoList.css";

interface TodoListProps {
    todos: Todo[];
    addTodo: (text: string, priority: "low" | "medium" | "high") => void;
    toggleTodo: (id: number) => void;
    setCurrentAppState: (value: string | ((value: string) => string)) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, addTodo, toggleTodo }) => {
    const [newTodo, setNewTodo] = useState<string>("");
    const [priority, setPriority] = useState<"low" | "medium" | "high">("low");

    // Add todo (limited to 3 tasks)
    const handleAddTodo = () => {
        if (todos.length < 3) {
            addTodo(newTodo, priority);
            setNewTodo(""); // Reset input after adding
        }
    };

    return (
        <div className="todo-container">
            <h1 style={{ color: "black" }}>To-do List</h1>
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Enter your task (max 3)"
            />
            <select
                value={priority}
                onChange={(e) =>
                    setPriority(e.target.value as "low" | "medium" | "high")
                }
            >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
            <button onClick={handleAddTodo} disabled={todos.length >= 3}>
                {todos.length >= 3 ? "Task Limit Reached" : "Add Task"}
            </button>

            <ul className="todo-list">
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span>{todo.text}</span>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => toggleTodo(todo.id)}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
