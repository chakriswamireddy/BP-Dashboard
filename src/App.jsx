import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PatientsList from './components/PatientsList'
import DiagHistory from './components/DiagHistory'
import axios from 'axios'
import DiagList from './components/DiagList'

function App() {
  const [patientsData, setPatientsData] = useState([])

  const [selectedPateint,setSelectedPatient] = useState(null)



  useEffect(() => {
    axios.get('https://fedskillstest.coalitiontechnologies.workers.dev', {
        headers: {
            Authorization: "Basic " + btoa('coalition:skills-test')
        }
    })
        .then((res) => { setPatientsData(res.data);   setSelectedPatient(res.data[3]) })
        .catch((er) => console.log(er))
},[])

  return (
    <div className='flex h-screen'>
      <PatientsList patientsData={patientsData} />
      <div className='flex  w-full border '>
        <DiagHistory selectedPateint={selectedPateint} />
        <DiagList patient={selectedPateint} />
      </div>
    </div>
  )
}

export default App
