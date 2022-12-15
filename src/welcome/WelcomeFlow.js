import React from 'react'
import {FaRegPaperPlane} from 'react-icons/fa'
import {BiDetail} from 'react-icons/bi'
import {BsBullseye} from 'react-icons/bs'



function FlowCard({Icon,name,description}){
    return (
        <div className='flex flex-col items-start border p-4 justify-between gap-6 hover:bg-loanBlue-primary duration-500 rounded-md shadow-lg'>
            <div className=' flex flex-col items-start gap-2'>
                <Icon className=' text-loanBlue-primary w-12 h-12 group-hover:text-white'/>
                <h2 className=' text-xl font-medium'>{name}</h2>
                <p className=' text-sm font-medium text-gray-500 group-hover:text-white'>{description}</p>
            </div>
            <p className=' font-normal text-sm cursor-pointer hover:underline text-loanBlue-primary'>Learn More</p>
        </div>
    )
}

function WelcomeFlow() {
  return (
    <div className=' w-full max-w-[1010px] mx-auto  p-4  gap-8 text-gray-700 '>
        <div className=' w-full flex flex-col items-center bg-white'>
            <h3 className=' font-medium text-sm text-loanBlue-primary'>How to apply?</h3>
            <h1 className='text-3xl font-bold '>Easiest way to apply for your loan</h1>
            <div className=' grid grid-cols-1 md:grid-cols-3 gap-10 py-4'>
                <FlowCard Icon={BsBullseye} name='Sign Up' description='Sign up with your phone number and email and verify code of them. first step is done.' />
                <FlowCard Icon={BiDetail} name='Sign Up' description='After registration you need to upload your personal information & business detail.' />
                <FlowCard Icon={FaRegPaperPlane} name='Sign Up' description='We will verify your credentails after that you ca send it your loan request.' />
            </div>
        </div>
    </div>
  )
}

export default WelcomeFlow
