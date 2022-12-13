import React from 'react'
import {TbCurrencyNaira} from 'react-icons/tb'
import { useNavigate} from 'react-router-dom'


function Dashboard() {
    const navigate = useNavigate()

  return (
    <div>
      <div className='p-4 flex'>
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

    <div className='p-4 bg-white m-4 rounded-md'>
        <div className='flex justify-between items-center'>
            <form>
                <input className='border-[2px] px-4 py-2 focus:ring-0 focus:outline-none focus:border-loan-outline rounded-md'
                    type='search' placeholder='Search user' />
            </form>

            <p className='border-[2px] px-4 py-2 bg-loan-button text-white cursor-pointer rounded-md' >Export</p>

        </div>
        <h2 className='text-base font-bold text-gray-800 py-4'>USERS</h2>
        <div class="overflow-x-auto relative shadow-md sm:rounded-lg">  
            <table class="w-full text-sm text-left text-gray-500 ">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
                <tr>
                    <th scope="col" class="py-3 px-6">
                        Name
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Joined Date
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
                        <span class="sr-only">Edit</span>
                    </th>
                </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b hover:bg-gray-200 ">
                        <th scope="row" class="py-4 px-6 font-medium  whitespace-nowrap ">
                        Sirajudeen Bolanle
                        </th>
                        <td class="py-4 px-6">
                            21,May 2020
                        </td>
                        <td class="py-4 px-6">
                            <div class="w-full bg-gray-200 rounded-full ">
                                <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.38 leading-none rounded-full" 
                                    style={{"width": "67%"}}> 67%</div>
                            </div>
                        </td>
                        <td class="py-4 px-6">
                            50,000
                        </td>
                        <td class="py-4 px-6 text-right">
                            <p onClick={()=> navigate('loan/user/olakay')}  class="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer">View</p>
                        </td>
                    </tr>
                    <tr class="bg-white border-b hover:bg-gray-200 ">
                        <th scope="row" class="py-4 px-6 font-medium  whitespace-nowrap ">
                        Sirajudeen Bolanle
                        </th>
                        <td class="py-4 px-6">
                            21,May 2020
                        </td>
                        <td class="py-4 px-6">
                            <div class="w-full bg-gray-200 rounded-full ">
                                <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.38 leading-none rounded-full" 
                                    style={{"width": "45%"}}> 45%</div>
                            </div>
                        </td>
                        <td class="py-4 px-6">
                            50,000
                        </td>
                        <td class="py-4 px-6 text-right">
                            <p onClick={()=> navigate('loan/user/olakay')} class="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer">View</p>
                        </td>
                    </tr>
                    <tr class="bg-white border-b hover:bg-gray-200 ">
                        <th scope="row" class="py-4 px-6 font-medium  whitespace-nowrap ">
                        Sirajudeen Bolanle
                        </th>
                        <td class="py-4 px-6">
                            21,May 2020
                        </td>
                        <td class="py-4 px-6">
                            <div class="w-full bg-gray-200 rounded-full ">
                                <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.38 leading-none rounded-full" 
                                    style={{"width": "70%"}}> 70%</div>
                            </div>
                        </td>
                        <td class="py-4 px-6">
                            50,000
                        </td>
                        <td class="py-4 px-6 text-right">
                            <p onClick={()=> navigate('loan/user/olakay')}  class="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer">View</p>
                        </td>
                    </tr>
                    <tr class="bg-white border-b hover:bg-gray-200 ">
                        <th scope="row" class="py-4 px-6 font-medium  whitespace-nowrap ">
                        Sirajudeen Bolanle
                        </th>
                        <td class="py-4 px-6">
                            21,May 2020
                        </td>
                        <td class="py-4 px-6">
                            <div class="w-full bg-gray-200 rounded-full ">
                                <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.38 leading-none rounded-full" 
                                    style={{"width": "95%"}}> 95%</div>
                            </div>
                        </td>
                        <td class="py-4 px-6">
                            50,000
                        </td>
                        <td class="py-4 px-6 text-right">
                            <p onClick={()=> navigate('loan/user/olakay')}  class="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer">View</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    </div>
  )
}

export default Dashboard
