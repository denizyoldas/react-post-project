import React from 'react'
import { useNavigate } from 'react-router-dom'
import { User } from '../types/user.model'

interface Props {
  user: User
}

export default function UserCard({ user }: Props) {
  const navigate = useNavigate()

  const clickHandle = () => {
    navigate(`/user/${user.id}`)
  }

  return (
    <div
      className="cursor-pointer overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
      onClick={clickHandle}
    >
      <img
        src={user.picture}
        alt={`${user.firstName} ${user.lastName}`}
        className="h-64 w-full object-cover"
      />
      <div className="p-4">
        <h2 className="mb-2 text-xl font-bold">
          {user.title} {user.firstName} {user.lastName}
        </h2>
      </div>
    </div>
  )
}
