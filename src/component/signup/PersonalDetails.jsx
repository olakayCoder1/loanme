import React, { useState } from 'react'
import DatePicker from 'react-date-picker';
import { useNavigate} from 'react-router-dom'

function PersonalDetails() {
    const [value, onChange] = useState(new Date());
    const navigate = useNavigate()

    function handleSubmit(){
        navigate('email-verification')
      }

  return (
    <form className='w-full h-full flex items-center place-content-center' onSubmit={handleSubmit}>
        <div className=' w-[80%]'>
            <h2 className=' text-base font-bold text-gray-800'>Personal Details</h2>
            <p class="my-2 mb-4 text-xs "><span class="font-medium">Enter the 6 digit code sent to your phone number</span></p>
            <div class="mb-2 flex flex-col gap-1">
                <label for="success" className="block mb-2 text-sm font-medium text-gray-800">Full name</label>
                <input type="text" 
                    className="w-full bg-gray-100 border-[1px] border-gray-200 hover:border-loan-dark text-sm rounded-md  block p-2.5 py-3
                            focus:ring-0 focus:outline-none" 
                    placeholder="John Doe" />
            </div>
            <div class="mb-2 flex flex-col gap-1">
                <label for="success" className="block mb-2 text-sm font-medium text-gray-800">Email</label>
                <input type="email" 
                    className="w-full bg-gray-100 border-[1px] border-gray-200 hover:border-loan-dark text-sm rounded-md  block p-2.5 py-3
                            focus:ring-0 focus:outline-none" 
                    placeholder="example@example.com" />
            </div>
            {/* <DatePicker className='w-full bg-gray-100 border-[1px] border-gray-200 hover:border-loan-dark text-sm rounded-md  block p-2.5 py-3
                            focus:ring-0 focus:outline-none'
                            onChange={onChange} value={value} /> */}
            <div class="mb-2 flex flex-col gap-1">
                <label for="success" className="block mb-2 text-sm font-medium text-gray-800">Password</label>
                <input type="password" 
                    className="w-full bg-gray-100 border-[1px] border-gray-200 hover:border-loan-dark text-sm rounded-md  block p-2.5 py-3
                            focus:ring-0 focus:outline-none" 
                    placeholder="**********" />
            </div>
            <button type="submit" class="w-full py-3 px-5 mr-2 my-2 text-sm font-medium  focus:outline-none bg-loan-button text-white rounded-lg border border-gray-200">Sign up</button>
        </div>
       
    </form>
  )
}

export default PersonalDetails
