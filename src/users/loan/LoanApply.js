import React from 'react'
import {Route, Routes } from "react-router-dom";
import LoanApplyAddress from './LoanApplyAddress';
import LoanApplyDetail from './LoanApplyDetail';
import LoanApplyEmployment from './LoanApplyEmployment';
import LoanApplyPersonal from './LoanApplyPersonal';

function LoanApply() {
  return (
    <div className=' w-full h-full'>
      <div>
        <Routes>
            <Route path='' element={<LoanApplyPersonal />}/>
            <Route path='/education-employment' element={<LoanApplyEmployment />}/>
            <Route path='/address' element={<LoanApplyAddress />}/>
            <Route path='/amount' element={<LoanApplyDetail />}/>
        </Routes>
      </div>
    </div>
  )
}

export default LoanApply
