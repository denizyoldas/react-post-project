import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="mb-8  flex items-center justify-between border-b bg-white p-4 text-black drop-shadow-md">
      <h1 className="text-2xl font-bold">Title</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:text-gray-500 hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="user" className="hover:text-gray-500 hover:underline">
              Users
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
