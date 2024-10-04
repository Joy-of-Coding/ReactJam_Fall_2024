import React, { useState } from 'react';
import './TodoList.css'; // Import the separate CSS file

interface Todo {
  text: string;
  priority: 'high' | 'medium' | 'low';
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');
  const [priority, setPriority] = useState<'high' | 'medium' | 'low'>('low');

  const addTodo = () => {
    if (newTodo && todos.length < 3) {
      const newTask: Todo = { text: newTodo, priority };
      setTodos([...todos, newTask]);
      setNewTodo(''); // Clear input after adding
    }
  };

  const removeTodo = (index: number) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'red';
      case 'medium':
        return 'orange';
      case 'low':
        return 'green';
      default:
        return 'black';
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
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} style={{ color: getPriorityColor(todo.priority) }}>
            {todo.text}
            <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;