import React from 'react'
import {TbCurrencyNaira} from 'react-icons/tb'
import { Link} from 'react-router-dom'
import {ImFilesEmpty} from 'react-icons/im'
import { NoContentToShow } from '../user_application/ApplicationDetailScore'



function CustomersLoanHistoryCard({customer}){
    const data = JSON.parse(customer.data)
    const amount = data.amount
    return (
        <tr class="bg-white border-b hover:bg-gray-200  text-xs font-medium  ">
            <th scope="row" class="py-3 px-6   whitespace-nowrap flex items-center gap-4 ">
                {customer.status =='pending' && <span className=' text-yellow-500 '>Pending</span> }   
                {customer.status =='accepted' && <span className=' text-green-500 '>Approved</span> }   
                {customer.status =='rejected' && <span className=' text-red-500 '>Rejected</span> }  
            </th>
            <td class="py-3 px-6 w-fit truncate">
                <Link to={`/admin/applications/${customer.uuid}`}  ><span>{customer.uuid}</span></Link>
                
            </td>
            <td class="py-3 px-6 w-fit truncate">
                <p className=' flex items-center'>
                    <TbCurrencyNaira className=' w-5 h-5'/><span>{amount}</span>
                </p>
            </td> 
            <td class="py-3 px-6 w-fit truncate">
                {customer.created_at}
            </td>
            
        </tr>
    )
}



function Applications({user_id , userApplicationsList}) {
  return (
    <div className=' p-6 bg-gray-50 '>
        {userApplicationsList ? (
            <div class="overflow-x-auto relative ">  
            <table class="w-full text-sm text-left text-gray-500 ">
                <thead class="text-xs font-normal text-gray-700 uppercase ">
                    <tr>
                        <th scope="col" class="py-3 px-6 w-fit">
                            status
                        </th>
                        <th scope="col" class="py-3 px-6 w-fit">
                            Application ID
                        </th>
                        <th scope="col" class="py-3 px-6 w-fit">
                            Amount
                        </th>
                        <th scope="col" class="py-3 px-6 w-fit truncate">
                            Requested Date
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {userApplicationsList && userApplicationsList.length > 0  ? (
                        userApplicationsList.map((val)=>{
                            return <CustomersLoanHistoryCard
                                key={val.uuid}
                                customer={val}
                            name='Sirajudeen Bolanle' loanDate='21,May 2020' progress='95%'  amount='50,000' status={false}
                        />
                        })
                        
                    ): (
                        <NoContentToShow description='No application history' />
                    )}
                   
                </tbody>
            </table>
            </div>
        ): (
            <div className=' w-full flex items-center place-content-center'>
                <p className=' flex items-center justify-center flex-col'>
                    <ImFilesEmpty  className=' w-20, h-20'/>
                    <span className=' text-sm font-medium'>You have no loan record</span>
                </p>
            </div>
        )}
        
      
    </div>
  )
}

export default Applications
