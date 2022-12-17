import React, { useContext } from 'react'
import {TbCurrencyNaira} from 'react-icons/tb'
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../../contexts/ContextProvider';

function RepaymentCard({amount, paidDate , status}){
    
    return (
        <div className=' border border-loan-primary flex flex-col gap-2 justify-between p-2 px-6 rounded-md my-2'>
            <div className=' flex justify-between items-center'>
                <p className=' flex items-center text-xl font-medium'>
                    <TbCurrencyNaira /> 
                    <span>{amount}</span>
                </p>
                {status.toLowerCase() === 'active' ? (
                    <p className=' text-red-500 text-sm font-medium'>{status}</p>
                ):(
                    <p className=' text-green-500 text-sm font-medium'>{status}</p>
                )}
            </div>
            <time className=' text-xs font-normal'>{paidDate}</time>
           
        </div>
    )
}


function LoanHistory() {
    let navigate = useNavigate()
    const {validLoanPrice,hasValidLoan} = useContext(AuthContext)
  return (
    <div className='p-4 w-full h-full'>
        <div className='p-4 py-7 bg-loan-light min-w-sm w-full text-loan-secondary flex flex-col gap-4 rounded-md'>
            <h2 className=' text-base font-bold'>Active loan repayment balance: </h2>
            <h1 className=' flex items-center text-5xl font-bold'>
                <TbCurrencyNaira />
                <span>{validLoanPrice} </span>
            </h1>
        </div>
        <div className=' w-full'>
        {!hasValidLoan ? (
              <>
                <div class='w-full' >
                    <button onClick={()=> navigate('/loan/request')}  type="button" className="w-[50%] py-3 px-5 mr-2 my-4 mb-12 text-sm font-medium focus:outline-none text-loanBlue-primary bg-white rounded-md border border-gray-300 ">APPLY FOR A LOAN</button>
                </div>

              </>
            ): (
              <>
                  <div className=' flex items-center gap-2'>
                    <button onClick={()=> navigate('/loan')}  type="button" className="w-full py-3 px-5 mr-2 my-4 mb-12 text-sm font-medium focus:outline-none text-loanBlue-primary bg-white rounded-md border border-gray-300 ">VIEW LOAN DETAILS</button>
                    <button onClick={()=> navigate('/loan/repayment')}  type="button" className="w-full py-3 px-5 mr-2 my-4 mb-12 text-sm font-medium focus:outline-none bg-loanBlue-primary text-white rounded-md border border-gray-300 ">MAKE PAYMENT</button>
                  </div>
              </>
            )}

        </div>
        {/* REPAYMENT BREAKDOWN */}
        <div>
            <h2 className=' text-loan-secondary'>Loan History</h2>
            <RepaymentCard paidDate='NOV 28 , 2020' status="ACTIVE"  amount="25,255"/>
            <RepaymentCard paidDate='NOV 28 , 2020' status="COMPLETED"  amount="25,255"/>
            <RepaymentCard paidDate='NOV 28 , 2020' status="COMPLETED"  amount="250,000"/>
            <RepaymentCard paidDate='NOV 28 , 2020' status="COMPLETED"  amount="250,000"/>
            <RepaymentCard paidDate='NOV 28 , 2020' status="COMPLETED"  amount="250,000"/>

        </div>

    </div>
  
  )
}

export default LoanHistory
