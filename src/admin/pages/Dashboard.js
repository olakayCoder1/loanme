import React from 'react'
import {TbCurrencyNaira} from 'react-icons/tb'

function Dashboard() {
  return (
    <div>
      <div className='p-4 flex'>
        <div href="#" class="block max-w-sm p-6 text-white border border-gray-200 rounded-lg shadow-md  bg-gray-800 ">
            <p class="font-normal text-gray-700 dark:text-gray-400">Pending loan</p>

            <div className=''>
                <span className=' text-sm font-medium'>NGN</span>
                <span className=' font-extrabold text-5xl tracking-tight leading-none'>250,000,000</span>
                <span className=' text-sm font-medium'>.00</span>
            </div>
            
        </div>
        <div href="#" class="block max-w-sm p-6 text-white border border-gray-200 rounded-lg shadow-md  bg-gray-800 ">
            <div className=''>
                <span className=' text-sm font-medium'>NGN</span>
                <span className=' font-extrabold text-5xl tracking-tight leading-none'>250,000,000</span>
                <span className=' text-sm font-medium'>.00</span>
            </div>
            <p class="font-normal text-gray-700 dark:text-gray-400">kkk </p>
        </div>
      </div>

    <h2 className='text-base font-bold'>USERS</h2>
    <div class="overflow-x-auto relative shadow-md sm:rounded-lg">  
    <table class="w-full text-sm text-left text-gray-500 ">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
                <th scope="col" class="py-3 px-6">
                    Product name
                </th>
                <th scope="col" class="py-3 px-6">
                    Date
                </th>
                <th scope="col" class="py-3 px-6">
                    Category
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
                    Apple MacBook Pro 17"
                </th>
                <td class="py-4 px-6">
                    21,May 2020
                </td>
                <td class="py-4 px-6">
                    Laptop
                </td>
                <td class="py-4 px-6">
                    50,000
                </td>
                <td class="py-4 px-6 text-right">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</a>
                </td>
            </tr>
        
        </tbody>
    </table>
</div>
    </div>
  )
}

export default Dashboard
