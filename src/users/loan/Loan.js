import React, { useContext, useEffect, useState } from 'react'
import {TbCurrencyNaira} from 'react-icons/tb'
import { useNavigate, useParams } from "react-router-dom";
import { InAppLoading } from '../../admin/pages/dashboard/LoanDashboard';
import { AuthContext } from '../../contexts/ContextProvider';

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
    let { uuid} = useParams()
    const {authUser ,authToken, BACKEND_DOMAIN} = useContext(AuthContext)

    const [ userDebt , setUserDebt] = useState(null)
    const [loan , setLoan ] = useState(null) 


    useEffect(()=> {
        if(authUser === null || authUser === 'undefined' ){
            navigate('/signin')
        }

    const url1 = `${BACKEND_DOMAIN}/api/v1/users/loans/${uuid}/schedule`    
    const url2 = `${BACKEND_DOMAIN}/api/v1/loans/${uuid}` 
    Promise.all([
      fetch(url1,{method : 'GET', headers : {
            'Content-Type': 'application/json',
            'Authorization' : `Bearer ${authToken?.access}`
        }},),
      fetch(url2,{ method : 'GET', headers : {
              'Content-Type': 'application/json',
              'Authorization' : `Bearer ${authToken?.access}`
          }},),

    ]).then(function (responses) {
      return Promise.all(responses.map(function (response) {
        return response.json();
      }));
    }).then(function (data) {
      setLoan(data[1]) 
      setUserDebt(data[0])  
    //   setHasValidLoan(data[1]['hasActiveLoan'])
    //   localStorage.getItem('hasValidLoan', JSON.stringify(data[1]['hasActiveLoan']))

    }).catch(function (error) {
      // if there's an error, log it
    });



    },[])
  return (
    <div className='p-4 w-full h-full'>
        <div className='p-4 py-7 bg-loan-light min-w-sm w-full text-loan-secondary flex flex-col gap-4 rounded-md'>
            <h2 className=' text-base font-bold'>Loan Disbursed</h2>
            <h1 className=' flex items-center text-5xl font-bold'>
                <TbCurrencyNaira />
                <span>{loan && loan.amount}</span>
            </h1> 
        </div>
        <div className=' w-full'>
            <button onClick={()=> navigate(`/loan/${loan['uuid']}/repayment`)}  type="button" class="w-[50%] py-3 px-5 mr-2 my-4 mb-12 text-sm font-medium focus:outline-none bg-loanBlue-primary text-white rounded-md border border-gray-300 ">MAKE PAYMENT</button>
        </div>
        {/* REPAYMENT BREAKDOWN */}
        <div>
            <h2 className=' underline underline-offset-4 decoration-loanBlue-primary'>Repayment Breakdown</h2>
            {loan ? loan['schedule'].map((val)=> {
                return <RepaymentCard key={val.uuid} paidDate={val.date} status={val.status}  amount={val.amount}/>
            }): (
                <InAppLoading />
            )}

        </div>

    </div>
  
  )
}

export default Loan
