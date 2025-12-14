import { blogs } from '@/Content'
import PostCard from '@/components/PostCard'
import { Button } from '@/components/ui/button'




function LastestPost() {
  return (
    <div className='max-wrapper min-h-full py-8'>
      <h2 className='heading-3 text-center'>Lastest Post</h2>
      {/* blogs */}
      <div className='flex justify-center items-center'>
        {/* Title */}
        <div className='grid grid-cols-1  md:grid-cols-2  py-8 gap-5'>
          {blogs.map((blog) => (
            <PostCard
              key={blog.id}
              coverImage={blog.cover}
              catogray={blog.catogray}
              title={blog.title}
              autherImage={blog.autherimage}
              autherName={blog.authername}
              date={blog.date} />
          ))}

        </div>
      </div>
      <div className='flex items-center justify-center'>
        <Button
          size={"md"}
          variant={"ghost"}>View All</Button>
      </div>
    </div>
  )
}

export default LastestPost