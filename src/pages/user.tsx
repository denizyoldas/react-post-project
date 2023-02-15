import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import Filter from '../components/filter'
import Loading from '../components/UI/loading'
import UserCard from '../components/user-card'
import { getUsers } from '../lib/service'
import { User } from '../types/user.model'

export default function UserPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const { data, isLoading } = useQuery('users', getUsers)
  const [filteredUsers, setFilteredUsers] = useState<User[]>([])

  useEffect(() => {
    if (searchTerm) {
      const filteredUsers = data?.data.filter(user => {
        return (
          user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.lastName.toLowerCase().includes(searchTerm.toLowerCase())
        )
      })
      setFilteredUsers(filteredUsers || ([] as any))
    } else {
      setFilteredUsers(data?.data || ([] as any))
    }
  }, [searchTerm, data])

  const handleScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {}

  if (isLoading) {
    return <Loading />
  }

  return (
    <>
      <Filter onChange={val => setSearchTerm(val)} />
      <div
        className="grid grid-cols-1 gap-24 sm:grid-cols-2 sm:gap-16 md:grid-cols-3 md:gap-8"
        onScroll={handleScroll}
      >
        {filteredUsers.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </>
  )
}
