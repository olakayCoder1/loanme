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
            <label htmlFor="helper-text" className="block mb-1 text-sm font-medium text-loan-secondary  ">First Name</label>
            <input type="text" aria-describedby="helper-text-explanation" id="disabled-input" aria-label="disabled input"
                className="bg-gray-50 mb-3 border border-gray-300  text-sm rounded-md focus:ring-loan-primary focus:border-loan-primary block w-full p-2.5 focus:outline-none" 
                placeholder="Olanrewaju"  disabled value='Olanrewaju'/> 
            <label htmlFor="helper-text" className="block mb-1 text-sm font-medium text-loan-secondary  ">Last Name</label>
            <input type="text" aria-describedby="helper-text-explanation" id="disabled-input" aria-label="disabled input"
                className="bg-gray-50 mb-3 border border-gray-300  text-sm rounded-md focus:ring-loan-primary focus:border-loan-primary block w-full p-2.5 focus:outline-none" 
                placeholder="AbdulKabeer" disabled value='AbdulKabeer'/> 

            <label htmlFor="helper-text" className="block mb-1 text-sm font-medium text-loan-secondary  ">Date of brith</label>
            <input type="text" aria-describedby="helper-text-explanation" id="disabled-input" aria-label="disabled input"
                className="bg-gray-50 mb-3 border border-gray-300  text-sm rounded-md focus:ring-loan-primary focus:border-loan-primary block w-full p-2.5 focus:outline-none" 
                placeholder="20/4/1020" disabled value='20/4/1020'/> 

            <label htmlFor="bank" className="block mb-1 text-sm font-medium text-loan-secondary  ">Gender</label>
            <select id="bank" value=''
                className="bg-gray-50 mb-3 border border-gray-300  text-sm rounded-md focus:ring-loan-primary focus:border-loan-primary block w-full p-2.5 focus:outline-none" 
                >
            <option selected disabled hidden>Gender</option>
            <option value="fisrt_bank">Male</option>
            <option value="uba">Female</option>
            </select>

            <label htmlFor="bank" className="block mb-1 text-sm font-medium text-loan-secondary  ">Marital Status</label>
            <select id="bank" value=''
                className="bg-gray-50 mb-3 border border-gray-300  text-sm rounded-md focus:ring-loan-primary focus:border-loan-primary block w-full p-2.5 focus:outline-none" 
                >
            <option selected disabled hidden>Marital Status</option>
            <option value="fisrt_bank">Single</option>
            <option value="uba">Married</option>
            <option value="union">Divorce</option>
            </select>

            <label htmlFor="bank" className="block mb-1 text-sm font-medium text-loan-secondary  ">Number of children</label>
            <select id="bank" value=''
                className="bg-gray-50 mb-3 border border-gray-300  text-sm rounded-md focus:ring-loan-primary focus:border-loan-primary block w-full p-2.5 focus:outline-none" 
                >
            <option selected disabled hidden>Number of children</option>
            <option value="fisrt_bank">1 child</option>
            <option value="uba">2 children</option>
            <option value="union">3 children</option>
            <option value="polaris">4 and above</option>
            </select>
            <div className=' w-full'>
                <button type="button" onClick={()=> navigate('education-employment')} 
                    className="w-[50%] py-4 px-5 mr-2 my-4 text-sm font-medium focus:outline-none bg-loanBlue-primary text-white rounded-md border border-gray-200 ">CONTINUE</button>
            </div>
        </form>
    </div>
  )
}

export default LoanApplyPersonal
