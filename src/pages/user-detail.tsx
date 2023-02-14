import React from 'react'
import { useQuery } from 'react-query'
import { useNavigate, useParams } from 'react-router-dom'
import Loading from '../components/UI/loading'
import { getUser } from '../lib/service'

export default function UserDetail() {
  const navigate = useNavigate()
  let { userId } = useParams()

  const { data, isLoading } = useQuery(
    ['user', userId],
    () => {
      return getUser(userId as string)
    },
    {
      enabled: !!userId
    }
  )

  const backHandle = () => {
    navigate(-1)
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <button className="absolute top-20 left-0 p-4" onClick={backHandle}>
        Back
      </button>
      <h1 className="text-4xl font-bold">User Detail</h1>
      <p className="text-2xl">{data?.firstName}</p>
      <p className="text-2xl">{data?.lastName}</p>
    </div>
  )
}
