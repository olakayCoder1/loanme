import React from 'react'
import {MdMail , MdPhoneEnabled} from 'react-icons/md'
import {TbCurrencyNaira} from 'react-icons/tb'
import { useNavigate} from 'react-router-dom'
import {motion} from 'framer-motion'
import {RiMoneyDollarCircleLine} from 'react-icons/ri'


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

function Card({title, val , col }){
    
    return (
        <motion.div initial={{y:0}} whileHover={{y:-6}} animate={{transition:{duration:3} , translate:{duration:2} }}
            className='w-full flex justify-between p-4 min-w-[200px]  h-28 bg-white rounded shadow'>
            <div className=' flex flex-col justify-between'>
                <h3 className=' uppercase text-gray-400 text-sm font-medium hover:text-loanBlue-primary'>{title}</h3>
                <h2 className=' flex items-center text-2xl font-medium text-gray-800'>
                    {title === 'total earning' && <TbCurrencyNaira />}
                    {title === 'my balance' && <TbCurrencyNaira />}
                    <span>{val}</span>
                </h2>
                {/* <p className=' text-sm font-normal text-gray-400 underline underline-offset-1 cursor-pointer'>view</p> */}
            </div>
            <div className=' flex justify-between flex-col'>
                <p className=' text-white'>j</p>
                {col === 'blue' && <p className=' p-2 rounded-sm bg-blue-100'> <RiMoneyDollarCircleLine  className=' text-blue-400 w-6 h-6'/> </p>}
                {col === 'green' && <p className=' p-2 rounded-sm bg-green-100'> <RiMoneyDollarCircleLine  className=' text-green-400 w-6 h-6'/> </p>}
                {col === 'red' && <p className=' p-2 rounded-sm bg-red-100'> <RiMoneyDollarCircleLine  className=' text-red-400 w-6 h-6'/> </p>}
                {col === 'yellow' && <p className=' p-2 rounded-sm bg-yellow-100'> <RiMoneyDollarCircleLine  className=' text-yellow-400 w-6 h-6'/> </p>}
            </div>
        </motion.div>
    )
}

function UserLoanRepaymentHistory() {
    const users = Array.from(Array(10).keys()).slice(1);
  return (
    <div className='w-full h-full'>
      

        <div className=' m-4 overflow-x-auto'>
            <div className='flex  gap-4 mb-3'>
                <Card title='Amount Loaned' val='200,000'  col='blue'/>
                <Card title='Balance Payment' val='200,000'  col='yellow'/>
                <Card title='Interest' val='200,000'  col='green'/>
            </div>
            <button className=' btn-primary w-fit'>Loan application data</button>
        </div>


        {/* Loan Application data */}
        <div className='m-4 py-4 bg-white '>

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
