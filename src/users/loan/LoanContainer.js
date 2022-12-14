import React from 'react'
import LoanDetailHeader from '../../component/LoanDetailHeader'
import {TbCurrencyNaira} from 'react-icons/tb'
import {Route, Routes } from "react-router-dom";
import Loan from './Loan';
import LoanRepayment from './LoanRepayment';

function LoanContainer({showNavBar, setShowNavBar}) {
  return (
    <div className='p-4 w-full h-full'>
      <div className=' w-full md:w-[70%] lg:w-[50%] mx-auto'>
        <LoanDetailHeader  showNavBar={showNavBar} setShowNavBar={setShowNavBar} name='Olanrewaju' title='Loan Details' /> 
        <Routes>
            <Route path='' element={<Loan />} />
            <Route path='/repayment' element={<LoanRepayment />} />
        </Routes>
       
      </div>
    </div>
  )
}

export default LoanContainer
