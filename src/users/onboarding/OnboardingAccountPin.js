import React, { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom";
import OnboardHeader from './OnboardHeader';
import { AuthContext } from '../../contexts/ContextProvider';


function OnboardingAccountPin({onboardingData ,handleValueChange}) {
    let navigate = useNavigate()
    const {BACKEND_DOMAIN , displayNotification , login , setLoading , setAuthUser , authToken , setAuthToken } = useContext(AuthContext)

    const [pin , setPin ] = useState('')

    function handleChange(e){
      setPin(e.target.value)
    }


    function handleSubmit(e){
      e.preventDefault() 
      if(pin != ''){
        if(pin.length > 5){
          onboardingData['pin'] = pin
          fetch(`${BACKEND_DOMAIN}/api/v1/signup/`, {
            method : 'POST',
            headers : {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(onboardingData)
        })
        .then(res => res.json())
        .then(data => {
          localStorage.setItem('authToken',JSON.stringify(data.tokens)) 
          localStorage.setItem('authUser',JSON.stringify(data.user)) 
          setAuthToken(data.tokens)
          setAuthUser(data.user)
          displayNotification('success','You are logged in')
          login()
          navigate('/')
        })  
        }else{
          displayNotification('error','Pin should be at least 6 characters long')
        }
      }
    }
  
    

    
  return (
    <form className='w-full flex flex-col gap-2 px-4' onSubmit={handleSubmit}>
        <OnboardHeader  name='Security' c='5'/>
        <div>
        <label htmlFor="helper-text" className="text-input-label">Account Pin</label>
            <input type="number" value={pin} onChange={handleChange} className='input-primary' name='pin' placeholder="******" />
        </div>
        <div className=' w-full my-4 mt-8 flex gap-2'>
            <button type="button" onClick={()=> navigate('/signup/address')} className='btn-primary-white'>PREVIOUS</button>
            <button type="button" onClick={handleSubmit} className='btn-primary'>COMPLETE</button>
        </div>
        <p className=' text-description italic'>
          By clicking on the complete you agree to our 
          <span className=' text-loanBlue-primary cursor-pointer'>
            Terms
          </span>
            and have read and acknowledge 
          <span className=' text-loanBlue-primary cursor-pointer'>
            Global Privacy
          </span>
        </p>
    </form>
  )
}

export default OnboardingAccountPin
