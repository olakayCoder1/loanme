import React from 'react'



function Card({label , value}){
    return (
        <div className=' flex justify-between py-2.5 border-b-[1px] hover:bg-gray-100 px-3'>
            <h3 className=' text-xs font-light capitalize'>{label}</h3>
            <h3 className=' text-xs font-medium text-gray-700 '>{value}</h3>
        </div>
    )
}


function ApplicationDetailInformation() {
  return (
    <div className=' bg-white text-sm font-normal'>
        <div className='flex justify-between gap-4 items-center py-4 px-4 md:px-12'>
            <div className=' flex  gap-4 items-center text-gray-800'>
                
            </div>
            <p className='w-fit border-[1px] px-4 py-2 border-loanBlue-primary bg-loanBlue-primary text-white cursor-pointer rounded text-xs' >Export Excel</p> 
        </div>
        <div className=' w-full  px-6 md:px-8 py-6 '>
            <Card label='application ID' value='APP-29993883-1002'/>
            <Card label='Requested amount' value='150,000.00'/>
            <Card label='Interest' value='150,000.00'/>
            <Card label='Processinf fee' value='N/A'/>
            <Card label='status' value='Approved'/>
            <Card label='Created at' value='April 4, 5050'/>
        </div>
    </div>
  )
}

export default ApplicationDetailInformation
