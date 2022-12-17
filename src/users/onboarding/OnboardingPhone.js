import React from 'react'
import { useNavigate } from "react-router-dom";
import OnboardHeader from './OnboardHeader';
import {Link } from "react-router-dom";

function OnboardingPhone() {
    let navigate = useNavigate()

  return (
    <form className='w-full flex flex-col gap-4 px-4'>
        <OnboardHeader  name='Phone Number' c='1'/>
        <div>
            <label for="helper-text" className="text-input-label ">Country</label>
            <input type="text" className=' input-primary'placeholder="Nigeria"  value='Nigeria' disable />
        </div>
        <div>
        <label for="helper-text" className="text-input-label ">Number</label>
            <input type="text" className=' input-primary'  placeholder="+234 908 345 5489" />
            <p className=' text-description'>A verification code will be sent to your number</p>
        </div>  
        <div className=' w-full my-4 mt-8'>
            <button type="button" onClick={()=> navigate('phone-verify')}   className="btn-primary">CONTINUE</button>
        </div>
        <div className=' w-full flex items-center place-content-center gap-4  py-4 '>
            <p className='text-description text-sm text-loan-secondary'>Have an account? <Link to={'/signin'} className='text-loanBlue-primary'> SignIn</Link></p>
        </div>
    </form>
  )
}

export default OnboardingPhone
