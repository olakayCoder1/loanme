import React, { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom";
import OnboardHeader from './OnboardHeader';
import { AuthContext } from '../../contexts/ContextProvider';


function OnboardingPhoneVerify() {
  const {displayNotification , setLoading } = useContext(AuthContext)
  let navigate = useNavigate()

  const [codeValue , setCodeValue ] = useState('')
  const invalid_codes = ['111111','222222','333333','444444','555555','666666','777777','888888','999999']

  function handleSubmit(){
    if(codeValue === ''){
      displayNotification('error','Enter verification code')
    }else{
      setLoading(true)
      demo() 
    }
     
  }

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function demo() {
    for (let i = 0; i < 2 ; i++) {
        await sleep(i * 1000);
    }
    setLoading(false)
    if(codeValue.length < 6 || invalid_codes.indexOf(codeValue) !== -1 || codeValue.length > 6){
      displayNotification('error','Invalid verification code')
    }else{
      displayNotification('success','Phone number verified')
      navigate('/signup/personaldetails')
    }
  }
  
  return (
    <form className='w-full flex flex-col gap-4 px-4'>
        <OnboardHeader  name='Phone Verification' c='2'/>
        <div>
        <label htmlFor="helper-text" className="text-input-label ">Verification Code</label>
            <input type="number" value={codeValue} onChange={(e)=> setCodeValue(e.target.value)}   className='input-primary'   placeholder="******" />
        </div>
        <div className=' w-full my-4 flex gap-2 mt-8'>
            {/* <button type="button" onClick={()=> navigate('/signup')}  className='btn-primary-white'>  PREVIOUS</button> */}
            <button type="button" onClick={handleSubmit} className="btn-primary">VERIFY</button>
        </div>
    </form>
  )
}

export default OnboardingPhoneVerify
