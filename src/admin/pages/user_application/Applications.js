import React from 'react'
import {TbCurrencyNaira} from 'react-icons/tb'
import { useNavigate} from 'react-router-dom'
import {motion} from 'framer-motion'
import {BsAward} from 'react-icons/bs'
import LoanDashboard from '../dashboard/LoanDashboard'
import ApplicationDashboard from '../dashboard/ApplicationDashboard'




function Card({title, val , col ,Icon}){
    
    return (
        <motion.div initial={{y:0}} whileHover={{y:-6}} animate={{transition:{duration:3} , translate:{duration:2} }}
            className='w-full flex justify-between p-4  h-32 bg-white rounded shadow'>
            <div className=' flex flex-col justify-between'>
                <h3 className=' uppercase text-gray-400 text-sm font-medium hover:text-loanBlue-primary'>{title}</h3>
                <h2 className=' flex items-center text-2xl font-medium text-gray-800'>
                    <span>{val}</span>
                </h2>
                {/* <p className='  text-white '>view</p> */}
            </div>
            <div className=' flex justify-between flex-col'>
                {col == 'blue' && <p className=' p-2 rounded-sm bg-blue-100'> <Icon  className=' text-blue-400 w-6 h-6'/> </p>}
                {col == 'green' && <p className=' p-2 rounded-sm bg-green-100'> <Icon  className=' text-green-400 w-6 h-6'/> </p>}
                {col == 'yellow' && <p className=' p-2 rounded-sm bg-yellow-100'> <Icon  className=' text-yellow-400 w-6 h-6'/> </p>}
                {col == 'gray' && <p className=' p-2 rounded-sm bg-gray-100'> <Icon  className=' text-gray-400 w-6 h-6'/> </p>}
                <p className=' text-white'>j</p>
            </div>
        </motion.div>
)
}

function Applications() {
    const navigate = useNavigate()
    const users = Array.from(Array(10).keys()).slice(1);
  return (
    <>
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4'>
            <Card Icon={BsAward} title='Pending Applications' col='yellow' val='1,012'/>
            <Card Icon={BsAward} title='Approved Applications' col='green' val='1,012'/>
            <Card title='Total  Applications' val='11,012' Icon={BsAward} col='blue'/>
        </div>
        <div className='p-4 bg-white m-4 rounded-md'>
            <h2 className='text-base font-bold text-gray-800 py-4'>Applications</h2>
            <div className='overflow-x-auto'>
                <ApplicationDashboard />
            </div>
        </div>
    </>
  )
}

export default Applications
