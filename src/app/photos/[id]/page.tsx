import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

// TypeScript interface for photo
interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

// Fetching the details of a single photo
const PhotoDetail = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  // Fetch the specific photo using the `id`
  const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
  const photo: Photo = await response.json();

  if (!photo) {
    notFound(); // If photo is not found, show 404 page
  }

  return (
    <div className='p-8 bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen'>
    <div className="p-6 max-w-4xl mx-auto ">
      <h1 className="text-4xl font-extrabold mb-6 text-center text-gray-800">Photo Details</h1>
      <div className="bg-gradient-to-r from-blue-50 via-white to-blue-50 border border-gray-200 rounded-lg shadow-lg overflow-hidden">
        <Image
          src={photo.url}
          alt={photo.title}
          width={800}
          height={600}
          className="w-full h-auto object-cover rounded-t-lg"
        />
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">{photo.title}</h2>
          <p className="text-gray-700 mb-2">
            <strong>Album ID:</strong> {photo.albumId}
          </p>
          <p className="text-gray-700">
            <strong>Photo ID:</strong> {photo.id}
          </p>
        </div>
      </div>
      <div className="mt-8 text-center">
        <Link href="/photos">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-500 transition duration-300 ease-in-out">
            Back to Photos
          </button>
        </Link>
      </div>
    </div></div>
  );
};

export default PhotoDetail;
