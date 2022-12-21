import { useEffect, useState } from 'react'
import {TbCurrencyNaira} from 'react-icons/tb'
import { useNavigate, Link} from 'react-router-dom'






function CustomersLoanHistoryCard({customer}){
    const data = JSON.parse(customer.data)
    const amount = data.amount
    console.log(customer.status)  
    // APP-20121012-987
    // programmerolakay@gmail
    return (
        <tr class="bg-white border-b hover:bg-gray-200  text-xs font-medium  ">
            <th scope="row" class="py-3 px-6   whitespace-nowrap flex items-center gap-4 ">
                {customer.status =='pending' && <span className=' text-yellow-500 '>Pending</span> }   
                {customer.status =='accepted' && <span className=' text-green-500 '>Approved</span> }   
                {customer.status =='rejected' && <span className=' text-red-500 '>Rejected</span> }    
            </th>
            <td class="py-3 px-6 w-fit truncate">
                <Link to='/admin/applications/detail'><span className=' cursor-pointer hover:text-loanBlue-primary'>{customer.uuid}</span></Link>
                
            </td>
            <td class="py-3 px-6 w-fit truncate">
                <Link to='/admin/users/olakay'><span className=' cursor-pointer hover:text-loanBlue-primary'>{customer.user.email}</span></Link>
            </td>
            <td class="py-3 px-6 w-fit truncate">
                <Link to='/admin/users/olakay'>
                    <span className=' cursor-pointer hover:text-loanBlue-primary'>
                        {customer.user.first_name && <>{customer.user.first_name}</>}  {customer.user.last_name && <>{customer.user.last_name}</>}
                    </span>
                </Link>
            </td>
            <th class="py-3 px-6  w-fit truncate">
                <p className=' flex items-center'>  
                    <TbCurrencyNaira className=' w-5 h-5'/><span>{amount}</span>
                </p>
            </th>
            <th class="py-3 px-6  w-fit truncate">
                <p className=' flex items-center'>
                    <TbCurrencyNaira className=' w-5 h-5'/><span>N/A</span>
                </p>
            </th>
            <td class="py-3 px-6 w-fit truncate">
                {customer.created_at}
            </td>
            
        </tr>
    )
}



function ApplicationDashboard() {

    const [customerApplicationList, setCustomerApplicationList] = useState([])
    useEffect(()=>{
        fetch('http://127.0.0.1:8000/api/v1/admin/applications')
        .then(res => res.json())
        .then(data => setCustomerApplicationList(data))
        .catch(err => console.log(err)) 
    },[])
  return (
        <>
            <div className='flex flex-col lg:flex-row justify-between gap-4 lg:items-center my-4 px-6'>
                <div className=' flex  gap-4 items-center'>
                    <form>
                        <input className='border-[1px] px-4 py-2 focus:ring-0 focus:outline-none focus:border-loan-outline rounded placeholder:text-xs'
                        type='search' placeholder='Search user' />
                    </form>
                    <form>
                        <input className='border-[1px] px-4 py-2 focus:ring-0 focus:outline-none focus:border-loan-outline rounded placeholder:text-xs'
                        type='search' placeholder='Search application id...' />
                    </form>
                    <select id="bank" 
                            className="border-[1px] w-fit  rounded focus:ring-0 hover:border-gray-300 focus:border-loan-outline block  p-2 focus:outline-none text-xs" 
                            >
                        <option selected disabled hidden>Status</option>
                        <option value="fisrt_bank">Pending</option>
                        <option value="uba">Approved</option>
                        </select>
                </div>

                <p className='w-fit border-[1px] px-4 py-2 border-loanBlue-primary text-loanBlue-primary bg-white cursor-pointer rounded text-xs' >Export csv</p>

            </div>
            
            <div class="overflow-x-auto relative shadow-md ">  
                <table class="w-full text-sm text-left text-gray-500 ">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
                        <tr>
                            <th scope="col" class="py-3 px-6 w-fit">
                                status
                            </th>
                            <th scope="col" class="py-3 px-6 w-fit">
                                Application ID
                            </th>
                            <th scope="col" class="py-3 px-6 w-fit">
                                Applicants Email
                            </th>
                            <th scope="col" class="py-3 px-6 w-fit">
                                Full Name
                            </th>
                            <th scope="col" class="py-3 px-6  w-fit truncate">
                                Requested Amount
                            </th>
                            <th scope="col" class="py-3 px-6  w-fit truncate">
                                Repayment Amount
                            </th>
                            
                            <th scope="col" class="py-3 px-6 w-fit truncate">
                                Requested Date
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {customerApplicationList.length > 0 ? (
                            customerApplicationList.map((val)=>{
                                return (
                                    <CustomersLoanHistoryCard 
                                        key={val.uuid}
                                        customer={val}
                                    />
                                )
                            })
                        ): (
                            <>
                                <h1>FETCHING...................</h1>
                            </>
                        )}
                        
                    </tbody>
                </table>
            </div>
        </>
        
  )
}

export default ApplicationDashboard
