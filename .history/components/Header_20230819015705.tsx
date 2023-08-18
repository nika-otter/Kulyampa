import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4 px-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-semibold">Кулямпа</h1>
        <nav>
          <div className="flex space-x-4">
            <Link href="/">Home</Link>
            <Link href="/YN">SEO</Link>
            {/* <li>
              <a href="#YN" className="hover:text-gray-400">About</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">Services</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">Contact</a>
            </li> */}
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header