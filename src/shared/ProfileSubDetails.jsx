import React from 'react'



function ProfileSubDetails({ title, value,img }) {

    // const imgsList
    return (
        <div className='flex'>
            <img src={img} alt="date" />
            <div className='flex flex-col items-start'>
                <span> {title}  </span>
                <span>  {value} </span>
            </div>

        </div>
    )
}

export default ProfileSubDetails