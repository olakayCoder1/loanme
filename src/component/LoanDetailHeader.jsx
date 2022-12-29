import React, { useContext } from 'react'
import {RxHamburgerMenu} from 'react-icons/rx'
import {BsChevronDoubleLeft} from 'react-icons/bs'
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../contexts/ContextProvider';
import user_image from '../assets/user-default.jpeg'

function LoanDetailHeader({name , title}) {
    let navigate = useNavigate()

    const {showNavigationBar , setShowNavigationBar} = useContext(AuthContext)

  return (
    <>
        <div className='py-4 flex justify-between items-center'>
            <div className=' flex items-center gap-3'>
                {!showNavigationBar && <p onClick={() => setShowNavigationBar(!showNavigationBar) } className=' md:hidden cursor-pointer'><RxHamburgerMenu className='w-6 h-6'/></p>}
            </div>
            <div className=' flex items-center gap-2'>
                <h1 className=' font-bold text-xl text-loan-secondary'>{name}</h1>   
                <img onClick={()=> navigate('/account')} src={user_image}  alt='user' className='w-10 h-10 rounded-md cursor-pointer'/>
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

export default LoanDetailHeader
