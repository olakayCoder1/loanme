import React, { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom";
import OnboardHeader from './OnboardHeader';
import { AuthContext } from '../../contexts/ContextProvider';

function OnboardingPersonalInfo({onboardingData ,handleValueChange}) {
    let navigate = useNavigate()
    const {displayNotification, BACKEND_DOMAIN } = useContext(AuthContext)

    function handleChange(e){
          const type = e.target.name
          const val = e.target.value
          handleValueChange(type, val )
    }

    async function handleSubmit(){
        if(onboardingData['email'] === '' ){
            displayNotification('error','Email field is required')
        }else if( onboardingData['last_name'] === '' ){
            displayNotification('error','Last name field is required')
        }else if(onboardingData['first_name'] === '' ){
            displayNotification('error','First name field is required')
        }else{
            const url = `${BACKEND_DOMAIN}/api/v1/email/verify` 
            const response = await fetch(url,{
                    method : 'POST', 
                    headers : {
                    'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        'email': onboardingData['email']
                    })
                })
                
            if(response.status === 200 ){
                navigate('/signup/address')
            }else{
                displayNotification('error','Email already exist')
            }
            
            
        }
    }

  return (
    <form className='w-full flex flex-col gap-4 px-4'>
        <OnboardHeader  name='Personal Details' c='3'/>
        <div>
            <label htmlFor="helper-text" className="text-input-label">First Name</label>
            <input type="text" value={onboardingData['first_name']} onChange={handleChange} className='input-primary' name='first_name'   placeholder=""/>
        </div>
        <div>
            <label htmlFor="helper-text" className="text-input-label">Last Name</label>
            <input type="text" value={onboardingData['last_name']} onChange={handleChange}   className='input-primary' name='last_name' placeholder=""/>
        </div>
        <div>
            <label htmlFor="helper-text" className="text-input-label">Email</label>
            <input type="email" value={onboardingData['email']} onChange={handleChange}  className='input-primary' name='email' placeholder=""/>
        </div>
        <div className=' w-full my-4 mt-8 flex gap-2'>
            <button type="button" onClick={()=> navigate('/signup')} className="btn-primary-white">PREVIOUS</button>
            <button type="button" onClick={handleSubmit} className="btn-primary">CONTINUE</button>
        </div>  
    </form>
  )
}

export default OnboardingPersonalInfo
