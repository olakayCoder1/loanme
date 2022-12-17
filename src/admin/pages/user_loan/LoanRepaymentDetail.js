import React from 'react'
import {TbCurrencyNaira} from 'react-icons/tb'


function Card({label , value}){
    return (
        <li class="mb-6 ml-4 text-xs font-normal">
            <div class="absolute w-4 h-4 bg-white rounded-full mt-1.5 -left-2 border border-loanBlue-primary "></div>
            <time class="mb-1 leading-none  ">Date : February 2022</time>
            <h3 class="text-sm font-medium  flex items-center ">
                <span>Fund disbursed :</span>
                <span className=' flex gap-2 items-center'>
                    <TbCurrencyNaira />
                    <span>40000</span>
                </span>
                  
            </h3>
            <p class="mb-4 ">Type : System</p>
        </li>
    )
}


function LoanRepaymentDetail() {
  return (
    <div className=' bg-white text-sm font-normal'>
        
        <div className=' w-full  px-8 py-6 '>
            {/*  */}

            <ol class="relative border-l border-loanBlue-primary text-gray-500 ">  
                <Card />                
                <Card />                
                <Card />                
                <Card />                
                <Card />                
                <Card />                
                <Card />                
                <Card />                
                <Card /> 
            </ol>
            {/*  */}
        </div>
    </div>
  )
}


export default LoanRepaymentDetail
