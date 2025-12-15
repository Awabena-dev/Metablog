import Image from 'next/image'
import React from 'react'


// 4B6BFB
const Hero = () => {
  return (
    <div className='max-wrapper pt-30 pb-20'>
        <div className='relative h-150 max-h-150 w-full bg-[url("/Cover/1.png")] rounded-[12px] bg-center bg-cover'>
            {/* Card */}
            <div className=' absolute md:-bottom-7 md:left-7 left-1/2 -bottom-7 md:translate-x-0 -translate-x-1/2 md:max-w-150 w-[80%] bg-background rounded-[12px] border border-sec-gray p-4 md:p-10 shadow-md' >
                <span className='px-2.5 py-1 bg-brand text-sm font-medium text-white'>Tecnlogy</span>
                <h1 className='heading-1 text-secondray-800 mb-9'>The Impact Of Technology on the Workplace: How Technology is Changing</h1>

                <div className='flex items-center gap-5'>
                    <div className='flex items-center gap-3'>
                        <Image src={"/Authers/Jason_Francisco.png"} width={36} height={36} alt='Jason_Francisco Image'/>
                        <h4 className='body-1 text-secondray-400'>Jason Francisco</h4>
                    </div>
                    <div>
                        <h4 className='body-1 text-secondray-400'>Augest 20, 2022</h4>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Hero