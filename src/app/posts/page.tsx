"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const PostsPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  // Fetch the list of posts
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="p-8 bg-gradient-to-r from-blue-50 via-white to-blue-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-8">Posts</h1>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white border border-gray-200 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <Link href={`/posts/${post.id}`}>
                <div className="cursor-pointer">
                  <h2 className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200 mb-2">
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                    {post.body.slice(0, 80)}...
                  </p>
                </div>
              </Link>
              <div className="mt-4 text-right">
                <Link href={`/posts/${post.id}`}>
                  <button className="text-sm text-blue-600 hover:underline">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostsPage;
