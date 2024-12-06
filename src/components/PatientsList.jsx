import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MiniPatient from '../shared/MiniPatient';
import searchSvg from '../assets/icons/search.svg'


function PatientsList({patientsData}) {

  
  

    return (
        <div className='w-1/5 shadow-xl rounded-md p-2 h-screen overflow-y-auto' >

            <div className='flex justify-between'>
                <p className='font-bold'> Patients  </p>
                <img src={searchSvg} alt="search" />
            </div>


            <div className='flex flex-col'>
                {patientsData && patientsData.length > 0 && patientsData.map((patient, index) => (
                    <MiniPatient key={index} patient={patient} />
                ))}

            </div>
        </div>
    )
}

export default PatientsList