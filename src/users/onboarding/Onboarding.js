import React from 'react'
import logo from '../../assets/loanme.png'
import {Route, Routes } from "react-router-dom";
import logo1 from '../../assets/laptop.jpeg'
import OnboardingPhone from './OnboardingPhone';
import OnboardingPhoneVerify from './OnboardingPhoneVerify';
import OnboardingPersonalInfo from './OnboardingPersonalInfo';
import OnboardAddress from './OnboardAddress';
import OnboardingAccountPin from './OnboardingAccountPin';

function Onboarding() {
  return (
    <div className=' w-full h-screen flex '>
      <div className='p-3 md:p-0 w-full md:w-3/6 '>
        <div className=' w-full md:max-w-sm mx-auto py-12'>
            <div className=' w-full flex items-center gap-4  py-4 md:py-8 '>
                <img src={logo} alt='quick_loan' className='w-10 h-10 text-gray-700'/>
                <h2 className=' text-xl font-bold font-headingFont'>Quick Loan</h2>
            </div>
            <Routes>
                <Route path='' element={<OnboardingPhone />} />
                <Route path='/phone-verify' element={<OnboardingPhoneVerify />} />
                <Route path='/personaldetails' element={<OnboardingPersonalInfo />} />
                <Route path='/address' element={<OnboardAddress />} />
                <Route path='/pin' element={<OnboardingAccountPin />} />
            </Routes>
        </div>
      </div>
      <div className='hidden md:block md:w-3/6  bg-loan-primary h-full bg-cover bg-center bg-no-repeat' 
            style={{backgroundImage: `url(${logo1})` }}>
        {/* <div className=' w-full h-full bg-gray-400 opacity-60'></div> */}
      </div>
    </div>
  )
}

export default Onboarding