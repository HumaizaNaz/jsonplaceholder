import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// TypeScript interface for photo
interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

// Server-side fetching logic for the photos
const PhotosPage = async () => {
  // Fetch data server-side
  const response = await fetch('https://jsonplaceholder.typicode.com/photos');
  const photos: Photo[] = await response.json();

  return (
    <div className="p-8 bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen">
      <h1 className="text-4xl font-extrabold mb-10 text-center text-gray-900 tracking-wide">
        Photo Gallery
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {photos.slice(0, 12).map((photo) => (
          <div
            key={photo.id}
            className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
          >
            <Link href={`/photos/${photo.id}`}>
              <div className="cursor-pointer">
                <Image
                  src={photo.thumbnailUrl}
                  alt={photo.title}
                  width={400}
                  height={400}
                  className="w-full h-48 object-cover rounded-t-lg mb-2"
                />
                <h2 className="text-sm font-semibold text-gray-700 text-center px-4 py-2 truncate">
                  {photo.title}
                </h2>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotosPage;
