import React from 'react'
import { useNavigate } from "react-router-dom";


function LoanApplyAddress({loanApplicationData,handleValueChange}) {
    let navigate = useNavigate()
  return (
    <div className=' py-4'>
        <div className='text-loan-secondary flex justify-between items-center bg-loan-light p-4 px-8'>
            <p className=' font-bold text-base '>Address Details</p>
            <p>3/4</p>
        </div>

        <form className='w-full  flex flex-col gap-2 my-8'>
            <label for="bank" className="block mb-1 text-sm font-medium text-loan-secondary  ">Type of residence</label>
            <select id="bank" onChange={(e)=> handleValueChange('residence', e.target.value)}    className=" input-primary"   >
            <option selected disabled hidden></option>
            <option value="Owned" selected={loanApplicationData.residence === 'Owned'} >Owned</option>
            <option value="Rented" selected={loanApplicationData.residence === 'Rented'}>Rented</option>
            </select>

            <label htmlFor="helper-text" className="block mb-1 text-sm font-medium text-loan-secondary  ">Rent per year</label>
            <input type="number"  className=" input-primary" value={loanApplicationData.rent_per_year}  onChange={(e)=> handleValueChange('rent_per_year', e.target.value)}  placeholder="" /> 

            <label  className="block mb-1 text-sm font-medium text-loan-secondary  ">How long have you been living there</label>
            
            <select  onChange={(e)=> handleValueChange('years_at_residence', e.target.value)}   className=" input-primary"   >
            <option selected disabled hidden></option>
            <option value="6 months" selected={loanApplicationData.years_at_residence === '6 months'}>6 months</option>
            <option value="1 year" selected={loanApplicationData.years_at_residence === '1 year'}>1 year</option>
            <option value="2 years" selected={loanApplicationData.years_at_residence === '2 years'}>2 years</option>
            <option value="Above 2 years" selected={loanApplicationData.years_at_residence === 'Above 2 years'}>Above 2 years</option>
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
