import React, { useState } from 'react'
import {Route, Routes } from "react-router-dom";
import Navbar from '../component/Navbar'
import BankAccount from './account_setup/BankAccount';
import Bvn from './account_setup/Bvn'
import DebitCard from './account_setup/DebitCard'
import Dashboard from './dashboard/Dashboard';
import LoanContainer from './loan/LoanContainer';

function Container() {
    const [showNavBar, setShowNavBar] = useState(false)

  return (
    <div className=' w-full h-screen flex'>
        <Navbar showNavBar={showNavBar} setShowNavBar={()=> setShowNavBar(!showNavBar)} />
        <div className='grow w-full md:w-[75%] h-full overflow-y-auto'>
            <Routes>
                <Route path='' element={<Dashboard />} />
                <Route path='/setup/account/bvn' element={<Bvn />} />
                <Route path='/setup/account/bankaccount' element={<BankAccount />} />
                <Route path='/setup/account/card' element={<DebitCard />} />
                <Route path='/loan/*' element={<LoanContainer />} />
            </Routes>
        </div>
    </div>
  )
}

export default Container
