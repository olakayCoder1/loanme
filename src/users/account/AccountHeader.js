import React from 'react'
import userDefault from '../../assets/user-default.jpeg'
import {RxHamburgerMenu} from 'react-icons/rx'
import {BsChevronDoubleLeft} from 'react-icons/bs'
import { useNavigate } from "react-router-dom";


function AccountHeader({showNavBar, setShowNavBar, name , title}) {
    let navigate = useNavigate()


  return (
    <>
        <div className='py-4 flex justify-between items-center'>
            <div className=' flex items-center gap-3'>
                {!showNavBar && <p onClick={setShowNavBar} className=' md:hidden cursor-pointer'><RxHamburgerMenu className='w-6 h-6'/></p>}
            </div>
            <div className=' flex items-center gap-2'>
                <p className=' bg-loanBlue-primary text-white p-1 px-4 cursor-pointer'>
                    Settings
                </p>
            </div>
        </div>
        <div className='pb-4 pt-2 flex gap-3 items-center'>
            <BsChevronDoubleLeft onClick={()=>{ navigate(-1)}} className=' w-6 h-6 cursor-pointer'/>
            {window.location.pathname.includes('loan/request') ? (
                <h3>Apply For Loan</h3>
            ):(
               <h3>{title}</h3>
            )}
        </div>
    </>
    
  )
}

export default AccountHeader
