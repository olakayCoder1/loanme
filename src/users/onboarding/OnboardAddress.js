import React from 'react'
import { useNavigate } from "react-router-dom";
import OnboardHeader from './OnboardHeader';

function OnboardAddress() {
    let navigate = useNavigate()

  return (
    <form className='w-full flex flex-col gap-4 px-4'>
        <OnboardHeader  name='Address' c='4'/>
        <div>
            <label htmlFor="helper-text" className="text-input-label">Address Line 1</label>
            <input type="text" className='input-primary' name='address_1'  placeholder=""/>
        </div>

        <div>
            <label for="helper-text" className="text-input-label">Address Line 2</label>
            <input type="text" className='input-primary' name='address_2'  placeholder=""/>
        </div>


        <div>
            <label for="helper-text" className="text-input-label">Resident State</label>
            <input type="text" className='input-primary' name='state'  placeholder=""/>
        </div>

        <div>
            <label for="helper-text" className="text-input-label">Resident City</label>
            <input type="text" className='input-primary' name='city'  placeholder=""/>
        </div>


        <div className=' w-full my-4  mt-8 flex gap-2'>
            <button type="button" onClick={()=> navigate('/signup/personaldetails')} className='btn-primary-white'>PREVIOUS</button>
            <button type="button" onClick={()=> navigate('/signup/pin')} className='btn-primary'>CONTINUE</button>
        </div>
        
    </form>
  )
}

export default OnboardAddress
