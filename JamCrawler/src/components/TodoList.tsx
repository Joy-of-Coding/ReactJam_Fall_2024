import React, { useState } from 'react';
import './TodoList.css'; // Import the CSS for styling

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: 'Find the magic sword', completed: false },
    { id: 2, text: 'Defeat the dungeon boss', completed: false },
    { id: 3, text: 'Rescue the captured villagers', completed: false }
  ]);
  
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      const newTask = {
        id: todos.length + 1,
        text: newTodo,
        completed: false
      };
      setTodos([...todos, newTask]);
      setNewTodo(''); // Clear input after adding
    }
  };

  const toggleComplete = (id: number) => {
    setTodos(
      todos.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="todo-container">
      <h2 className="todo-header">Quest Log</h2>
      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <span onClick={() => toggleComplete(todo.id)}>{todo.text}</span>
            <button className="delete-btn" onClick={() => removeTodo(todo.id)}>❌</button>
          </li>
        ))}
      </ul>
      <div className="todo-input-section">
        <input 
          type="text"
          placeholder="Add new quest..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="todo-input"
        />
        <button className="add-btn" onClick={addTodo}>➕ Add Quest</button>
      </div>
    </div>
  );
};

export default TodoList;
