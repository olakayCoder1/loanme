import {TbCurrencyNaira} from 'react-icons/tb'
import { useNavigate, Link} from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../contexts/ContextProvider'
import{ NoContentToShow }from '../user_application/ApplicationDetailScore'




function CustomersLoanHistoryCard({id ,email,first_name, last_name , total_amount, loanDate , status , amount , user_uuid}){
    console.log(status)

    return (
        <tr class="bg-white border-b hover:bg-gray-200  text-xs font-medium  cursor-pointer ">
            <th scope="row" class="py-3 px-6   whitespace-nowrap flex items-center gap-4 box-border ">
                {status === 'active' ? <span className=' text-yellow-500 '>Active</span>  : <span className=' text-green-500'>Completed</span> }
            </th>     
            <td class="py-3 px-6 w-fit truncate">
                <Link to={`/admin/loans/${id}`} ><span className=' cursor-pointer hover:text-loanBlue-primary'>{id}</span></Link>
                
            </td>
            <td class="py-3 px-6 w-fit truncate">
                <Link to={`/admin/users/${user_uuid}`}><span className=' cursor-pointer hover:text-loanBlue-primary'>{email}</span></Link>
            </td>
            <td class="py-3 px-6 w-fit truncate">
                <Link to={`/admin/users/${user_uuid}`}>
                    <span className=' cursor-pointer hover:text-loanBlue-primary'>
                        {first_name && <>{first_name}</>}  {last_name && <>{last_name}</>}
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
                    <TbCurrencyNaira className=' w-5 h-5'/><span>{total_amount}</span>
                </p>
            </th>
            <td class="py-3 px-6 w-fit truncate">
                {loanDate}
            </td>
            
        </tr>
    )
}



function LoanDashboard() {

    let navigate = useNavigate()
    const {displayNotification, authToken,  BACKEND_DOMAIN } = useContext(AuthContext)
    const [customerLoanList, setCustomerLoanList] = useState([])
    const [customerLoanFilterList, setCustomerFilterLoanList] = useState([])
    const [customerStatusFilter, setCustomerStatusFilter] = useState('all')

    useEffect(()=>{
        async function fetchLoans(){
            const response = await fetch(`${BACKEND_DOMAIN}/api/v1/admin/loans`,{method : 'GET', headers : {
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${authToken?.access}`
            }})
            if(response.status === 200){
                const data = await response.json()
                console.log(data)
                setCustomerLoanList(data)
                setCustomerFilterLoanList(data)
            }
            if(response.status === 401){
                localStorage.clear()
                displayNotification('error', 'Please sign in again')
                navigate('/signin')
            }
        }

        fetchLoans()
    },[])


    function filterByStatus(e){
        setCustomerStatusFilter(e.target.value)
        if(e.target.value === 'all'){
            setCustomerFilterLoanList(customerLoanList)
        }else{
            const currentFilterSearch = customerLoanList
            const filterList = currentFilterSearch.filter((val)=> {
            if(val.status === e.target.value ){
                return val
            }
        })
        setCustomerFilterLoanList(filterList)
        }
        

    }

    function searchInputChange(e){
        const searchValue = e.target.value
        if(searchValue && searchValue.length > 1){
            const currentList = customerLoanFilterList
            const filterList = currentList.filter((val)=> {
                if(val.user.first_name &&  val.user.first_name.toLowerCase().includes(searchValue.toLowerCase())
                    || val.user.last_name && val.user.last_name.toLowerCase().includes(searchValue.toLowerCase())
                    || val.user.email.toLowerCase().includes(searchValue.toLowerCase())
                ){
                    return val
                }
            })
            setCustomerFilterLoanList(filterList)
        }else{
            setCustomerFilterLoanList(customerLoanList)
        }
    }

  return (
    <>
    <div className='flex flex-col lg:flex-row justify-between gap-4 lg:items-center my-4 px-6'>
    <div className=' flex  gap-4 items-center'>
        <form>
            <input onChange={searchInputChange}
                className='border-[1px] px-4 py-2 focus:ring-0 focus:outline-none focus:border-loan-outline rounded placeholder:text-xs'
                type='search' placeholder='Search user'
             />
        </form>
        {/* <form>
            <input className='border-[1px] px-4 py-2 focus:ring-0 focus:outline-none focus:border-loan-outline rounded placeholder:text-xs'
            type='search' placeholder='Search loan id...' />
        </form> */}
        <label>Filter</label>
        <select onChange={filterByStatus} 
                className="border-[1px] w-fit  rounded focus:ring-0 hover:border-gray-300 focus:border-loan-outline block  p-2 focus:outline-none text-xs" 
                >
            <option  value='all' selected={customerStatusFilter && customerStatusFilter === 'all'}>All</option>
            <option value="active" selected={customerStatusFilter && customerStatusFilter === 'active'}>Active</option>
            <option value="completed" selected={customerStatusFilter && customerStatusFilter === 'completed'}>Completed</option>
            </select>
    </div>

        <p className='w-fit border-[1px] px-4 py-2 border-loanBlue-primary text-loanBlue-primary bg-white cursor-pointer rounded text-xs' >Export csv</p>

        </div>  
        <div className="overflow-x-auto relative shadow-md ">  
            <table className="w-full text-sm text-left text-gray-500 ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                <tr>
                    <th scope="col" className="py-3 px-6 w-fit">
                        status
                    </th>
                    <th scope="col" className="py-3 px-6 w-fit">
                        Loan ID
                    </th>
                    <th scope="col" className="py-3 px-6 w-fit">
                        Applicant's Email
                    </th>
                    <th scope="col" className="py-3 px-6 w-fit">
                        Full Name
                    </th>
                    <th scope="col" className="py-3 px-6  w-fit truncate">
                        Loan Amount
                    </th>
                    <th scope="col" className="py-3 px-6  w-fit truncate">
                        Repayment Amount
                    </th>
                    
                    <th scope="col" className="py-3 px-6 w-fit truncate">
                        Due Date
                    </th>
                </tr>
                </thead>
                <tbody>
                    {customerLoanFilterList.length > 0 ? (
                        customerLoanFilterList.map((val)=> {
                            return (
                                <CustomersLoanHistoryCard 
                                    key={val.uuid}
                                    id={val.uuid}
                                    user_uuid={val.user.uuid}
                                    email={val.user.email}
                                    first_name={val.user.first_name}
                                    last_name={val.user.last_name}
                                    loanDate={val.due_date}   
                                    amount={val.offer.offer_amount} 
                                    total_amount={val.offer.total_repayment}
                                    status={val.status}
                                />
                            )
                        })
                    ): <div className=' w-full'><NoContentToShow /></div>}
                    
                    
                </tbody>
            </table>
        </div>
    </>
        
  )
}


export default LoanDashboard
