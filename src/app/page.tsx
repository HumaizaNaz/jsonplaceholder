import React from 'react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-screen text-white flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-400"
        style={{
          backgroundImage: "url('/api1.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div> {/* Dark overlay */}
        <div className="relative z-10 text-center px-6 md:px-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 text-shadow-md">
            Welcome to the JSONPlaceholder API Explorer
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Explore different resources like Posts, Comments, Albums, Todos, Photos, Users, and more using interactive links.
          </p>
          <a
            href="#explore"
            className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-3 px-8 rounded-full text-lg font-semibold shadow-lg hover:scale-105 transform transition duration-300"
          >
            Start Exploring
          </a>
        </div>
      </section>

      {/* Explore Section */}
      <section id="explore" className="py-16 px-6 bg-gray-100">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center text-gray-800 mb-12">Explore JSONPlaceholder Resources</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Post Section */}
          <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105 p-6">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Posts</h3>
            <p className="text-sm text-gray-600">Explore the latest posts available in the JSONPlaceholder API.</p>
            <a
              href="/posts"
              className="text-blue-500 hover:text-blue-700 font-semibold mt-4 inline-block"
            >
              View Posts
            </a>
          </div>

          {/* Comment Section */}
          <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105 p-6">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Comments</h3>
            <p className="text-sm text-gray-600">Dive into the comments section for posts and get detailed insights.</p>
            <a
              href="/comments"
              className="text-blue-500 hover:text-blue-700 font-semibold mt-4 inline-block"
            >
              View Comments
            </a>
          </div>

          {/* Album Section */}
          <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105 p-6">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Albums</h3>
            <p className="text-sm text-gray-600">Browse through albums and pictures available in the JSONPlaceholder API.</p>
            <a
              href="/albums"
              className="text-blue-500 hover:text-blue-700 font-semibold mt-4 inline-block"
            >
              View Albums
            </a>
          </div>

          {/* Todos Section */}
          <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105 p-6">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Todos</h3>
            <p className="text-sm text-gray-600">Manage and explore your todo list items from the API.</p>
            <a
              href="/todos"
              className="text-blue-500 hover:text-blue-700 font-semibold mt-4 inline-block"
            >
              View Todos
            </a>
          </div>

          {/* Photos Section */}
          <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105 p-6">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Photos</h3>
            <p className="text-sm text-gray-600">Browse through photos from the API to view beautiful images.</p>
            <a
              href="/photos"
              className="text-blue-500 hover:text-blue-700 font-semibold mt-4 inline-block"
            >
              View Photos
            </a>
          </div>

          {/* Users Section */}
          <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105 p-6">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Users</h3>
            <p className="text-sm text-gray-600">Explore the users list and get detailed information about each user.</p>
            <a
              href="/users"
              className="text-blue-500 hover:text-blue-700 font-semibold mt-4 inline-block"
            >
              View Users
            </a>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="text-center">
          <p className="text-sm">&copy; 2024 JsonPlaceHolder | All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
