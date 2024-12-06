import React from 'react'
import dateSvg from "../assets/icons/date.svg";
import callSvg from "../assets/icons/PhoneIcon.svg";
import shieldSvg from "../assets/icons/shield.svg";
import maleSvg from "../assets/icons/MaleIcon.svg";
import femaleSvg from "../assets/icons/FemaleIcon.svg";import ProfileSubDetails from '../shared/ProfileSubDetails';


function ProfileCard({ patient}) {
  console.log(patient)


  return (
    <div className=' flex flex-col'>
        <img src={patient?.profile_picture} alt="profile_pic" />
        <p> {patient?.name} </p>


        <ProfileSubDetails title={'Date of Birth'} value={patient?.date_of_birth} img={dateSvg} />

        <ProfileSubDetails title={'Gender'} value={patient?.gender} img={patient?.gender=='male'? maleSvg:femaleSvg } />
        <ProfileSubDetails title={'Contact Info'} value={ patient?.phone_number}  img={callSvg}/>
        <ProfileSubDetails title={'Emergency Contacts'} value={ patient?.emergency_contact} img={callSvg} />

        <ProfileSubDetails title={'Insurance Provider'} value={ patient?.insurance_type} img={shieldSvg} />
      

    </div>
  )
}

export default ProfileCard