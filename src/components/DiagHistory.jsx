import React from 'react'
import Chart from '../shared/Chart'
import lungsSvg from "../assets/icons/lungs.svg";
import tempSvg from "../assets/icons/temperature.svg";
import heartSvg from "../assets/icons/HeartBPM.svg";


function DiagHistory({selectedPateint}) {
  // console.log(selectedPateint?.diagnosis_history[0])
    
  return (
    <div className='flex flex-col'>
    <div>Diagonal History</div>
    {/* {selectedPateint} */}


        <Chart patient={selectedPateint}  />
        <div className='flex'>
            {/* ['Respiratory Rate','Temperature','Heart Rate'] */}

            <div className='bg-blue-100 w-1/3 h-48  border-4'>
                <img src={lungsSvg} className='size-20 rounded background-white' />

                <p> Respiratory Rate  </p>
                <p> {selectedPateint?.diagnosis_history[0].respiratory_rate.value} bpm </p>
                <p> {selectedPateint?.diagnosis_history[0].respiratory_rate.levels} </p>

            </div>
            <div className='bg-blue-100 w-1/3 h-48  border-4'>
                <img src={tempSvg} className='size-20 rounded background-white' />

                <p> Temperature  </p>
                <p> {selectedPateint?.diagnosis_history[0].temperature.value} °F </p>
                <p> {selectedPateint?.diagnosis_history[0].temperature.levels} </p>

            </div>
            <div className='bg-blue-100 w-1/3 h-48  border-4'>
                <img src={heartSvg} className='size-20 rounded background-white' />

                <p> Heart Rate  </p>
                <p> {selectedPateint?.diagnosis_history[0].heart_rate.value} bpm </p>
                <p> {selectedPateint?.diagnosis_history[0].heart_rate.levels} </p>

            </div>

    </div>

    </div>
    
  )
}

export default DiagHistory