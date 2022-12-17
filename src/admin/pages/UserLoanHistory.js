import React from 'react'
import {MdMail , MdPhoneEnabled} from 'react-icons/md'
import {TbCurrencyNaira} from 'react-icons/tb'
import { useNavigate} from 'react-router-dom'


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
            {!status ? <td class="py-4 px-6 text-yellow-400">Inprogress</td> : <td class="py-4 px-6 text-green-600">Completed</td>}
            
            <td class="py-4 px-6">
                50,000
            </td>
            <td class="py-4 px-6 text-right">
                <p onClick={()=> navigate('loan/user/olakay')}  class="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer">View</p>
            </td>
        </tr>
    )
}


function UserLoanHistory() {

    const users = Array.from(Array(10).keys()).slice(1);
  return (
    <div className='w-full h-full'>
        <div className='p-4 py-6 m-4 bg-white rounded-md'>
        <div className=' flex gap-4'>
            <img src='https://avatars.githubusercontent.com/u/95700260?v=4' alt='user' className='w-32 h-32 rounded-md'/>
            <div className=' flex flex-col gap-4'>
                <h2 className='font-bold text-xl'>Olanrewaju AbdulKabeer</h2>
                <div className=' flex gap-4 items-center'>
                    <p className=' flex items-center gap-2 text-sm font-medium'>
                        <span><MdMail className='w-5 h-5' /></span>
                        <span>programmerolakay@gmail.com</span>
                    </p>
                    <p className=' flex items-center gap-2 text-sm font-medium'>
                        <span><MdPhoneEnabled  className='w-5 h-5'/></span>
                        <span>09082455489</span>
                    </p>
                </div>
                <p className='text-sm font-medium'>I distinguish three main text objectives could be merely to inform people.A second could be persuade people.You want people to bay objective</p>
            </div>
        </div>
        </div>


        <div className='p-4 bg-white m-4 rounded-md'>
        
        <h2 className='text-base font-bold text-gray-800 py-4'>LOAN HISTORY</h2>
        <div class="overflow-x-auto relative shadow-md sm:rounded-lg">  
            <table class="w-full text-sm text-left text-gray-500 ">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
                <tr>
                    <th scope="col" class="py-3 px-6 flex  items-center">
                        <span>
                            <TbCurrencyNaira className=' w-5 h-5'/>
                        </span>
                        <span>Amount Loan</span>
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Requested Date
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Approved Date
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Status
                    </th>
                    <th scope="col" class="py-3 px-6 flex  items-center">
                        <span>
                            <TbCurrencyNaira className=' w-5 h-5'/>
                        </span>
                        <span>Amount</span>
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

export default UserLoanHistory
