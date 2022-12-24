import React from 'react'
import {TbCurrencyNaira} from 'react-icons/tb'


function Card({status , amount , scheduleDate}){
    return (
        <li class="mb-6 ml-4 text-xs font-normal">
            <div class="absolute w-4 h-4 bg-white rounded-full mt-1.5 -left-2 border border-loanBlue-primary "></div>
            <time class="mb-1 leading-none  ">Date : {scheduleDate}</time>
            <h3 class="text-sm font-medium  flex items-center ">
                <span>Amount :</span>
                <span className=' flex gap-2 items-center'>
                    <TbCurrencyNaira />
                    <span>{amount}</span>
                </span>
                  
            </h3>
            {status == 'completed' ? (
                <>
                <p class=" ">Type : System</p>
                <p class="mb-4 ">Status : <span className=' text-green-600'>{status}</span> </p>
                </>
            ): (
                <>
                <p class=" ">Type : ---</p>
                <p class="mb-4 ">Status : <span className=' text-yellow-600'>{status}</span> </p>
                </>
            )}
            
        </li>
    )
}


function LoanRepaymentDetail({customerLoanDetail}) {

    const schedule = customerLoanDetail?.schedule
  return (
    <div className=' bg-white text-sm font-normal'>
        
        <div className=' w-full  px-8 py-6 '>
            {/*  */}

            <ol class="relative border-l border-loanBlue-primary text-gray-500 ">  
                {schedule?.map((val)=>{
                    return <Card key={val.uuid}
                                status={val.status}
                                scheduleDate={val.date} 
                                amount={val.amount}
                                /> 
                })}
            </ol>
            {/*  */}
        </div>
    </div>
  )
}


export default LoanRepaymentDetail
