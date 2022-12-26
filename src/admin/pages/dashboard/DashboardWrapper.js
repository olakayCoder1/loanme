import React, { useState, useEffect, useContext } from 'react'
import {TbCurrencyNaira} from 'react-icons/tb'
import { useNavigate, Link} from 'react-router-dom'
import {RiMoneyDollarCircleLine} from 'react-icons/ri'
import {SiWebmoney} from 'react-icons/si'
import {FiUsers} from 'react-icons/fi'
import {BsWallet2} from 'react-icons/bs'
import {motion} from 'framer-motion'
import ApplicationDashboard from './ApplicationDashboard'
import LoanDashboard from './LoanDashboard'
import { AuthContext } from '../../../contexts/ContextProvider'




function Card({title, val , col ,Icon}){
    
    return (
        <motion.div initial={{y:0}} whileHover={{y:-6}} animate={{transition:{duration:3} }}
            className='w-full flex justify-between p-4  h-36 bg-white rounded shadow'>
            <div className=' flex flex-col justify-between'>
                <h3 className=' uppercase text-gray-400 text-base font-medium hover:text-loanBlue-primary'>{title}</h3>
                <h2 className=' flex items-center text-2xl font-medium text-gray-800'>
                    {title === 'sum of active loans' && <TbCurrencyNaira />}
                    {title === 'sum total loans' && <TbCurrencyNaira />}
                    <span>{val}</span>
                </h2>
                {/* <p className=' text-sm font-normal text-loanBlue-primary cursor-pointer'>view</p> */}
            </div>
            <div className=' flex justify-between flex-col'>
                {col == 'blue' && <p className=' p-2 rounded-sm bg-blue-100'> <Icon  className=' text-blue-400 w-6 h-6'/> </p>}
                {col == 'green' && <p className=' p-2 rounded-sm bg-green-100'> <Icon  className=' text-green-400 w-6 h-6'/> </p>}
                {col == 'red' && <p className=' p-2 rounded-sm bg-red-100'> <Icon  className=' text-red-400 w-6 h-6'/> </p>}
                {col == 'yellow' && <p className=' p-2 rounded-sm bg-yellow-100'> <Icon  className=' text-yellow-400 w-6 h-6'/> </p>}
                <p className=' text-white'>j</p>
            </div>
        </motion.div>
    )
}




function DashboardWrapper() {

    const { BACKEND_DOMAIN , authUser } = useContext(AuthContext)

    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const days = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']
    const currentDate = new Date();
    const date = currentDate.getDate() 
    const day = currentDate.getDay()
    const month = currentDate.getMonth()
    const year = currentDate.getFullYear()
 
    const dateString = `${days[day-1]} ${date} ${months[month]}, ${year}`

    const [loanSummary, setLoanSummary ] = useState( { 
        'total':  null,
        'active_loan':null,
        'completed': null,
        'sum_of_total_loan':  null,
        'sum_of_active_loan':  null, 
        'total_repayment':  null ,  
    } )
    useEffect(()=>{
        async function fetchLoanSummary(){
            const response = await fetch(`${BACKEND_DOMAIN}/api/v1/admin/summary/loans`)
            if(response.status === 200){
                const data = await response.json()
                setLoanSummary(data)
                console.log(data)  
            }
        }
        fetchLoanSummary()
    },[])
    
    const [activeTab, setActiveTab] = useState('loan')
  return (
    <div className='  w-full  p-4'>
        <div className=' flex md:items-center gap-4 justify-between flex-col md:flex-row'>
            <div>
                <h2 className=' font-bold text-base text-loan-secondary'>Good day {authUser && authUser.first_name}</h2>
                <p className=' text-sm  font-normal text-gray-400'>Here's what's happening with your business.</p>
            </div>
            <p className=' p-2 bg-white rounded text-sm font-normal border shadow-md'>
                {dateString}
            </p>
        </div>

        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-4'>
            <Card title='active loan' val={loanSummary.active_loan } Icon={SiWebmoney} col='green'/>
            <Card title='sum of active loans' val={loanSummary.sum_of_active_loan} Icon={RiMoneyDollarCircleLine} col='red'/>
            <Card title='total loans' val={loanSummary.total} Icon={SiWebmoney} col='blue'/>
            <Card title='sum total loans' val={loanSummary.sum_of_total_loan} Icon={RiMoneyDollarCircleLine} col='yellow'/>
        </div>
      
        <div className=' w-full bg-white box-border pt-4 m-4 text-sm font-medium  mx-auto'>
            <div class="w-full text-center text-gray-500 border-b border-gray-200">
                <ul class="flex flex-wrap -mb-px">
                    <li class="mx-2">
                        <p onClick={()=>setActiveTab('loan')} className={`${activeTab === 'loan' ? 'inline-block p-4 px-8 text-loanBlue-primary rounded-t-lg border-b-2 border-loanBlue-primary ' : 'inline-block p-4 px-8 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 '} cursor-pointer`}>Loan</p>
                    </li>
                    <li class="mr-2">
                        <p onClick={()=>setActiveTab('application')} className={`${activeTab === 'application' ? 'inline-block p-4 px-8 text-loanBlue-primary rounded-t-lg border-b-2 border-loanBlue-primary ' : 'inline-block p-4 px-8 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 '} cursor-pointer`}>Application</p>
                    </li>
                </ul>
            </div>
            <div className='overflow-x-auto'>
                {activeTab === 'loan' ? <LoanDashboard /> : <ApplicationDashboard />}
            </div>
            
            
        </div>
    </div>
  )
}

export default DashboardWrapper
