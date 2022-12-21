import React, { useContext, useEffect, useState  } from 'react'
import DashboardWelcomeHeader from '../../component/DashboardWelcomeHeader'
import {TbCurrencyNaira} from 'react-icons/tb'
import {BsFillCreditCard2BackFill} from 'react-icons/bs'
import {FcOk} from 'react-icons/fc'
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../../contexts/ContextProvider'




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

function AccountDebitCard({start , last }){
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

  const { hasCompletedKyc , validLoanPrice , hasValidLoan } = useContext(AuthContext)

  const [ userBanks , setUserBanks ] = useState(null)
  const [ userDebitCards , setUserDebitCards ] = useState(null)

  useEffect(()=> {
    if(!hasCompletedKyc){
      navigate('/setup/account/bvn')
    }

  },[])


  
  useEffect(()=> {
    const url = 'http://127.0.0.1:8000/api/v1/users/bankaccount' 
    fetch(url)
    .then(res => res.json())
    .then(val => {setUserBanks(val) })
    .catch(err => console.log(err) )

  },[])

  useEffect(()=> {
    const url = 'http://127.0.0.1:8000/api/v1/users/debitcard' 
    fetch(url)
    .then(res => res.json())
    .then(val => {
        console.log(val)
        setUserDebitCards(val)
    })
    .catch(err => console.log(err) )

  },[])


  return (
    <div className='p-4 w-full h-screen'>
      <div className=' w-full md:w-[70%] lg:w-[50%] mx-auto'>
        <DashboardWelcomeHeader name='Olanrewaju'/>
        <div>
          <h2 className=' font-normal text-base py-4'>Dashboard</h2>
            {!hasValidLoan ? (
              <>
                <div className=' p-4 py-7 bg-loan-light min-w-sm w-full text-loan-secondary flex flex-col gap-4 rounded-md'>
                  <h2 className=' text-base font-bold'>Your Loan</h2>
                  <h1 className=' flex items-center text-5xl font-bold'>
                      <TbCurrencyNaira />
                      <span>0.00</span>
                  </h1>
                </div>
                <div cl w-full>
                <button onClick={()=> navigate('/loan/request')}  type="button" className=" btn-primary-white w-[50%] my-4">APPLY FOR A LOAN</button>
                </div>

              </>
            ): (
              <>
                  <div className=' p-4 py-7 bg-loan-light min-w-sm w-full text-loan-secondary flex flex-col gap-4 rounded-md'>
                    <h2 className=' text-base font-bold'>Your Loan</h2>
                    <h1 className=' flex items-center text-5xl font-bold'>
                        <TbCurrencyNaira />
                        <span>{validLoanPrice}</span>
                    </h1>
                  </div>
                  <div className=' flex items-center gap-2 my-4'>
                    <button onClick={()=> navigate('/loan')}  type="button" className=" btn-primary-white">VIEW LOAN DETAILS</button>
                    <button onClick={()=> navigate('/loan/repayment')}  type="button" className=" btn-primary">MAKE PAYMENT</button>
                  </div>
              </>
            )}


            {userBanks &&  userBanks.map((val)=> <AccountBank key={val.uuid} number={`${val.account_number}`} />)}
            {userDebitCards &&  userBanks.map((val)=> <AccountDebitCard key={val.uuid} last={val.last}  start={val.start} />)}
        </div>
      </div>
      
    </div>
  )
}

export default Dashboard
