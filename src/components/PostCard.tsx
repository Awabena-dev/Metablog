import { postCard } from '@/Type'
import Image from 'next/image'


const PostCard = ({ coverImage, title, autherImage, autherName, catogray, date }: postCard) => {
  return (
    <div className='max-w-98 max-h-120 p-4 rounded-[12px] border border-secondray-100 dark:border-[#242536] flex flex-col gap-y-4'>
      {/* Cover */}
      <Image src={coverImage} width={360} height={240} alt='Cover Image' className=' object-fill aspect-video' />

      <span className='body-5 font-medium px-2.5 py-1 bg-brand/5 text-brand rounded-[6px] max-w-fit'>{catogray}</span>

      <h1 className='heading-3 font-semibold text-secondray-800'>{title}</h1>

      {/* Short Info */}
      <div className='flex items-center gap-5'>
        <div className='flex items-center gap-3'>
          <Image src={autherImage} width={36} height={36} alt={`${autherName} image`} />
          <h4 className='body-4 text-secondray-400'>{autherName}</h4>
        </div>

        <div>
          <h4 className='body-4 text-secondray-400'>{date}</h4>
        </div>
      </div>
    </div>
  )
}

export default PostCard