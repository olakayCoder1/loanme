import React from 'react'
import {Routes , Route} from 'react-router-dom'
import BvnVerification from '../component/signup/BvnVerification'
import EmailVerification from '../component/signup/EmailVerification'
import PersonalDetails from '../component/signup/PersonalDetails'
import Phonenumber from '../component/signup/Phonenumber'
import PhonenumberVerification from '../component/signup/PhonenumberVerification'


function Signup() {
  return (
    <div className=' w-full h-full'>
      <div className=' w-full h-full flex'>
        <div className=' md:w-[70%] bg-red-500'>
        </div>
        <div className='w-full md:w-[30%] bg-white'>
            <Routes>
                <Route path='' element={<Phonenumber />} />
                <Route path='/phonenumber-verification' element={<PhonenumberVerification />} />
                <Route path='/profile' element={<PersonalDetails />} />
                <Route path='/profile/email-verification' element={<EmailVerification />} />
                <Route path='/bvn' element={<BvnVerification />} />
            </Routes>
        </div>
      </div>
    </div>
  )
}

export default Signup
