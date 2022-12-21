import React, { useState } from 'react'
import {Route, Routes } from "react-router-dom";
import LoanApplyAddress from './LoanApplyAddress';
import LoanApplyDetail from './LoanApplyDetail';
import LoanApplyEmployment from './LoanApplyEmployment';
import LoanApplyPersonal from './LoanApplyPersonal';
import LoanOffer from './LoanOffer';


function LoanApply() {

  const [ loanApplicationData , setLoanApplicationData ] = useState({})
  
  

  return (
    <div className=' w-full h-full'>
      <div>
        <Routes>
            <Route path='' element={<LoanApplyPersonal />}/>
            <Route path='/education-employment' element={<LoanApplyEmployment />}/>
            <Route path='/address' element={<LoanApplyAddress />}/>
            <Route path='/amount' element={<LoanApplyDetail />}/>
            <Route path='/offer' element={<LoanOffer />}/>
        </Routes>
      </div>
    </div>
  )
}

export default LoanApply
