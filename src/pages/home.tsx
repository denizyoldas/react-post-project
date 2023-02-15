import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import Filter from '../components/filter'
import PostCard from '../components/post-card'
import Loading from '../components/UI/loading'
import { getPosts } from '../lib/service'
import { Post } from '../types/post.model'

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('')
  const { data, isLoading } = useQuery('posts', getPosts)
  const [filteredData, setFilteredData] = useState<Post[]>([])

  useEffect(() => {
    if (searchTerm) {
      const filtered = data?.data.filter(post =>
        post.text.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setFilteredData(filtered || ([] as any))
    } else {
      setFilteredData(data?.data || ([] as any))
    }
  }, [searchTerm, data])

  if (isLoading) {
    return <Loading />
  }

  return (
    <>
      <Filter onChange={val => setSearchTerm(val)} />
      <div className="grid grid-cols-1 gap-24 sm:grid-cols-2 sm:gap-16 md:grid-cols-3 md:gap-8">
        {filteredData.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </>
  )
}
