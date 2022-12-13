import { useState } from "react";



function Security(){
    const [ deleteConfirm , setDeleteConfirm ] = useState(false)
    const [ logoutConfirm , setlogoutConfirm ] = useState(false)
    const [ resetConfirm , setResetConfirm ] = useState(false)
    return (
        <div className="w-full lg:px-8 rounded">
            <div className="p-2 lg:p-0 lg:ml-20 w-full lg:w-6/12">
                <h2 className="text-xl font-bold pt-12">Security</h2>

                <div className="flex flex-col  gap-4 pt-10 justify-between">
                    <div className="flex  gap-4 justify-between ">
                        <p className="text-sm font-normal">Reset password</p>
                    <p onClick={()=>{ setResetConfirm(!resetConfirm)}}
                        className="text-sm font-semibold text-habibi-blue-600 cursor-pointer">Reset password</p>
                    </div>
                    <p className="text-xs font-normal text-gray-400">Can't remember your password? Tap to reset password</p>
                </div>
                <div className="flex items-start gap-4 pt-10 justify-between">
                    <div className="flex flex-col gap-4 justify-between ">
                        <p className="text-sm font-normal">Logout Account</p>
                        <p className="text-xs font-normal text-gray-400">You want to logout? Tap Logout Account</p>
                    </div>
                    <p onClick={()=>{ setlogoutConfirm(!logoutConfirm)}}
                        className="text-sm font-semibold text-habibi-blue-600 cursor-pointer">Logout Account</p>
                </div>
                
                
                <div className="grid lg:grid-cols-[3fr_1fr] lg:flex-row items-start gap-4 pt-10 justify-between">
                {/* <div className="flex flex-col lg:flex-row items-start gap-4 pt-10 justify-between"> */}
                    <div className="flex flex-col gap-4 justify-between ">
                        <p className="text-sm font-normal">Delete Account</p>
                        <p className="text-xs font-normal text-gray-400">We would prefer if you don't but if you really must, tap to delete account</p>
                    </div>
                    <p type="submit" onClick={()=>{ setDeleteConfirm(!deleteConfirm)}}
                                className="w-fit flex gap-2 items-center py-2.5 px-3  my-4 text-sm font-medium text-gray-50 focus:outline-none bg-blue-600 rounded-lg border border-blue-200 hover:bg-gray-50 hover:text-blue-500 focus:z-10 focus:ring-4 focus:ring-blue-200 ">
                                    
                                    Delete Account
                        </p>
                    {deleteConfirm &&
                        <div id="popup-modal" tabIndex="-1" className="shadow-2xl overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full justify-center items-center flex" aria-modal="true" role="dialog">
                            <div className="relative p-4 w-full max-w-md h-full md:h-auto">
                                <div className="relative bg-white rounded-lg shadow ">
                                    <button onClick={()=>{ setDeleteConfirm(!deleteConfirm)}}
                                            type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center  " data-modal-toggle="popup-modal">
                                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                        <span className="sr-only">Close modal</span>
                                    </button>
                                    <div className="p-6 text-center">
                                        <svg aria-hidden="true" className="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete your account?</h3>
                                        <button data-modal-toggle="popup-modal" type="button" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                                            Yes, I'm sure
                                        </button>
                                        <button data-modal-toggle="popup-modal" onClick={()=>{ setDeleteConfirm(!deleteConfirm)}}
                                            type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 ">No, cancel</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                    {logoutConfirm &&
                        <div id="popup-modal" tabIndex="-1" className="shadow-2xl overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full justify-center items-center flex" aria-modal="true" role="dialog">
                            <div className="relative p-4 w-full max-w-md h-full md:h-auto">
                                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                    <button onClick={()=>{ setlogoutConfirm(!logoutConfirm)}}
                                            type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center  " data-modal-toggle="popup-modal">
                                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                        <span className="sr-only">Close modal</span>
                                    </button>
                                    <div className="p-6 text-center">
                                        <svg aria-hidden="true" className="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to logout?</h3>
                                        <button data-modal-toggle="popup-modal" type="button" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                                            Yes, I'm sure
                                        </button>
                                        <button data-modal-toggle="popup-modal" onClick={()=>{ setlogoutConfirm(!logoutConfirm)}}
                                            type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500  dark:hover:bg-gray-600 dark:focus:ring-gray-600">No, cancel</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }


                    {resetConfirm &&
                        <div id="authentication-modal" tabIndex="-1" className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex" aria-modal="true" role="dialog">
                            <div className="relative p-4 w-full max-w-md h-full md:h-auto">
                                <div className="relative bg-white rounded-lg shadow ">
                                    <button type="button" onClick={()=>{ setResetConfirm(!resetConfirm)}}
                                            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200  rounded-lg text-sm p-1.5 ml-auto inline-flex items-center  " data-modal-toggle="authentication-modal">
                                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                        <span className="sr-only">Close modal</span>
                                    </button>
                                    <div className="py-6 px-6 lg:px-8">
                                        <h3 className="mb-4 text-xl font-medium text-gray-900">Password Reset</h3>
                                        <form className="space-y-6" action="#">
                                            
                                            <div className="relative">
                                                <input type="password" id="small_outlined" placeholder="••••••••" className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
                                                <label for="small_outlined" className="absolute text-sm text-gray-500  duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 left-1">Old password</label>
                                            </div>
                                            <div className="relative">
                                                <input type="password" id="new_password_outlined" placeholder="••••••••" className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
                                                <label for="new_password_outlined" className="absolute text-sm text-gray-500  duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 left-1">New password</label>
                                            </div>
                                            <div className="relative">
                                                <input type="password" id="confirm_password_outlined" placeholder="••••••••" className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
                                                <label for="confirm_password_outlined" className="absolute text-sm text-gray-500  duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 left-1">Confirm new password</label>
                                            </div>
                                            
                                            <button type="submit" className="w-full text-white bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Save changes</button>
                                            
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                



                    
                </div>
            </div>
        </div>

    )
}

export default Security; 