// src/components/TodoList.tsx

import React, { useState } from 'react';
import './TodoList.css';

interface Todo {
    id: number;
    text: string;
    completed: boolean;
    priority: 'high' | 'medium' | 'low';
}

interface TodoListProps {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<TodoListProps> = ({ todos, setTodos }) => {
    const [newTodo, setNewTodo] = useState<string>('');
    const [priority, setPriority] = useState<'high' | 'medium' | 'low'>('low');

    const addTodo = () => {
        if (newTodo.trim() !== '' && todos.length < 3) {
            const newTask: Todo = {
                id: Date.now(),
                text: newTodo,
                completed: false,
                priority,
            };
            setTodos([...todos, newTask]);
            setNewTodo('');
        }
    };

    const deleteTodo = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const toggleComplete = (id: number) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
    };

    const getPriorityColor = (priority: string) => {
        switch (priority) {
            case 'high': return '#ff6666'; // Red for high priority
            case 'medium': return '#ffb066'; // Yellow for medium priority
            case 'low': return '#114d3b'; // Green for low priority
            default: return '#ffffff';
        }
    };

    return (
        <div className="todo-container">
            <h1 style={{ color: 'black' }}>To-do List</h1>

            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Enter your task"
            />
            <select
                value={priority}
                onChange={(e) => setPriority(e.target.value as 'high' | 'medium' | 'low')}
            >
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
            </select>
            <button onClick={addTodo}>Add</button>

            <ul className={`todo-list ${todos.length === 3 && todos.every(todo => todo.completed) ? 'muted' : ''}`}>
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        style={{
                            backgroundColor: todo.completed
                                ? 'lightgray'
                                : getPriorityColor(todo.priority),
                        }}
                    >
                        <div className="todo-text">
                            <input
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() => toggleComplete(todo.id)}
                                className={todo.completed ? 'completed-checkbox' : ''}
                            />
                            <span className={todo.completed ? 'completed-text' : ''}>{todo.text}</span>
                        </div>

                        {/* Delete button on the far right */}
                        <button
                            className="delete-button"
                            onClick={() => deleteTodo(todo.id)}
                        >
                            X
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
