import React from 'react'
import { Userdetail } from '../types/user.model'

interface Props {
  user: Userdetail | undefined
}

export default function UserDetailCard({ user }: Props) {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-lg">
      {user?.firstName}
    </div>
  )
}
