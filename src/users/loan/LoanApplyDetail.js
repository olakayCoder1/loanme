import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../../contexts/ContextProvider';
import OfferCalculating from '../../component/OfferCalculating';

function LoanApplyDetail({loanApplicationData,handleValueChange} ) {
    const {BACKEND_DOMAIN , displayNotification , authToken } = useContext(AuthContext)

    let navigate = useNavigate()
    const [loading , setLoading] = useState(false)



    

    async function handleSubmit(e){

        e.preventDefault()
        const val = Object.values(loanApplicationData)
        if ( val.includes(null) || val.includes('')){
            displayNotification('error','All fields are required')
        }else{
            setLoading(true)
            localStorage.removeItem('loanApplicationData')  
            const response = await fetch(`${BACKEND_DOMAIN}/api/v1/loans/applications`, {
                method : 'POST',
                headers : {
                    'Content-Type': 'application/json',
                    'Authorization' : `Bearer ${authToken?.access}`
                },
                body: JSON.stringify(loanApplicationData)
            })
            console.log(response.status)    
            if(response.status === 200){
                const data = await response.json()
                setLoading(false)
                navigate(`/loan/request/${data[0].application.uuid}/offer`)  
            }
            if(response.status === 400){
                setLoading(false)
                const data = response.json()
                displayNotification('info', 'You have an active loan. Kindly repay so have access to loan')
                navigate(`/`)
            }
        }
    }


   
    

  return (
    <div className=' py-4'>
        <>{loading ? (
            <OfferCalculating />
        ):(
            <>
            <div className='text-loan-secondary flex justify-between items-center bg-loan-light p-4 px-8'>
                <p className=' font-bold text-base '>Loan Details</p>
                <p>4/4</p>
            </div>

            <form className='w-full  flex flex-col gap-2 my-8' onSubmit={handleSubmit}>
                <label htmlFor="helper-text" className="block mb-1 text-sm font-medium text-loan-secondary  ">Loan Amount</label>
                <input type="number" value={loanApplicationData.amount} onChange={(e)=> handleValueChange('amount', e.target.value)}   className="input-primary"  placeholder="" /> 

                <label    className="block mb-1 text-sm font-medium text-loan-secondary  ">Loan Reason</label>
                <select  onChange={(e)=> handleValueChange('reason', e.target.value)} className="input-primary"   >
                <option selected disabled hidden></option>
                <option value="Education" selected={loanApplicationData.reason === 'Education'} >Education</option>
                <option value="Medical" selected={loanApplicationData.reason === 'Medical'} >Medical</option>
                <option value="Rent" selected={loanApplicationData.reason === 'Rent'} >Rent</option>
                <option value="Travel" selected={loanApplicationData.reason === 'Travel'} >Travel</option>
                <option value="Business" selected={loanApplicationData.reason === 'Business'} >Business</option>
                <option value="Goods" selected={loanApplicationData.reason === 'Goods'} >Goods</option>
                <option value="event" selected={loanApplicationData.reason === 'event'} >Events</option>
                <option value="Household" selected={loanApplicationData.reason === 'Household'} >Household</option>
                <option value="Other" selected={loanApplicationData.reason === 'Other'} >Other</option>
                </select>
                <div className=' w-full flex gap-2 py-6'>
                    <button type="button" onClick={()=> navigate('/loan/request/address')} className=" btn-primary-white">PREVIOUS</button>
                    <button type="submit"  className="btn-primary">Apply</button>
                </div>
            </form>
            </>
            )}  
        </>
        
    </div>
  )
}

export default LoanApplyDetail
