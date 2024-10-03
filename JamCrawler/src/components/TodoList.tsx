import React, { useState } from 'react';
import { Todo } from '../types/types';  // Import the Todo type
import './TodoList.css';  // Import your CSS file
import highIcon from './assets/highIcon.png';
import lowIcon from './assets/lowIcon.png';
import mediumIcon from './assets/mediumIcon.png';

type TodoListProps = {
  todos: Todo[];
  addTodo: (text: string, priority: 'low' | 'medium' | 'high') => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
};

<><img src="/src/assets/highIcon.png" alt="High" /><img src="/src/assets/mediumIcon.png" alt="High" /><img src="/src/assets/lowIcon.png" alt="High" /></> 

const TodoList: React.FC<TodoListProps> = ({ todos, addTodo, toggleTodo, deleteTodo }) => {
  const [newTodo, setNewTodo] = useState('');
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('low');

  // Handle adding a new todo
  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent form submission (default behavior)
    if (newTodo.trim() === '') return; // Prevent adding empty todos

    const activeTodos = todos.filter((todo) => !todo.completed).length;
    if (activeTodos >= 3) return; // Prevent adding more than 3 uncompleted tasks

    addTodo(newTodo, priority);
    setNewTodo(''); // Clear input after adding
    setPriority('low'); // Reset priority to default
  };

  return (
    <div className="todoContainer">
      <h2 className="heading">To-Do List</h2>

      {/* Form to handle input and submission */}
      <form onSubmit={handleAddTodo} className="todoInputContainer">
        <input
          className="todo-input"
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}  // Update input value in state
          placeholder="Add a new todo"
        />

        {/* Priority Dropdown */}
        <select
          className="priorityDropdown"
          value={priority}
          onChange={(e) => setPriority(e.target.value as 'low' | 'medium' | 'high')}
        >
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
        </select>

        <button type="submit" disabled={todos.filter((todo) => !todo.completed).length >= 3}>
          Add
        </button>
      </form>

      {/* Show task limit message */}
      {todos.filter((todo) => !todo.completed).length >= 3 && (
        <p className="limitMessage">Task limit reached! Complete tasks to add more.</p>
      )}

      <ul className="todoList">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`todoItem priority-${todo.priority}`}  // Apply priority class based on the todo's priority
          >
            <label className="todoLabel">
              <input
                type="checkbox"
                id={`todo-${todo.id}`}
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
              />
              <span className={todo.completed ? 'completed' : ''}>{todo.text}</span>
            </label>
            <button className="deleteButton" onClick={() => deleteTodo(todo.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
