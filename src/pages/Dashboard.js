import React, { useState } from 'react'
import Header from '../component/Header'
import Sidebar from '../component/Sidebar'
import {BsFillCreditCard2FrontFill} from 'react-icons/bs'
import { BsWallet  } from 'react-icons/bs'
import {  FiMenu,  FiUsers } from 'react-icons/fi'
import {GrUserExpert} from 'react-icons/gr'
import {RiFindReplaceLine} from 'react-icons/ri'
import {TbCurrencyNaira} from 'react-icons/tb'
import {AiOutlineEyeInvisible, AiOutlineEye} from 'react-icons/ai'



function IntroCart({title , Icon }) {
    return (
      // <div className='w-3/6 md:w-[33%] lg:w-3/12 flex justify-between'>
      <div className='w-full flex justify-between items-center border p-4 py-6 rounded-md cursor-pointer hover:border-habibi-primary shadow'>
          <div className='flex flex-col'>
              <h4 className=' text-gray-500'>{title}</h4>
              <h1 className=' font-bold'>40,000</h1>
          </div>
          <p className=' p-3 rounded-full bg-gray-200'>
              <Icon  className='w-5 h-5'/>
          </p>
      </div>
    )
}

  


function Dashboard() {

    const [showNav, setShowNav] = useState(true)


  return (
    <div className=' w-full h-full bg-gray-50'>
      <div className=' w-full h-full flex'>
        <Sidebar displayNav={showNav}  handleDisplayNav={()=> setShowNav(!showNav)}/>
        <div className=' w-full'>
            <Header handleDisplayNav={()=> setShowNav(true)}/>
            <div className=' p-4'>
                {/* TOP SECTION DASHBOARD */}
                <div className=' flex gap-4'>
                    <div className=' border w-fit p-6 px-12 flex flex-col gap-6 rounded-lg'>
                        <h2 className=' font-medium text-base'>TOTAL LOAN BALANCE</h2>
                        <div className='  text-loan-button'>
                            <span className=' text-sm font-medium'>NGN</span>
                            <span className=' font-extrabold text-5xl tracking-tight leading-none'>250,000</span>
                            <span className=' text-sm font-medium'>.00</span>
                        </div>
                    </div>
                </div>

                {/* <div className='w-full h-full'>
                    <h2>Other available products</h2>
                    <div className='w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                        <IntroCart title='Counsel request' Icon={BsWallet}/>
                        <IntroCart title='Match request' Icon={RiFindReplaceLine}/>
                    </div>
                </div> */}


                <h1 className=' text-base font-bold py-3'>Repayment History</h1>

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
        </div>
      </div>
    </div>
  )
}

export default Dashboard
