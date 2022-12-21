import React from 'react'
import {Routes , Route} from 'react-router-dom'
import Applications from './Applications'
import ApplicationDetail from './ApplicationDetail'

function ApplicationWrapper() {
  return (
    <div>
        <Routes>
            <Route path='' element={<Applications />} />
            <Route path='/:id' element={<ApplicationDetail />} />
        </Routes>
    </div>
  )
}

export default ApplicationWrapper
