import React from 'react'
import {TbCurrencyNaira} from 'react-icons/tb'
import { useNavigate, Link} from 'react-router-dom'
import userLogo from '../../assets/xenith2.jpg'

function CustomersLoanHistoryCard({name, loanDate , progress , amount}){
    const navigate = useNavigate()
    return (
        <tr class="bg-white border-b hover:bg-gray-200 ">
            <th scope="row" class="py-4 px-6 font-medium  whitespace-nowrap flex items-center gap-4 ">
                <img src={userLogo} className='w-10 h-10 rounded-md'/>
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
                <p onClick={()=> navigate('/admin/users/olakay/loan')}  class="font-medium text-blue-600  hover:underline cursor-pointer">View</p>
            </td>
        </tr>
    )
}



function Dashboard() {
    const navigate = useNavigate()

  return (
    <div>
      <div className='p-4 flex overflow-x-auto'>
        <div href="#" class="block  p-6 text-white border border-gray-200 rounded-lg shadow-md  bg-gray-800 ">
            <p class="font-normal">Pending loan</p>
            <div className=''>
                <span className=' text-sm font-medium'>NGN</span>
                <span className=' font-extrabold text-5xl tracking-tight leading-none'>250,000,000</span>
                <span className=' text-sm font-medium'>.00</span>
            </div>            
        </div>
        <div href="#" class="block p-6 text-white border border-gray-200 rounded-lg shadow-md  bg-gray-800 ">
            <div className=''>
                <span className=' text-sm font-medium'>NGN</span>
                <span className=' font-extrabold text-5xl tracking-tight leading-none'>250,000,000</span>
                <span className=' text-sm font-medium'>.00</span>
            </div>
            <p class="font-normal">kkk </p>
        </div>
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
