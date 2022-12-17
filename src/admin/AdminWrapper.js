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
import Loans from './pages/Loans'
import Applications from './pages/Applications'
import UserAccount from './pages/UserAccount'

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
                    <Route path='/loans' element={<Loans />} />
                    <Route path='/loans/applications' element={<Applications />} />
                    <Route path='/users' element={<UsersList />} />
                    <Route path='/users/account' element={<UserAccount />} />
                    <Route path='/users/olakay' element={<UserProfile />} />
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
