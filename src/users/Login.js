import React from 'react'
import logo from '../assets/loanme.png'
import {Route, Routes } from "react-router-dom";
import logo1 from '../assets/laptop.jpeg'

function Login() {
  return (
    <div className=' w-full h-screen flex '>
        <div className='p-3 md:p-0 w-full md:w-3/6 '>
            <form className=' flex flex-col gap-4'>
                <div>
                    <label for="helper-text" className="block mb-1 text-sm font-medium text-loan-secondary  ">Country</label>
                    <input type="text" aria-describedby="helper-text-explanation" id="disabled-input" aria-label="disabled input"
                    class="bg-gray-50 mb-3 border border-gray-300  text-sm rounded focus:ring-loan-primary focus:border-loan-primary block w-full p-3 focus:outline-none" 
                    placeholder="Nigeria"  value='Nigeria' disable />
                </div>
                <div>
                    <label for="helper-text" className="block mb-1 text-sm font-medium text-loan-secondary  ">Phone Number</label>
                    <input type="text" aria-describedby="helper-text-explanation" id="disabled-input" aria-label="disabled input"
                        class="bg-gray-50 mb-3 border border-gray-300  text-sm rounded-md focus:ring-loan-primary focus:border-loan-primary block w-full p-3 focus:outline-none" 
                        placeholder="+234 908 345 5489" />

                </div>
                <div className=' w-full my-4'>
                    <button type="button" 
                        className="w-full py-4 px-5 mr-2 my-4 text-sm font-medium focus:outline-none bg-loanBlue-primary text-white rounded-md border border-gray-200 ">CONTINUE</button>
                </div>
            </form>
        </div>
        <div className='hidden md:block md:w-3/6  bg-loan-primary h-full bg-cover bg-center bg-no-repeat' 
            style={{backgroundImage: `url(${logo1})` }}>
        {/* <div className=' w-full h-full bg-gray-400 opacity-60'></div> */}
      </div>
    </div>
  )
}



export default Login
