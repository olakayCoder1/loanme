import React from 'react'
import { useNavigate } from "react-router-dom";
import OnboardHeader from './OnboardHeader';


function OnboardingAccountPin() {
    let navigate = useNavigate()
  return (
    <form className=' flex flex-col gap-2'>
        <OnboardHeader  name='Security' c='5'/>
        <div>
        <label for="helper-text" className="block mb-1 text-sm font-medium text-loan-secondary  ">Account Pin</label>
            <input type="text" 
                className="bg-gray-50 mb-3 border border-gray-300  text-sm rounded-md focus:ring-loan-primary focus:border-loan-primary block w-full p-3 focus:outline-none" 
                placeholder="******" />

        </div>
        <div className=' w-full my-4 flex gap-2'>
            <button type="button" onClick={()=> navigate('/signup/address')} className="w-full py-4 px-5 mr-2 my-4 text-sm font-medium focus:outline-none text-loanBlue-primary bg-white rounded-md border border-gray-200 ">PREVIOUS</button>
            <button type="button" onClick={()=> navigate('/')} className="w-full py-4 px-5 mr-2 my-4 text-sm font-medium focus:outline-none bg-loanBlue-primary text-white rounded-md border border-gray-200 ">COMPLETE SIGNUP</button>
        </div>
    </form>
  )
}

export default OnboardingAccountPin
