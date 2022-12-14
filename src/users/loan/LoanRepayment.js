import React, { useState } from 'react'
import LoanDetailHeader from '../../component/LoanDetailHeader'
import {TbCurrencyNaira} from 'react-icons/tb'
import {BsCircle} from 'react-icons/bs'
import {FcOk} from 'react-icons/fc'



function LoanRepayment() {

    const [amountToPay, setAmountToPay] = useState(null)

    function handleClickFull(){
        setAmountToPay('full')
    }
    function handleClickNext(){
        setAmountToPay('next')
    }
    function handleCustomFocus(event){
        setAmountToPay(event.target.value)
    }

  return (
    <div className='p-4 w-full h-full'>
        <div>
            <div onClick={handleClickFull} className=' flex items-center justify-between border p-4  border-loan-primary rounded-md cursor-pointer my-4' >
                <div className=' flex flex-col text-xl font-medium'>
                    <p className=' flex items-center '>
                        <TbCurrencyNaira />
                        <span>135,000</span>
                    </p>
                    <span className=' text-sm font-normal text-green-600'>Full payment</span>
                </div>
                {amountToPay === 'full' ? (
                    <FcOk className=' w-8 h-8'/>
                ): (
                    <BsCircle className=' w-8 h-8'/>
                )}
            </div>
            <div onClick={handleClickNext} className=' flex items-center justify-between border p-4  border-loan-primary rounded-md cursor-pointer' >
                <div className=' flex flex-col text-xl font-medium'>
                    <p className=' flex items-center '>
                        <TbCurrencyNaira />
                        <span>15,750</span>
                    </p>
                    <span className=' text-sm font-normal text-green-600'>Next payment</span>
                </div>
                {amountToPay === 'next' ? (
                    <FcOk className=' w-8 h-8'/>
                ): (
                    <BsCircle className=' w-8 h-8'/>
                )}
            </div>
        </div>
        
        <ol className="flex items-center place-content-center relative my-8">                  
            <li className="text-xl font-normal">
                OR
            </li>
        </ol>

        <input onFocus={handleCustomFocus} onChange={handleCustomFocus} type="number" id="helper-text" aria-describedby="helper-text-explanation" 
                        className="bg-gray-50 mb-3 border border-gray-300  text-sm rounded-md focus:ring-loan-primary focus:border-loan-primary block w-full p-3 focus:outline-none" 
                        placeholder="Enter Custom Amount" />
        <div className=' w-full'>

            <button  type="button" className="w-full py-3 px-5 mr-2 my-4 mb-12 text-sm font-medium focus:outline-none bg-loanBlue-primary text-white rounded-md border border-gray-300 ">MAKE PAYMENT</button>
        </div>

    </div>
  
  )
}

export default LoanRepayment
