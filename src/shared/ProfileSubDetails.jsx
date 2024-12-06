import React from 'react'



function ProfileSubDetails({ title, value,img }) {

    // const imgsList
    return (
        <div className='flex items-center gap-4 pl-3 mb-2 '>
            <img src={img} alt="date" className='size-6 bg-violet-300 rounded-full' />
            <div className='flex flex-col items-start gap-0.5'>
                <span className='text-xs font-normal text-gray-700'> {title}  </span>
                <span className='text-xs font-medium'>  {value} </span>
            </div>

        </div>
    )
}

export default ProfileSubDetails