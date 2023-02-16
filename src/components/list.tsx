import React, { useState } from 'react'
import { useInfiniteQuery } from 'react-query'
import Filter from '../components/filter'
import Button from '../components/UI/button'
import Loading from '../components/UI/loading'
import { Post } from '../types/post.model'
import NextPage from '../lib/next-page'
import { User } from '../types/user.model'

interface HomeProps {
  queryKey: string
  searchKeys: string[]
  className?: string
  renderItem: (item: Post | User) => JSX.Element
  getFunction: (pageParam?: { page?: number; limit?: number }) => Promise<any>
}

export const Home: React.FC<HomeProps> = ({
  queryKey,
  searchKeys,
  className,
  renderItem,
  getFunction
}) => {
  const [searchTerm, setSearchTerm] = useState('')
  const { data, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage } =
    useInfiniteQuery(queryKey, ({ pageParam }) => getFunction(pageParam), {
      getNextPageParam: NextPage
    })

  const filteredData =
    data?.pages
      .flatMap(page => page.data)
      .filter((item: any) =>
        searchKeys.some(
          key =>
            item[key].toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
        )
      ) ?? []

  return (
    <>
      <Filter onChange={setSearchTerm} />
      <div className={className}>
        {filteredData.map(renderItem)}

        {isLoading && <Loading />}
      </div>

      {isFetchingNextPage && <Loading />}
      <div className="flex w-full items-center justify-center pt-10">
        <Button
          variant="primary"
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage}
        >
          {hasNextPage ? 'Load More' : 'No More Data'}
        </Button>
      </div>
    </>
  )
}
