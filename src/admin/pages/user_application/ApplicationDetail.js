import { useContext, useEffect, useState } from 'react'
import ApplicationDetailInformation from './ApplicationDetailInformation'
import ApplicationDetailData from './ApplicationDetailData'
import ApplicationDetailScore from './ApplicationDetailScore'
import { useNavigate,useParams} from 'react-router-dom'
import { AuthContext } from '../../../contexts/ContextProvider'


export function SmallUserDetail({id, email, first_name , last_name}){
    let navigate = useNavigate()
    return (
        <div className='w-full lg:w-[30%]  border-gray-300 h-full'>
            <div>
                <div className=' flex items-center place-content-center py-8'>
                    <div className=' bottom-[-50%] left-[50%] right-[50%] flex items-center place-content-center flex-col gap-6'>
                        <h2 className=' font-medium text-2xl border-3 border-gray-300 bg-white text-gray-800 p-6 rounded-full'>
                           {first_name && <>{first_name[0]}</>}{last_name && <>{last_name[0]}</>} 
                        </h2>
                        <h2 className=' text-xl font-medium truncate  text-gray-800'>{first_name} {last_name}</h2> 
                    </div>
                </div>
                <div className='flex items-center place-content-center text-center w-full '>
                    <p onClick={()=> navigate(`/admin/users/${id}`)}  className='w-fit border-[1px] px-4 py-2 border-loanBlue-primary text-loanBlue-primary bg-white cursor-pointer rounded text-xs' >View Customer Details</p>
                </div> 
                
                <div className=' p-4 flex flex-col gap-1'>
                    <h2 className=' text-gray-800'>Personal Information</h2>
                    <div className='py-4 text-xs font-normal flex justify-between border-b'>
                        <p className='font-light'>Customer ID</p>
                        <p className=' text-gray-800'>{id}</p>
                    </div>
                    <div className='py-4 text-xs font-normal flex justify-between border-b'>
                        <p className='font-light'>Email</p>
                        <p className=' text-gray-800'>{email}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}



function ApplicationDetail() {


    const {id} = useParams();
    let navigate = useNavigate()
    const [activeTab, setActiveTab] = useState('Information')
    const {displayNotification, authToken,  BACKEND_DOMAIN } = useContext(AuthContext)
    const [customerApplicationDetail , setCustomerApplicationDetail ] = useState(null)
    const [ applicationInformation , setApplicationInformation] = useState(null)

    useEffect(()=>{
        async function fetchApplicationDetail(){
            const response = await fetch(`${BACKEND_DOMAIN}/api/v1/admin/applications/${id}`,{method : 'GET', headers : {
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${authToken?.access}`
            }})
            if(response.status === 200){
                const data = await response.json()
                setCustomerApplicationDetail(data)
                const appInfo = JSON.parse(data.data)
                setApplicationInformation(appInfo) 
            }
            if(response.status === 401){
                displayNotification('error', 'Please sign in again')
                navigate('/signin')
            }
        }

        fetchApplicationDetail()

    },[])
     //APP-20221219225430-2022
    
  return ( 
    <div className=' w-full flex flex-col lg:flex-row'>
        <SmallUserDetail 
            id={customerApplicationDetail && customerApplicationDetail.user.uuid}
            email={customerApplicationDetail && customerApplicationDetail.user.email} 
            first_name={customerApplicationDetail && customerApplicationDetail.user.first_name}
            last_name={customerApplicationDetail && customerApplicationDetail.user.last_name}
        />
        <div className=' w-full lg:w-[70%] lg:m-4'>
            <div className='flex justify-between gap-4 items-center my-4'>
                <div className=' text-sm px-6 font-medium flex  gap-4 items-center text-gray-800'>
                    {customerApplicationDetail && customerApplicationDetail.user.first_name}'s Application ( <span className=' text-loanBlue-primary'>{id}</span>  )
                </div>
                {/* <p className='w-fit border-[1px] px-4 py-2 border-loanBlue-primary text-loanBlue-primary bg-white cursor-pointer rounded text-xs' >Disabled</p> */}
            </div>

            <div class="text-sm font-medium text-center text-gray-500 bg-white border-b border-gray-200  bg-white0">
                <ul class="flex flex-wrap -mb-px">
                    <li class="mx-2">
                        <p onClick={()=>setActiveTab('Information')} className={`${activeTab === 'Information' ? 'inline-block p-4 px-8 text-loanBlue-primary rounded-t-lg border-b-2 border-loanBlue-primary ' : 'inline-block p-4 px-8 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 '} cursor-pointer`}>
                            Information
                        </p>
                    </li>
                    <li class="mx-2">
                        <p onClick={()=>setActiveTab('Data')} className={`${activeTab === 'Data' ? 'inline-block p-4 px-8 text-loanBlue-primary rounded-t-lg border-b-2 border-loanBlue-primary ' : 'inline-block p-4 px-8 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 '} cursor-pointer`}>
                            Data
                        </p>
                    </li>
                    <li class="mx-2">
                        <p onClick={()=>setActiveTab('Score board')} className={`${activeTab === 'Score board' ? 'inline-block p-4 px-8 text-loanBlue-primary rounded-t-lg border-b-2 border-loanBlue-primary ' : 'inline-block p-4 px-8 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 '} cursor-pointer`}>
                            Score board
                        </p>
                    </li>
                </ul>
            </div>

            {activeTab === 'Data' && <ApplicationDetailData  info={applicationInformation}  />}
            {activeTab === 'Information' && <ApplicationDetailInformation  info={customerApplicationDetail} />}
            {activeTab === 'Score board' && <ApplicationDetailScore />}
            

            

      </div>
    </div>
  )
}

export default ApplicationDetail
