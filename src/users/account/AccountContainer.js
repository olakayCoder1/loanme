import React, { useState } from 'react'
import {Route, Routes } from "react-router-dom";
import Account from './Account';
import {BsChevronDoubleLeft} from 'react-icons/bs'
import userDefault from '../../assets/user-default.jpeg'
import { useNavigate } from "react-router-dom";





function AccountContainer() {
    const [showNavBar, setShowNavBar] = useState(false)
    let navigate = useNavigate()
  return (
    <div className=' w-full h-full bg-[#edf1f5]'>
        <div className="bg-gradient-to-l from-[#873fd4] to-[#343397]  text-white pb-8">
            <div className=' flex justify-between items-centertext-sm font-normal cursor-pointer p-4'>
                <p onClick={()=> navigate('/')} className=' text-sm flex items-center bg-[#44479f] p-2 px-3 rounded-md'>
                    <BsChevronDoubleLeft  className=' w-5 h-5'/>
                    <span>
                        Back to Dashboard
                    </span>
                </p>
                <img src={userDefault} alt='profile' className=' w-10 h-10 rounded-full' />
            </div>
            <div className=' flex items-center place-content-center my-4'>
                <h2 className=' text-2xl font-medium'>Account settings</h2>
            </div>
        </div>
        
        {/* <Navbar showNavBar={showNavBar} setShowNavBar={()=> setShowNavBar(!showNavBar)} /> */}
        <div className='w-full h-full '>
            <Routes>
                <Route path='' element={<Account />} />
            </Routes>
        </div>
    </div>
  )
}


export default AccountContainer
