import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MiniPatient from '../shared/MiniPatient';
import searchSvg from '../assets/icons/search.svg'


function PatientsList({patientsData}) {

  
  

    return (
        <div className=' w-full lg:w-1/5 basis-0 sm:basis-full md:basis-0 shadow-xl rounded-lg p-2 h-60  md:h-full  bg-white' >

            <div className='flex justify-between mb-1'>
                <p className='font-bold'> Patients  </p>
                <img src={searchSvg} alt="search" />
            </div>


            <div className='flex flex-col min-w-60   overflow-y-auto' style={{height:'90%'}}>
                {patientsData && patientsData.length > 0 && patientsData.map((patient, index) => (
                    <MiniPatient key={index} patient={patient} />
                ))}

            </div>
        </div>
    )
}

export default PatientsList