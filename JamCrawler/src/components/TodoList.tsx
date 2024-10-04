import React, { useState } from 'react';
import './TodoList.css';

interface Todo {
  text: string;
  priority: 'high' | 'medium' | 'low';
  complete: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');
  const [priority, setPriority] = useState<'high' | 'medium' | 'low'>('low');

  const addTodo = () => {
    if (newTodo && todos.length < 3) {
      const newTask: Todo = { text: newTodo, priority, complete: false };
      setTodos([...todos, newTask]);
      setNewTodo('');
    }
  };

  const removeTodo = (index: number) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const toggleComplete = (index: number) => {
    const updatedTodos = [...todos];
    updatedTodos[index].complete = !updatedTodos[index].complete;
    setTodos(updatedTodos);
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return '#ff6666'; // Red
      case 'medium':
        return '#ffb066'; // Yellow
      case 'low':
        return '#114d3b'; // Green
      default:
        return '#ffffff'; // Default white
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <label>Enter 3 Tasks</label>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Enter your task"
      />
      <label htmlFor="priority" className="visually-hidden">Priority</label>
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value as 'high' | 'medium' | 'low')}
      >
        <option className="hRed" value="high">H</option>
        <option className="mYellow" value="medium">M</option>
        <option className="LGreen" value="low">L</option>
      </select>
      <button id="add-button" onClick={addTodo}>Add</button>

      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li
            key={index}
            className={`priority-${todo.priority}`}
            style={{
              backgroundColor: getPriorityColor(todo.priority),
              textDecoration: todo.complete ? 'line-through' : 'none',
              borderBottom: todo.complete ? '2px solid black' : 'none',
            }}
          >
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => toggleComplete(index)}
              className="todo-checkbox"
            />
            {todo.text}
            <button id="Del" onClick={() => removeTodo(index)}>X</button>
          </li>
        ))}
      </ul>

      {todos.every(todo => todo.complete) && (
        <div className="congrats-message">
          <h2>Congratulations! Dungeon Time!</h2>
        </div>
      )}
    </div>
  );
};

export default TodoList;
