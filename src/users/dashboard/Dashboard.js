import React, { useContext, useEffect, useState  } from 'react'
import DashboardWelcomeHeader from '../../component/DashboardWelcomeHeader'
import {TbCurrencyNaira} from 'react-icons/tb'
import {BsFillCreditCard2BackFill} from 'react-icons/bs'
import {FcOk} from 'react-icons/fc'
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../../contexts/ContextProvider'
import { InAppLoading } from '../../admin/pages/dashboard/LoanDashboard'




function AccountBank({number}){
  const start = number.slice(0,3)
  const end = number.slice(-2)
  return (
    <div className=' flex justify-between items-center bg-loan-light p-4 rounded-md my-8'>
        <div className=' grow flex items-center gap-8'>
          <BsFillCreditCard2BackFill  className=' w-12 h-12'/>
          <div className='flex flex-col items-start text-base font-normal'>
            <h2 className=' text-lg text-loanBlue-primary'>Bank Account</h2>
            <p>Account Number : {start}****{end} </p>
          </div>
        </div>
        <FcOk className=' w-12 h-12'/>
    </div>
  )
}

function AccountDebitCard({start , last , val }){
  return (
    <div className=' flex justify-between items-center bg-loan-light p-4 rounded-md mb-4'>
        <div className=' grow flex items-center gap-8'>
          <BsFillCreditCard2BackFill  className=' w-12 h-12'/>
          <div className='flex flex-col items-center text-base font-normal'>
            <h2 className=' text-lg text-loanBlue-primary'>Debit Card</h2>
            <p>{start}***{last} </p>
          </div>
        </div>
        <FcOk className=' w-12 h-12'/>
    </div>
  )
}










function Dashboard() {
  let navigate = useNavigate()

  const {BACKEND_DOMAIN ,  setValidLoanPrice,  authToken , setAuthUser ,  authUser , displayNotification } = useContext(AuthContext)

  const [ userBanks , setUserBanks ] = useState(null)
  const [ userDebitCards , setUserDebitCards ] = useState(null)
  const [ userDebt , setUserDebt] = useState(null)
  const [ hasValidLoan , setHasValidLoan  ] = useState(false)
  const [ inLoad , setInLoad ] = useState(false)



  useEffect(()=> {
    if(authUser === null || authUser === 'undefined' ){
      window.location = '/signin'
    }
    if(authUser && authUser.is_staff){
      navigate('/admin') 
    }
    else if(authUser && !authUser.is_bvn){
      navigate('/setup/account/bvn')
    }
    else if(authUser && !authUser.is_card){
      navigate('/setup/account/card')
    }
    else if(authUser && !authUser.is_bank){ 
      navigate('/setup/account/bankaccount')
    }
    else{
      setInLoad(true)
      const url = `${BACKEND_DOMAIN}/api/v1/account` 
      const url1 = `${BACKEND_DOMAIN}/api/v1/users/bankaccount` 
      const url2 = `${BACKEND_DOMAIN}/api/v1/users/debitcard` 
      const url3 = `${BACKEND_DOMAIN}/api/v1/users/loandebt` 
      Promise.all([
      fetch(url , {method : 'GET', headers : {
          'Content-Type': 'application/json',
          'Authorization' : `Bearer ${authToken?.access}`
      }}),
      fetch(url1,{method : 'GET', headers : {
            'Content-Type': 'application/json',
            'Authorization' : `Bearer ${authToken?.access}`
        }},),
      fetch(url2,{ method : 'GET', headers : {
              'Content-Type': 'application/json',
              'Authorization' : `Bearer ${authToken?.access}`
          }},),
      fetch(url3,{ method : 'GET', headers : {
            'Content-Type': 'application/json',
            'Authorization' : `Bearer ${authToken?.access}`
        }},)

        ]).then(function (responses) {
          // Get a JSON object from each of the responses
          return Promise.all(responses.map(function (response) {
            return response.json();
          }));
        }).then(function (data) {
          // Log the data to the console
          // You would do something with both sets of data here 
          setInLoad(false)
          setAuthUser(data[0])
          setUserBanks(data[1]) 
          setUserDebitCards(data[2])
          setUserDebt(data[3])
          setHasValidLoan(data[3]['hasActiveLoan'])
          setValidLoanPrice(data[3]['debt'])  
        }).catch(function (error) {
          // if there's an error, log it
        });
    }
  },[])

  return (
    <div className='p-4 w-full h-screen'>
      <div className=' w-full md:w-[70%] lg:w-[50%] mx-auto'>
        <DashboardWelcomeHeader name={authUser && authUser.first_name}/>
        <div>
          <h2 className=' font-normal text-base py-4'>Dashboard</h2>
            <div className='p-4 py-7 bg-loan-light min-w-sm w-full text-loan-secondary flex flex-col gap-4 rounded-md'>
                  <h2 className=' text-base font-bold'>You Loan </h2>
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
                          <button onClick={()=> navigate(`/loan/${userDebt['loan']['uuid']}/details`)}  type="button" className="w-[50%] py-3 px-5 mr-2 my-4 mb-12 text-sm font-medium focus:outline-none text-loanBlue-primary bg-white rounded-md border border-gray-300 ">VIEW LOAN DETAILS</button>
                          <button onClick={()=> navigate(`/loan/${userDebt['loan']['uuid']}/repayment`)}  type="button" className="w-[50%] py-3 px-5 mr-2 my-4 mb-12 text-sm font-medium focus:outline-none bg-loanBlue-primary text-white rounded-md border border-gray-300 ">MAKE PAYMENT</button>
                        </div>
                    </>
                  )}

              </div>
              {inLoad ? (
                <InAppLoading />
              ): (
                <>
                {userBanks &&  userBanks?.map((val)=> <AccountBank key={val.uuid} number={`${val.account_number}`} />)}
                {userDebitCards &&  userDebitCards?.map((val)=> <AccountDebitCard key={val.uuid} last={val.last}  start={val.start} val={val} />)}
                </>
              )}
              

            
        </div>
      </div>
      
    </div>
  )
}

export default Dashboard
