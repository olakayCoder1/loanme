import React, { useState } from 'react'
import WelcomeHeader from '../../component/WelcomeHeader'
import me from '../../assets/icons8-identity-64.png'
import { useNavigate } from "react-router-dom";

function Bvn({showNavBar, setShowNavBar}) {

    let navigate = useNavigate()
    const [whyBvn , setWhyBvn] = useState(false)
    const [howToBvn , setHowToBvn] = useState(false)

  return (
    <div className=' w-full h-full p-4 md:px-20'>
        <WelcomeHeader showNavBar={showNavBar} setShowNavBar={setShowNavBar} name='Olanrewaju'/>
        <div className=''>
            <h2 className=' font-medium text-base my-4'>Complete Account Setup</h2>
            <div className='text-loan-secondary flex justify-between items-center bg-loan-light p-4 px-8'>
                <p className=' font-bold text-base '>Identity Verification</p>
                <p>1/3</p>
            </div>

            <div className='flex items-center justify-between pt-12'>
                <form className='w-full min-w-sm max-w-md flex flex-col gap-2'>
                    <label for="helper-text" className="block mb-1 text-sm font-medium text-loan-secondary  ">Identity Type</label>
                    <input type="text" aria-describedby="helper-text-explanation" id="disabled-input" aria-label="disabled input"
                        class="bg-gray-50 mb-3 border border-gray-300  text-sm rounded-md focus:ring-loan-primary focus:border-loan-primary block w-full p-2.5 focus:outline-none" 
                        placeholder="BVN"  value='BVN' disable />

                    <label for="helper-text" className="block mb-1 text-sm font-medium text-loan-secondary  ">Bank Verification Number</label>
                    <input type="number" id="helper-text" aria-describedby="helper-text-explanation" 
                        className="bg-gray-50 mb-3 border border-gray-300  text-sm rounded-md focus:ring-loan-primary focus:border-loan-primary block w-full p-2.5 focus:outline-none" 
                        placeholder="*********" />
                    <button type="button" onClick={()=> navigate('/setup/account/card')}
                        className="w-full py-4 px-5 mr-2 my-4 text-sm font-medium focus:outline-none bg-loanBlue-primary text-white rounded-md border border-gray-200 ">VERIFY</button>

                    <p onClick={()=> setHowToBvn(true)} className=' text-loanBlue-primary underline-offset-2 underline cursor-pointer'>How can I get it ?</p>
                    <p onClick={()=> setWhyBvn(true)}  className=' text-loanBlue-primary underline-offset-2 underline cursor-pointer'>Why ask for BVN?</p>
                </form>

                <div className='hidden w-80 h-80 bg-loan-light lg:flex place-content-center items-center'>
                    <img src={me} alt='security' className=' w-32 h-32' />
                </div>
            </div>
        </div>


    {howToBvn && (
    <div className=' fixed w-full h-full top-0 left-0 right-0 bottom-0 bg-gray-600 z-50 bg-blend-overlay  flex items-center place-content-center'>
        <div className="z-50 p-4  md:inset-0  h-full flex items-center place-content-center">
            <div className="relative w-full  max-w-md h-auto">
                <div className="relative bg-white rounded-lg shadow ">
                    <button onClick={()=> setHowToBvn(false)}  type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center " data-modal-toggle="popup-modal">
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                    <div className="p-6 text-center flex justify-center place-content-center items-center flex-col gap-2">
                        <img src={me} alt='security' className=' w-12 h-12' />
                        <h2 className=' text-loan-secondary text-lg font-bold'>Just dial *565*0#</h2>
                        <p className="mb-5 text-sm font-normal text-gray-500">Please note: This will only work if you are making the request from the same currently linked with your BVN.</p>
                        <button onClick={()=> setHowToBvn(false)}  type="button" 
                        className="w-full py-3 px-5 mr-2 my-4 text-sm font-medium focus:outline-none bg-loanBlue-primary text-white rounded-md border border-gray-200 ">GOT IT!</button>

                    </div>
                </div>
            </div>
        </div>
    </div>
    )}
    
    {whyBvn && (
    <div className=' fixed w-full h-full top-0 left-0 right-0 bottom-0 bg-gray-600 z-50 bg-blend-overlay  flex items-center place-content-center'>
        <div className="z-50 p-4  md:inset-0  h-full flex items-center place-content-center">
            <div className="relative w-full  max-w-md h-auto">
                <div className="relative bg-white rounded-lg shadow ">
                    <button onClick={()=> setWhyBvn(false)}  type="button" className="absolute top-3 right-2.5  text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center " data-modal-toggle="popup-modal">
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                    <div className="p-6 text-center flex justify-center place-content-center items-center flex-col gap-2">
                        <img src={me} alt='security' className=' w-12 h-12' />
                        <h2 className=' text-loan-secondary text-lg font-bold'>Why ask BVN?</h2>
                        <p className="mb-5 text-sm font-normal text-gray-500">
                            We requested your BVN to verify that the individual applying for a QUICK LOAN is the same as the onwer of the provided bank account.
                            This ensures that your account details cannot be used to apply for a loan with your authorization.
                        </p>
                        <p className="mb-5 text-sm font-normal text-gray-500">
                            Please note: Your BVN does not provide access to your account. If in doubt we encourage you to confirm this from your bank before proceed.
                        </p>
                        <button onClick={()=> setWhyBvn(false)}  type="button" 
                        className="w-full py-3 px-5 mr-2 my-4 text-sm font-medium focus:outline-none bg-loanBlue-primary text-white rounded-md border border-gray-200 ">GOT IT!</button>

                    </div>
                </div>
            </div>
        </div>
    </div>
    )}
    



    

    </div>
  )
}

export default Bvn
