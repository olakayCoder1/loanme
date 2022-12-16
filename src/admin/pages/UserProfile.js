import React from 'react'
import userLogo from '../../assets/xenith2.jpg'
import {MdMail , MdPhoneEnabled} from 'react-icons/md'
import {TbCurrencyNaira} from 'react-icons/tb'
import { useNavigate} from 'react-router-dom'


function UserProfile() {
    const users = Array.from(Array(10).keys()).slice(1);
    const navigate = useNavigate()
  return (
    <div>
        <div className='p-4 py-6 m-4 bg-white rounded-md'>
            <div className=' flex flex-col md:flex-row gap-4'>
            <img src={userLogo} alt='user' className='w-16 h-16 md:w-32 md:h-32 rounded-md'/>
            <div className=' flex flex-col gap-4'>
                <h2 className='font-bold text-xl'>Olanrewaju AbdulKabeer</h2>
                <div className=' flex gap-4 items-center'>
                    <p className=' flex items-center gap-2 text-sm font-medium'>
                        <span><MdMail className='w-5 h-5' /></span>
                        <span>programmerolakay@gmail.com</span>
                    </p>
                    <p className=' flex items-center gap-2 text-sm font-medium'>
                        <span><MdPhoneEnabled  className='w-5 h-5'/></span>
                        <span>09082455489</span>
                    </p>
                </div>
                <div className='flex gap-2 items-center'>
                    <p className='w-fit border-[2px] px-4 py-2 bg-loanBlue-primary text-white cursor-pointer rounded-md' >Disable</p>
                    <p onClick={()=> navigate('admin/users/olakay/loan')}  className='w-fit border-[2px] px-4 py-2 text-loanBlue-primary bg-white cursor-pointer rounded-md' >Loan History</p>
                </div>
            </div>
            </div>
        </div>

        <div className=' grid lg:grid-cols-2'>
            <div className='p-4 bg-white m-4 rounded-md text-sm font-medium'>
                <h2 className='text-base font-bold text-gray-800 py-2'>Personal Information</h2>
                
                <div className=' grid grid-cols-1 md:grid-cols-2  gap-3'>
                    {/* {users.map(()=>{
                        return ( 
                            <div className=' border-b my-1 '>
                                <h5 className=' text-bold text-gray-800'>First Name :</h5>
                                <h3 className=' text-base'>Olanrewaju</h3>
                            </div>
                            )
                    })} */}
                    <div className=' border-b my-1 flex flex-col gap-1 '>
                        <h5 className=' text-bold text-gray-800'>First Name :</h5>
                        <h3 className=''>Olanrewaju</h3>
                    </div>
                    <div className=' border-b my-1 flex flex-col gap-1 '>
                        <h5 className=' text-bold text-gray-800'>Last Name :</h5>
                        <h3 className=' '>AbdulKabeer</h3>
                    </div>

                    <div className=' border-b my-1 flex flex-col gap-1 '>
                        <h5 className=' text-bold text-gray-800'>Email Address :</h5>
                        <h3 className=' '>programmerolakay@gmail</h3>
                    </div>
                    <div className=' border-b my-1 flex flex-col gap-1 '>
                        <h5 className=' text-bold text-gray-800 '>Gender :</h5>
                        <h3 className=' '>Male</h3>
                    </div>
                    <div className=' border-b my-1  flex flex-col gap-1'>
                        <h5 className=' text-bold text-gray-800'>Marital Status :</h5>
                        <h3 className=' '>Married</h3>
                    </div>
                    <div className=' border-b my-1  flex flex-col gap-1'>
                        <h5 className=' text-bold text-gray-800'>Number of children :</h5>
                        <h3 className=' '> 2</h3>
                    </div>
                </div>
            </div>
            <div className='p-4 bg-white m-4 rounded-md text-sm font-medium'>
                <h2 className='text-base font-bold text-gray-800 py-2'>Education and Employment</h2>
                
                <div className=' grid grid-cols-1 md:grid-cols-2  gap-3'>
                    <div className=' border-b my-1 flex flex-col gap-1 '>
                        <h5 className=' text-bold text-gray-800'>Level of Education :</h5>
                        <h3 className=''>Undergraduate</h3>
                    </div>
                    <div className=' border-b my-1 flex flex-col gap-1 '>
                        <h5 className=' text-bold text-gray-800'>Employment Status :</h5>
                        <h3 className=' '>Employed</h3>
                    </div>

                    <div className=' border-b my-1 flex flex-col gap-1 '>
                        <h5 className=' text-bold text-gray-800'>Employer / Business Name :</h5>
                        <h3 className=' '>KampusBox</h3>
                    </div>
                    <div className=' border-b my-1 flex flex-col gap-1 '>
                        <h5 className=' text-bold text-gray-800 '>Monthly Income :</h5>
                        <h3 className=' '>175,000</h3>
                    </div>
                </div>
            </div>
            <div className='p-4 bg-white m-4 rounded-md text-sm font-medium'>
                <h2 className='text-base font-bold text-gray-800 py-2'>Next of Kin</h2>
                
                <div className=' grid grid-cols-1 md:grid-cols-2  gap-3'>
                <div className=' border-b my-1 flex flex-col gap-1 '>
                        <h5 className=' text-bold text-gray-800'>First Name :</h5>
                        <h3 className=''>Olanrewaju</h3>
                    </div>
                    <div className=' border-b my-1 flex flex-col gap-1 '>
                        <h5 className=' text-bold text-gray-800'>Last Name :</h5>
                        <h3 className=' '>AbdulKabeer</h3>
                    </div>

                    <div className=' border-b my-1 flex flex-col gap-1 '>
                        <h5 className=' text-bold text-gray-800'>Email Address :</h5>
                        <h3 className=' '>programmerolakay@gmail</h3>
                    </div>
                    <div className=' border-b my-1 flex flex-col gap-1 '>
                        <h5 className=' text-bold text-gray-800 '>Gender :</h5>
                        <h3 className=' '>Male</h3>
                    </div>
                    <div className=' border-b my-1  flex flex-col gap-1'>
                        <h5 className=' text-bold text-gray-800'>Marital Status :</h5>
                        <h3 className=' '>Married</h3>
                    </div>
                    <div className=' border-b my-1  flex flex-col gap-1'>
                        <h5 className=' text-bold text-gray-800'>Number of children :</h5>
                        <h3 className=' '> 2</h3>
                    </div>
                </div>
            </div>

            <div className='p-4 bg-white m-4 rounded-md text-sm font-medium'>
                <h2 className='text-base font-bold text-gray-800 py-2'>Next of Kin</h2>
                
                <div className=' grid grid-cols-1 md:grid-cols-2  gap-3'>
                <div className=' border-b my-1 flex flex-col gap-1 '>
                        <h5 className=' text-bold text-gray-800'>First Name :</h5>
                        <h3 className=''>Olanrewaju</h3>
                    </div>
                    <div className=' border-b my-1 flex flex-col gap-1 '>
                        <h5 className=' text-bold text-gray-800'>Last Name :</h5>
                        <h3 className=' '>AbdulKabeer</h3>
                    </div>

                    <div className=' border-b my-1 flex flex-col gap-1 '>
                        <h5 className=' text-bold text-gray-800'>Email Address :</h5>
                        <h3 className=' '>programmerolakay@gmail</h3>
                    </div>
                    <div className=' border-b my-1 flex flex-col gap-1 '>
                        <h5 className=' text-bold text-gray-800 '>Gender :</h5>
                        <h3 className=' '>Male</h3>
                    </div>
                    <div className=' border-b my-1  flex flex-col gap-1'>
                        <h5 className=' text-bold text-gray-800'>Marital Status :</h5>
                        <h3 className=' '>Married</h3>
                    </div>
                    <div className=' border-b my-1  flex flex-col gap-1'>
                        <h5 className=' text-bold text-gray-800'>Number of children :</h5>
                        <h3 className=' '> 2</h3>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default UserProfile
