import React, { useContext } from 'react'
import {RxHamburgerMenu} from 'react-icons/rx'
import { AuthContext } from '../contexts/ContextProvider'

function WelcomeHeader({name}) {

  const {showNavigationBar , setShowNavigationBar} = useContext(AuthContext)

  return (
    <div className='py-4 flex justify-between items-center'>
        <div className=' flex items-center gap-3'>
            {!showNavigationBar && <p onClick={() => setShowNavigationBar(!showNavigationBar)} className=' md:hidden cursor-pointer'><RxHamburgerMenu className='w-6 h-6'/></p>}
            <h1 className=' font-bold text-xl text-loan-secondary'>Hello {name},</h1>   
        </div>
        <img src='https://avatars.githubusercontent.com/u/95700260?v=4'  alt='user' className='w-10 h-10 rounded-md'/>
    </div>
  )
}

export default WelcomeHeader
