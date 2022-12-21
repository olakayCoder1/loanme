import React from 'react'
import { NoContentToShow } from './ApplicationDetailScore'



function Card({label , value}){
    return (
        <div className=' flex justify-between py-2.5 border-b-[1px] hover:bg-gray-100 px-3'>
            <h3 className=' text-xs font-light capitalize'>{label}</h3>
            <h3 className=' text-xs font-medium text-gray-700 '>{value}</h3>
        </div>
    )
}


function ApplicationDetailData({info}) {
    if(info === null){
        return <NoContentToShow />
    }
  return (
    <div className=' bg-white text-sm font-normal'>
        <div className='flex justify-between gap-4 items-center py-4 px-4 md:px-12'>
            <div className=' flex  gap-4 items-center text-gray-800'>
                
            </div>
            <p className='w-fit border-[1px] px-4 py-2 border-loanBlue-primary bg-loanBlue-primary text-white cursor-pointer rounded text-xs' >Export Excel</p> 
        </div>
        <div className=' w-full  px-6 md:px-8 py-6 '>

            <Card label='name' value='Olanrewaju AbdulKabeer'/>
            <Card label='email' value={info.email}/>
            <Card label='phone' value={info.phone}/>
            <Card label='Bvn:Fist name' value={info.first_name}/>
            <Card label='Bvn:Last name' value={info.last_name}/>
            <Card label='Bvn:Date of Birth' value={info.date_of_birth}/>
            <Card label='Bvn:Gender' value={info.gender}/>
            <Card label='Bvn:Image' value=''/>
            <Card label='Address' value="'setHasLoanRecord' is assigned a value but never used"/>
            <Card label='Children' value={info.children}/>
            <Card label='Level of education' value={info.education}/>
            <Card label='Employment status' value={info.employment}/>
            <Card label='Employer Name' value={info.employer}/>
            <Card label='Reason' value={info.reason}/>
            <Card label='Marital Status' value={info.marital}/>
            <Card label='State' value='Lagos'/>
            <Card label='City' value='Mainland'/>
            <Card label='Residence' value={info.residence}/>
            <Card label='Year at residence' value={info.years_at_residence}/>
        </div>
    </div>
  )
}
export default ApplicationDetailData
