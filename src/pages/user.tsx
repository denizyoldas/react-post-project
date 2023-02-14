import React from 'react'
import { useQuery } from 'react-query'
import Loading from '../components/UI/loading'
import UserCard from '../components/user-card'
import { getUsers } from '../lib/service'

export default function User() {
  const { data, isLoading } = useQuery('users', getUsers)

  if (isLoading) {
    return <Loading />
  }

  return (
    <div className="grid grid-cols-1 gap-24 sm:grid-cols-2 sm:gap-16 md:grid-cols-3 md:gap-8">
      {data?.data.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  )
}
