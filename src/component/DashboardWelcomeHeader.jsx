import React from 'react'
import userDefault from '../assets/user-default.jpeg'
import {RxHamburgerMenu} from 'react-icons/rx'


function DashboardWelcomeHeader({showNavBar, setShowNavBar, name}) {
  return (
    <div className='py-4 flex justify-between items-center'>
        <div className=' flex items-center gap-3'>
            {!showNavBar && <p onClick={setShowNavBar} className=' md:hidden cursor-pointer'><RxHamburgerMenu className='w-6 h-6'/></p>}
            <h1 className=' font-bold text-xl text-loan-secondary'>Hello {name},</h1>   
        </div>
        <img src={userDefault} alt='user' className='w-10 h-10 rounded-full'/>
    </div>
  )
}

export default DashboardWelcomeHeader