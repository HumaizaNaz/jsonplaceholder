"use client";  // Ensure this is client-side

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Album {
  userId: number;
  id: number;
  title: string;
}

const AlbumsPage = () => {
  const [albums, setAlbums] = useState<Album[]>([]);

  // Fetch the list of albums when the component mounts
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then((response) => response.json())
      .then((data) => setAlbums(data));
  }, []);

  return (
    <div className="p-8 bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-8">Albums</h1>
        <ul className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {albums.map((album) => (
            <li key={album.id} className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-transform transform hover:scale-105">
              <Link href={`/albums/${album.id}`}>
                <div className="cursor-pointer">
                  <h2 className="text-2xl font-semibold text-blue-900 hover:text-blue-600 mb-4">{album.title}</h2>
                  <p className="text-gray-700">Click to view details</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AlbumsPage;
