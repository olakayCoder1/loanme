import React, { useState, useEffect, useContext } from 'react'
import {TbCurrencyNaira} from 'react-icons/tb'
import { useNavigate , Link } from 'react-router-dom'
import {motion} from 'framer-motion'
import {BsAward} from 'react-icons/bs'
import { NoContentToShow } from './user_application/ApplicationDetailScore'
import { AuthContext } from '../../contexts/ContextProvider'
import { InAppLoading } from './dashboard/LoanDashboard'


function UserListTableRow({first_name , last_name , phone, email , isActive , joinDate , id }){
    const navigate = useNavigate()
    return (
        <tr class="bg-white border-b hover:bg-gray-200 text-xs ">
            <th scope="row" class="py-4 px-6 font-medium  whitespace-nowrap truncate ">
                { id }
            </th>
            <th scope="row" class="py-4 px-6 font-medium  whitespace-nowrap ">
            {first_name && <>{first_name}</>}  {last_name && <>{last_name}</>}
            </th>
            <td class="py-4 px-6 truncate">
                {phone}
            </td>
            <td class="py-4 px-6 truncate">
                {email}
            </td>
            <td class="py-4 px-6 truncate">
                {joinDate}
            </td>
            {isActive ?  <td class="py-4 px-6 truncate text-green-600"> Active</td> : <td class="py-4 px-6 truncate"> InActive</td>}
            
            <td class="py-4 px-6 text-right">
                <Link to={`${id}`} class="font-medium text-blue-600  hover:underline cursor-pointer">View</Link>
            </td>
        </tr>
    )
}


function Card({title, val , col ,Icon}){
    
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
    // const users = Array.from(Array(10).keys()).slice(1);
    const {BACKEND_DOMAIN ,  authToken ,  authUser , displayNotification } = useContext(AuthContext)
    const [customers , setCustomers] = useState(null)
    const [customersFilter , setCustomersFilter] = useState(null)
    const [customerSummary , setCustomerSummary] = useState({ active : null, all : null,  disabled : null })
    const [customerStatusFilter, setCustomerStatusFilter] = useState('all')
    const [ inLoading , setInLoading] = useState(false)

    useEffect(()=> {
          const url1 = `${BACKEND_DOMAIN}/api/v1/admin/summary/customers` 
          const url2 = `${BACKEND_DOMAIN}/api/v1/admin/customers` 
          setInLoading(true)
          Promise.all([
          fetch(url1,{method : 'GET', headers : {
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${authToken?.access}`
            }},),
          fetch(url2,{ method : 'GET', headers : {
                  'Content-Type': 'application/json',
                  'Authorization' : `Bearer ${authToken?.access}`
              }},),
            ]).then(function (responses) {
              // Get a JSON object from each of the responses
              return Promise.all(responses.map(function (response) {
                return response.json();
              }));
            }).then(function (data) {
              // Log the data to the console
              // You would do something with both sets of data here
              setInLoading(false )
              setCustomerSummary(data[0]) 
              setCustomers(data[1])
              setCustomersFilter(data[1])
            }).catch(function (error) {
              // if there's an error, log it
            });
      },[])


    
      async function downloadCsv(){

        
        const response = await fetch(`${BACKEND_DOMAIN}/api/v1/export/applications/csv`,{method : 'GET', headers : {
            // 'Content-Type': 'application/json',
            'Authorization' : `Bearer ${authToken?.access}`
        }})
        if(response.status === 200){
            const blob = await response.blob()
            const url = window.URL.createObjectURL( new Blob([blob]))

            const link = document.createElement('a')
            link.href = url
            link.setAttribute(
                'download',
                'customers.csv'
            )
            document.body.appendChild(link)
            link.click()
            link.parentNode.removeChild(link);
            // setCustomerLoanList(data)
            // setCustomerFilterLoanList(data)
        }
        if(response.status === 401){
            // setAuthUser(null) 
            // localStorage.clear()
            displayNotification('error', 'Please sign in again')
            // navigate('/signin')
        }
    }
    
    function filterByStatus(e){
        setCustomerStatusFilter(e.target.value)
        if(e.target.value === 'all'){
            setCustomersFilter(customers)
        }
        else if(e.target.value === 'active'){
            const currentFilterSearch = customers
            const filterList = currentFilterSearch.filter((val)=> {
            if(val.is_active === true ){ 
                return val
            }
        })
        setCustomersFilter(filterList)
        }
        else{
            const currentFilterSearch = customers
            const filterList = currentFilterSearch.filter((val)=> {
            if(val.is_active === false ){
                return val
            }
        })
        setCustomersFilter(filterList)
        }
        

    }

    function searchInputChange(e){
        const searchValue = e.target.value
        if(searchValue && searchValue.length > 1){
            const currentList = customersFilter
            const filterList = currentList.filter((val)=> {
                if(val.first_name &&  val.first_name.toLowerCase().includes(searchValue.toLowerCase())
                    || val.last_name && val.last_name.toLowerCase().includes(searchValue.toLowerCase())
                    || val.email.toLowerCase().includes(searchValue.toLowerCase())
                ){
                    return val
                }
            })
            setCustomersFilter(filterList)
        }else{
            setCustomersFilter(customers)
        }
    }


  return (
    <div>
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4'>
            <Card Icon={BsAward} title='Total customers' col='green' val={customerSummary.all}/> 
            <Card title='Active customers' val={customerSummary.active} Icon={BsAward} col='blue'/>
            <Card title='Disabled customer' val={customerSummary.disabled} Icon={BsAward} col='gray'/>
            {/* <Card title='lOAN' val='383' Icon={BsAward} col='red'/> */}
        </div>
        <div className='p-4 bg-white m-4 rounded-md'>
            <h2 className='text-base font-bold text-gray-800 py-4'>Customers</h2>
            {inLoading ? (
                <InAppLoading />
            ): (
                <>
                <div className='flex flex-col lg:flex-row justify-between gap-4 lg:items-center my-4'>
                <div className=' flex  gap-4 items-center'>
                    <form>
                        <input onChange={searchInputChange} 
                            className='border-[1px] px-4 py-2 focus:ring-0 focus:outline-none focus:border-loan-outline rounded placeholder:text-xs'
                            type='search' placeholder='Search user' />
                    </form>
                    <label>Filter</label>
                    <select onChange={filterByStatus}  
                            className="border-[1px] w-fit  rounded focus:ring-0 hover:border-gray-300 focus:border-loan-outline block  p-2 focus:outline-none text-xs" 
                            >
                        <option value='all' selected={customerStatusFilter && customerStatusFilter === 'all'}>All</option>
                        <option value="active" selected={customerStatusFilter && customerStatusFilter === 'active'}>Active</option>
                        <option value="disable" selected={customerStatusFilter && customerStatusFilter === 'disable'}>Disable</option>
                        </select>
                </div>
                <p onClick={downloadCsv}
                    className='w-fit border-[1px] px-4 py-2 border-loanBlue-primary text-loanBlue-primary bg-white cursor-pointer rounded text-xs' >Export csv</p>

            </div>
            
            <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
                {customersFilter && customersFilter.length > 0 ? (
                    <table class="w-full text-sm text-left text-gray-500 ">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
                    <tr>
                        <th scope="col" class="py-3 px-6  truncate">
                            Customer id
                        </th>
                        <th scope="col" class="py-3 px-6">
                            Full name
                        </th>
                        <th scope="col" class="py-3 px-6 truncate">
                            Phone Number
                        </th>
                        <th scope="col" class="py-3 px-6 truncate">
                            Email
                        </th>
                        <th scope="col" class="py-3 px-6 truncate">
                            Created at
                        </th>
                        <th scope="col" class="py-3 px-6 truncate">
                            status
                        </th>
                        <th scope="col" class="py-3 px-6 truncate">
                            <span class="sr-only">Edit</span>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                        {customersFilter ?  customersFilter?.map((val)=> {
                            return (
                                <UserListTableRow 
                                    key={val.uuid}
                                    id={val.uuid}
                                    first_name={val.first_name}
                                    last_name={val.last_name}
                                    phone={val.phone}
                                    name='Sirajudeen Bolanle'  
                                    email={val.email}
                                    joinDate={val.created_at} 
                                    isActive={val.is_active}
                                />
                            )
                        }): (
                            <NoContentToShow description='No customer to show'/>
                        )}
                    </tbody>
                </table>
                ): (
                    <div className=' w-full bg-green-600' >
                        <NoContentToShow description='No customer to display' />
                    </div>
                )}
                
            </div>
            </>
            )}
        </div>
    </div>
  )
}


export default UsersList
