"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';

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

const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);

  // Fetch the list of users
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="p-6 bg-gradient-to-r from-teal-100 to-blue-50  min-h-screen">
      <h1 className="text-3xl font-extrabold mb-8 text-center text-gray-900">Users</h1>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <Link href={`/user/${user.id}`}>
              <div className="cursor-pointer">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{user.name}</h2>
                <p className="text-sm text-gray-600">{user.email}</p>
                <div className="mt-4 text-sm text-gray-500">
                  <p><strong>Username:</strong> {user.username}</p>
                  <p><strong>Phone:</strong> {user.phone}</p>
                  <p><strong>Website:</strong> {user.website}</p>
                </div>
                <div className="mt-4">
                  <Link
                    href={`/user/${user.id}`}
                    className="inline-block bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-800 transition duration-300"
                  >
                    View Profile
                  </Link>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersPage;
