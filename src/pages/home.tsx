import React from 'react'
import { useQuery } from 'react-query'
import PostCard from '../components/post-card'
import Loading from '../components/UI/loading'
import { getPosts } from '../lib/service'

export default function Home() {
  const { data, isLoading } = useQuery('posts', getPosts)

  if (isLoading) {
    return <Loading />
  }

  return (
    <div className="grid grid-cols-1 gap-24 sm:grid-cols-2 sm:gap-16 md:grid-cols-3 md:gap-8">
      {data?.data.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  )
}
