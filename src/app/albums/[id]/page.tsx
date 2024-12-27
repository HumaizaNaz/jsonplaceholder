import { use } from 'react';
import Link from 'next/link';

// Interface for the Album
interface Album {
  userId: number;
  id: number;
  title: string;
}

async function getAlbum(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`);
  const data: Album = await res.json();
  return data;
}

export default function AlbumDetailPage({ params }: { params: { id: string } }) {
  const album = use(getAlbum(params.id)); // Fetch album based on the dynamic ID

  return (
    <div className="p-8 bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white p-8 rounded-lg shadow-xl max-w-2xl mx-auto hover:shadow-2xl transition-shadow duration-300">
          <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-6 hover:text-indigo-600 transition-colors duration-200">
            {album.title}
          </h1>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <span className="inline-block bg-indigo-600 text-white text-sm font-bold py-1 px-3 rounded-full shadow">
                User ID: {album.userId}
              </span>
              <p className="text-xl text-gray-800">
                <strong>Album ID:</strong> {album.id}
              </p>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              This album is a part of the users collection. Browse the related photos and explore
              more about the curated content in this album.
            </p>
            <div className="mt-8 text-center">
              <Link href="/albums">
                <button className="inline-block text-white bg-indigo-600 hover:bg-indigo-700 px-6 py-2 rounded-md shadow-md transition-transform duration-200 transform hover:scale-105">
                  Back to Albums
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
