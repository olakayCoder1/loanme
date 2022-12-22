import React, { useContext, useEffect, useState } from 'react'
import {Route, Routes , useNavigate } from "react-router-dom";
import logo2 from '../../assets/l2.jpeg'
import OnboardingPhone from './OnboardingPhone';
import OnboardingPhoneVerify from './OnboardingPhoneVerify';
import OnboardingPersonalInfo from './OnboardingPersonalInfo';
import OnboardAddress from './OnboardAddress';
import OnboardingAccountPin from './OnboardingAccountPin';
import logo1 from '../../assets/loanme.png'
import { AuthContext } from '../../contexts/ContextProvider';








function Onboarding() {
  const navigate = useNavigate()
  const {authToken , setAuthToken , authUser } = useContext(AuthContext)
  const [onboardingData , setOnboardingData] = useState(
    ()=> JSON.parse(localStorage.getItem('userOnboardingData'))|| {
      'phone': '',
      'country': 'Nigeria',
      'first_name':'',
      'last_name':'',
      'phone_number':'',
      'email':'',
      'gender':'',
      'address1': '',
      'address2' : '',
      'state' : '',
      'city': ' ',
      'pin':'',
    })

    



  function handleValueChange( key , val ){
    setOnboardingData( prev => {
      return { ...prev , [key]: val }
    })
    localStorage.setItem('userOnboardingData',JSON.stringify(onboardingData))
  }

  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img' style={{ backgroundImage: `url(${logo2})`}}>
      {/* Overlay */}
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]' />
      <div className='z-[2] w-full max-w-sm md:max-w-md '>
        <div className=' w-full  mx-auto py-6 p-4 border bg-white rounded shadow-md'>
            <div className=' w-full flex items-center place-content-center gap-4  py-4 pb-12 r  '>
                <div className=' flex items-center gap-2'>
                    <img src={logo1} alt='logo'  className=' w-10 h-10' />
                    <h2 className=' logo-primary font-bold text-xl'>LoanIt</h2>
                </div>
            </div>
            <Routes>
                <Route path='' element={<OnboardingPhone onboardingData={onboardingData} handleValueChange={handleValueChange}/>} />
                <Route path='/phone-verify' element={<OnboardingPhoneVerify />} />
                <Route path='/personaldetails' element={<OnboardingPersonalInfo onboardingData={onboardingData} handleValueChange={handleValueChange}/>} />
                <Route path='/address' element={<OnboardAddress onboardingData={onboardingData} handleValueChange={handleValueChange} />} />
                <Route path='/pin' element={<OnboardingAccountPin onboardingData={onboardingData} handleValueChange={handleValueChange} />} />
            </Routes>
        </div>
      </div>
    </div>
  )
}




export default Onboarding
