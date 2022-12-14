import React from 'react'
import { useNavigate } from "react-router-dom";

function LoanApplyDetail() {
    let navigate = useNavigate()
  return (
    <div className=' py-4'>
        <div className='text-loan-secondary flex justify-between items-center bg-loan-light p-4 px-8'>
            <p className=' font-bold text-base '>Loan Details</p>
            <p>4/4</p>
        </div>

        <form className='w-full  flex flex-col gap-2 my-8'>
            <label for="helper-text" className="block mb-1 text-sm font-medium text-loan-secondary  ">Loan Amount</label>
            <input type="number" aria-describedby="helper-text-explanation" id="disabled-input" aria-label="disabled input"
                className="bg-gray-50 mb-3 border border-gray-300  text-sm rounded-md focus:ring-loan-primary focus:border-loan-primary block w-full p-2.5 focus:outline-none" 
                placeholder="Olanrewaju"  disabled value='Olanrewaju'/> 
            <div className=' w-full flex gap-2'>
                <button type="button" onClick={()=> navigate('/loan/request/address')} className="w-[50%] py-4 px-5 mr-2 my-4 text-sm font-medium focus:outline-none text-loanBlue-primary bg-white rounded-md border border-gray-200 ">PREVIOUS</button>
                <button type="button" onClick={()=> navigate('/loan/request')} className="w-[50%] py-4 px-5 mr-2 my-4 text-sm font-medium focus:outline-none bg-loanBlue-primary text-white rounded-md border border-gray-200 ">CONTINUE</button>
            </div>
           
        </form>
    </div>
  )
}

export default LoanApplyDetail
