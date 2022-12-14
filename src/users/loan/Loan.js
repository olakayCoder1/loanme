import React from 'react'
import {TbCurrencyNaira} from 'react-icons/tb'
import { useNavigate } from "react-router-dom";

function RepaymentCard({amount, paidDate , status}){
    
    return ( 
        <div className=' border border-loan-primary flex flex-col gap-2 justify-between p-2 px-6 rounded-md my-2'>
            <div className=' flex justify-between items-center'>
                <p className=' flex items-center text-xl font-medium'>
                    <TbCurrencyNaira /> 
                    <span>{amount}</span>
                </p>
                {status.toLowerCase() === 'pending' ? (
                    <p className=' text-red-500 text-sm font-medium'>{status}</p>
                ):(
                    <p className=' text-green-500 text-sm font-medium'>{status}</p>
                )}
            </div>
            <time className=' text-xs font-normal'>{paidDate}</time>
           
        </div>
    )
}


function Loan() {
    let navigate = useNavigate()
  return (
    <div className='p-4 w-full h-full'>
        <div className='p-4 py-7 bg-loan-light min-w-sm w-full text-loan-secondary flex flex-col gap-4 rounded-md'>
            <h2 className=' text-base font-bold'>Loan Disbursed</h2>
            <h1 className=' flex items-center text-5xl font-bold'>
                <TbCurrencyNaira />
                <span>169,700.00</span>
            </h1>
        </div>
        <div className=' w-full'>
            <button onClick={()=> navigate('/loan/repayment')}  type="button" className="w-[50%] py-3 px-5 mr-2 my-4 mb-12 text-sm font-medium focus:outline-none bg-loanBlue-primary text-white rounded-md border border-gray-300 ">MAKE PAYMENT</button>
        </div>
        {/* REPAYMENT BREAKDOWN */}
        <div>
            <h2 className=' underline underline-offset-4 decoration-loanBlue-primary'>Repayment Breakdown</h2>
            <RepaymentCard paidDate='NOV 28 , 2020' status="PENDING"  amount="25,255"/>
            <RepaymentCard paidDate='NOV 28 , 2020' status="PAID"  amount="25,255"/>
            <RepaymentCard paidDate='NOV 28 , 2020' status="PAID"  amount="25,255"/>
            <RepaymentCard paidDate='NOV 28 , 2020' status="PAID"  amount="25,255"/>

        </div>

    </div>
  
  )
}

export default Loan