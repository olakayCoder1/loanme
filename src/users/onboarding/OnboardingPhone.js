import React from 'react'
import { useNavigate } from "react-router-dom";
import OnboardHeader from './OnboardHeader';

function OnboardingPhone() {
    let navigate = useNavigate()

  return (
    <form className=' flex flex-col gap-4'>
        <OnboardHeader  name='Phone Number' c='1'/>
        <div>
        <label for="helper-text" className="block mb-1 text-sm font-medium text-loan-secondary  ">Country</label>
        <input type="text" aria-describedby="helper-text-explanation" id="disabled-input" aria-label="disabled input"
            class="bg-gray-50 mb-3 border border-gray-300  text-sm rounded focus:ring-loan-primary focus:border-loan-primary block w-full p-3 focus:outline-none" 
            placeholder="Nigeria"  value='Nigeria' disable />
        </div>
        <div>
        <label for="helper-text" className="block mb-1 text-sm font-medium text-loan-secondary  ">Phone Number</label>
            <input type="text" aria-describedby="helper-text-explanation" id="disabled-input" aria-label="disabled input"
                class="bg-gray-50 mb-3 border border-gray-300  text-sm rounded-md focus:ring-loan-primary focus:border-loan-primary block w-full p-3 focus:outline-none" 
                placeholder="+234 908 345 5489" />

        </div>

        
        <div className=' w-full my-4'>
            <button type="button" onClick={()=> navigate('phone-verify')} 
                className="w-full py-4 px-5 mr-2 my-4 text-sm font-medium focus:outline-none bg-loanBlue-primary text-white rounded-md border border-gray-200 ">CONTINUE</button>
        </div>
    </form>
  )
}

export default OnboardingPhone
