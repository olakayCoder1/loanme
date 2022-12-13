import React, { useState } from 'react'
import {Routes , Route} from 'react-router-dom'
import Header from '../component/Header'
import Sidebar from '../component/Sidebar'
import Dashboard from './pages/Dashboard'
import UserLoanHistory from './pages/UserLoanHistory'
import UsersList from './pages/UsersList'

function AdminWrapper() {
    const [showNav, setShowNav] = useState(true)

  return (
    <div className=' w-full h-full '>
        <div className=' w-full h-full flex sticky top-0 left-0 '>
            <Sidebar />
            <div className=' w-full overflow-y-auto'>
                <Header handleDisplayNav={()=> setShowNav(true)}/>
                <div className=' overflow-y-auto '>
                <Routes>
                    <Route path='' element={<Dashboard />} />
                    <Route path='/users' element={<UsersList />} />
                    <Route path='/loan/user/olakay' element={<UserLoanHistory />} />
                </Routes>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AdminWrapper
