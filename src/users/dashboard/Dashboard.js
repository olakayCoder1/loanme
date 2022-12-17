import React, { useState } from 'react'
import DashboardWelcomeHeader from '../../component/DashboardWelcomeHeader'
import {TbCurrencyNaira} from 'react-icons/tb'
import {BsFillCreditCard2BackFill} from 'react-icons/bs'
import {FcOk} from 'react-icons/fc'
import { useNavigate } from "react-router-dom";

function Dashboard({showNavBar, setShowNavBar}) {
  let navigate = useNavigate()
  const [hasLoanStatus, setHasLoanStatus] = useState(false)

  return (
    <div className='p-4 w-full h-screen'>
      <div className=' w-full md:w-[70%] lg:w-[50%] mx-auto'>
        <DashboardWelcomeHeader showNavBar={showNavBar} setShowNavBar={setShowNavBar} name='Olanrewaju'/>
        <div>
          <h2 className=' font-normal text-base py-4'>Dashboard</h2>
            {hasLoanStatus ? (
              <>
                <div className=' p-4 py-7 bg-loan-light min-w-sm w-full text-loan-secondary flex flex-col gap-4 rounded-md'>
                  <h2 className=' text-base font-bold'>Your Loan</h2>
                  <h1 className=' flex items-center text-5xl font-bold'>
                      <TbCurrencyNaira />
                      <span>0.00</span>
                  </h1>
                </div>
                <div cl w-full>
                <button onClick={()=> setHasLoanStatus(!hasLoanStatus)}  type="button" className="w-[50%] py-3 px-5 mr-2 my-4 mb-12 text-sm font-medium focus:outline-none text-loanBlue-primary bg-white rounded-md border border-gray-300 ">APPLY FOR A LOAN</button>
                </div>

              </>
            ): (
              <>
                  <div className=' p-4 py-7 bg-loan-light min-w-sm w-full text-loan-secondary flex flex-col gap-4 rounded-md'>
                    <h2 className=' text-base font-bold'>Your Loan</h2>
                    <h1 className=' flex items-center text-5xl font-bold'>
                        <TbCurrencyNaira />
                        <span>90,000.00</span>
                    </h1>
                  </div>
                  <div className=' flex items-center gap-2'>
                    <button onClick={()=> navigate('/loan')}  type="button" className="w-full py-3 px-5 mr-2 my-4 mb-12 text-sm font-medium focus:outline-none text-loanBlue-primary bg-white rounded-md border border-gray-300 ">VIEW LOAN DETAILS</button>
                    <button onClick={()=> navigate('/loan/repayment')}  type="button" className="w-full py-3 px-5 mr-2 my-4 mb-12 text-sm font-medium focus:outline-none bg-loanBlue-primary text-white rounded-md border border-gray-300 ">MAKE PAYMENT</button>
                  </div>
              </>
            )}



            <div className=' flex justify-between items-center bg-loan-light p-4 rounded-md mb-4'>
                <div className=' grow flex items-center gap-8'>
                  <BsFillCreditCard2BackFill  className=' w-12 h-12'/>
                  <div className='flex flex-col items-center text-base font-normal'>
                    <h2 className=' text-lg text-loanBlue-primary'>Debit Card</h2>
                    <p>408903****85</p>
                  </div>
                </div>
                <FcOk className=' w-12 h-12'/>
            </div>

            <div className=' flex justify-between items-center bg-loan-light p-4 rounded-md my-8'>
                <div className=' grow flex items-center gap-8'>
                  <BsFillCreditCard2BackFill  className=' w-12 h-12'/>
                  <div className='flex flex-col items-start text-base font-normal'>
                    <h2 className=' text-lg text-loanBlue-primary'>Bank Account</h2>
                    <p>Account Number : 120903****85</p>
                  </div>
                </div>
                <FcOk className=' w-12 h-12'/>
            </div>
        </div>
      </div>
      
    </div>
  )
}

export default Dashboard
