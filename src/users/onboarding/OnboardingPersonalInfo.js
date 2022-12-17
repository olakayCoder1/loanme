import React from 'react'
import { useNavigate } from "react-router-dom";
import OnboardHeader from './OnboardHeader';

function OnboardingPersonalInfo() {
    let navigate = useNavigate()

  return (
    <form className='w-full flex flex-col gap-4'>
        <OnboardHeader  name='Personal Details' c='3'/>
        <div>
            <label for="helper-text" className="text-input-label">First Name</label>
            <input type="text"className='input-primary' name='first_name'   placeholder=""/>
        </div>
        <div>
            <label for="helper-text" className="text-input-label">Last Name</label>
            <input type="text" className='input-primary' name='last_name' placeholder=""/>
        </div>
        <div>
            <label for="helper-text" className="text-input-label">Email</label>
            <input type="email" className='input-primary' name='email' placeholder=""/>
        </div>
        <div className=' w-full my-4 mt-8 flex gap-2'>
            <button type="button" onClick={()=> navigate('/signup/phone-verify')} className="btn-primary-white">PREVIOUS</button>
            <button type="button" onClick={()=> navigate('/signup/address')} className="btn-primary">CONTINUE</button>
        </div>  
    </form>
  )
}

export default OnboardingPersonalInfo
