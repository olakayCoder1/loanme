import React, { useState } from 'react'
import {Routes , Route} from 'react-router-dom'
import Header from '../component/Header'
import AdminNavBar from '../component/AdminNavBar' 
import Sidebar from '../component/Sidebar'
import Dashboard from './pages/Dashboard'
import UserLoanHistory from './pages/UserLoanHistory'
import UsersList from './pages/UsersList'
import UserProfile from './pages/UserProfile'
import UserLoanRepaymentHistory from './pages/UserLoanRepaymentHistory'
import DashboardWrapper from './pages/dashboard/DashboardWrapper'
import Loans from './pages/user_loan/Loans'
import Applications from './pages/user_application/Applications'
import UserAccount from './pages/user_account/UserAccount'
import ApplicationWrapper from './pages/user_application/ApplicationWrapper'
import UserLoanWrapper from './pages/user_loan/UserLoanWrapper'
import Account from './pages/account/Account'

function AdminWrapper() {
    const [showNav, setShowNav] = useState(false)

  return (
    <div className=' w-full h-screen bg-[#edf1f5] '>
        <div className=' w-full h-full flex sticky top-0 left-0 '>
            {/* <Sidebar /> */}
            <AdminNavBar showNavBar={showNav} setShowNavBar={()=> setShowNav(!showNav)} />
            <div className=' w-full overflow-y-auto'>
                <Header handleDisplayNav={()=> setShowNav(true)}/>
                <div className=' overflow-y-auto '>
                <Routes>
                    <Route path='' element={<DashboardWrapper />} />
                    <Route path='/loans/*' element={<UserLoanWrapper />} />
                    <Route path='/account' element={<Account />} />
                    <Route path='applications/*' element={<ApplicationWrapper />} />
                    <Route path='/users' element={<UsersList />} />
                    <Route path='/users/:id' element={<UserAccount />} />
                    <Route path='/users/olakay/loan' element={<UserLoanHistory />} />
                    <Route path='/users/olakay/loan/1/history' element={<UserLoanRepaymentHistory />} />
                </Routes>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AdminWrapper
