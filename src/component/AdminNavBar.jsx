import React, { useState } from 'react'
import logo from '../assets/loanme.png'
import {RxCross1} from 'react-icons/rx'
import {Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {motion} from 'framer-motion';

function NavLink({name , toHref}){
    let navigate = useNavigate()

    if(window.location.pathname === toHref){
        return (
            <div className=' border-b md:p-3 py-3 px-2 border-loanBlue-primary'>
                <p onClick={()=> navigate(`${toHref}`)} to={toHref} className='text-loanBlue-primary text-sm  font-medium cursor-pointer'>{name}</p>
            </div>
        )
    }
    return (
        <div className=' border-b md:p-3 py-3 px-2'>
            <Link to={toHref} className='text-sm font-medium cursor-pointer'>{name}</Link>
        </div>
    )
}



function AdminNavBar({showNavBar, setShowNavBar}) {

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
                    {hasSetUpAccount ? (
                        <>
                            <NavLink name='Dashboard' toHref='/admin' />
                            <NavLink name='Customers' toHref='/admin/users'/>
                            <NavLink name='Loans' toHref='/admin/loans'/>
                            <NavLink name='Applications' toHref='/admin/applications'/>
                            <NavLink name='System Settings' toHref='#' />
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
                    <p onClick={() => setLogoutAccount(true)}  className=' cursor-pointer text-red-500'>LOGOUT</p>
                </div>
            </div>

        </div>
        


        {logoutAccount && (
            <div className=' fixed w-full h-full top-0 left-0 right-0 bottom-0 bg-gray-600 z-50 bg-blend-overlay flex items-center place-content-center'>
                <div className="z-50 p-4  md:inset-0  h-full flex items-center place-content-center">
                    <div className="relative w-full max-w-md h-auto">
                        <div className="relative bg-white rounded-lg shadow ">
                            <button onClick={()=> setLogoutAccount(false)}  type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center " data-modal-toggle="popup-modal">
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                            <div className="p-6 text-center flex justify-center place-content-center items-center flex-col gap-2">
                                {/* <img src={me} alt='security' className=' w-12 h-12' /> */}
                                <svg aria-hidden="true" class="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                <p className="mb-4 text-lg font-normal text-gray-500">Are you sure you want to to logout? </p>
                                <div class="p-6 text-center">
                                    <button onClick={()=> setLogoutAccount(false)}  type="button" className=" py-3 px-5 mr-2 my-4 text-sm font-medium focus:outline-none bg-red-600 text-white rounded-md border border-gray-200 ">
                                        Yes, I'm sure
                                    </button>
                                    <button onClick={()=> setLogoutAccount(false)}  type="button" className="py-3 px-5 mr-2 my-4 text-sm font-medium focus:outline-none bg-gray-600 text-white rounded-md border border-gray-200 ">
                                        No, cancel
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}
        

        {/* MOBILE NAVBAR */}
        {/* MOBILE NAVBAR */}
        {/* MOBILE NAVBAR */}
        <motion.div initial={{ x:-100}}
                whileInView={{x:0}}
                transition={{duration:0.5}}
                onExit={{x:-100}}
            className={`${showNavBar ? 'fixed  w-[25%] max-w-[270px] min-w-[250px] h-full   border-r  shadow-md bg-white' : 'hidden' } md:hidden z-50`}>
        <div className=' w-full flex items-center gap-4  py-4 md:py-8 p-4 md:px-6'>
            <p onClick={setShowNavBar} className=' cursor-pointer md:hidden'><RxCross1 className=' w-6 h-6'/></p>
            <img src={logo} alt='quick_loan' className='w-10 h-10 text-gray-700'/>
            <h2 className=' text-xl font-bold font-headingFont'>Quick Loan</h2>
        </div>
        {/*  */}
            <div className='my-2 p-4'>
                {hasSetUpAccount ? (
                    <>
                        <NavLink name='Dashboard' toHref='/admin' />
                        <NavLink name='Customers' toHref='/admin/users'/>
                        <NavLink name='Loans' toHref='/admin/loans'/>
                        <NavLink name='Applications' toHref='/admin/applications'/>
                        <NavLink name='System Settings' toHref='#' />
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
                <p onClick={() => setLogoutAccount(true)}  className=' cursor-pointer text-red-500'>LOGOUT</p>
            </div>
        </motion.div>
    </>
  )
}

export default AdminNavBar
