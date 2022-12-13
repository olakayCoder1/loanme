import React, { useState } from 'react'
import {RxHamburgerMenu, RxDashboard} from 'react-icons/rx'
import { BsChevronDoubleRight , BsChevronDoubleLeft } from 'react-icons/bs'
import {FiSettings} from 'react-icons/fi'
import {BsFillCreditCard2FrontFill,BsCreditCard2Back} from 'react-icons/bs'
import {BiMessageRoundedDots} from 'react-icons/bi'
import { AnimatePresence, motion } from "framer-motion";


function SideBarLink({Icon , name}){

  const [showNav, setShowNav] = useState(true)

  return (
    <li>
        <a href="/dashboard" className={`${showNav ? "flex md:flex-col lg:flex-row items-center p-2 text-base font-normal rounded-tl-lg rounded-tr-sm  hover:bg-blue-500 hover:text-white" : "flex md:flex-col lg:flex-row items-center p-2 text-base font-normal text-gray-500 rounded-lg  hover:bg-gray-100"} `}>
          <Icon className="w-6 h-6 transition duration-75  group-hover:text-gray-900 "/>
          <span className="ml-3 font-bold sm:hidden lg:block">{name}</span>
          
        </a>
    </li>
  )
}



function Sidebar({displayNav, handleDisplayNav}) {

  const [showName, setShowName] = useState(true)

  function handleNav(){
    handleDisplayNav()
    setShowName(!showName)
  }

  return (
    <>

  <div className={`hidden md:block min-w-[250px] max-w-[250px] w-[20%] bg-white border-[1px] shadow-md`}>
  {/* <div className={`${displayNav ? 'fixed top-0 left-0 bottom-0 z-50' : 'hidden' } md:block min-w-[250px] max-w-[250px] w-[20%] bg-white border-[1px] shadow-md`}> */}
      <div className=' flex items-center py-4 px-4 gap-4'>
        <p className=' md:hidden p-1 cursor-pointer'
          onClick={handleNav}>{displayNav ? (
          <BsChevronDoubleLeft className=' w-5 h-5'/>
        ) : (
          <BsChevronDoubleRight className=' w-5 h-5'/>
        )
        }
        </p>
        {showName && <h2>LoanMe</h2> } 
        
      </div>
      <ul className="space-y-2 pl-2 my-4">
          <SideBarLink Icon={RxDashboard} name='Dasboard'/>
          <SideBarLink Icon={BsCreditCard2Back} name='Cards'/>
          <SideBarLink Icon={BiMessageRoundedDots} name='Messages'/>
          <SideBarLink Icon={FiSettings} name='Settings'/>
      </ul>
      <h1 className=' text-xs font-medium  absolute bottom-4 text-center m-4'>programmeolakay@gmail.com</h1>
    </div>




    <div className={`${displayNav ? 'fixed top-0 left-0 bottom-0 z-50' : 'hidden'} translate-x-0 duration-500 md:hidden block min-w-[250px] max-w-[250px] w-[20%] bg-white border-[1px] shadow-md`}>
      <div className=' flex items-center py-4 px-4 gap-4'>
        <p className=' md:hidden p-1 cursor-pointer'
          onClick={handleNav}>{displayNav ? (
          <BsChevronDoubleLeft className=' w-5 h-5'/>
        ) : (
          <BsChevronDoubleRight className=' w-5 h-5'/>
        )
        }
        </p>
        <h2>LoanMe</h2>
        
      </div>
      <ul className="space-y-2 pl-2 my-4">
          <SideBarLink Icon={RxDashboard} name='Dasboard'/>
          <SideBarLink Icon={BsCreditCard2Back} name='Cards'/>
          <SideBarLink Icon={BiMessageRoundedDots} name='Messages'/>
          <SideBarLink Icon={FiSettings} name='Settings'/>
      </ul>
      <h1 className=' text-xs font-medium  absolute bottom-4 text-center m-4'>programmeolakay@gmail.com</h1>
    </div>

    </>
    
  )
}

export default Sidebar
