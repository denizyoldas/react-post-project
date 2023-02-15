import React, { useEffect } from 'react'

interface Props {
  onChange: (value: string) => void
}

export default function Filter({ onChange }: Props) {
  const [value, setValue] = React.useState('')

  useEffect(() => {
    onChange(value)
  }, [value, onChange])

  const changeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const clearInput = () => {
    setValue('')
  }

  return (
    <div className="relative pb-8">
      <input
        type="text"
        className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
        onChange={changeHandle}
        value={value}
        placeholder="Search"
      />
      {value && (
        <button className="absolute right-4 top-2" onClick={clearInput}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-400 hover:text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
    </div>
  )
}
