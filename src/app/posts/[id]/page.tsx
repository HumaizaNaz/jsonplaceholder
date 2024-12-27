import { use } from 'react';
import Link from 'next/link';

// Interface for Post
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function getPost(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) throw new Error('Failed to fetch post');
  const data: Post = await res.json();
  return data;
}

export default function PostDetailPage({ params }: { params: { id: string } }) {
  const post = use(getPost(params.id)); // Fetch post details dynamically

  return (
    <div className="p-8 bg-gradient-to-br from-purple-100 via-blue-50 to-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-2xl hover:shadow-xl transition-shadow duration-300">
        <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-6">{post.title}</h1>
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600 text-sm">
            <strong>User ID:</strong> {post.userId}
          </p>
          <p className="text-gray-600 text-sm">
            <strong>Post ID:</strong> {post.id}
          </p>
        </div>
        <p className="text-lg text-gray-700 leading-7 mb-8">{post.body}</p>
        <div className="flex justify-center">
          <Link href="/posts">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300">
              Back to Posts
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
