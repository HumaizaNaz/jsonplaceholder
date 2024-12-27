"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const TodosPage = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  // Fetch the list of todos
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, []);

  // Function to delete a Todo item
  const deleteTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="bg-gradient-to-r from-indigo-100 via-purple-200 to-pink-200 min-h-screen py-8"> {/* Updated background color */}
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-8">Todos</h1>

        {/* Add Todo Button */}
        <div className="flex justify-end mb-6">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-lg hover:bg-blue-600 transition-colors"
            onClick={() => alert('Add Todo feature coming soon!')}
          >
            Add Todo
          </button>
        </div>

        {/* Todo List */}
        <div className="space-y-4">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className={`border p-4 rounded-lg shadow-lg flex justify-between items-center ${
                todo.completed ? 'bg-green-50 border-green-300' : 'bg-red-50 border-red-300'
              }`}
            >
              <Link href={`/todos/${todo.id}`} className="cursor-pointer flex-1">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">{todo.title}</h2>
                  <p
                    className={`text-sm mt-2 font-medium ${
                      todo.completed ? 'text-green-600' : 'text-red-600'
                    }`}
                  >
                    {todo.completed ? 'Completed' : 'Not Completed'}
                  </p>
                </div>
              </Link>

              {/* Delete Button */}
              <button
                onClick={() => deleteTodo(todo.id)}
                className="bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600 transition-colors"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodosPage;
