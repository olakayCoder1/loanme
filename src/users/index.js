import React, { useState } from 'react'
import {Route, Routes } from "react-router-dom";
import Navbar from '../component/Navbar'
import BankAccount from './account_setup/BankAccount';
import Bvn from './account_setup/Bvn'
import DebitCard from './account_setup/DebitCard'
import Dashboard from './dashboard/Dashboard';
import Loan from './loan/Loan';
import LoanContainer from './loan/LoanContainer';

function Container() {
    const [showNavBar, setShowNavBar] = useState(false)

  return (
    <div className=' w-full h-full flex'>
        <Navbar showNavBar={showNavBar} setShowNavBar={()=> setShowNavBar(!showNavBar)} />
        <div className='grow w-full md:w-[75%] h-full overflow-y-auto'>
            <Routes>
                <Route path='' element={<Dashboard showNavBar={showNavBar} setShowNavBar={()=> setShowNavBar(!showNavBar)} />} />
                <Route path='account/bvn' element={<Bvn showNavBar={showNavBar} setShowNavBar={()=> setShowNavBar(!showNavBar)} />} />
                <Route path='account/bankaccount' element={<BankAccount showNavBar={showNavBar} setShowNavBar={()=> setShowNavBar(!showNavBar)} />} />
                <Route path='/account/card' element={<DebitCard showNavBar={showNavBar} setShowNavBar={()=> setShowNavBar(!showNavBar)} />} />
                <Route path='/loan/*' element={<LoanContainer showNavBar={showNavBar} setShowNavBar={()=> setShowNavBar(!showNavBar)} />} />
            </Routes>
        </div>
    </div>
  )
}

export default Container
