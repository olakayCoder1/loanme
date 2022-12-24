import React from 'react'
import {Routes , Route} from 'react-router-dom'
import Loans from './Loans'
import UserLoanDetail from './UserLoanDetail'

function UserLoanWrapper() {
  return (
    <div>
        <Routes>
            <Route path='' element={<Loans />} /> 
            <Route path='/:id' element={<UserLoanDetail />} />
        </Routes>
    </div>
  )
}


export default UserLoanWrapper
