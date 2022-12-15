import React, { useState } from 'react'
import {Route, Routes } from "react-router-dom";
import userDefault from '../../assets/user-default.jpeg'
import { useNavigate } from "react-router-dom";


function AccountInfoCard({title, current_value , other}){
    return (
        <div className=' flex items-center gap-16 p-3 h-14 '>
            <p className='w-[70px] uppercase font-normal'>{title}</p>
            <div className='grow flex justify-between items-center'>
                <h3 className=' text-loan-secondary  text-sm'>{current_value}</h3>
                {/* <p className=' cursor-pointer text-loanBlue-primary font-light'>Upload</p> */}
            </div>
        </div>
    )
}


function Account() {
    const [deleteAccount , setDeleteAccount] = useState(false)
    const [logoutAccount , setLogoutAccount] = useState(false)
    const [ resetConfirm , setResetConfirm ] = useState(false)

  return (
    <div className=' w-full h-full p-4 md:p-0'>
        <div className=' w-full h-full max-w-2xl mx-auto'>
            <div className=' flex flex-col gap-8 my-8'>
                {/* PERSONAL INFORMATION */}
                {/* PERSONAL INFORMATION */}
                <div className=' text-xs font-medium border border-[#c2cfd9] divide-y-2 bg-white rounded-md'>
                    <h2 className=' text-loan-secondary p-4 px-2 text-lg h-14'>Personal Information</h2>
                    <div className=' flex items-center  gap-16 p-3 h-14'>
                        <h3 className='w-[70px] uppercase font-normal'>Photo</h3>
                        <div className='grow flex justify-between items-center'>
                            <img src={userDefault} alt='profile-image' className=' w-10 h-10  rounded-full'/>
                            <p className=' cursor-pointer text-loanBlue-primary font-light'>Upload</p>
                        </div>
                    </div>
                    <AccountInfoCard title='Name' current_value='Olanrewaju AbdulKabeer' />
                    <AccountInfoCard title='Email' current_value='programmerolakay@gmail.com' />
                    <AccountInfoCard title='Country' current_value='Nigeria' />
                    <AccountInfoCard title='State' current_value='Lagos' />
                    <AccountInfoCard title='City' current_value='Lagos' />
                    <AccountInfoCard title='Date of Birth' current_value='April 27, 8020' />
                </div>

                <div className=' text-xs font-medium border border-[#c2cfd9]  divide-y-2 bg-white rounded-md'>
                    <h2 className=' text-loan-secondary p-4 px-2 text-lg h-14'>Other</h2>
                    <AccountInfoCard title='Employment status' current_value='Employed' />
                    <AccountInfoCard title='Educational Level' current_value='High School' />
                    <AccountInfoCard title='Marital Status' current_value='Married' />
                    <AccountInfoCard title='Children' current_value='Two' />
                    <AccountInfoCard title='City' current_value='Lagos' />
                    <div className=' flex items-center  gap-16 p-3 h-14 '>
                        <p className='w-[70px] uppercase font-normal'>Address</p>
                        <div className='grow flex justify-between items-center'>
                            <h3 className=' text-loan-secondary text-xs'>Redundant alt attribute. Screen-readers already announce `img` tags as an image. </h3>
                            {/* <p className=' cursor-pointer text-loanBlue-primary font-light'>Upload</p> */}
                        </div>
                    </div>
                </div>

                <div className=' text-xs font-medium border border-[#c2cfd9]  divide-y-2 mb-8 bg-white rounded-md'>
                    <h2 className=' text-loan-secondary p-4 px-2 text-lg h-14'>Security</h2>
                    <div className=' flex items-center  gap-16 p-3 h-14'>
                        <h3 className='w-[70px] uppercase font-normal'>Password</h3>
                        <div className='grow flex justify-between items-center'>
                            {/* <img src={userDefault} alt='profile-image' className=' w-10 h-10  rounded-full'/> */}
                            <p onClick={()=>{ setResetConfirm(true)}} className=' p-2 px-3 w-fit bg-[#33b5a8] cursor-pointer text-white font-light'>Reset Password</p>
                        </div>
                    </div>
                    <div className=' flex items-center  gap-16 p-3 h-14'>
                        <h3 className='w-[70px] uppercase font-normal'>Logout</h3>
                        <div className='grow flex justify-between items-center'>
                            {/* <img src={userDefault} alt='profile-image' className=' w-10 h-10  rounded-full'/> */}
                            <p onClick={() => setLogoutAccount(true)}  className=' p-2 px-3 w-fit bg-[#33b5a8] cursor-pointer text-white font-light'>Logout</p>
                        </div>
                    </div>
                    <div className=' flex items-center  gap-16 p-3 h-14'>
                        <h3 className='w-[70px] uppercase font-normal'>Delete</h3>
                        <div className='grow flex justify-between items-center'>
                            {/* <img src={userDefault} alt='profile-image' className=' w-10 h-10  rounded-full'/> */}
                            <p onClick={() => setDeleteAccount(true)} className=' p-2 px-3 w-fit bg-red-600 cursor-pointer text-white font-light'>Delete Account</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        {deleteAccount && (
        <div className=' fixed w-full h-full top-0 left-0 right-0 bottom-0 bg-gray-600 z-50 bg-blend-overlay flex items-center place-content-center'>
            <div className="z-50 p-4  md:inset-0  h-full flex items-center place-content-center">
                <div className="relative w-full max-w-md h-auto">
                    <div className="relative bg-white rounded-lg shadow ">
                        <button onClick={()=> setDeleteAccount(false)}  type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center " data-modal-toggle="popup-modal">
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                        <div className="p-6 text-center flex justify-center place-content-center items-center flex-col gap-2">
                                {/* <img src={me} alt='security' className=' w-12 h-12' /> */}
                            <svg aria-hidden="true" class="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            <p className="mb-4 text-lg font-normal text-gray-500">Are you sure you want to delete your account?</p>
                            <div class="p-6 text-center">
                                <button onClick={()=> setDeleteAccount(false)}  type="button" className=" py-3 px-5 mr-2 my-4 text-sm font-medium focus:outline-none bg-red-600 text-white rounded-md border border-gray-200 ">
                                    Yes, I'm sure
                                </button>
                                <button onClick={()=> setDeleteAccount(false)}  type="button" className="py-3 px-5 mr-2 my-4 text-sm font-medium focus:outline-none bg-gray-600 text-white rounded-md border border-gray-200 ">
                                    No, cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )}
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

        {resetConfirm && (
        <div className=' fixed w-full h-full top-0 left-0 right-0 bottom-0 bg-gray-600 z-50 bg-blend-overlay flex items-center place-content-center'>
            <div className="z-50 p-4  md:inset-0  h-full flex items-center place-content-center">
                <div className="relative w-full min-w-[350px] max-w-md h-auto">
                    <div className="relative bg-white rounded-lg shadow ">
                        <button onClick={()=> setResetConfirm(false)}  type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center " data-modal-toggle="popup-modal">
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                        <form className=' p-6'>
                            <div class="mb-6">
                                <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Current password</label>
                                <input type="password" placeholder='********' id="password" className="bg-gray-50 mb-3 border border-gray-300  text-sm rounded-md focus:ring-loan-primary focus:border-loan-primary block w-full p-3 focus:outline-none"  required />
                            </div>

                            <div class="mb-6">
                                <label for="password" class="block mb-2 text-sm font-medium text-gray-900">New password</label>
                                <input type="password" placeholder='********' id="password" className="bg-gray-50 mb-3 border border-gray-300  text-sm rounded-md focus:ring-loan-primary focus:border-loan-primary block w-full p-3 focus:outline-none"  required />
                            </div>
                            <div class="mb-6">
                                <label for="repeat-password" class="block mb-2 text-sm font-medium text-gray-900">Repeat password</label>
                                <input type="password" placeholder='********' id="repeat-password" className="bg-gray-50 mb-3 border border-gray-300  text-sm rounded-md focus:ring-loan-primary focus:border-loan-primary block w-full p-3 focus:outline-none"  required />
                            </div>

                            <div class="pb-6 text-center flex items-center">
                                <button onClick={()=> setResetConfirm(false)}  type="button" className="w-full py-3 px-5 mr-2 my-4 text-sm font-medium focus:outline-none bg-loanBlue-primary text-white rounded-md border border-gray-200 ">
                                    Reset
                                </button>
                                <button onClick={()=> setResetConfirm(false)}  type="button" className="w-full py-3 px-5 mr-2 my-4 text-sm font-medium focus:outline-none bg-gray-600 text-white rounded-md border border-gray-200 ">
                                    No, cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        )}
        
    </div>
  )
}

export default Account




