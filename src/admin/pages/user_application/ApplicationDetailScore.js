import React from 'react'
import {ImFilesEmpty} from 'react-icons/im'

function ApplicationDetailScore() {
  return (
    <div className=' p-6 bg-gray-50 '>
      <div className=' w-full flex items-center place-content-center'>
            <p className=' flex items-center justify-center flex-col'>
                <ImFilesEmpty  className=' w-20, h-20'/>
                <span className=' text-sm font-medium'>Nothing to show yet!</span>
            </p>
        </div>
    </div>
  )
}

export default ApplicationDetailScore
