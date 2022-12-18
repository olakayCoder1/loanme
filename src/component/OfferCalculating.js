import React from 'react'
import cal from '../admin/pages/user_account/lighthourglass.json'
import cal1 from '../admin/pages/user_account/fullglass.json'
import  Lottie from 'lottie-react'


function OfferCalculating() {
  return (
    <div className=' text-center'>
            <Lottie animationData={cal1} className='w-32 h-32   text-center mx-auto'/>
      
      <div className=' flex flex-col items-center place-content-center'>
        <h2 className=' text-sm font-bold text-gray-800'>Fetching your loan offers</h2>
        <p className=' text-sm font-normal'>
            we are determining the right amount for you - this ahouldn't take long.<br></br>
            If you have not receive a loan offer within 3 minutes, you can leave the app nad apply again in 30 minutes.
        </p>
      </div>
    </div>
  )
}

export default OfferCalculating
