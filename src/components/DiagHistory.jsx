import React from 'react'
import Chart from '../shared/Chart'
import lungsSvg from "../assets/icons/lungs.svg";
import tempSvg from "../assets/icons/temperature.svg";
import heartSvg from "../assets/icons/HeartBPM.svg";
import DiagSubBox from '../shared/DiagSubBox';


function DiagHistory({ selectedPateint }) {
  // console.log(selectedPateint?.diagnosis_history[0])

  return (
    <div className='flex flex-col h-2/3 bg-white rounded-xl p-4 gap-2'>
      <div>Diagonal History</div>
      {/* {selectedPateint} */}


      <Chart patient={selectedPateint} />
      <div className='flex gap-2 justify-center' >
       
        <DiagSubBox color={'blue'} title={'Respiratory Rate'} value={`${selectedPateint?.diagnosis_history[0].respiratory_rate.value} bpm`}
          img={lungsSvg} level={selectedPateint?.diagnosis_history[0].respiratory_rate.levels  } />


        <DiagSubBox
          color={'red'}
          title={'Temperature'}
          value={`${selectedPateint?.diagnosis_history[0].temperature.value} °F`}
          img={tempSvg}
          level={selectedPateint?.diagnosis_history[0].temperature.levels}
        />

        <DiagSubBox
          color={'pink'}
          title={'Heart Rate'}
          value={`${selectedPateint?.diagnosis_history[0].heart_rate.value} bpm`}
          img={heartSvg}
          level={selectedPateint?.diagnosis_history[0].heart_rate.levels}
        />

      </div>

    </div>

  )
}

export default DiagHistory