import React from 'react'
import Chart from '../shared/Chart'
import lungsSvg from "../assets/icons/lungs.svg";

function DiagHistory({selectedPateint}) {
    
  return (
    <div className='flex flex-col'>
    <div>Diagonal History</div>
    {selectedPateint}


        <Chart patient={selectedPateint}  />
        <div className='flex'>
            {/* ['Respiratory Rate','Temperature','Heart Rate'] */}

            <div className='bg-blue-100 w-1/3 h-80  border-4'>
                <img src={lungsSvg} className='size-20 rounded background-white' />

                <p> Respiratory Rate  </p>
                <p> {selectedPateint.diagnosis_history[0].value} BPM </p>
                <p> {selectedPateint.diagnosis_history[0].levels} </p>

            </div>

    </div>

    </div>
    
  )
}

export default DiagHistory