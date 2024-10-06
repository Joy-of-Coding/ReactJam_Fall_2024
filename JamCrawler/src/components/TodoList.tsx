import React, { useState } from "react";
import "./TodoList.css"; // Add appropriate styles here.

interface TodoListProps {
    todos: Todo[];
    setTodos: (todos: Todo[]) => void;
    addTodo: (text: string, priority: "low" | "medium" | "high") => void;
    toggleTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({
    todos,
    addTodo,
    toggleTodo,
}) => {
    const [newTask, setNewTask] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addTodo(newTask, "low");
        setNewTask("");
    };

    return (
        <div className="todo-overlay">
            <h2>Prove Yourself: Task Slayer</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Add your task"
                    required
                />
                <button type="submit">Add Task</button>
            </form>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span
                            onClick={() => toggleTodo(todo.id)}
                            style={{
                                textDecoration: todo.completed ? "line-through" : "none",
                            }}
                        >
                            {todo.text}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
