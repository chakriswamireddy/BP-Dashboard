import React from 'react'
import moreSvg from '../assets/icons/more_horiz.svg'

function MiniPatient({patient}) {
  return (
    <div className='flex gap-1 card shadow-md rounded-md p-4 w-full justify-between items-center	 '>
        <img src={patient.profile_picture} alt={patient.name}  height={50} width={50} className='' />
        <div>
            <p style={{color:'#072635'}} className='flex-1 font-medium'> {patient.name} </p>
            <span className='text-gray-700 text-xs'> {patient.gender}, {patient.age} </span>
        </div>
        <img src={moreSvg} className='justify-self-end  size-4 '  /> 
    </div>
  )
}

export default MiniPatient