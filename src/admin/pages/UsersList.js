import React from 'react'
import {TbCurrencyNaira} from 'react-icons/tb'
import { useNavigate} from 'react-router-dom'


function UsersList() {
    const navigate = useNavigate()
    const users = Array.from(Array(10).keys()).slice(1);
  return (
    <div>
      <div className='p-4 flex gap-4'>
        <div href="#" class="flex flex-col items-center place-content-center p-6 text-white border border-gray-200 rounded-lg shadow-md  bg-gray-800 min-w-[250px]">
            <p class="font-normal">Active user</p>
            <div className=''>
                <span className=' font-extrabold text-5xl tracking-tight leading-none'>2,000</span>
            </div>
            
        </div>
        <div href="#" class="flex flex-col items-center place-content-center p-6 text-white border border-gray-200 rounded-lg shadow-md  bg-gray-800 min-w-[250px]">
            <p class="font-normal">Total User</p>
            <div className=''>
                <span className=' font-extrabold text-5xl tracking-tight leading-none'>2,000,000</span>
            </div>
            
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
                        Email
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Joined Date
                    </th>
                    <th scope="col" class="py-3 px-6">
                        status
                    </th>
                    <th scope="col" class="py-3 px-6">
                        <span class="sr-only">Edit</span>
                    </th>
                </tr>
                </thead>
                <tbody>
                    {users.map(()=> {
                        return (
                            <tr class="bg-white border-b hover:bg-gray-200 ">
                                <th scope="row" class="py-4 px-6 font-medium  whitespace-nowrap ">
                                Sirajudeen Bolanle
                                </th>
                                <td class="py-4 px-6">
                                    programmerolakay@gmail.com
                                </td>
                                <td class="py-4 px-6">
                                    21,May 2020
                                </td>
                                <td class="py-4 px-6">
                                Active
                                </td>
                                <td class="py-4 px-6 text-right">
                                    <p onClick={()=> navigate('loan/user/olakay')}  class="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer">View</p>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    </div>

    </div>
  )
}


export default UsersList
