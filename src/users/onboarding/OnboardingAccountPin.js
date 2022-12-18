import React from 'react'
import { useNavigate } from "react-router-dom";
import OnboardHeader from './OnboardHeader';


function OnboardingAccountPin() {
    let navigate = useNavigate()
  return (
    <form className='w-full flex flex-col gap-2 px-4'>
        <OnboardHeader  name='Security' c='5'/>
        <div>
        <label htmlFor="helper-text" className="text-input-label">Account Pin</label>
            <input type="text" className='input-primary' name='pin' placeholder="******" />
        </div>
        <div className=' w-full my-4 mt-8 flex gap-2'>
            <button type="button" onClick={()=> navigate('/signup/address')} className='btn-primary-white'>PREVIOUS</button>
            <button type="button" onClick={()=> navigate('/signin')} className='btn-primary'>COMPLETE</button>
        </div>
        <p className=' text-description italic'>By clicking on the complete you agree to our <span className=' text-loanBlue-primary cursor-pointer'>Terms</span> and have read and acknowledge <span className=' text-loanBlue-primary cursor-pointer'>Global Privacy</span></p>
    </form>
  )
}

export default OnboardingAccountPin
