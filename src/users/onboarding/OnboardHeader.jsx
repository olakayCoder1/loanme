import React from 'react'

function OnboardHeader({ name , c }) {
  return (
    <div className='flex items-center justify-between my-2'>
    {/* <div className=' p-4 bg-loan-primary flex items-center justify-between my-2'> */}
        <h2 className=' heading-sub'>
            {name}
        </h2>
        <h2 className=' text-loan-secondary '>
            {c}/5
        </h2>
    </div>
  )
}

export default OnboardHeader
