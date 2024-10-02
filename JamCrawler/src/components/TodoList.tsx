import React, { useState } from 'react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
  priority: 'red' | 'yellow' | 'green'; // Added priority field
  luckValue: number; // Associated Luck value
}

interface TodoListProps {
  todos: Todo[];
  addTodo: (text: string, priority: 'red' | 'yellow' | 'green', luckValue: number) => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, addTodo, toggleTodo, deleteTodo }) => {
  const [newTodo, setNewTodo] = useState('');
  const [priority, setPriority] = useState<'red' | 'yellow' | 'green'>('green'); // Default priority is green

  const handleAddTodo = () => {
    if (newTodo.trim() !== '' && todos.length < 3) {
      const luckValue = getLuckValue(priority);
      addTodo(newTodo, priority, luckValue);
      setNewTodo(''); // Clear input after adding
      setPriority('green'); // Reset priority after adding
    }
  };

  // Function to get Luck value based on priority
  const getLuckValue = (priority: 'red' | 'yellow' | 'green'): number => {
    switch (priority) {
      case 'red':
        return 3;
      case 'yellow':
        return 2;
      case 'green':
      default:
        return 1;
    }
  };

  const isLimitReached = todos.length >= 3;

  return (
    <div className="todoContainer">
      <h2>Todo List</h2>
      <div className="todoInputContainer">
        <input
          className="todo-input"
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
          disabled={isLimitReached}
        />

        {/* Priority Selector */}
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value as 'red' | 'yellow' | 'green')}
          disabled={isLimitReached}
        >
          <option value="red">High Priority (Red)</option>
          <option value="yellow">Medium Priority (Yellow)</option>
          <option value="green">Low Priority (Green)</option>
        </select>

        <button onClick={handleAddTodo} disabled={isLimitReached}>
          Add
        </button>
      </div>

      {isLimitReached && (
        <p style={{ color: 'red' }}>Task limit reached! Complete or delete a task to add more.</p>
      )}

      {todos.length > 0 ? (
        todos.map((todo) => (
          <div key={todo.id} style={{ borderLeft: `4px solid ${todo.priority}`, padding: '5px' }}>
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
                  textDecoration: todo.completed ? 'line-through' : 'none',
                }}
              >
                {todo.text} (Luck: {todo.luckValue}) {/* Display Luck Value */}
              </label>
            </div>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </div>
        ))
      ) : (
        <p>No todos added.</p>
      )}
    </div>
  );
};

export default TodoList;
