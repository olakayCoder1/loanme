import React from 'react'
import {TbCurrencyNaira} from 'react-icons/tb'
import { useNavigate} from 'react-router-dom'




function UserListTableRow({name , email , isActive , joinDate}){
    const navigate = useNavigate()
    return (
        <tr class="bg-white border-b hover:bg-gray-200 ">
            <th scope="row" class="py-4 px-6 font-medium  whitespace-nowrap ">
            {name}
            </th>
            <td class="py-4 px-6">
                {email}
            </td>
            <td class="py-4 px-6">
                {joinDate}
            </td>
            {isActive ?  <td class="py-4 px-6"> Active</td> : <td class="py-4 px-6"> InActive</td>}
            
            <td class="py-4 px-6 text-right">
                <p onClick={()=> navigate('loan/user/olakay')}  class="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer">View</p>
            </td>
        </tr>
    )
}

function UsersList() {
    const navigate = useNavigate()
    const users = Array.from(Array(10).keys()).slice(1);
  return (
    <div>
    <div className='p-4 bg-white m-4 rounded-md'>
        <h2 className='text-base font-bold text-gray-800 py-4'>Customers</h2>
        <div className='flex justify-between items-center my-4'>

            <div className=' flex gap-3 items-center'>
                <form>
                    <input className='border-[1px] px-4 py-2 focus:ring-0 focus:outline-none hover:border-gray-300 focus:border-loan-outline rounded-md placeholder:text-sm'
                    type='search' placeholder='Search user' />
                </form>
                <select id="bank" 
                        className="border-[1px]  text-sm rounded-md focus:ring-0 hover:border-gray-300 focus:border-loan-outline block w-full p-2.5 focus:outline-none" 
                        >
                    <option selected disabled hidden>Filter</option>
                    <option value="fisrt_bank">First Bank</option>
                    <option value="uba">United Bank For Africa</option>
                    <option value="union">Union Bank</option>
                    <option value="polaris">Polaris Bank</option>
                    </select>
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
                            <UserListTableRow name='Sirajudeen Bolanle'  email='programmerolakay@gmail.com' joinDate='21,May 2020' isActive={true}/>
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
