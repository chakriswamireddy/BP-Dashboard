import { useEffect, useState } from 'react'

import './App.css'
import PatientsList from './components/PatientsList'
import DiagHistory from './components/DiagHistory'
import axios from 'axios'
import DiagList from './components/DiagList'
import ProfileCard from './components/ProfileCard'

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
    <div className='flex h-screen'>
      <PatientsList patientsData={patientsData} />
      {selectedPateint &&
        <>
          <div className='flex flex-col h-full   w-1/2 border '>
            <DiagHistory selectedPateint={selectedPateint} />
            <DiagList patient={selectedPateint} />
          </div>
          <ProfileCard patient={selectedPateint} />
        </>
      }
    </div>
  )
}

export default App
