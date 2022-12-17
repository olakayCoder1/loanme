import React from 'react'



function Card({label , value}){
    return (
        <div className=' flex justify-between py-2.5 border-b-[1px] hover:bg-gray-100 px-3'>
            <h3 className=' text-xs font-light capitalize'>{label}</h3>
            <h3 className=' text-xs font-medium text-gray-700 '>{value}</h3>
        </div>
    )
}


function Information() {
  return (
    <div className=' bg-white text-sm font-normal'>
        <div className='flex justify-between gap-4 items-center py-4 px-4 md:px-12'>
            <div className=' flex  gap-4 items-center text-gray-800'>
                
            </div>
            <p className='w-fit border-[1px] px-4 py-2 border-loanBlue-primary bg-loanBlue-primary text-white cursor-pointer rounded text-xs' >Export Excel</p>
            
        </div>
        <div className=' w-full  px-6 md:px-8 py-6 '>
            <Card label='name' value='Olanrewaju AbdulKabeer'/>
            <Card label='email' value='programmerolakay@gmail.com'/>
            <Card label='phone' value='09082455467'/>
            <Card label='Bvn:Fist name' value='AbdulKabeer'/>
            <Card label='Bvn:Last name' value='Olanrewaju'/>
            <Card label='Bvn:Date of Birth' value='April 4, 8923'/>
            <Card label='Bvn:Gender' value='Male'/>
            <Card label='Bvn:Image' value=''/>
            <Card label='Address' value="'setHasLoanRecord' is assigned a value but never used"/>
            <Card label='Employment status' value=''/>
            <Card label='Employer Name' value=''/>
            <Card label='Country' value='Nigeria'/>
            <Card label='State' value='Lagos'/>
            <Card label='City' value='Mainland'/>
        </div>
    </div>
  )
}

export default Information
