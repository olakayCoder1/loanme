import React, { useState } from 'react'
import {Routes , Route} from 'react-router-dom'
import Header from '../component/Header'
import Sidebar from '../component/Sidebar'
import Dashboard from './pages/Dashboard'

function AdminWrapper() {
    const [showNav, setShowNav] = useState(true)

  return (
    <div className=' w-full h-full bg-gray-50'>
        <div className=' w-full h-full flex sticky top-0 left-0 '>
            <Sidebar />
            <div className=' w-full'>
                <Header handleDisplayNav={()=> setShowNav(true)}/>
                <div>
                <Routes>
                    <Route path='' element={<Dashboard />} />
                </Routes>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AdminWrapper
