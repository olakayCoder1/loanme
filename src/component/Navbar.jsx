import React, { useState } from 'react'
import logo from '../assets/loanme.png'
import {RxCross1} from 'react-icons/rx'




function NavLink({name}){
    return (
        <div className=' border-b md:p-4 py-4 px-2'>
            <p className='text-sm md:text-base font-bold cursor-pointer hover:text-loanBlue-primary'>{name}</p>
        </div>
    )
}



function Navbar({showNavBar, setShowNavBar}) {

    const [hasSetUpAccount , setHasSetUpAccount] = useState(false)
  return (
    <div className=''>
        <div className='hidden md:block h-full  w-[25%] max-w-[270px] min-w-[250px] sticky top-0 bottom-0 left-0 bg-red-300'>
            <div className='relative w-full h-full   border-r border-loan-primary  bg-white'>
                <div className=' w-full flex items-center gap-4  py-8 p-4 md:px-6'>
                    {/* <p onClick={setShowNavBar} className=' cursor-pointer md:hidden'><RxCross1 className=' w-6 h-6'/></p> */}
                    <img src={logo} alt='quick_loan' className='w-10 h-10 text-gray-700'/>
                    <h2 className=' text-xl font-bold font-headingFont'>Quick Loan</h2>
                </div>
            {/*  */}
                <div className='my-2 p-4'>
                    {hasSetUpAccount ? (
                        <>
                            <NavLink name='Dashboard' />
                            <NavLink name='Apply For Loan' />
                            <NavLink name='Loan Application History' />
                            <NavLink name='Dashboard' />
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
                    <p className=' cursor-pointer text-red-500'>LOGOUT</p>
                </div>
            </div>

        </div>
        



{/* MOBILE NAVBAR */}
    <div className={`${showNavBar ? 'fixed  w-[25%] max-w-[270px] min-w-[250px] h-full   border-r border-loan-primary bg-white' : 'hidden' } md:hidden`}>
      <div className=' w-full flex items-center gap-4  py-4 md:py-8 p-4 md:px-6'>
        <p onClick={setShowNavBar} className=' cursor-pointer md:hidden'><RxCross1 className=' w-6 h-6'/></p>
        <img src={logo} alt='quick_loan' className='w-10 h-10 text-gray-700'/>
        <h2 className=' text-xl font-bold font-headingFont'>Quick Loan</h2>
      </div>
      {/*  */}
        <div className='my-2 p-4'>
            {hasSetUpAccount ? (
                <>
                    <NavLink name='Dashboard' />
                    <NavLink name='Apply For Loan' />
                    <NavLink name='Loan Application History' />
                    <NavLink name='Dashboard' />
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
            <p className=' cursor-pointer text-red-500'>LOGOUT</p>
        </div>
    </div>
    </div>
  )
}

export default Navbar
