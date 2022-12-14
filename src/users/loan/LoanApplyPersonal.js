import React from 'react'
import { useNavigate } from "react-router-dom";

function LoanApplyPersonal() {
    let navigate = useNavigate()
  return (
    <div className=' py-4'>
        <div className='text-loan-secondary flex justify-between items-center bg-loan-light p-4 px-8'>
            <p className=' font-bold text-base '>Personal Information</p>
            <p>1/4</p>
        </div>

        <form className='w-full  flex flex-col gap-2 my-8'>
            <label for="helper-text" className="block mb-1 text-sm font-medium text-loan-secondary  ">First Name</label>
            <input type="text" aria-describedby="helper-text-explanation" id="disabled-input" aria-label="disabled input"
                className="bg-gray-50 mb-3 border border-gray-300  text-sm rounded-md focus:ring-loan-primary focus:border-loan-primary block w-full p-2.5 focus:outline-none" 
                placeholder="Olanrewaju"  disabled value='Olanrewaju'/> 

            <label for="helper-text" className="block mb-1 text-sm font-medium text-loan-secondary  ">Last Name</label>
            <input type="text" aria-describedby="helper-text-explanation" id="disabled-input" aria-label="disabled input"
                className="bg-gray-50 mb-3 border border-gray-300  text-sm rounded-md focus:ring-loan-primary focus:border-loan-primary block w-full p-2.5 focus:outline-none" 
                placeholder="AbdulKabeer" disabled value='AbdulKabeer'/> 

            <label for="helper-text" className="block mb-1 text-sm font-medium text-loan-secondary  ">Email</label>
            <input type="email" aria-describedby="helper-text-explanation" id="disabled-input" aria-label="disabled input"
                className="bg-gray-50 mb-3 border border-gray-300  text-sm rounded-md focus:ring-loan-primary focus:border-loan-primary block w-full p-2.5 focus:outline-none" 
                placeholder="olakay@gmail.com" disabled value='olakay@gmail.com'/> 

            <div className=' w-full'>
                <button type="button" onClick={()=> navigate('education-employment')} 
                    className="w-[50%] py-4 px-5 mr-2 my-4 text-sm font-medium focus:outline-none bg-loanBlue-primary text-white rounded-md border border-gray-200 ">CONTINUE</button>
            </div>
           
        </form>
    </div>
  )
}

export default LoanApplyPersonal
