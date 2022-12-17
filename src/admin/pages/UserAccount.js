import React from 'react'

function UserAccount() {
  return (
    <div className=' w-full h-screen flex'>
      <div className=' w-[30%]  border-gray-300 h-full'>
        
      </div>
      <div className=' w-[70%] m-4'>
            <h2 className='text-base font-bold text-gray-800 py-4'>Customers</h2>
            <div className='flex flex-col lg:flex-row justify-between gap-4 lg:items-center my-4'>
                <div className=' flex  gap-4 items-center'>
                    AHMED's Loans
                </div>
                <p className='w-fit border-[1px] px-4 py-2 border-loanBlue-primary text-loanBlue-primary bg-white cursor-pointer rounded text-xs' >Export csv</p>
            </div>


            <div class="text-sm font-medium text-center text-gray-500 border-b border-gray-200  bg-white">
                <ul class="flex flex-wrap -mb-px">
                    <li class="mr-2">
                        <a href="#" class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Applications</a>
                    </li>
                    <li class="mr-2">
                        <a href="#" class="inline-block p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500" aria-current="page">Loan</a>
                    </li>
                    <li class="mr-2">
                        <a href="#" class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Customer Information</a>
                    </li>
                </ul>
            </div>

      </div>
    </div>
  )
}

export default UserAccount
