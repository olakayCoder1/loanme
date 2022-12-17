import React from 'react'
import { useNavigate } from "react-router-dom";
import OnboardHeader from './OnboardHeader';


function OnboardingPhoneVerify() {
    let navigate = useNavigate()
  return (
    <form className='w-full flex flex-col gap-4 px-4'>
        <OnboardHeader  name='Phone Verification' c='2'/>
        <div>
        <label for="helper-text" className="text-input-label ">Verification Code</label>
            <input type="text"  className='input-primary'   placeholder="******" />
        </div>
        <div className=' w-full my-4 flex gap-2 mt-8'>
            <button type="button" onClick={()=> navigate('/signup')}  className='btn-primary-white'>  PREVIOUS</button>
            <button type="button" onClick={()=> navigate('/signup/personaldetails')} className="btn-primary">CONTINUE</button>
        </div>
    </form>
  )
}

export default OnboardingPhoneVerify
