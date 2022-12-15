import React from 'react'
import { useNavigate } from "react-router-dom";
import OnboardHeader from './OnboardHeader';

function OnboardingPersonalInfo() {
    let navigate = useNavigate()

  return (
    <form className=' flex flex-col gap-4'>
        <OnboardHeader  name='Personal Details' c='3'/>
        <div>
            <label for="helper-text" className="block mb-1 text-sm font-medium text-loan-secondary  ">First Name</label>
            <input type="text" aria-describedby="helper-text-explanation" id="disabled-input" aria-label="disabled input"
                class="bg-gray-50 mb-3 border border-gray-300  text-sm rounded focus:ring-loan-primary focus:border-loan-primary block w-full p-3 focus:outline-none" 
                placeholder="Olanrewaju"/>
        </div>

        <div>
            <label for="helper-text" className="block mb-1 text-sm font-medium text-loan-secondary  ">First Name</label>
            <input type="text" aria-describedby="helper-text-explanation" id="disabled-input" aria-label="disabled input"
                class="bg-gray-50 mb-3 border border-gray-300  text-sm rounded focus:ring-loan-primary focus:border-loan-primary block w-full p-3 focus:outline-none" 
                placeholder="Nigeria"/>
        </div>


        <div>
            <label for="helper-text" className="block mb-1 text-sm font-medium text-loan-secondary  ">First Name</label>
            <input type="text" aria-describedby="helper-text-explanation" id="disabled-input" aria-label="disabled input"
                class="bg-gray-50 mb-3 border border-gray-300  text-sm rounded focus:ring-loan-primary focus:border-loan-primary block w-full p-3 focus:outline-none" 
                placeholder="Nigeria"/>
        </div>


        <div className=' w-full my-4 flex gap-2'>
            <button type="button" onClick={()=> navigate('/signup/phone-verify')} className="w-full py-4 px-5 mr-2 my-4 text-sm font-medium focus:outline-none text-loanBlue-primary bg-white rounded-md border border-gray-200 ">PREVIOUS</button>
            <button type="button" onClick={()=> navigate('/signup/address')} className="w-full py-4 px-5 mr-2 my-4 text-sm font-medium focus:outline-none bg-loanBlue-primary text-white rounded-md border border-gray-200 ">CONTINUE</button>
        </div>
        
    </form>
  )
}

export default OnboardingPersonalInfo
