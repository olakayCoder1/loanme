import React, { useContext, useState , useEffect } from 'react'
import {TbCurrencyNaira} from 'react-icons/tb'
import { useNavigate } from "react-router-dom";
import { InAppLoading } from '../../admin/pages/dashboard/LoanDashboard';
import { NoContentToShow } from '../../admin/pages/user_application/ApplicationDetailScore';
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
    const {authUser ,authToken, BACKEND_DOMAIN} = useContext(AuthContext)
    const [ userDebt , setUserDebt] = useState(null)
    const [loans , setLoans] = useState(null) 
    const [ hasValidLoan , setHasValidLoan  ] = useState(false)
    const [ inLoad , setInLoad ] = useState(false)


    useEffect(()=> {
        if(authUser === null || authUser === 'undefined' ){
            navigate('/signin')
        }

    const url1 = `${BACKEND_DOMAIN}/api/v1/users/loans`    
    const url2 = `${BACKEND_DOMAIN}/api/v1/users/loandebt` 
    setInLoad(true) 
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
      setInLoad(false)
      setLoans(data[0]) 
      setUserDebt(data[1])  
      setHasValidLoan(data[1]['hasActiveLoan'])
      localStorage.getItem('hasValidLoan', JSON.stringify(data[1]['hasActiveLoan']))

    }).catch(function (error) {
      // if there's an error, log it
    });



    },[])

  return (
    <div className='p-4 w-full h-full'>
        <div className='p-4 py-7 bg-loan-light min-w-sm w-full text-loan-secondary flex flex-col gap-4 rounded-md'>
            <h2 className=' text-base font-bold'>Outstanding Loan </h2>
            <h1 className=' flex items-center text-5xl font-bold'>
                <TbCurrencyNaira />
                <span>{userDebt && userDebt['debt']} </span> 
            </h1>
        </div>
        <div className=' w-full'> 
        {userDebt && !hasValidLoan ? (
              <>
                <div class='w-full' >
                    <button onClick={()=> navigate('/loan/request')}  type="button" className="w-[50%] py-3 px-5 mr-2 my-4 mb-12 text-sm font-medium focus:outline-none text-loanBlue-primary bg-white rounded-md border border-gray-300 ">APPLY FOR A LOAN</button>
                </div>

              </>
            ): (
              <>
                  <div className=' flex items-center gap-2'>
                    <button onClick={()=> navigate(`/loan/${userDebt['loan']['uuid']}/details`)}  type="button" className="w-full py-3 px-5 mr-2 my-4 mb-12 text-sm font-medium focus:outline-none text-loanBlue-primary bg-white rounded-md border border-gray-300 ">VIEW LOAN DETAILS</button>
                    <button onClick={()=> navigate(`/loan/${userDebt['loan']['uuid']}/repayment`)}  type="button" className="w-full py-3 px-5 mr-2 my-4 mb-12 text-sm font-medium focus:outline-none bg-loanBlue-primary text-white rounded-md border border-gray-300 ">MAKE PAYMENT</button>
                  </div>
              </>
            )}

        </div>
        {/* REPAYMENT BREAKDOWN */}
        <div>
            <h2 className=' text-loan-secondary'>Loan History</h2>
            {inLoad ? (
              <InAppLoading />
            ): (
              <>
                {loans &&  loans.length > 0 ? loans.map((data)=> (
                    <RepaymentCard key={data.uuid} paidDate={data.due_date} status={data.status}  amount={data.amount}/>
                ))  : ( <>
                        <NoContentToShow  description='You have no loan history'/>
                      </>
                  )  
                  }
              </>
            )}
                        

        </div>

    </div>
  
  )
}

export default LoanHistory
