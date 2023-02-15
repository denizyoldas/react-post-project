import React from 'react'

export default function NotFound() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <h1 className="mb-4 text-4xl font-bold text-white">404 Not Found</h1>
      <p className="mb-8 text-center text-gray-200">
        Sorry, the page you're looking for does not exist.
      </p>
      <p className="text-center text-gray-200">Enjoy the rest of your day!</p>
    </div>
  )
}
