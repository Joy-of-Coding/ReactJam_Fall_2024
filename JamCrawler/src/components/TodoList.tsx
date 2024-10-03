// src/components/TodoList.tsx
import React, { useState } from "react";
import { Todo } from "../types/types";
import "./TodoList.css";

type TodoListProps = {
    todos: Todo[];
    addTodo: (text: string) => void;
    toggleTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
};

const TodoList = ({
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
}: TodoListProps) => {
    const [newTodo, setNewTodo] = useState<string>("");

    const handleAddTodo = () => {
        if (newTodo.trim() !== "") {
            addTodo(newTodo);
            setNewTodo("");
        }
    };

    const handleInputState = (e: React.FormEvent<HTMLInputElement>) => {
        let ourValue = e.target as HTMLInputElement;
        console.log(e);
        setNewTodo(ourValue.value);
    };
    //(e) => setNewTodo(e.target.value)
    return (
        <div className="todoContainer">
            <h2>Todo List</h2>
            <div className="todoInputContainer">
                <input
                    className="todo-input"
                    type="text"
                    value={newTodo}
                    onChange={handleInputState}
                />
                <button onClick={handleAddTodo}>Add</button>
            </div>
            {todos.length > 0 ? (
                todos.map((todo) => (
                    <div key={todo.id}>
                        <div>
                            <input
                                type="checkbox"
                                id={`todo-${todo.id}`}
                                checked={todo.completed}
                                onChange={() => toggleTodo(todo.id)}
                            />
                            <label
                                htmlFor={`todo-${todo.id}`}
                                style={{
                                    textDecoration: todo.completed
                                        ? "line-through"
                                        : "none",
                                }}
                            >
                                {todo.text}
                            </label>
                        </div>
                        <button onClick={() => deleteTodo(todo.id)}>
                            Delete
                        </button>
                    </div>
                ))
            ) : (
                <p>No todos added.</p>
            )}
        </div>
    );
};

export default TodoList;
