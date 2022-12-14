import React from 'react'
import logo from '../../assets/loanme.png'
import {Route, Routes } from "react-router-dom";
import OnboardingPhone from './OnboardingPhone';
import OnboardingPhoneVerify from './OnboardingPhoneVerify';
import OnboardingPersonalInfo from './OnboardingPersonalInfo';

function Onboarding() {
  return (
    <div className=' w-full h-full flex '>
      <div className='w-full md:w-3/6'>
        <div className=' w-full max-w-md mx-auto py-12'>
            <div className=' w-full flex items-center gap-4  py-4 md:py-8 '>
                <img src={logo} alt='quick_loan' className='w-10 h-10 text-gray-700'/>
                <h2 className=' text-xl font-bold font-headingFont'>Quick Loan</h2>
            </div>
            <Routes>
                <Route path='' element={<OnboardingPhone />} />
                <Route path='/phone-verify' element={<OnboardingPhoneVerify />} />
                <Route path='/personaldetails' element={<OnboardingPersonalInfo />} />

            </Routes>
        </div>
      </div>
      <div className=' w-3/6 bg-loan-primary h-full'>

      </div>
    </div>
  )
}

export default Onboarding
