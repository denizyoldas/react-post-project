import React from 'react'
import cx from 'classnames'

interface Props {
  variant: 'primary' | 'secondary'
  onClick: () => void
  children: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

export default function Button({
  variant,
  onClick,
  children,
  type,
  disabled
}: Props) {
  return (
    <button
      className={cx(
        'rounded-md px-4 py-2 text-white',
        variant === 'primary' ? 'bg-blue-500' : 'bg-gray-500',
        disabled && 'cursor-not-allowed opacity-50'
      )}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
