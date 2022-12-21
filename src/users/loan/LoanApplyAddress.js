import React from 'react'
import { useNavigate } from "react-router-dom";


function LoanApplyAddress() {
    let navigate = useNavigate()
  return (
    <div className=' py-4'>
        <div className='text-loan-secondary flex justify-between items-center bg-loan-light p-4 px-8'>
            <p className=' font-bold text-base '>Address Details</p>
            <p>3/4</p>
        </div>

        <form className='w-full  flex flex-col gap-2 my-8'>
            <label for="bank" className="block mb-1 text-sm font-medium text-loan-secondary  ">Type of residence</label>
            <select id="bank"   className=" input-primary"   >
            <option selected disabled hidden></option>
            <option value="fisrt_bank">Owned</option>
            <option value="uba">Rented</option>
            </select>

            <label htmlFor="helper-text" className="block mb-1 text-sm font-medium text-loan-secondary  ">Rent per year</label>
            <input type="number"  className=" input-primary"    placeholder="" /> 

            <label htmlFor="bank" className="block mb-1 text-sm font-medium text-loan-secondary  ">How long have you been living there</label>
            
            <select id="bank"  className=" input-primary"   >
            <option selected disabled hidden></option>
            <option value="fisrt_bank">0 year</option>
            <option value="fisrt_bank">1 year</option>
            <option value="fisrt_bank">2 years</option>
            <option value="fisrt_bank">3 years</option>
            <option value="fisrt_bank">Above 3 years</option>
            </select>

            <div className=' w-full flex gap-2 py-6'>
                <button type="button" onClick={()=> navigate('/loan/request/education-employment')} className=" btn-primary-white">PREVIOUS</button>
                <button type="button" onClick={()=> navigate('/loan/request/amount')} className="btn-primary">CONTINUE</button>
            </div>
           
        </form>
    </div>
  )
}

export default LoanApplyAddress
