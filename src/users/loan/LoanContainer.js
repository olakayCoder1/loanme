import React, { useContext, useEffect } from 'react'
import LoanDetailHeader from '../../component/LoanDetailHeader'
import {Route, Routes , useNavigate } from "react-router-dom";
import Loan from './Loan';
import LoanRepayment from './LoanRepayment';
import LoanApply from './LoanApply';
import LoanHistory from './LoanHistory';
import OfferCalculating from '../../component/OfferCalculating';
import { AuthContext } from '../../contexts/ContextProvider';

function LoanContainer({showNavBar, setShowNavBar}) {
  const {authUser } = useContext(AuthContext)
  let navigate = useNavigate() 

  useEffect(()=> {
    if(authUser === null || authUser === 'undefined' ){
        navigate('/signin')
    }
})
  
  return (
    <div className='p-4 w-full h-full'>
      <div className=' w-full md:w-[70%] lg:w-[50%] mx-auto'>
        <LoanDetailHeader  showNavBar={showNavBar} setShowNavBar={setShowNavBar} name={authUser && authUser.first_name} title='Loan Details' /> 
        <Routes>
            <Route path='/:uuid/details' element={<Loan />} />
            <Route path='/s' element={<OfferCalculating />} /> 
            <Route path='/:uuid/repayment' element={<LoanRepayment />} />
            <Route path='' element={<LoanHistory />} />
            <Route path='/request/*' element={<LoanApply />} />
        </Routes>
       
      </div>
    </div>
  )
}

export default LoanContainer
