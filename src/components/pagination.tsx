import React from 'react'

export interface PaginationProps {
  currentPage: number
  totalPages: number
  onChange: (page: number) => void
}

export default function Pagination({
  currentPage,
  totalPages,
  onChange
}: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1)

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) {
      return
    }
    onChange(page)
  }

  return (
    <div className="flex items-center justify-center">
      <button
        className="p-2 text-white"
        onClick={() => handlePageChange(currentPage - 1)}
      >
        Prev
      </button>
      {pages.map(page => (
        <button
          key={page}
          className={`p-2 text-white ${
            page === currentPage ? 'bg-blue-500' : ''
          }`}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </button>
      ))}
      <button
        className="p-2 text-white"
        onClick={() => handlePageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  )
}
