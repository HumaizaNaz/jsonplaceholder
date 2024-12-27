// app/albums/page.tsx

import React from 'react';
import ClientComponent from './ClientComponent';
// TypeScript interfaces for the data structure
interface Album {
  userId: number;
  id: number;
  title: string;
}

// Server-side fetching logic
const Albums = async () => {
  // Fetch data server-side
  const response = await fetch('https://jsonplaceholder.typicode.com/albums');
  const albums: Album[] = await response.json();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Albums</h1>
      <ul className="grid gap-4">
        {albums.map((album) => (
          <li key={album.id} className="border p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{album.title}</h2>
            <p>User ID: {album.userId}</p>
          </li>
        ))}
      </ul>
      <ClientComponent/>
    </div>
  );
};

export default Albums;
