import React from 'react'
import {TbCurrencyNaira} from 'react-icons/tb'
import {ImFilesEmpty} from 'react-icons/im'


function Card({label , value}){
    return (
        <div className=' flex justify-between py-2.5 border-b-[1px] hover:bg-gray-100 px-3'>
            <h3 className=' text-xs font-light capitalize'>{label}</h3>
            <h3 className=' text-xs font-medium text-gray-700 '>{value}</h3>
        </div>
    )
}


function Information({user}) {
  return (
    <div className=' bg-white text-sm font-normal'>
        <div className='flex justify-between gap-4 items-center py-4 px-4 md:px-12'>
        </div>
        {user ? (
            <div className=' w-full  px-6 md:px-8 py-6 '>
            <Card label='name' value={`${user.first_name}  ${user.last_name}`}/>
            <Card label='email' value={user.email}/>
            <Card label='phone' value={user.phone}/>
            <Card label='Bvn:Fist name' value='AbdulKabeer'/>
            <Card label='Bvn:Last name' value='Olanrewaju'/>
            <Card label='Bvn:Date of Birth' value='April 4, 8923'/>
            <Card label='Bvn:Gender' value={user.gender}/>
            <Card label='Bvn:Image' value=''/>
            <Card label='Address' value={user.address1}/>
            <Card label='Employment status' value={user.employment_status}/>
            <Card label='Employer Name' value={user.lga}/>
            <Card label='Country' value={user.country}/>
            <Card label='State' value={user.state}/>
            <Card label='City' value={user.city}/>
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

export default Information
