import React from 'react'
import {MdError} from 'react-icons/md'




function OfferError() {
  return (
    <div className=' md:w-6/12 mx-auto text-sm font-normal p-4'>
        <MdError className='w-20 h-20 text-red-500  text-center mx-auto'/>
        <h2 className='text-center text-lg font-normal text-red-600'>Application rejected</h2>
        <p className=' text-center'>You application do not meet the neccessary caterial for approval </p>
        <div className=' py-4 flex gap-3 items-center place-content-center'>
            <button className=' btn-primary my-12 w-fit'>PROCEED TO DASHBOARD</button>
        </div>
    </div>
  )
}


export default OfferError
