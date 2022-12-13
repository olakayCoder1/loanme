import React, { useState } from 'react'
import Header from '../Header'
import Sidebar from '../Sidebar'
import {Routes , Route , Link} from 'react-router-dom'
import Security from './Security'

function SettingsWrapper() {
    const [showNav, setShowNav] = useState(true) 

    return (
      <div className=' w-full h-full '>
          <div className=' w-full h-full flex sticky top-0 left-0 '>
              <Sidebar />
              <div className=' w-full overflow-y-auto'>
                  <Header handleDisplayNav={()=> setShowNav(true)}/>
                  <div className=' overflow-y-auto  '>
                    <div className="h-full bg-white lg:px-8 m-4">
                        <div className="w-full text-sm font-medium text-center text-gray-500 border-b border-gray-200 lg:px-8">
                            <ul className="w-full flex flex-nowrap -mb-px overflow-scroll lg:gap-4">
                                <Link to="/settings">
                                <li className={`mr-2 w-fit p-2 lg:p-4 ${window.location.pathname === "/settings" ? "text-blue-600  border-blue-600" : "border-transparent hover:text-gray-600 hover:border-gray-300"} border-b-2 `}>
                                    Security
                                </li>
                                </Link>
                                <Link to="/settings">
                                <li className={`mr-2 w-fit p-2 lg:p-4 ${window.location.pathname === "/settings/terms-and-condition" ? "text-blue-600  border-blue-600" : "border-transparent hover:text-gray-600 hover:border-gray-300"} border-b-2 `}>
                                    Terms and condition
                                </li>
                                </Link>
                                <Link to="/settings">
                                <li className={`mr-2 w-fit p-2 lg:p-4 ${window.location.pathname === "/settings/privacy-policy" ? "text-blue-600  border-blue-600" : "border-transparent hover:text-gray-600 hover:border-gray-300"} border-b-2 `}>
                                    Privacy Policy
                                </li>
                                </Link>
                            </ul>
                        </div>
                        <Routes>
                            <Route path='' element={<Security />} /> 
                        </Routes>

                        </div>
                  </div>
              </div>
          </div>
      </div>
    )
}

export default SettingsWrapper
