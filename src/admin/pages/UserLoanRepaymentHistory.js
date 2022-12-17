import React from 'react'
import {MdMail , MdPhoneEnabled} from 'react-icons/md'
import {TbCurrencyNaira} from 'react-icons/tb'
import { useNavigate} from 'react-router-dom'
import Typed from 'react-typed';

function UserLoanHistoryCard({loadDate, approveDate , amount , status }){
    const navigate = useNavigate()
    return (
        <tr class="bg-white border-b hover:bg-gray-200 ">
            <th scope="row" class="py-4 px-6 font-medium  whitespace-nowrap ">
            {amount}
            </th>
            <td class="py-4 px-6">
                {loadDate}
            </td>
            <td class="py-4 px-6">
                {approveDate}
            </td>
            {!status ? <td class="py-4 px-6 text-yellow-400">dcb60d90d49246fca540232264ccc2de</td> : <td class="py-4 px-6 text-green-600">dcb60d90d49246fca540232264ccc2de</td>}
            
            <td class="py-4 px-6 text-right">
                <p onClick={()=> navigate('loan/user/olakay')}  class="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer">View</p>
            </td>
        </tr>
    )
}

function UserLoanRepaymentHistory() {
    const users = Array.from(Array(10).keys()).slice(1);
  return (
    <div className='w-full h-full'>
        <div className='p-4 py-6 m-4 bg-white rounded-md w-fit'>
        
        <div className=' flex gap-4'>
            <img src='https://avatars.githubusercontent.com/u/95700260?v=4' alt='user' className='w-12 h-12 rounded-md'/>
            <div className=' flex flex-col'>
                <h2 className='font-bold text-xl hover:text-loanBlue-primary cursor-pointer'>Olanrewaju AbdulKabeer</h2>
                <div className=' flex gap-2 items-center'>
                    <p className=' flex items-center gap-2 text-sm font-medium'>
                        <span><MdMail className='w-5 h-5' /></span>
                        <span className=' hover:text-loanBlue-primary'>programmerolakay@gmail.com</span>
                    </p>
                    <p className=' flex items-center gap-2 text-sm font-medium'>
                        <span><MdPhoneEnabled  className='w-5 h-5'/></span>
                        <span className=' hover:text-loanBlue-primary'>09082455489</span>
                    </p>
                </div>
            </div>
        </div>
        <div className='p-4 py-7 min-w-sm w-full text-loan-secondary flex flex-col gap-4 rounded-md'>
            <h2 className=' text-base font-bold'>Loan Disbursed</h2>
            <h1 className=' flex items-center text-5xl font-bold'>
                <TbCurrencyNaira />
                <span><Typed strings={['169,700.00']} typeSpeed={70} showCursor={false}/></span>
            </h1>
        </div>
        </div>


        <div className='p-4 bg-white m-4 rounded-md'>
        
        <h2 className='text-base font-bold text-gray-800 py-4'>REPAYMENT HISTORY</h2>
        <div class="overflow-x-auto relative shadow-md sm:rounded-lg">  
            <table class="w-full text-sm text-left text-gray-500 ">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
                <tr>
                    <th scope="col" class="py-3 px-6 flex  items-center">
                        <span>
                            <TbCurrencyNaira className=' w-5 h-5'/>
                        </span>
                        <span>Amount</span>
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Date
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Type
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Refrence
                    </th>
                    <th scope="col" class="py-3 px-6">
                        <span class="sr-only">Edit</span>
                    </th>
                </tr>
                </thead>
                <tbody>
                    <UserLoanHistoryCard  loadDate='21,May 2020' approveDate='21,May 2020'  amount='50,000' status={true}/>
                    {users.map(()=>{
                        return ( <UserLoanHistoryCard  loadDate='21,May 2020' approveDate='21,May 2020'  amount='50,000' status={true}/> )
                    })}
                </tbody>
            </table>
        </div>
        </div>
    </div>
  )
}

export default UserLoanRepaymentHistory
