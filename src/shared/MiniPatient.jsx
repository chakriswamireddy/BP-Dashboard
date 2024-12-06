import React from 'react'
import moreSvg from '../assets/icons/more_horiz.svg'

function MiniPatient({patient}) {
  return (
    <div className='flex gap-1 card shadow-md rounded-md p-2 md:p-4 w-full justify-between items-center	 '>
        <img src={patient.profile_picture} alt={patient.name}   className=' size-10 md:size-12' />
        <div className='jusitfy-self-start ' >
            <p style={{color:'#072635'}} className='flex-1 font-medium'> {patient.name} </p>
            <span className='text-gray-700 text-xs'> {patient.gender}, {patient.age} </span>
        </div>
        <img src={moreSvg} className='justify-self-end size-3 sm:size-4 '  /> 
    </div>
  )
}

export default MiniPatient