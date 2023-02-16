import React, { useEffect, useState } from 'react'
import cx from 'classnames'

export default function GoTop() {
  const [display, setDisplay] = useState(false)
  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      if (scrollY > 200) {
        setDisplay(true)
      } else {
        setDisplay(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <button
      className={cx(
        'fixed bottom-10 right-10 rounded-full bg-secondary p-4 text-white',
        {
          'opacity-0': !display,
          'opacity-100': display
        }
      )}
      onClick={goTop}
    >
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  )
}
