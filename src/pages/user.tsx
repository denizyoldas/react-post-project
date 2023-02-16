import { useEffect, useState } from 'react'
import { useInfiniteQuery } from 'react-query'
import Filter from '../components/filter'
import Button from '../components/UI/button'
import Loading from '../components/UI/loading'
import UserCard from '../components/user-card'
import { getUsers } from '../lib/service'
import { Pagination } from '../types/server.model'

export default function UserPage() {
  const [searchTerm, setSearchTerm] = useState('')

  const fetchUsers = async ({
    pageParam = { page: 0, limit: 20 }
  }: {
    pageParam?: Pagination
  }) => {
    const response = await getUsers(pageParam)
    return response
  }

  const { data, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage } =
    useInfiniteQuery('users', fetchUsers, {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.total < (lastPage.page + 1) * lastPage.limit) {
          return undefined
        }
        return {
          page: lastPage.page + 1,
          limit: lastPage.limit
        }
      }
    })

  const filteredUsers =
    data?.pages
      .flatMap(page => page.data)
      .filter(user => {
        const fullName = `${user.firstName} ${user.lastName}`.toLowerCase()
        return fullName.includes(searchTerm)
      }) ?? []

  const loadMore = () => {
    if (hasNextPage) {
      fetchNextPage()
    }
  }

  if (isLoading && !filteredUsers.length) {
    return <Loading />
  }

  return (
    <>
      <Filter onChange={val => setSearchTerm(val)} />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {filteredUsers.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
      {isFetchingNextPage && <Loading />}
      <div className="flex w-full items-center justify-center pt-10">
        <Button variant="primary" onClick={loadMore} disabled={!hasNextPage}>
          Load More
        </Button>
      </div>
    </>
  )
}
