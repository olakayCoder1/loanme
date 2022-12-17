import React, { useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../../contexts/ContextProvider';

function LoanApplyDetail() {
    const {setValidLoanPrice } = useContext(AuthContext)

    let navigate = useNavigate()

    function handleSubmit(){
        setValidLoanPrice('90,000.00')
        localStorage.setItem('validLoanPrice', JSON.stringify('90,000.00'))
        localStorage.setItem('hasValidLoan', JSON.stringify(true))
        navigate('/')
    }
  return (
    <div className=' py-4'>
        <div className='text-loan-secondary flex justify-between items-center bg-loan-light p-4 px-8'>
            <p className=' font-bold text-base '>Loan Details</p>
            <p>4/4</p>
        </div>

        <form className='w-full  flex flex-col gap-2 my-8'>
            <label htmlFor="helper-text" className="block mb-1 text-sm font-medium text-loan-secondary  ">Loan Amount</label>
            <input type="number" aria-describedby="helper-text-explanation" id="disabled-input" aria-label="disabled input"
                className="bg-gray-50 mb-3 border border-gray-300  text-sm rounded-md focus:ring-loan-primary focus:border-loan-primary block w-full p-2.5 focus:outline-none" 
                placeholder="" /> 

            <label htmlFor="bank" className="block mb-1 text-sm font-medium text-loan-secondary  ">Loan Reason</label>
            <select id="bank" 
                className="bg-gray-50 mb-3 border border-gray-300  text-sm rounded-md focus:ring-loan-primary focus:border-loan-primary block w-full p-2.5 focus:outline-none" 
                >
            <option selected disabled hidden></option>
            <option value="fisrt_bank">Education</option>
            <option value="fisrt_bank">Medical</option>
            <option value="fisrt_bank">Rent</option>
            <option value="fisrt_bank">Travel</option>
            <option value="fisrt_bank">Business</option>
            <option value="fisrt_bank">Goods</option>
            <option value="fisrt_bank">Events</option>
            <option value="fisrt_bank">Household</option>
            <option value="fisrt_bank">Other</option>
            <option value="uba">Rented</option>
            </select>
            <div className=' w-full flex gap-2'>
                <button type="button" onClick={()=> navigate('/loan/request/address')} className="w-[50%] py-4 px-5 mr-2 my-4 text-sm font-medium focus:outline-none text-loanBlue-primary bg-white rounded-md border border-gray-200 ">PREVIOUS</button>
                <button type="button" onClick={handleSubmit} className="w-[50%] py-4 px-5 mr-2 my-4 text-sm font-medium focus:outline-none bg-loanBlue-primary text-white rounded-md border border-gray-200 ">COMPLETE</button>
            </div>
           
        </form>
    </div>
  )
}

export default LoanApplyDetail
