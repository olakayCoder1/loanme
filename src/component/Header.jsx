import React from 'react'
import {IoMdNotificationsOutline} from 'react-icons/io'
import {RxHamburgerMenu} from 'react-icons/rx'
import {BsChevronDoubleRight,BsChevronDoubleLeft} from 'react-icons/bs'

function Header({handleDisplayNav}) {

  return (
    <div className='w-full flex justify-between bg-white border border-white p-4'>
      <div className=' flex items-center gap-2'>
        <span onClick={handleDisplayNav} className=' md:hidden cursor-pointer'><RxHamburgerMenu className=' w-5 h-5' /></span>
        <span>Dashboard</span>
        </div>
      <div className=' flex items-center gap-4'>
        <p className='p-1 rounded-full bg-gray-300 cursor-pointer'><IoMdNotificationsOutline className='w-6 h-6' /></p>
        <h2 className=' text-sm font-bold'>Hi, Olanrewaju</h2>
        <img className='w-8 h-8 rounded-md cursor-pointer'
            src='https://avatars.githubusercontent.com/u/95700260?v=4' alt='User' />
      </div>
    </div>
  )
}

export default Header
