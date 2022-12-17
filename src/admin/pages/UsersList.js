import React from 'react'
import {TbCurrencyNaira} from 'react-icons/tb'
import { useNavigate} from 'react-router-dom'
import {motion} from 'framer-motion'
import {BsAward} from 'react-icons/bs'


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


function Card({title, val , col ,Icon}){
    console.log(title)
    
    return (
        <motion.div initial={{y:0}} whileHover={{y:-6}} animate={{transition:{duration:3} , translate:{duration:2} }}
            className='w-full flex justify-between p-4  h-32 bg-white rounded shadow'>
            <div className=' flex flex-col justify-between'>
                <h3 className=' uppercase text-gray-400 text-sm font-medium hover:text-loanBlue-primary'>{title}</h3>
                <h2 className=' flex items-center text-2xl font-medium text-gray-800'>
                    {title === 'total earning' && <TbCurrencyNaira />}
                    {title === 'my balance' && <TbCurrencyNaira />}
                    <span>{val}</span>
                </h2>
                {/* <p className='  text-white '>view</p> */}
            </div>
            <div className=' flex justify-between flex-col'>
                {col == 'blue' && <p className=' p-2 rounded-sm bg-blue-100'> <Icon  className=' text-blue-400 w-6 h-6'/> </p>}
                {col == 'green' && <p className=' p-2 rounded-sm bg-green-100'> <Icon  className=' text-green-400 w-6 h-6'/> </p>}
                {col == 'red' && <p className=' p-2 rounded-sm bg-red-100'> <Icon  className=' text-red-400 w-6 h-6'/> </p>}
                {col == 'gray' && <p className=' p-2 rounded-sm bg-gray-100'> <Icon  className=' text-gray-400 w-6 h-6'/> </p>}
                <p className=' text-white'>j</p>
            </div>
        </motion.div>
)
}

function UsersList() {
    const navigate = useNavigate()
    const users = Array.from(Array(10).keys()).slice(1);
  return (
    <div>
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4'>
            <Card Icon={BsAward} title='Total customers' col='green' val='1,012'/>
            <Card title='Active customers' val='1,012' Icon={BsAward} col='blue'/>
            <Card title='Disabled customer' val='5438' Icon={BsAward} col='gray'/>
            <Card title='lOAN' val='383' Icon={BsAward} col='red'/>
        </div>
        <div className='p-4 bg-white m-4 rounded-md'>
            <h2 className='text-base font-bold text-gray-800 py-4'>Customers</h2>
            <div className='flex flex-col lg:flex-row justify-between gap-4 lg:items-center my-4'>

                <div className='grow flex gap-3 items-center'>
                    <form className=' grow'>
                        <input className='w-full border-[1px] px-4 py-2 focus:ring-0 focus:outline-none bg-gray-100 hover:border-gray-300 focus:border-loan-outline rounded-md placeholder:text-sm'
                        type='search' placeholder='Search for customer, email .....' />
                    </form>
                    <select id="bank" 
                            className="border-[1px] w-fit  text-sm rounded-md focus:ring-0 hover:border-gray-300 focus:border-loan-outline block  p-2.5 focus:outline-none" 
                            >
                        <option selected disabled hidden>Filter</option>
                        <option value="fisrt_bank">First Bank</option>
                        <option value="uba">United Bank For Africa</option>
                        <option value="union">Union Bank</option>
                        <option value="polaris">Polaris Bank</option>
                        </select>
                </div>

                <p className='w-fit border-[2px] px-4 py-2 bg-loanBlue-primary text-white cursor-pointer rounded-md' >Export Excel</p>

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
