import React, { useContext } from 'react'
import {TbCurrencyNaira} from 'react-icons/tb'
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../../contexts/ContextProvider';
// import  Lottie from 'lottie-react'
import cal from '../../admin/pages/user_account/done_ok.json'

function LoanOffer() {

    const {setValidLoanPrice, displayNotification } = useContext(AuthContext)

    let navigate = useNavigate()

    function handleSubmit(){
        displayNotification('success','You account have been credited with 95,000.00')
        setValidLoanPrice('95,000.00')
        localStorage.setItem('validLoanPrice', JSON.stringify('95,000.00'))
        localStorage.setItem('hasValidLoan', JSON.stringify(true))
        navigate('/')
    }

  return (
    <div className=' p-12 py-6'>
      <div className=' flex flex-col gap-4 text-sm font-normal  '>
        {/* <Lottie animationData={cal} className='w-28 h-28   text-center mx-auto'/> */}
        <h2 className='text-center text-lg font-normal text-loanBlue-primary'>Congratulations!</h2>
        <p>Your loan offer, Select your repayment period to proceed
            As part of our ongoing efforts to provide the best service to learners, customers,
             and partners, we will be updating some of our policies. Effective January 1, 
             2023, an updated Terms of Use will be in place on Coursera
        </p>
        <div className=' font-medium text-base text-gray-800'>
            <h2>Loan Amount</h2>
            <h2 className=' flex  items-center  text-2xl font-normal text-gray-800'>
                <TbCurrencyNaira />
                <span>90,000.00</span>
            </h2>
        </div>
        <h2>Choose a repayment period to proceed</h2>
        <div className=' text-sm font-semibold flex gap-4'>
            <div className='border-[1px] border-loanBlue-primary divide-y rounded cursor-pointer'>
                <h2 className=' flex  items-center place-content-center  bg-loanBlue-primary text-white p-2 px-4'>
                    <TbCurrencyNaira />
                    <span>5,000.00</span>
                </h2>
                <p className=' text-center py-2 px-4 '>
                    3 Months
                </p>
            </div>
            <div className='border-[1px] border-gray-200 divide-y rounded cursor-pointer'>
                <h2 className=' flex  items-center place-content-center  text-gray-800 bg-gray-300 p-2 px-4'>
                    <TbCurrencyNaira />
                    <span>50,000.00</span>
                </h2>
                <p className=' text-center py-2 px-4 '>
                    3 Months
                </p>
            </div>
            <div className='border-[1px] border-gray-200 divide-y rounded cursor-pointer'>
                <h2 className=' flex  items-center place-content-center  text-gray-800 bg-gray-300 p-2 px-4'>
                    <TbCurrencyNaira />
                    <span>50,000.00</span>
                </h2>
                <p className=' text-center py-2 px-4 '>
                    3 Months
                </p>
            </div>
        </div>
        <div className=' border-[1px] border-gray-300  p-4 py-2.5 rounded'>
            You pay <span className=' font-bold text-sm text-loan-secondary'>95,000.00 </span> 
            after <span className=' font-bold text-sm text-loan-secondary'> 3 months</span>. Enjoy lower Interest free if you pay on time
            
        </div>
        <button onClick={handleSubmit} className=' btn-primary w-fit px-12'>Complete</button>
      </div>
    </div>
  )
}

export default LoanOffer
