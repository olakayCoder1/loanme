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

function AccountDebitCard({start , last , val }){
  // console.log(start , last  )
  // console.log(val  )
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

  const {BACKEND_DOMAIN ,  setValidLoanPrice,  authToken , setAuthUser , authUser } = useContext(AuthContext)

  const [ userBanks , setUserBanks ] = useState(null)
  const [ userDebitCards , setUserDebitCards ] = useState(null)
  const [ userDebt , setUserDebt] = useState(null)

  useEffect(()=> {



    if(authUser === null || authUser === 'undefined' ){
      navigate('/signin')
    }
    const url = `${BACKEND_DOMAIN}/api/v1/users/bankaccount`

    fetch(url,{method : 'GET', headers : {
      'Content-Type': 'application/json',
      'Authorization' : `Bearer ${authToken?.access}`
    }},)
    .then(res => res.json())
    .then( data => data )

    if(authUser.is_staff){
      navigate('/admin') 
    }
    else if(!authUser.is_bvn){
      navigate('/setup/account/bvn')
    }
    else if(!authUser.is_card){
      navigate('/setup/account/card')
    }
    else if(!authUser.is_bank){ 
      navigate('/setup/account/bankaccount')
    }
    else{
      // console.log(authUser)  
    // console.log(authToken) 
      const url1 = `${BACKEND_DOMAIN}/api/v1/users/bankaccount` 
      const url2 = `${BACKEND_DOMAIN}/api/v1/users/debitcard` 
      const url3 = `${BACKEND_DOMAIN}/api/v1/users/loandebt` 
      Promise.all([
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
          setUserBanks(data[0]) 
          setUserDebitCards(data[1])
          setUserDebt(data[2])
          setValidLoanPrice(data[2]['debt'])  
          // console.log(data[0]);
        }).catch(function (error) {
          // if there's an error, log it
            // console.log(error);
        });
    }
  },[])

 
  
  // useEffect(()=> {
  //   const url1 = `${BACKEND_DOMAIN}/api/v1/users/bankaccount`
  //   fetch(url1,{
  //     method : 'GET',
  //     headers : {
  //         'Content-Type': 'application/json',
  //         'Authorization' : `Bearer ${authToken.access}`
  //     }},)
  //   .then(res => res.json())
  //   .then(val => {setUserBanks(val) })
  //   .catch(err => console.log(err) )

  // },[])

  // useEffect(()=> {
  //   const url2 = `${BACKEND_DOMAIN}/api/v1/users/debitcard`  
  //   fetch(url2,{
  //     method : 'GET',
  //     headers : {
  //         'Content-Type': 'application/json',
  //         'Authorization' : `Bearer ${authToken.access}`
  //     }},)
  //   .then(res => res.json())
  //   .then(val => {
  //       setUserDebitCards(val)
  //   })
  //   .catch(err => console.log(err) )

  // },[])


  return (
    <div className='p-4 w-full h-screen'>
      <div className=' w-full md:w-[70%] lg:w-[50%] mx-auto'>
        <DashboardWelcomeHeader name={authUser && authUser.first_name}/>
        <div>
          <h2 className=' font-normal text-base py-4'>Dashboard</h2>
            {userDebt ? (
              <>
                <div className=' p-4 py-7 bg-loan-light min-w-sm w-full text-loan-secondary flex flex-col gap-4 rounded-md'>
                  <h2 className=' text-base font-bold'>Your Loan</h2>
                  <h1 className=' flex items-center text-5xl font-bold'>
                      <TbCurrencyNaira />
                      <span>{userDebt && userDebt['debt']}</span>
                  </h1>
                </div>
                <div className='w-full'> 
                <button onClick={()=> navigate('/loan/request')}  type="button" className=" btn-primary-white w-[50%] my-4">APPLY FOR A LOAN</button>
                </div>

              </>
            ): (
              <>
                  <div className=' p-4 py-7 bg-loan-light min-w-sm w-full text-loan-secondary flex flex-col gap-4 rounded-md'>
                    <h2 className=' text-base font-bold'>Your Loan</h2>
                    <h1 className=' flex items-center text-5xl font-bold'>
                        <TbCurrencyNaira />
                        <span>{userDebt  && userDebt['debt']}</span>  
                    </h1>
                  </div>
                  <div className=' flex items-center gap-2 my-4'>
                    <button onClick={()=> navigate('/loan')}  type="button" className=" btn-primary-white">VIEW LOAN DETAILS</button>
                    <button onClick={()=> navigate('/loan/repayment')}  type="button" className=" btn-primary">MAKE PAYMENT</button>
                  </div>
              </>
            )}


            {userBanks &&  userBanks.map((val)=> <AccountBank key={val.uuid} number={`${val.account_number}`} />)}
            {userDebitCards &&  userDebitCards.map((val)=> <AccountDebitCard key={val.uuid} last={val.last}  start={val.start} val={val} />)}
        </div>
      </div>
      
    </div>
  )
}

export default Dashboard
