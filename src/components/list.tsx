import React, { useState } from 'react'
import { useInfiniteQuery } from 'react-query'
import Filter from '../components/filter'
import Button from '../components/UI/button'
import Loading from '../components/UI/loading'
import NextPage from '../lib/next-page'

interface ListProps {
  queryKey: string
  searchKeys: string[]
  className?: string
  renderItem: (item: any) => JSX.Element
  getFunction: (pageParam?: any) => Promise<any>
}

export const List: React.FC<ListProps> = ({
  queryKey,
  searchKeys,
  className,
  renderItem,
  getFunction
}) => {
  const [searchTerm, setSearchTerm] = useState('')

  const fetchData = async ({
    pageParam: { page = 0, limit = 20 } = {}
  } = {}) => {
    const response = await getFunction({ page, limit })
    return response
  }

  const { data, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage } =
    useInfiniteQuery(queryKey, fetchData, {
      getNextPageParam: NextPage
    })

  const filteredData =
    data?.pages
      .flatMap(page => page.data)
      .filter((item: any) =>
        searchKeys.some(key => {
          const value = key.split('.').reduce((o, i) => o[i], item)
          return value?.toLowerCase().includes(searchTerm.toLowerCase())
        })
      ) ?? []

  return (
    <>
      <Filter onChange={setSearchTerm} />
      {isLoading && <Loading />}

      <div className={className}>{filteredData.map(renderItem)}</div>

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
