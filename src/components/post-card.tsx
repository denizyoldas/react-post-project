import React from 'react'
import { Post } from '../types/post.model'
import { format } from 'date-fns'
import { useNavigate } from 'react-router-dom'

interface Props {
  post: Post
}

export default function PostCard({ post }: Props) {
  const navigate = useNavigate()
  const goUserDetail = () => {
    navigate(`/user/${post.owner.id}`)
  }

  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-lg">
      <img
        src={post.image}
        alt={post.text}
        className="h-64 w-full object-cover"
      />
      <div className="p-4">
        <h2 className="mb-2 text-xl font-bold">{post.text}</h2>
        <div
          className="group mb-4 flex cursor-pointer items-center"
          onClick={goUserDetail}
        >
          <img
            src={post.owner.picture}
            alt={post.owner.firstName + ' ' + post.owner.lastName}
            className="mr-2 h-8 w-8 rounded-full group-hover:opacity-75"
          />
          <p className="text-gray-700 group-hover:text-secondary group-hover:underline">
            {post.owner.firstName}
          </p>
        </div>
        <div className="mb-4 flex flex-wrap">
          {post.tags.map(tag => (
            <span
              key={tag}
              className="mr-2 mb-2 rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center">
          <p className="text-gray-700">{post.likes} Likes</p>
          <p className="ml-auto text-gray-700">
            {format(new Date(post.publishDate), 'dd MMM yyyy')}
          </p>
        </div>
      </div>
    </div>
  )
}
