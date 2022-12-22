import React, { useContext, useEffect, useState } from 'react'
import {Route, Routes } from "react-router-dom";
import { AuthContext } from '../../contexts/ContextProvider';
import LoanApplyAddress from './LoanApplyAddress';
import LoanApplyDetail from './LoanApplyDetail';
import LoanApplyEmployment from './LoanApplyEmployment';
import LoanApplyPersonal from './LoanApplyPersonal';
import LoanOffer from './LoanOffer';
import Offer from './Offer';


function LoanApply() {

  const {authToken , setAuthToken , authUser } = useContext(AuthContext)


  const [ loanApplicationData , setLoanApplicationData ] = useState( ()=> JSON.parse(localStorage.getItem('loanApplicationData'))||{
    'first_name':'',
    'last_name':'',
    'phone':'',
    'email':'',
    'gender':'',
    'date_of_birth': '',
    'marital_status' : '',
    'children' : '',
    'education': ' ',
    'employment':'',
    'income':'',
    'employer':'',
    'years_at_work':'',
    'residence':'',
    'years_at_residence':'',
    'rent_per_year':'',
    'amount':'',
    'reason':'',
  })


  function handleValueChange( key , val ){
    setLoanApplicationData( prev => {
      return { ...prev , [key]: val }
    })
    localStorage.setItem('loanApplicationData',JSON.stringify(loanApplicationData))
  }


  useEffect(()=>{
    handleValueChange('first_name',authUser.first_name)
    handleValueChange('last_name',authUser.last_name)
    handleValueChange('email',authUser.email)
    handleValueChange('phone',authUser.phone) 
  },[])

   console.log(loanApplicationData) 

  return (
    <div className=' w-full h-full'>
      <div>
        <Routes>
            <Route path='' element={<LoanApplyPersonal loanApplicationData={loanApplicationData} handleValueChange={handleValueChange} />}/>
            <Route path='/education-employment' element={<LoanApplyEmployment loanApplicationData={loanApplicationData} handleValueChange={handleValueChange}/>}/>
            <Route path='/address' element={<LoanApplyAddress loanApplicationData={loanApplicationData} handleValueChange={handleValueChange}/>}/>
            <Route path='/amount' element={<LoanApplyDetail loanApplicationData={loanApplicationData} handleValueChange={handleValueChange}/>}/>
            {/* <Route path='/offer' element={<LoanOffer loanApplicationData={loanApplicationData} handleValueChange={handleValueChange}/>}/> */}
            <Route path='/offer' element={<Offer loanApplicationData={loanApplicationData} handleValueChange={handleValueChange}/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default LoanApply
