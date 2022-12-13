import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom'


function EmailVerification() {

    const navigate = useNavigate()


    function handleSubmit(){
        navigate('/signup/bvn')
      }


  return (
    <form className='w-full h-full flex items-center place-content-center' onSubmit={handleSubmit}>
        <div class="mb-6 w-[80%] flex flex-col gap-2">
            <label for="success" className="block mb-2 text-base font-medium text-gray-800">Enter email verifation code</label>
            <p class="my-2 text-xs "><span class="font-medium">Enter the 6 digit code sent to your email</span></p>
            <input type="number" 
                className="w-full bg-gray-100 border-[1px] border-gray-200 hover:border-loan-dark text-sm rounded-md  block p-2.5 py-3
                        focus:ring-0 focus:outline-none" 
                placeholder="Verication code " />
            <button type="submit" class="w-full py-3 px-5 mr-2 my-2 text-sm font-medium  focus:outline-none bg-loan-button text-white rounded-lg border border-gray-200">Verify my email</button>
        </div>
    </form>
  )
}

export default EmailVerification
