import React, { useContext, useState } from 'react'
import logo from '../assets/loanme.png'
import {RxCross1} from 'react-icons/rx'
import {Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {motion} from 'framer-motion';
import { AuthContext } from '../contexts/ContextProvider';



function NavLink({name , toHref }){
    const { showNavigationBar , setShowNavigationBar } =  useContext(AuthContext) 
    let navigate = useNavigate()

    function handleClick(){
        setShowNavigationBar(!showNavigationBar)
        navigate(`${toHref}`)
    }
    if(window.location.pathname === toHref){
        return (
            <div className=' border-b md:p-4 py-4 px-2 border-loanBlue-primary'>
                <Link to={toHref} className='text-loanBlue-primary text-sm  font-medium cursor-pointer'>
                    <span onClick={handleClick}>{name}</span>
                </Link>
            </div>
        )
    }
    return (
        <div className=' border-b md:p-4 py-4 px-2'>
            <Link  onClick={handleClick} to={toHref} className='text-sm  font-medium cursor-pointer'>
                <span onClick={handleClick}>{name}</span>
            </Link>
        </div>
    )
} 



function Navbar() {

    const { hasCompletedKyc , logout , hasValidLoan , showNavigationBar , setShowNavigationBar , authUser } =  useContext(AuthContext) 

    const [hasSetUpAccount , setHasSetUpAccount] = useState(true)
    const [logoutAccount , setLogoutAccount] = useState(false)

  return (
    <>
    {/* <div className='w-[25%] max-w-[270px] min-w-[250px] border-r bg-yellow-300'> */}
        <div className='hidden md:block h-full w-[25%] max-w-[270px] min-w-[250px] border-r sticky top-0 bottom-0 left-0'>
            <div className='relative w-full h-full    border-loan-primary  bg-white'>
                <div className=' w-full flex items-center gap-4  py-8 p-4 md:px-6'>
                    {/* <p onClick={setShowNavBar} className=' cursor-pointer md:hidden'><RxCross1 className=' w-6 h-6'/></p> */}
                    <img src={logo} alt='quick_loan' className='w-10 h-10 text-gray-700'/>
                    <h2 className=' text-xl font-bold font-headingFont'>LoanIt</h2>
                </div>
            {/*  */}
                <div className='my-2 p-4'>
                    {authUser && authUser.verification_completed ? (
                        <>
                            <NavLink name='Dashboard' toHref='/' />
                            {!hasValidLoan && <NavLink name='Apply For Loan' toHref='/loan/request'/>}
                            <NavLink name='Loan Application History' toHref='/loan' />
                            <NavLink name='Account' toHref='/account' />
                        </>
                    ): (
                        <div role="status" className="max-w-sm animate-pulse">
                            {/* <div className="h-2.5 bg-gray-200   w-48 mb-4"></div> */}
                            <div className="h-8 bg-gray-200   max-w-[360px] mb-2.5"></div>
                            <div className="h-8 bg-gray-200   mb-2.5"></div>
                            <div className="h-8 bg-gray-200   max-w-[330px] mb-2.5"></div>
                            <div className="h-8 bg-gray-200   max-w-[300px] mb-2.5"></div>
                            <span className="sr-only">Loading...</span>
                        </div>
                    )}
                    
                </div>
                <div className=' border-t p-4 py-6 absolute bottom-0 left-0 w-full flex items-center place-content-center'>
                    <p onClick={logout}  className=' cursor-pointer text-red-500'>LOGOUT</p>
                </div>
            </div>

        </div>

        

        {/* MOBILE NAVBAR */}
        {/* MOBILE NAVBAR */}
        {/* MOBILE NAVBAR */}
        <motion.div initial={{ x:-100}}
                whileInView={{x:0}}
                transition={{duration:0.5}}
            className={`${showNavigationBar ? 'fixed  w-[25%] max-w-[270px] min-w-[250px] h-full   border-r  shadow-md bg-white' : 'hidden' } md:hidden z-50`}>
        <div className=' w-full flex items-center gap-4  py-4 md:py-8 p-4 md:px-6'>
            <p onClick={()=> setShowNavigationBar(!showNavigationBar)} className=' cursor-pointer md:hidden'><RxCross1 className=' w-6 h-6'/></p>
            <img src={logo} alt='quick_loan' className='w-10 h-10 text-gray-700'/>
            <h2 className=' text-xl font-bold font-headingFont'>LoanIt</h2>
        </div>
        {/*  */}
            <div className='my-2 p-4'>
                {hasSetUpAccount ? (
                    <>
                        <NavLink name='Dashboard' toHref='/' />
                        {!hasValidLoan && <NavLink name='Apply For Loan' toHref='/loan/request' />}
                        <NavLink name='Loan Application History' toHref='/loan' />
                        <NavLink name='Account' toHref='/account' />
                    </>
                ): (
                    <div role="status" className="max-w-sm animate-pulse">
                        {/* <div className="h-2.5 bg-gray-200   w-48 mb-4"></div> */}
                        <div className="h-8 bg-gray-200   max-w-[360px] mb-2.5"></div>
                        <div className="h-8 bg-gray-200   mb-2.5"></div>
                        <div className="h-8 bg-gray-200   max-w-[330px] mb-2.5"></div>
                        <div className="h-8 bg-gray-200   max-w-[300px] mb-2.5"></div>
                        <span className="sr-only">Loading...</span>
                    </div>
                )}
                
            </div>
            <div className=' border-t p-4 py-6 absolute bottom-0 left-0 w-full flex items-center place-content-center'>
                <p onClick={logout} className=' cursor-pointer text-red-500'>LOGOUT</p>
            </div>
        </motion.div>
    </>
  )
}

export default Navbar
