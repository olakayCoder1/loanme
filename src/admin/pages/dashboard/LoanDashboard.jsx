import {TbCurrencyNaira} from 'react-icons/tb'
import { useNavigate, Link} from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../contexts/ContextProvider'
import{ NoContentToShow }from '../user_application/ApplicationDetailScore'




export function  InAppLoading(){
    return (
        <div className='bg-white w-full flex items-center place-content-center justify-center py-32 box-border'>
                <div role="status">
                <svg aria-hidden="true" className="mr-2 w-12 h-12 text-gray-200 animate-spin  fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
                <span class="sr-only">Loading...</span>
            </div>
        </div>
    )
}


function CustomersLoanHistoryCard({id ,email,first_name, last_name , total_amount, loanDate , status , amount , user_uuid}){

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
    const {displayNotification, authToken,  BACKEND_DOMAIN , setAuthUser } = useContext(AuthContext)
    const [customerLoanList, setCustomerLoanList] = useState([])
    const [customerLoanFilterList, setCustomerFilterLoanList] = useState([])
    const [customerStatusFilter, setCustomerStatusFilter] = useState('all')
    const [ inLoading , setInLoading] = useState(false)


    useEffect(()=>{
        setInLoading(true)
        async function fetchLoans(){
            const response = await fetch(`${BACKEND_DOMAIN}/api/v1/admin/loans`,{method : 'GET', headers : {
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${authToken?.access}`
            }})
            if(response.status === 200){
                setInLoading(false)
                const data = await response.json()
                setCustomerLoanList(data)
                setCustomerFilterLoanList(data)
            }
            if(response.status === 401){
                setInLoading(false)
                setAuthUser(null) 
                localStorage.clear()
                displayNotification('error', 'Please sign in again')
                navigate('/signin')
            }
        }

        fetchLoans()
    },[])


    async function downloadCsv(){

        
        const response = await fetch(`${BACKEND_DOMAIN}/api/v1/export/loans/csv`,{method : 'GET', headers : {
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
                'customers-loans.csv'
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
                if((val.user.first_name &&  val.user.first_name.toLowerCase().includes(searchValue.toLowerCase()))
                    || (val.user.last_name && val.user.last_name.toLowerCase().includes(searchValue.toLowerCase()))
                    || (val.user.email.toLowerCase().includes(searchValue.toLowerCase()))
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
    {inLoading ? (
        <InAppLoading />
    ): (
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

        <p onClick={downloadCsv} 
            className='w-fit border-[1px] px-4 py-2 border-loanBlue-primary text-loanBlue-primary bg-white cursor-pointer rounded text-xs' >Export csv</p>

        </div>  
        <div className="overflow-x-auto relative shadow-md "> 
            {customerLoanFilterList.length > 0 ? (
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
                  {customerLoanFilterList.map((val)=> {
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
                    })}    
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


export default LoanDashboard
