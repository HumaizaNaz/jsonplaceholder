"use client";

import { use } from "react";
import Link from "next/link";

// Interface for Todo
interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

async function getTodo(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  if (!res.ok) throw new Error("Failed to fetch todo");
  const data: Todo = await res.json();
  return data;
}

export default function TodoDetailPage({ params }: { params: { id: string } }) {
  const todo = use(getTodo(params.id)); // Fetch todo details dynamically

  return (
    <div className="bg-gradient-to-r from-indigo-100 via-purple-200 to-pink-200 min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">{todo.title}</h1>

          <div className="space-y-4">
            <p className="text-lg text-gray-700">
              <span className="font-semibold">User ID:</span> {todo.userId}
            </p>

            <p
              className={`text-xl font-semibold ${
                todo.completed ? "text-green-500" : "text-red-500"
              }`}
            >
              {todo.completed ? "Completed" : "Not Completed"}
            </p>

            {/* Additional Info Section (Optional) */}
            <div className="mt-6">
              <p className="text-gray-600">
                This is a detailed view of the todo item with information about its completion status, user ID, and title. You can also update or delete the todo from here if functionality is added later.
              </p>
            </div>
          </div>

          {/* Back to Todos Button */}
          <div className="mt-6 text-center">
            <Link
              href="/todos"
              className="text-white bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded-lg font-semibold"
            >
              Back to Todos
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
