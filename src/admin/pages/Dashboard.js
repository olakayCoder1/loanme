import React from 'react'
import {TbCurrencyNaira} from 'react-icons/tb'
import { useNavigate, Link} from 'react-router-dom'
import {RiMoneyDollarCircleLine} from 'react-icons/ri'
import {SiWebmoney} from 'react-icons/si'
import {FiUsers} from 'react-icons/fi'
import {BsWallet2} from 'react-icons/bs'
import {motion} from 'framer-motion'

function CustomersLoanHistoryCard({name, loanDate , progress , amount}){
    const navigate = useNavigate()
    return (
        <tr class="bg-white border-b hover:bg-gray-200 ">
            <th scope="row" class="py-4 px-6 font-medium  whitespace-nowrap flex items-center gap-4 ">
                <img src='https://avatars.githubusercontent.com/u/95700260?v=4' className='w-10 h-10 rounded-md'/>
                <p className=' flex flex-col'>
                    <Link onClick={()=> navigate('/admin/users/olakay')} to='/admin/users/olakay' className=' hover:text-loanBlue-primary cursor-pointer font-bold'>{name}</Link>
                    <span className=' text-xs font-medium'>programmerolakay@gmail</span>
                </p>
            
            </th>
            <td class="py-4 px-6">
                {loanDate}
            </td>
            <td class="py-4 px-6">
                <div class="w-full bg-gray-200 rounded-full ">
                    <div class="bg-green-600 text-xs font-medium text-blue-100 text-center p-0.38 leading-none rounded-full" 
                        style={{"width": progress }}> {progress}</div>
                </div>
            </td>
            <td class="py-4 px-6">
                {amount}
            </td>
            <td class="py-4 px-6">
                {loanDate}
            </td>
            <td class="py-4 px-6 text-right">
                <Link to='/admin/users/olakay/loan/1/history'  class="font-medium text-blue-600  hover:underline cursor-pointer">View</Link>
            </td>
        </tr>
    )
}


function Card({title, val , col ,Icon}){
    
    return (
        <motion.div initial={{y:0}} whileHover={{y:-6}} animate={{transition:{duration:3} }}
            className='w-full flex justify-between p-4  h-36 bg-white rounded shadow'>
            <div className=' flex flex-col justify-between'>
                <h3 className=' uppercase text-gray-400 text-base font-medium hover:text-loanBlue-primary'>{title}</h3>
                <h2 className=' flex items-center text-2xl font-medium text-gray-800'>
                    {title === 'total earning' && <TbCurrencyNaira />}
                    {title === 'my balance' && <TbCurrencyNaira />}
                    <span>{val}</span>
                </h2>
                <p className=' text-sm font-normal text-gray-400 underline underline-offset-1 cursor-pointer'>view</p>
            </div>
            <div className=' flex justify-between flex-col'>
                <p className=' text-white'>j</p>
                {col === 'blue' && <p className=' p-2 rounded-sm bg-blue-100'> <Icon  className=' text-blue-400 w-6 h-6'/> </p>}
                {col === 'green' && <p className=' p-2 rounded-sm bg-green-100'> <Icon  className=' text-green-400 w-6 h-6'/> </p>}
                {col === 'red' && <p className=' p-2 rounded-sm bg-red-100'> <Icon  className=' text-red-400 w-6 h-6'/> </p>}
                {col === 'yellow' && <p className=' p-2 rounded-sm bg-yellow-100'> <Icon  className=' text-yellow-400 w-6 h-6'/> </p>}
                
            </div>
        </motion.div>
    )
}


function Dashboard() {

  return (
    <div>
        <div className=' flex md:items-center gap-4 justify-between p-4 flex-col md:flex-row'>
            <div>
                <h2 className=' font-bold text-base text-loan-secondary'>Good day Olanrewaju</h2>
                <p className=' text-sm  font-normal text-gray-400'>Here's what's happening with your business.</p>
            </div>
            <p className=' p-2 bg-white rounded text-sm font-normal border shadow-md'>
                01 Jan , 2020 to  31 Jan 2020
            </p>
        </div>

        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4'>
            <Card title='total earning' val='5464738.00' Icon={RiMoneyDollarCircleLine} col='green'/>
            <Card title='loan' val='1,012' Icon={SiWebmoney} col='red'/>
            <Card title='customers' val='5464738.00' Icon={FiUsers} col='blue'/>
            <Card title='my balance' val='390,383.00' Icon={BsWallet2} col='yellow'/>
        </div>
      
    
   
    <div className='p-4 bg-white md:m-4 rounded-md'>
        <h2 className='text-base font-bold text-gray-800 py-4'>Customers with loan</h2>
        <div className='flex justify-between items-center my-4'>
            <div>
                <form>
                    <input className='border-[1px] px-4 py-2 focus:ring-0 focus:outline-none focus:border-loan-outline rounded-md'
                    type='search' placeholder='Search user' />
                </form>
            </div>

            <p className='border-[2px] px-4 py-2 bg-loanBlue-primary text-white cursor-pointer rounded-md' >Export csv</p>

        </div>
        
        <div class="overflow-x-auto relative shadow-md sm:rounded-lg">  
            <table class="w-full text-sm text-left text-gray-500 ">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
                <tr>
                    <th scope="col" class="py-3 px-6">
                        Name
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Loaned Date
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Loan Progress
                    </th>
                    <th scope="col" class="py-3 px-6 flex  items-center">
                        <span>
                            <TbCurrencyNaira className=' w-5 h-5'/>
                        </span>
                        <span>Amount</span>
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Next Payment
                    </th>
                    <th scope="col" class="py-3 px-6">
                        <span class="sr-only">Edit</span>
                    </th>
                </tr>
                </thead>
                <tbody>
                    <CustomersLoanHistoryCard name='Sirajudeen Bolanle' loanDate='21,May 2020' progress='95%'  amount='50,000'/>
                    <CustomersLoanHistoryCard name='Sirajudeen Bolanle' loanDate='21,May 2020' progress='95%'  amount='50,000'/>
                    <CustomersLoanHistoryCard name='Sirajudeen Bolanle' loanDate='21,May 2020' progress='95%'  amount='50,000'/>
                    <CustomersLoanHistoryCard name='Sirajudeen Bolanle' loanDate='21,May 2020' progress='95%'  amount='50,000'/>
                </tbody>
            </table>
        </div>
    </div>

    </div>
  )
}

export default Dashboard
