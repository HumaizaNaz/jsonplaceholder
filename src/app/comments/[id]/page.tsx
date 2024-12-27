import { use } from 'react';
import Link from 'next/link';

// Interface for the Comment
interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

// Dynamic function to fetch a single comment's data
async function getComment(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`);
  const data: Comment = await res.json();
  return data;
}

export default function CommentDetailPage({ params }: { params: { id: string } }) {
  const comment = use(getComment(params.id)); // Fetch comment based on the dynamic ID

  return (
    <div className="p-8 bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out">
        <h1 className="text-3xl font-extrabold text-blue-900 mb-6 text-center hover:text-blue-600 transition-colors duration-200">
          {comment.name}
        </h1>
        <p className="text-lg text-gray-800 mb-6 leading-relaxed">
          {comment.body}
        </p>
        <div className="flex justify-between items-center text-sm text-gray-600 border-t pt-4 mt-4">
          <p>
            By: <span className="text-blue-500 hover:underline">{comment.email}</span>
          </p>
          <p>
            Post ID: <span className="text-blue-500">{comment.postId}</span>
          </p>
        </div>
        <div className="mt-8 text-center">
          <Link href="/comments">
            <button className="inline-block text-white bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-md shadow-md transition-transform duration-200 transform hover:scale-105">
              Back to Comments
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
