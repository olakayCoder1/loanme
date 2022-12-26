import React, { useState , useEffect, useContext  } from 'react'
import Applications from './Applications'
import Loans from './Loans'
import Information from './Information'
import { useNavigate,useParams} from 'react-router-dom'
import { AuthContext } from '../../../contexts/ContextProvider'


function SmallUserDetail({user}){
    return (
        <div className='w-full lg:w-[30%]  border-gray-300 h-full'>
            <div>
                <div className=' flex items-center place-content-center py-8'>
                    <div className=' bottom-[-50%] left-[50%] right-[50%] flex items-center place-content-center flex-col gap-6'>
                        <h2 className=' font-medium text-2xl border-3 border-gray-300 bg-white text-gray-800 p-6 rounded-full'>
                            {user && user.first_name && <>{user.first_name[0]}</>}
                            {user && user.last_name && <>{user.last_name[0]}</>} 
                        </h2>
                        <h2 className=' text-xl font-medium truncate  text-gray-800'>
                            {user && user.first_name &&  user.first_name}  {user && user.last_name &&  user.last_name}
                        </h2>
                    </div>
                </div>
                <div className=' p-4 flex flex-col gap-1'>
                    <h2 className=' text-gray-800'>Personal Information</h2>
                    <div className='py-4 text-xs font-normal flex justify-between border-b'>
                        <p className='font-light'>Customer ID</p>
                        <p className=' text-gray-800'>{user && user.uuid}</p>
                    </div>
                    <div className='py-4 text-xs font-normal flex justify-between border-b'>
                        <p className='font-light'>Contact Email</p>
                        <p className=' text-gray-800'>{user && user.email}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
 


function UserAccount() {

    const {id} = useParams();
    const {displayNotification, authToken,  BACKEND_DOMAIN } = useContext(AuthContext)
    const [activeTab, setActiveTab] = useState('Customer Information')
    const [userLoansList, setUserLoansList] = useState(null)
    const [userApplicationsList, setApplicationsList ] = useState(null)

    const [ user , setUser] = useState(null)

    useEffect(()=>{
        
      const url1 = `${BACKEND_DOMAIN}/api/v1/admin/customers/${id}` 
      const url2 = `${BACKEND_DOMAIN}/api/v1/admin/customers/${id}/loans` 
      const url3 = `${BACKEND_DOMAIN}/api/v1/admin/customers/${id}/applications` 
      Promise.all([
      fetch(url1,{method : 'GET', headers : {
            'Content-Type': 'application/json',
            'Authorization' : `Bearer ${authToken?.access}`
        }},),
      fetch(url2,{ method : 'GET', headers : {
              'Content-Type': 'application/json',
              'Authorization' : `Bearer ${authToken?.access}`
          }},),
      fetch(url3,{ method : 'GET', headers : {
            'Content-Type': 'application/json',
            'Authorization' : `Bearer ${authToken?.access}`
        }},)

        ]).then(function (responses) {
          // Get a JSON object from each of the responses
          return Promise.all(responses.map(function (response) {
            return response.json();
          }));
        }).then(function (data) {
          // Log the data to the console
          // You would do something with both sets of data here
          setUser(data[0]) 
          setUserLoansList(data[1])
          setApplicationsList(data[2])
          // console.log(data[0]);
        }).catch(function (error) {
          // if there's an error, log it
            // console.log(error);
        });

    },[])


    async function disableCustomer(){

        const url = `${BACKEND_DOMAIN}/api/v1/admin/customers/${id}/disable` 
        const response =  await fetch(url,{method : 'GET', headers : {
            'Content-Type': 'application/json',
            'Authorization' : `Bearer ${authToken?.access}`
        }},)

        if(response.status === 200 ){
            const data = await response.json()
            if(data['type'] === '0'){
                setUser(prev => {
                    return (
                        {
                            ...prev, 'is_active': false
                        }
                    )
                 })
            }else{
                setUser(prev => {
                    return (
                        {
                            ...prev, 'is_active': true
                        }
                    )
                 })
            }
            
            displayNotification('success', data['detail'])
        }else{
            displayNotification('error','an error occurred')
        }
    }

  return (
    <div className=' w-full flex flex-col lg:flex-row'>
        <SmallUserDetail user={user}/>
        <div className=' w-full lg:w-[70%] lg:m-4'>
            <div className='flex justify-between gap-4 items-center my-4 px-4'>
                <div className=' text-sm font-medium flex  gap-4 items-center text-gray-800'>
                    {user && user.first_name}'s Account
                </div>
                {user && user.is_active ? (
                 <p onClick={disableCustomer}  className='w-fit border-[1px] px-4 py-2 border-loanBlue-primary text-white bg-loanBlue-primary cursor-pointer rounded text-xs' >
                    Disable customer
                </p>
                ): (
                <p onClick={disableCustomer}  className='w-fit border-[1px] px-4 py-2 border-loanBlue-primary text-loanBlue-primary bg-white cursor-pointer rounded text-xs' >
                    Enable customer
                </p>
                )}
            </div>

            <div class="text-sm font-medium text-center text-gray-500 bg-white border-b border-gray-200  bg-white0">
                <ul class="flex flex-wrap -mb-px">
                    <li class="mx-2">
                        <p onClick={()=>setActiveTab('Applications')} className={`${activeTab === 'Applications' ? 'inline-block p-4 px-8 text-loanBlue-primary rounded-t-lg border-b-2 border-loanBlue-primary ' : 'inline-block p-4 px-8 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 '} cursor-pointer`}>
                            Applications
                        </p>
                    </li>
                    <li class="mx-2">
                        <p onClick={()=>setActiveTab('Loans')} className={`${activeTab === 'Loans' ? 'inline-block p-4 px-8 text-loanBlue-primary rounded-t-lg border-b-2 border-loanBlue-primary ' : 'inline-block p-4 px-8 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 '} cursor-pointer`}>
                            Loans
                        </p>
                    </li>
                    <li class="mx-2">
                        <p onClick={()=>setActiveTab('Customer Information')} className={`${activeTab === 'Customer Information' ? 'inline-block p-4 px-8 text-loanBlue-primary rounded-t-lg border-b-2 border-loanBlue-primary ' : 'inline-block p-4 px-8 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 '} cursor-pointer`}>
                            Customer Information
                        </p>
                    </li>
                </ul>
            </div>

            {activeTab === 'Applications' && <Applications user_id={user && user.uuid} userApplicationsList={userApplicationsList} />}
            {activeTab === 'Loans' && <Loans user_id={user && user.uuid} userLoansList={userLoansList}/>}
            {activeTab === 'Customer Information' && <Information user={user && user}/>}
            

      </div>
    </div>
  )
}

export default UserAccount
