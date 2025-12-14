import React from 'react'

const Advertisement = () => {
  return (
    <div className='max-wrapper h-25 w-full flex items-center justify-center'>
        {/* ad box */}
        <div className='max-w-187.5 w-187.5 bg-secondray-100 dark:bg-[#242536] h-full text-center pt-4'>
            <h4 className='body-5 text-secondray-500'>Adverisement</h4>
            <h3 className='heading-2 text-secondray-500'>You Can Place Ads</h3>
            <h4 className='body-3 text-secondray-500'>750x100</h4>
        </div>
    </div>
  )
}

export default Advertisement