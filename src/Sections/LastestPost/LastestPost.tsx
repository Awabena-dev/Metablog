import {  blogProps } from '@/Type'
import PostCard from '@/components/PostCard'
import { Button } from '@/components/ui/button'


export default function LastestPost({ blog }: { blog: blogProps[] }) {
  return (
    <div className='max-wrapper min-h-full py-8'>
      <h2 className='heading-3 text-center'>Lastest Post</h2>
      <div className='flex justify-center items-center'>
        <div className='grid grid-cols-1 md:grid-cols-2 py-8 gap-5'>
          {blog.map((post) => (
            <PostCard
              key={post.currentslug}
              coverImage={post.coverImage}
              catogray={post.category}
              title={post.title}
              autherImage={post.authorImage}
              autherName={post.authorName}
              date={post.date}
            />
          ))}
        </div>
      </div>
      <div className='flex items-center justify-center'>
        <Button size="md" variant="ghost">View All</Button>
      </div>
    </div>
  )
}
