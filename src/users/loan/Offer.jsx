import React from 'react'
import  Lottie from 'lottie-react'
import cal from '../../admin/pages/user_account/done_ok.json'
import {TbCurrencyNaira} from 'react-icons/tb'

import {MdOutlineLocalOffer, MdLocalOffer} from 'react-icons/md'
import {AiOutlinePlus} from 'react-icons/ai'




function Offer() {
  return (
    <div className=' md:w-6/12 mx-auto text-sm font-normal p-4'>
        <Lottie animationData={cal} className='w-28 h-28   text-center mx-auto'/>
        <h2 className='text-center text-lg font-normal text-loanBlue-primary'>Congratulations!</h2>
        <p className=' text-center'>Select your repayment period to proceed
            As part of our ongoing efforts to provide the best service to learners, customers,
             and partners, we will be updating some of our policies. Effective January 1, 
             2023, an updated Terms of Use will be in place on Coursera
        </p>
        <div className='flex flex-col items-center font-medium text-base text-gray-800 text-center my-6'>
            <h2 className=' text-sm font-bold'>Loan Amount</h2>
            <h2 className=' flex  items-center  text-3xl font-medium text-gray-800'>
                <TbCurrencyNaira />
                <span>90,000.00</span>
            </h2>
        </div>
        <h2 className=' text-center text-loanBlue-primary'>Choose a repayment period to proceed</h2>
        <div className=' p-4 flex gap-4 overflow-x-auto'>
            <div className='border w-fit flex flex-col gap-2 border-[#f8f0e7] rounded-md bg-[#f8f0e7] p-6 px-3 cursor-pointer hover:border-loanBlue-primary '>
                <p className='p-4 rounded-md bg-[#e6a969] w-fit'>
                    <MdOutlineLocalOffer className=' w-5 h-5 text-white' />
                </p>
                <h3>6 months</h3>
                <h2 className=' flex  items-center  text-xl font-normal text-gray-800'>
                    <TbCurrencyNaira />
                    <span>99,000.00</span>
                </h2>
                <h2 className=' flex  items-center  text-base font-normal text-gray-800 bg-white p-2 rounded-md px-4'>
                    <AiOutlinePlus />
                    <span>9,000</span>
                </h2>
            </div>
            <div className='border w-fit flex flex-col gap-2 border-loanBlue-primary rounded-md bg-loanBlue-primary text-white p-6 px-3 cursor-pointer hover:border-loanBlue-primary '>
                <p className='p-4 rounded-md bg-[#e6a969] w-fit'>
                    <MdOutlineLocalOffer className=' w-5 h-5 text-white' />
                </p>
                <h3>12 months</h3>
                <h2 className=' flex  items-center  text-xl font-normal '>
                    <TbCurrencyNaira />
                    <span>108,000.00</span>
                </h2>
                <h2 className=' flex  items-center  text-base font-normal text-gray-800 bg-white p-2 rounded-md px-4'>
                    <AiOutlinePlus />
                    <span>18,000</span>
                </h2>
            </div>
            <div className='border w-fit flex flex-col gap-2 border-[#f8f0e7] rounded-md bg-[#f8f0e7] p-6 px-3 cursor-pointer hover:border-loanBlue-primary '>
                <p className='p-4 rounded-md bg-[#e6a969] w-fit'>
                    <MdOutlineLocalOffer className=' w-5 h-5 text-white' />
                </p>
                <h3>6 months</h3>
                <h2 className=' flex  items-center  text-xl font-normal text-gray-800'>
                    <TbCurrencyNaira />
                    <span>99,000.00</span>
                </h2>
                <h2 className=' flex  items-center  text-base font-normal text-gray-800 bg-white p-2 rounded-md px-4'>
                    <AiOutlinePlus />
                    <span>9,000</span>
                </h2>
            </div>
            <div className='border w-fit flex flex-col gap-2 border-[#f8f0e7] rounded-md bg-[#f8f0e7] p-6 px-3 cursor-pointer hover:border-loanBlue-primary '>
                <p className='p-4 rounded-md bg-[#e6a969] w-fit'>
                    <MdOutlineLocalOffer className=' w-5 h-5 text-white' />
                </p>
                <h3>6 months</h3>
                <h2 className=' flex  items-center  text-xl font-normal text-gray-800'>
                    <TbCurrencyNaira />
                    <span>99,000.00</span>
                </h2>
                <h2 className=' flex  items-center  text-base font-normal text-gray-800 bg-white p-2 rounded-md px-4'>
                    <AiOutlinePlus />
                    <span>9,000</span>
                </h2>
            </div>
        </div>

        <div className=' py-4 flex flex-col gap-3'>
            <h2 className=' text-center text-loanBlue-primary'>Offer summary</h2>
            <div className=' border-[1px] border-gray-300  p-4 py-3 rounded'>
                You pay <span className=' font-bold text-sm text-loan-secondary'>15,000.00 </span> very months for 
                <span className=' font-bold text-sm text-loan-secondary'> 12 months</span>. Enjoy lower Interest free if you pay on time
            </div>
            <button className=' btn-primary my-12'>PROCEED</button>
        </div>
    </div>
  )
}

export default Offer
