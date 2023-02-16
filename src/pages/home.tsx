import React, { useEffect, useState } from 'react'
import { useInfiniteQuery, useQuery } from 'react-query'
import Filter from '../components/filter'
import PostCard from '../components/post-card'
import Button from '../components/UI/button'
import Loading from '../components/UI/loading'
import NextPage from '../lib/next-page'
import { getPosts } from '../lib/service'
import { Post } from '../types/post.model'

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('')

  const fetchPosts = async ({
    pageParam: { page = 0, limit = 20 } = {}
  } = {}) => {
    const response = await getPosts({ page, limit })
    return response
  }

  const { data, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage } =
    useInfiniteQuery('posts', fetchPosts, {
      getNextPageParam: NextPage
    })

  const filteredData =
    data?.pages
      .flatMap(page => page.data)
      .filter(post => {
        const text = post.text.toLowerCase()
        const author =
          `${post.owner.firstName} ${post.owner.lastName}`.toLowerCase()

        return text.includes(searchTerm) || author.includes(searchTerm)
      }) ?? []

  return (
    <>
      <Filter onChange={val => setSearchTerm(val)} />
      <div className="grid grid-cols-1 gap-24 sm:grid-cols-2 sm:gap-16 md:grid-cols-3 md:gap-8">
        {filteredData.length > 0 &&
          filteredData.map(post => <PostCard key={post.id} post={post} />)}

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
