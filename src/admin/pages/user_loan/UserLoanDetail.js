import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams} from 'react-router-dom'
import { AuthContext } from '../../../contexts/ContextProvider'
import LoanDetailInformation from './LoanDetailInformation'
import LoanRepaymentDetail from './LoanRepaymentDetail'
import {SmallUserDetail} from '../user_application/ApplicationDetail'



function UserLoanDetail() { 

    const {id} = useParams();
    let navigate = useNavigate()
    const {displayNotification, authToken,  BACKEND_DOMAIN } = useContext(AuthContext)
    const [activeTab, setActiveTab] = useState('Loan detail')
    const [customerLoanDetail , setCustomerLoanDetail ] = useState(null)
    const [ loanInformation , setLoanInformation] = useState(null)

    useEffect(()=>{
        async function fetchApplicationDetail(){
            const response = await fetch(`${BACKEND_DOMAIN}/api/v1/admin/loans/${id}`,{method : 'GET', headers : {
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${authToken?.access}`
            }})
            if(response.status === 200){
                const val = await response.json() 
                setCustomerLoanDetail(val)
                const appInfo = JSON.parse(val.data)
                setLoanInformation(appInfo) 
            }
            if(response.status === 401){
                displayNotification('error', 'Please sign in again')
                navigate('/signin')
            }
        }

        fetchApplicationDetail()

    },[])

    console.log(customerLoanDetail) 

  return (
    <div className=' w-full flex flex-col lg:flex-row'>
        <SmallUserDetail
            id={customerLoanDetail && customerLoanDetail.user.uuid}
            email={customerLoanDetail && customerLoanDetail.user.email}
            first_name={customerLoanDetail && customerLoanDetail.user.first_name}
            last_name={customerLoanDetail && customerLoanDetail.user.last_name}
            />
        <div className=' w-full lg:w-[70%] m-4'>
            <div className='flex justify-between gap-4 items-center my-4'>
                <div className='px-6 text-sm font-medium flex  gap-4 items-center text-gray-800'>
                    {customerLoanDetail && customerLoanDetail.user.first_name}'s Loan ( <span className=' text-loanBlue-primary'>{customerLoanDetail && customerLoanDetail.uuid}</span>  )
                </div>
                {/* <p className='w-fit border-[1px] px-4 py-2 border-loanBlue-primary text-loanBlue-primary bg-white cursor-pointer rounded text-xs' >Disabled</p> */}
            </div>

            <div class="text-sm font-medium text-center text-gray-500 bg-white border-b border-gray-200  bg-white0">
                <ul class="flex flex-wrap -mb-px">
                    <li class="mx-2">
                        <p onClick={()=>setActiveTab('Loan detail')} className={`${activeTab === 'Loan detail' ? 'inline-block p-4 px-8 text-loanBlue-primary rounded-t-lg border-b-2 border-loanBlue-primary ' : 'inline-block p-4 px-8 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 '} cursor-pointer`}>
                            Loan detail
                        </p>
                    </li>
                    <li class="mx-2">
                        <p onClick={()=>setActiveTab('Repayment detail')} className={`${activeTab === 'Repayment detail' ? 'inline-block p-4 px-8 text-loanBlue-primary rounded-t-lg border-b-2 border-loanBlue-primary ' : 'inline-block p-4 px-8 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 '} cursor-pointer`}>
                            Repayment schedule
                        </p>
                    </li>
                </ul>
            </div>

            {activeTab === 'Loan detail' && <LoanDetailInformation customerLoanDetail={customerLoanDetail} />}
            {activeTab === 'Repayment detail' && <LoanRepaymentDetail customerLoanDetail={customerLoanDetail} />}
            

            

      </div>
    </div>
  )
}


export default UserLoanDetail
