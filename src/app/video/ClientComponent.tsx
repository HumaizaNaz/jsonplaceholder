// app/albums/ClientComponent.tsx
'use client';

import { useState, useEffect } from 'react';

interface Album {
  userId: number;
  id: number;
  title: string;
}

const ClientComponent = () => {
  const [albums, setAlbums] = useState<Album[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then((response) => response.json())
      .then((data) => setAlbums(data));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold">Albums (Client-side Update)</h1>
      <ul className="grid gap-4">
        {albums.map((album) => (
          <li key={album.id} className="border p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{album.title}</h2>
            <p>User ID: {album.userId}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientComponent;
