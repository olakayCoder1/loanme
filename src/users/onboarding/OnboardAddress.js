import React from 'react'
import { useNavigate } from "react-router-dom";
import OnboardHeader from './OnboardHeader';

function OnboardAddress() {
    let navigate = useNavigate()

  return (
    <form className=' flex flex-col gap-2'>
        <OnboardHeader  name='Address' c='4'/>
        <div>
            <label for="helper-text" className="block mb-1 text-sm font-medium text-loan-secondary  ">Address Line 1</label>
            <input type="text" aria-describedby="helper-text-explanation" id="disabled-input" aria-label="disabled input"
                class="bg-gray-50 mb-3 border border-gray-300  text-sm rounded focus:ring-loan-primary focus:border-loan-primary block w-full p-3 focus:outline-none" 
                placeholder=""/>
        </div>

        <div>
            <label for="helper-text" className="block mb-1 text-sm font-medium text-loan-secondary  ">Address Line 2</label>
            <input type="text" aria-describedby="helper-text-explanation" id="disabled-input" aria-label="disabled input"
                class="bg-gray-50 mb-3 border border-gray-300  text-sm rounded focus:ring-loan-primary focus:border-loan-primary block w-full p-3 focus:outline-none" 
                placeholder=""/>
        </div>


        <div>
            <label for="helper-text" className="block mb-1 text-sm font-medium text-loan-secondary  ">Resident State</label>
            <input type="text" aria-describedby="helper-text-explanation" id="disabled-input" aria-label="disabled input"
                class="bg-gray-50 mb-3 border border-gray-300  text-sm rounded focus:ring-loan-primary focus:border-loan-primary block w-full p-3 focus:outline-none" 
                placeholder=""/>
        </div>

        <div>
            <label for="helper-text" className="block mb-1 text-sm font-medium text-loan-secondary  ">Resident City</label>
            <input type="text" aria-describedby="helper-text-explanation" id="disabled-input" aria-label="disabled input"
                class="bg-gray-50 mb-3 border border-gray-300  text-sm rounded focus:ring-loan-primary focus:border-loan-primary block w-full p-3 focus:outline-none" 
                placeholder=""/>
        </div>


        <div className=' w-full my-4 flex gap-2'>
            <button type="button" onClick={()=> navigate('/signup/personaldetails')} className="w-full py-4 px-5 mr-2 my-4 text-sm font-medium focus:outline-none text-loanBlue-primary bg-white rounded-md border border-gray-200 ">PREVIOUS</button>
            <button type="button" onClick={()=> navigate('/signup/pin')} className="w-full py-4 px-5 mr-2 my-4 text-sm font-medium focus:outline-none bg-loanBlue-primary text-white rounded-md border border-gray-200 ">CONTINUE</button>
        </div>
        
    </form>
  )
}

export default OnboardAddress
