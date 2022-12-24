import React from 'react'
import { useNavigate, Link} from 'react-router-dom'


function Card({label , value}){
    return (
        <div className=' flex justify-between py-2.5 border-b-[1px] hover:bg-gray-100 px-3'>
            <h3 className=' text-xs font-light capitalize'>{label}</h3>
            <h3 className=' text-xs font-medium text-gray-700 '>{value}</h3>
        </div>
    )
}


function LoanDetailInformation({customerLoanDetail}) {
    let navigate = useNavigate()
  return (
    <div className=' bg-white text-sm font-normal'>
        <div className='flex justify-between gap-4 items-center py-4 px-4 md:px-12'>
            <div className=' flex  gap-4 items-center text-gray-800'>
                
            </div>
            <p onClick={()=> navigate(`/admin/applications/${customerLoanDetail && customerLoanDetail.offer.application.uuid}`)} className='w-fit border-[1px] px-4 py-2 border-loanBlue-primary bg-loanBlue-primary text-white cursor-pointer rounded text-xs' >View link application</p> 
        </div>
        <div className=' w-full  px-6 md:px-8 py-6 '>
            <Card label='Loan ID' value={customerLoanDetail && customerLoanDetail.uuid}/>
            <Card label='Offer amount' value={customerLoanDetail && customerLoanDetail.offer.offer_amount}/>
            <Card label='Interest' value={customerLoanDetail && customerLoanDetail.offer.interest}/>
            <Card label='Total' value={customerLoanDetail && customerLoanDetail.amount}/>
            <Card label='status' value={customerLoanDetail && customerLoanDetail.status}/>
            <Card label='Created at' value={customerLoanDetail && customerLoanDetail.created_at} />
        </div>
    </div>
  )
}


export default LoanDetailInformation
