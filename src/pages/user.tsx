import { List } from '../components/list'
import UserCard from '../components/user-card'
import { getUsers } from '../lib/service'
import { User } from '../types/user.model'

export default function UserPage() {
  const renderItem = (user: User) => <UserCard key={user.id} user={user} />

  return (
    <List
      queryKey="users"
      renderItem={renderItem}
      searchKeys={['firstName', 'lastName']}
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3"
      getFunction={getUsers}
    />
  )
}
