"use client";  // Add this line to mark the component as a Client Component

import { use } from "react";

// Interface for User
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

async function getUser(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!res.ok) throw new Error("Failed to fetch user");
  const data: User = await res.json();
  return data;
}

export default function UserDetailPage({ params }: { params: { id: string } }) {
  const user = use(getUser(params.id)); // Fetch user details dynamically

  return (
    <div className="bg-gradient-to-r from-teal-100 to-blue-50 min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-6">{user.name}</h1>

        {/* Back Button */}
        <div className="mb-6">
          <button
            onClick={() => window.history.back()}
            className="bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 transition duration-300"
          >
            Back to Users List
          </button>
        </div>

        <div className="space-y-6">
          {/* User Info */}
          <div>
            <p className="text-lg text-gray-700">
              <strong>Username:</strong> {user.username}
            </p>
            <p className="text-lg text-gray-700">
              <strong>Email:</strong> {user.email}
            </p>
            <p className="text-lg text-gray-700">
              <strong>Phone:</strong> {user.phone}
            </p>
            <p className="text-lg text-gray-700">
              <strong>Website:</strong>{" "}
              <a href={`https://${user.website}`} className="text-teal-500 hover:underline">
                {user.website}
              </a>
            </p>
          </div>

          {/* Address */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Address</h2>
            <p className="text-lg text-gray-700">
              {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
            </p>
          </div>

          {/* Company */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Company</h2>
            <p className="text-lg text-gray-700">
              <strong>Name:</strong> {user.company.name}
            </p>
            <p className="text-lg text-gray-700">
              <strong>Catch Phrase:</strong> {user.company.catchPhrase}
            </p>
            <p className="text-lg text-gray-700">
              <strong>Business:</strong> {user.company.bs}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
