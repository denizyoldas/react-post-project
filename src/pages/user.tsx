import { useState } from 'react'
import { useInfiniteQuery } from 'react-query'
import Filter from '../components/filter'
import Button from '../components/UI/button'
import Loading from '../components/UI/loading'
import UserCard from '../components/user-card'
import { getUsers } from '../lib/service'

export default function UserPage() {
  const [searchTerm, setSearchTerm] = useState('')

  const fetchUsers = async ({
    pageParam: { page = 0, limit = 20 } = {}
  } = {}) => {
    const response = await getUsers({ page, limit })
    return response
  }

  const { data, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage } =
    useInfiniteQuery('users', fetchUsers, {
      getNextPageParam: lastPage => {
        return lastPage.total < (lastPage.page + 1) * lastPage.limit
          ? undefined
          : { page: lastPage.page + 1, limit: lastPage.limit }
      }
    })

  const filteredUsers =
    data?.pages
      .flatMap(page => page.data)
      .filter(user => {
        const fullName = `${user.firstName} ${user.lastName}`.toLowerCase()
        return fullName.includes(searchTerm)
      }) ?? []

  return (
    <>
      <Filter onChange={val => setSearchTerm(val)} />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {filteredUsers.length > 0 &&
          filteredUsers.map(user => <UserCard key={user.id} user={user} />)}

        {isLoading && <Loading />}
      </div>
      {isFetchingNextPage && <Loading />}
      <div className="flex w-full items-center justify-center pt-10">
        <Button
          variant="primary"
          onClick={fetchNextPage}
          disabled={!hasNextPage}
        >
          {hasNextPage ? 'Load More' : 'No More Users'}
        </Button>
      </div>
    </>
  )
}
