import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import Loading from '../components/UI/loading'
import UserDetailCard from '../components/user-detail-card'
import { getUser } from '../lib/service'

export default function UserDetail() {
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

  if (isLoading) {
    return <Loading />
  }

  return (
    <div className="flex h-screen flex-col items-center">
      <UserDetailCard user={data} />
    </div>
  )
}
