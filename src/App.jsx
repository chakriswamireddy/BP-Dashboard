import { useEffect, useState } from 'react'

import './App.css'
import PatientsList from './components/PatientsList'
import DiagHistory from './components/DiagHistory'
import axios from 'axios'
import DiagList from './components/DiagList'
import ProfileCard from './components/ProfileCard'
import Reports from './components/Reports'

function App() {
  const [patientsData, setPatientsData] = useState([])

  const [selectedPateint, setSelectedPatient] = useState(null)



  useEffect(() => {
    axios.get('https://fedskillstest.coalitiontechnologies.workers.dev', {
      headers: {
        Authorization: "Basic " + btoa('coalition:skills-test')
      }
    })
      .then((res) => { setPatientsData(res.data); setSelectedPatient(res.data[3]) })
      .catch((er) => console.log(er))
  }, [])

  return (
    <div className='flex flex-col sm:flex-row flex-nowrap sm:flex-wrap md:flex-nowrap md:h-screen gap-4 bg-blue-50 p-2 '>
      <PatientsList patientsData={patientsData} />
      {selectedPateint &&
        <>
          <div className='flex flex-col h-full border  w-full sm:w-3/5 gap-4 '>
            <DiagHistory selectedPateint={selectedPateint} />
            <DiagList patient={selectedPateint} />
          </div>
          <div className='flex flex-col h-full  md:w-1/4  gap-2'>
            <ProfileCard patient={selectedPateint} />
            <Reports patient={selectedPateint} />

          </div>
        </>
      }
    </div>
  )
}

export default App
