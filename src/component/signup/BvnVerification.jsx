import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom'



function BvnVerification() {
    const [loading , setLoading ] = useState(false)
    const navigate = useNavigate()

  function handleSubmit(){
    setLoading(true)
    navigate('/dashboard')
  }

  return (
    <form className='w-full h-full flex items-center place-content-center' onSubmit={handleSubmit}>
        <div className=' w-[80%]'>
            <h2 className=' text-base font-bold text-gray-800'>Identity verifation</h2>
            <p class="my-2 mb-4 text-xs "><span class="font-medium">Hello Olakay, to complete your registration, we need to verify your identity. Please provide proof of your identity below</span></p>
            <div class="mb-2 flex flex-col gap-1">
                <label for="success" className="block mb-2 text-sm font-medium text-gray-800">Bank Verification Number</label>
                <input type="number" 
                    className="w-full bg-gray-100 border-[1px] border-gray-200 hover:border-loan-dark text-sm rounded-md  block p-2.5 py-3
                            focus:ring-0 focus:outline-none" 
                    placeholder="1234567890" />
            </div>
           <button type="submit" class="w-full py-3 px-5 mr-2 my-2 text-sm font-medium  focus:outline-none bg-loan-button text-white rounded-lg border border-gray-200">Verify</button>
        </div>
    </form>
  )
}

export default BvnVerification
