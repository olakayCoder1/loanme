import React from 'react'
import {Routes , Route} from 'react-router-dom'
import Loans from './Loans'
import UserLoanDetail from './UserLoanDetail'

function UserLoanWrapper() {
  return (
    <div>
        <Routes>
            <Route path='' element={<Loans />} /> 
            <Route path='/detail' element={<UserLoanDetail />} />
        </Routes>
    </div>
  )
}


export default UserLoanWrapper
