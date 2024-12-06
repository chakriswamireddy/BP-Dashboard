import React from 'react'
import dateSvg from "../assets/icons/date.svg";
import callSvg from "../assets/icons/PhoneIcon.svg";
import shieldSvg from "../assets/icons/shield.svg";
import maleSvg from "../assets/icons/MaleIcon.svg";
import femaleSvg from "../assets/icons/FemaleIcon.svg";import ProfileSubDetails from '../shared/ProfileSubDetails';


function ProfileCard({ patient}) {
  console.log(patient)


  return (
    <div className=' flex flex-col bg-white items-start gap-2 w-full rounded-xl py-2'>
        <img src={patient?.profile_picture} alt="profile_pic" className='size-20 sm:size-32 self-center' />
        <p className='self-center mb-2'> {patient?.name} </p>


        <ProfileSubDetails title={'Date of Birth'} value={patient?.date_of_birth} img={dateSvg}  />

        <ProfileSubDetails title={'Gender'} value={patient?.gender} img={patient?.gender=='male'? maleSvg:femaleSvg } />
        <ProfileSubDetails title={'Contact Info'} value={ patient?.phone_number}  img={callSvg}/>
        <ProfileSubDetails title={'Emergency Contacts'} value={ patient?.emergency_contact} img={callSvg} />

        <ProfileSubDetails title={'Insurance Provider'} value={ patient?.insurance_type} img={shieldSvg} />
      
        <button className='btn bg-cyan-100 py-2 px-4 rounded-full text-xs font-bold self-center'> Show All Information </button>
    </div>
  )
}

export default ProfileCard