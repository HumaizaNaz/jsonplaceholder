"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null); // Reference to the mobile menu container

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false); // Close the menu if clicked outside
      }
    };

    // Add the event listener on mount
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-gray-800 text-white p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">JsonPlaceHolder</div>

        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex space-x-6">
          <li>
            <Link href="/" className="hover:text-yellow-300 transition-all duration-200">
              Home
            </Link>
          </li>
          <li>
            <Link href="/posts" className="hover:text-yellow-300 transition-all duration-200">
              Posts
            </Link>
          </li>
          <li>
            <Link href="/comments" className="hover:text-yellow-300 transition-all duration-200">
              Comments
            </Link>
          </li>
          <li>
            <Link href="/albums" className="hover:text-yellow-300 transition-all duration-200">
              Albums
            </Link>
          </li>
          <li>
            <Link href="/photos" className="hover:text-yellow-300 transition-all duration-200">
              Photos
            </Link>
          </li>
          <li>
            <Link href="/todos" className="hover:text-yellow-300 transition-all duration-200">
              Todos
            </Link>
          </li>
          <li>
            <Link href="/user" className="hover:text-yellow-300 transition-all duration-200">
              Users
            </Link>
          </li>
        </ul>

        {/* Mobile Menu (Slide-In) */}
        <div
          ref={menuRef} // Attach reference to the mobile menu div
          className={`fixed inset-0 z-50 bg-gray-800 bg-opacity-75 transition-transform duration-300 transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } lg:hidden flex items-center justify-center`}
        >
          <ul className="space-y-4 text-center">
            <li>
              <Link
                href="/"
                className="hover:text-yellow-300 transition-all duration-200"
                onClick={toggleMenu} // Close menu on link click
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/posts"
                className="hover:text-yellow-300 transition-all duration-200"
                onClick={toggleMenu} // Close menu on link click
              >
                Posts
              </Link>
            </li>
            <li>
              <Link
                href="/comments"
                className="hover:text-yellow-300 transition-all duration-200"
                onClick={toggleMenu} // Close menu on link click
              >
                Comments
              </Link>
            </li>
            <li>
              <Link
                href="/albums"
                className="hover:text-yellow-300 transition-all duration-200"
                onClick={toggleMenu} // Close menu on link click
              >
                Albums
              </Link>
            </li>
            <li>
              <Link
                href="/photos"
                className="hover:text-yellow-300 transition-all duration-200"
                onClick={toggleMenu} // Close menu on link click
              >
                Photos
              </Link>
            </li>
            <li>
              <Link
                href="/todos"
                className="hover:text-yellow-300 transition-all duration-200"
                onClick={toggleMenu} // Close menu on link click
              >
                Todos
              </Link>
            </li>
            <li>
              <Link
                href="/user"
                className="hover:text-yellow-300 transition-all duration-200"
                onClick={toggleMenu} // Close menu on link click
              >
                Users
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
