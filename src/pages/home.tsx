import { List } from '../components/list'
import PostCard from '../components/post-card'
import { getPosts } from '../lib/service'
import { Post } from '../types/post.model'

export default function Home() {
  const renderItem = (item: Post) => <PostCard key={item.id} post={item} />

  return (
    <List
      queryKey="posts"
      renderItem={renderItem}
      searchKeys={['text', 'owner.firstName', 'owner.lastName']}
      className="grid grid-cols-1 gap-24 sm:grid-cols-2 sm:gap-16 md:grid-cols-3 md:gap-8"
      getFunction={getPosts}
    />
  )
}
