// src/components/TodoList.tsx
import React, { useState } from 'react';
import { Todo } from '../types/types';

type TodoListProps = {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
};

const TodoList: React.FC<TodoListProps> = ({
  todos,
  addTodo,
  toggleTodo,
  deleteTodo,
}) => {
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      addTodo(newTodo);
      setNewTodo('');
    }
  };

  return (
    <div>
      <h2>Todo List</h2>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
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
                style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
              >
                {todo.text}
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
