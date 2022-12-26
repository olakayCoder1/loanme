import { useContext, useEffect, useState } from 'react'
import {TbCurrencyNaira} from 'react-icons/tb'
import { useNavigate, Link} from 'react-router-dom'
import { AuthContext } from '../../../contexts/ContextProvider'
import { NoContentToShow } from '../user_application/ApplicationDetailScore'
import { InAppLoading } from './LoanDashboard'



 


function CustomersLoanHistoryCard({customer}){
    const data = JSON.parse(customer.data)
    const amount = data.amount
    // console.log(customer)  
    return (
        <tr class="bg-white border-b hover:bg-gray-200  text-xs font-medium  ">
            <th scope="row" class="py-3 px-6   whitespace-nowrap flex items-center gap-4 ">
                {customer.status =='pending' && <span className=' text-yellow-500 '>Pending</span> }   
                {customer.status =='accepted' && <span className=' text-green-500 '>Approved</span> }   
                {customer.status =='rejected' && <span className=' text-red-500 '>Rejected</span> }    
            </th>
            <td class="py-3 px-6 w-fit truncate">
                <Link to={`/admin/applications/${customer && customer.uuid}`}><span className=' cursor-pointer hover:text-loanBlue-primary'>{customer.uuid}</span></Link>
                
            </td>
            <td class="py-3 px-6 w-fit truncate">
                <Link to={`/admin/users/${customer && customer.user.uuid}`}><span className=' cursor-pointer hover:text-loanBlue-primary'>{customer.user.email}</span></Link>
            </td>
            <td class="py-3 px-6 w-fit truncate">
                <Link to={`/admin/users/${customer && customer.user.uuid}`}>
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
            {/* <th class="py-3 px-6  w-fit truncate">
                <p className=' flex items-center'>
                    <TbCurrencyNaira className=' w-5 h-5'/><span>N/A</span>
                </p>
            </th> */}
            <td class="py-3 px-6 w-fit truncate">
                {customer.created_at}
            </td>
            
        </tr>
    )
}



function ApplicationDashboard() {
    let navigate = useNavigate()
    const {displayNotification, authToken,  BACKEND_DOMAIN , authUser , setAuthUser } = useContext(AuthContext)
    const [customerApplicationList, setCustomerApplicationList] = useState([])
    const [customerApplicationsFilterList, setCustomerFilterApplicationsList] = useState([])
    const [customerStatusFilter, setCustomerStatusFilter] = useState('all') 
    const [ inLoading , setInLoading] = useState(false)


    useEffect(()=>{
        async function fetchApplications(){
            setInLoading(true)
            const response = await fetch(`${BACKEND_DOMAIN}/api/v1/admin/applications`,{method : 'GET', headers : {
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${authToken?.access}`
            }})
            if(response.status === 200){
                const data = await response.json()
                setInLoading(false)
                setCustomerApplicationList(data)
                setCustomerFilterApplicationsList(data)
            }
            if(response.status === 401){
                setAuthUser(null)
                setInLoading(false)
                localStorage.clear()
                displayNotification('error', 'Please sign in again')
                navigate('/signin')
            }
        }
        fetchApplications()

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
                'customers-applications.csv'
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
        console.log(e.target.value)
        if(e.target.value === 'all'){
            setCustomerFilterApplicationsList(customerApplicationList)
        }else if(e.target.value === 'accepted'){
            const currentFilterSearch = customerApplicationList
            const filterList = currentFilterSearch.filter((val)=> {
            if(val.status === "accepted" ){
                return val
            }
            })
            setCustomerFilterApplicationsList(filterList)
        }else if(e.target.value === 'pending'){
            const currentFilterSearch = customerApplicationList
            const filterList = currentFilterSearch.filter((val)=> {
            if(val.status === "pending" ){
                return val
            }
            })
            setCustomerFilterApplicationsList(filterList)
        }else{
            const currentFilterSearch = customerApplicationList
            const filterList = currentFilterSearch.filter((val)=> {
            if(val.status === "rejected" ){
                return val
            }
            })
            setCustomerFilterApplicationsList(filterList)
        }

    }


    function searchAppInputChange(e){
        const searchValue = e.target.value
        if(searchValue && searchValue.length > 1){
            const currentList = customerApplicationsFilterList
            const filterList = currentList.filter((val)=> {
                if(val.user.first_name &&  val.user.first_name.toLowerCase().includes(searchValue.toLowerCase())
                    || val.user.last_name && val.user.last_name.toLowerCase().includes(searchValue.toLowerCase())
                    || val.user.email.toLowerCase().includes(searchValue.toLowerCase())
                ){
                    return val
                }
            })
            setCustomerFilterApplicationsList(filterList)
        }else{
            setCustomerFilterApplicationsList(customerApplicationList)
        }
    }

  return (
        <>
        {inLoading ? (
            <InAppLoading />
        ): (
            <>
            <div className='flex flex-col lg:flex-row justify-between gap-4 lg:items-center my-4 px-6'>
                <div className=' flex  gap-4 items-center'>
                    <form>
                        <input onChange={searchAppInputChange}
                            className='border-[1px] px-4 py-2 focus:ring-0 focus:outline-none focus:border-loan-outline rounded placeholder:text-xs'
                            type='search' placeholder='Search user' />
                    </form>
                    <label>Filter</label>
                    <select onChange={filterByStatus} 
                            className="border-[1px] w-fit  rounded focus:ring-0 hover:border-gray-300 focus:border-loan-outline block  p-2 focus:outline-none text-xs" 
                            >
                        <option value='all' selected={customerStatusFilter && customerStatusFilter === 'all'} >All</option>
                        <option value="pending" selected={customerStatusFilter && customerStatusFilter === 'pending'} >Pending</option>
                        <option value="accepted" selected={customerStatusFilter && customerStatusFilter === 'accepted'} >Accepted</option>
                        <option value="rejected" selected={customerStatusFilter && customerStatusFilter === 'rejected'} >Rejected</option>
                        </select>
                </div> 

                <p onClick={downloadCsv}
                 className='w-fit border-[1px] px-4 py-2 border-loanBlue-primary text-loanBlue-primary bg-white cursor-pointer rounded text-xs' >Export csv</p>

            </div>
            
            <div class="overflow-x-auto relative shadow-md "> 
            {customerApplicationsFilterList.length > 0 ? (
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
                         {/* <th scope="col" class="py-3 px-6  w-fit truncate">
                             Repayment Amount
                         </th>
                          */}
                         <th scope="col" class="py-3 px-6 w-fit truncate">
                             Requested Date
                         </th>
                     </tr>
                 </thead>
                 <tbody>
                     {customerApplicationsFilterList.map((val)=>{
                             return (
                                 <CustomersLoanHistoryCard 
                                     key={val.uuid}
                                     customer={val}
                                 />
                             )
                         })
                    }
                     
                 </tbody>
             </table>
            ): (
                <div className=' w-full bg-green-600' >
                    <NoContentToShow description='No content to show' />
                </div>
            )} 
               
            </div>
            </>
        )}
            
        </>
        
  )
}

export default ApplicationDashboard
