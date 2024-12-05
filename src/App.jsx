import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PatientsList from './components/PatientsList'
import DiagHistory from './components/DiagHistory'
import axios from 'axios'

function App() {
  const [patientsData, setPatientsData] = useState([])

  const [selectedPateint,setSelectedPatient] = useState(null)



  useEffect(() => {
    axios.get('https://fedskillstest.coalitiontechnologies.workers.dev', {
        headers: {
            Authorization: "Basic " + btoa('coalition:skills-test')
        }
    })
        .then((res) => { setPatientsData(res.data); console.log(res.data[3]); setSelectedPatient(res.data[3]) })
},[])

  return (
    <div className='flex'>
      <PatientsList patientsData={patientsData} />
      <div className='flex  w-full border '>
        <DiagHistory selectedPateint={selectedPateint} />
      </div>
    </div>
  )
}

export default App
