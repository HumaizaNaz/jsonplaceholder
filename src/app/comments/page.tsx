"use client";  // Ensure this is client-side

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

const CommentsPage = () => {
  const [comments, setComments] = useState<Comment[]>([]);

  // Fetch the list of comments when the component mounts
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((response) => response.json())
      .then((data) => setComments(data));
  }, []);

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-10">User Comments</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {comments.map((comment) => (
          <li key={comment.id} className="bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out">
            <Link href={`/comments/${comment.id}`}>
              <div className="cursor-pointer">
                <h2 className="text-2xl font-semibold text-blue-900 mb-3">{comment.name}</h2>
                <p className="text-gray-800 mb-4">{comment.body}</p>
                <p className="text-sm text-gray-600">By: <span className="text-blue-500">{comment.email}</span></p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentsPage;
