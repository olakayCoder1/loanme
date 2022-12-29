import React  from 'react'
import {TbCurrencyNaira} from 'react-icons/tb'
import {ImFilesEmpty} from 'react-icons/im'
import { Link} from 'react-router-dom'



function CustomersLoanHistoryCard({loan}){
    return (
        <tr class="bg-white border-b hover:bg-gray-200  text-xs font-medium  ">
            <th scope="row" class="py-3 px-6   whitespace-nowrap flex items-center gap-4 ">
                {loan?.status === 'active' ? <span className=' text-yellow-500 '>Active</span>  : <span className=' text-green-500'>Completed</span> }   
            </th>
            <td class="py-3 px-6 w-fit truncate">
                <Link to={`/admin/loans/${loan?.uuid}`}  ><span>{loan?.uuid}</span></Link>
            </td>
            <td class="py-3 px-6 w-fit truncate">
                <p className=' flex items-center'>
                    <TbCurrencyNaira className=' w-5 h-5'/><span>{loan?.offer?.offer_amount}</span>
                </p>
            </td>
            <td class="py-3 px-6 w-fit truncate">
                <p className=' flex items-center'>
                    <TbCurrencyNaira className=' w-5 h-5'/><span>{loan?.offer?.interest}</span>
                </p>
            </td>
            <th class="py-3 px-6  w-fit truncate">
                <p className=' flex items-center'>
                    <TbCurrencyNaira className=' w-5 h-5'/><span>{loan?.amount}</span>
                </p>
            </th>
            <td class="py-3 px-6 w-fit truncate">
                {loan?.created_at}
            </td>
            
        </tr>
    )
}



function Loans({userLoansList}) {
  return (
    <div className=' p-6 bg-gray-50 '>
        {userLoansList && userLoansList.length > 0 ? (
            <div class="overflow-x-auto relative ">  
                <table class="w-full text-sm text-left text-gray-500 ">
                    <thead class="text-xs font-normal text-gray-700 uppercase ">
                        <tr>
                            <th scope="col" class="py-3 px-6 w-fit">
                                status
                            </th>
                            <th scope="col" class="py-3 px-6 w-fit">
                                Loan ID
                            </th>
                            <th scope="col" class="py-3 px-6 w-fit">
                                Amount
                            </th>
                            <th scope="col" class="py-3 px-6 w-fit">
                                Interest
                            </th>
                            <th scope="col" class="py-3 px-6  w-fit truncate">
                                Total
                            </th>
                            <th scope="col" class="py-3 px-6 w-fit truncate">
                                Created Date
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {userLoansList && userLoansList.map((val)=>{
                            return (<CustomersLoanHistoryCard  key={val.uuid} loan={val}/>)
                        })}
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


export default Loans
