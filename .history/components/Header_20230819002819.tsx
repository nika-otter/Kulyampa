import React from 'react'

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-semibold">My Website</h1>
        <nav className="md:hidden">
          {/* Mobile Menu */}
          <button className="text-white hover:text-gray-400 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </nav>
        <nav className="hidden md:block">
          {/* Desktop Menu */}
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-gray-400">Home</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">About</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">Services</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header