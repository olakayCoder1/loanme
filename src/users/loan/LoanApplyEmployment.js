import React from 'react'
import { useNavigate } from "react-router-dom";

function LoanApplyEmployment() {
    let navigate = useNavigate()
  return (
    <div className=' py-4'>
        <div className='text-loan-secondary flex justify-between items-center bg-loan-light p-4 px-8'>
            <p className=' font-bold text-base '>Education And Employment</p>
            <p>2/4</p>
        </div>

        <form className='w-full  flex flex-col gap-2 my-8'>
            <label htmlFor="bank" className="block mb-1 text-sm font-medium text-loan-secondary  ">Level of Education</label>
            <select id="bank"  className="input-primary" >
            <option selected disabled hidden></option>
            <option value="fisrt_bank">Undergraduate</option>
            <option value="uba">Graduate</option>
            <option value="uba">O level</option>
            <option value="uba">Technical education</option>
            </select>


            <label htmlFor="bank" className="block mb-1 text-sm font-medium text-loan-secondary  ">Employment Status</label>
            <select id="bank"  className="input-primary"   >
            <option selected disabled hidden></option>
            <option value="fisrt_bank">Unemployed</option>
            <option value="uba">Employed</option>
            <option value="uba">Enterpreneur</option>
            </select>

            <label htmlFor="helper-text" className="block mb-1 text-sm font-medium text-loan-secondary  ">Employer/Business Name</label>
            <input type="text"   className="input-primary"  placeholder="" /> 

            <label htmlFor="helper-text" className="block mb-1 text-sm font-medium text-loan-secondary  ">When you started working there</label>
            <input type="text" className="input-primary"  placeholder="" /> 


            <label htmlFor="helper-text" className="block mb-1 text-sm font-medium text-loan-secondary  ">Monthly Income</label>
            <input type="number"   className="input-primary"  placeholder="" />  

            <div className=' w-full flex gap-2 py-6'>
                <button type="button" onClick={()=> navigate('/loan/request')}  className=" btn-primary-white ">PREVIOUS</button>
                <button type="button" onClick={()=> navigate('/loan/request/address')}  className=" btn-primary">CONTINUE</button>
            </div>
           
        </form>
    </div>
  )
}

export default LoanApplyEmployment
