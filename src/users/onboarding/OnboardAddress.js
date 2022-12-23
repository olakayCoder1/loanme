import React, { useContext } from 'react'
import { useNavigate } from "react-router-dom";
import OnboardHeader from './OnboardHeader';
import { AuthContext } from '../../contexts/ContextProvider';

function OnboardAddress({onboardingData ,handleValueChange}) {
    let navigate = useNavigate()

    const {displayNotification } = useContext(AuthContext)

    function handleChange(e){
        const type = e.target.name
        const val = e.target.value
        handleValueChange(type, val )
    }

    function handleSubmit(){
      if(onboardingData['address_1'] === '' ){
          displayNotification('error','Address Line 1 required')
      }else if( onboardingData['state'] === '' ){
          displayNotification('error','State field is required')
      }else if(onboardingData['city'] === '' ){
          displayNotification('error','City field is required')
      }else{
        navigate('/signup/pin')
      }
    }



  return (
    <form className='w-full flex flex-col gap-4 px-4'>
        <OnboardHeader  name='Address' c='4'/>
        <div>
            <label htmlFor="helper-text" className="text-input-label">Address Line 1</label>
            <input type="text" value={onboardingData['address_1']} onChange={handleChange} className='input-primary' name='address_1'  placeholder=""/>
        </div>

        <div>
            <label htmlFor="helper-text" className="text-input-label">Address Line 2</label>
            <input type="text" value={onboardingData['address_2']} onChange={handleChange}  className='input-primary' name='address_2'  placeholder=""/>
        </div>


        <div>
            <label htmlFor="helper-text" className="text-input-label">Resident State</label>
            <input type="text" value={onboardingData['state']} onChange={handleChange}  className='input-primary' name='state'  placeholder=""/>
        </div>

        <div>
            <label htmlFor="helper-text" className="text-input-label">Resident City</label>
            <input type="text" value={onboardingData['city']} onChange={handleChange}  className='input-primary' name='city'  placeholder=""/>
        </div>


        <div className=' w-full my-4  mt-8 flex gap-2'>
            <button type="button" onClick={()=> navigate('/signup/personaldetails')} className='btn-primary-white'>PREVIOUS</button>
            <button type="button" onClick={handleSubmit} className='btn-primary'>CONTINUE</button>
        </div>
        
    </form>
  )
}

export default OnboardAddress
