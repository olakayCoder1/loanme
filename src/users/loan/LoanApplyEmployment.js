import React from 'react'
import { useNavigate } from "react-router-dom";

function LoanApplyEmployment({loanApplicationData,handleValueChange}) {
    let navigate = useNavigate()
  return (
    <div className=' py-4'>
        <div className='text-loan-secondary flex justify-between items-center bg-loan-light p-4 px-8'>
            <p className=' font-bold text-base '>Education And Employment</p>
            <p>2/4</p>
        </div>

        <form className='w-full  flex flex-col gap-2 my-8'>
            <label htmlFor="bank" className="block mb-1 text-sm font-medium text-loan-secondary  ">Level of Education</label>
            <select id="bank"  className="input-primary" onChange={(e)=> handleValueChange('education', e.target.value)} >
            <option selected disabled hidden></option>
            <option value="Undergraduate" selected={loanApplicationData.education === 'Undergraduate'} >Undergraduate</option>
            <option value="Graduate" selected={loanApplicationData.education === 'Graduate'} >Graduate</option>
            <option value="Olevel" selected={loanApplicationData.education === 'Olevel'} >O level</option>
            <option value="Technical" selected={loanApplicationData.education === 'Technical'} >Technical education</option>
            </select>


            <label htmlFor="bank" className="block mb-1 text-sm font-medium text-loan-secondary  ">Employment Status</label>
            <select   className="input-primary"  onChange={(e)=> handleValueChange('employment', e.target.value)}  >
            <option selected disabled hidden></option>
            <option value="Unemployed" selected={loanApplicationData.employment === 'Unemployed'}>Unemployed</option>
            <option value="Employed" selected={loanApplicationData.employment === 'Employed'}>Employed</option>
            <option value="Entrepreneur" selected={loanApplicationData.employment === 'Entrepreneur'}>Entrepreneur</option>
            </select>

            <label htmlFor="helper-text" className="block mb-1 text-sm font-medium text-loan-secondary  ">Employer/Business Name</label>
            <input type="text"   className="input-primary" value={loanApplicationData.employer}  onChange={(e)=> handleValueChange('employer', e.target.value)} placeholder="" /> 

            <label htmlFor="helper-text" className="block mb-1 text-sm font-medium text-loan-secondary  ">When you started working there</label>
            <select   className="input-primary" onChange={(e)=> handleValueChange('years_at_work', e.target.value)}  >
            <option selected disabled hidden></option>
            <option value="Less than 6 months" selected={loanApplicationData.years_at_work === 'Less than 6 months'}>Less than 6 months</option>
            <option value="6 months" selected={loanApplicationData.years_at_work === '6 months'}>6 months</option>
            <option value="1 year" selected={loanApplicationData.years_at_work === '1 year'}>1 year</option>
            <option value="2 year" selected={loanApplicationData.years_at_work === '2 year'}>2 years</option>
            <option value="Above 2 years" selected={loanApplicationData.years_at_work === 'Above 2 years'}>Above 2 years</option>
            </select> 


            <label htmlFor="helper-text" className="block mb-1 text-sm font-medium text-loan-secondary  ">Monthly Income</label>
            <input type="number"   className="input-primary" value={loanApplicationData.income}  onChange={(e)=> handleValueChange('income', e.target.value)}  placeholder="" />  

            <div className=' w-full flex gap-2 py-6'>
                <button type="button" onClick={()=> navigate('/loan/request')}  className=" btn-primary-white ">PREVIOUS</button>
                <button type="button" onClick={()=> navigate('/loan/request/address')}  className=" btn-primary">CONTINUE</button>
            </div>
           
        </form>
    </div>
  )
}

export default LoanApplyEmployment
