import React, { useContext } from 'react'
import { useNavigate } from "react-router-dom";
import OnboardHeader from './OnboardHeader';
import { AuthContext } from '../../contexts/ContextProvider';


function OnboardingAccountPin({onboardingData ,handleValueChange}) {
    let navigate = useNavigate()
    const {displayNotification , login , setLoading} = useContext(AuthContext)

    function handleChange(e){
      const type = e.target.name
      const val = e.target.value
      handleValueChange(type, val )
    }

    function handleSubmit(){
      if(onboardingData['pin'] === ''){
        displayNotification('error','Set an account pin')
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
      displayNotification('success','You are logged in')
      login()
      navigate('/')
    }

    
  return (
    <form className='w-full flex flex-col gap-2 px-4'>
        <OnboardHeader  name='Security' c='5'/>
        <div>
        <label htmlFor="helper-text" className="text-input-label">Account Pin</label>
            <input type="number" value={onboardingData['pin']} onChange={handleChange} className='input-primary' name='pin' placeholder="******" />
        </div>
        <div className=' w-full my-4 mt-8 flex gap-2'>
            <button type="button" onClick={()=> navigate('/signup/address')} className='btn-primary-white'>PREVIOUS</button>
            <button type="button" onClick={handleSubmit} className='btn-primary'>COMPLETE</button>
        </div>
        <p className=' text-description italic'>By clicking on the complete you agree to our <span className=' text-loanBlue-primary cursor-pointer'>Terms</span> and have read and acknowledge <span className=' text-loanBlue-primary cursor-pointer'>Global Privacy</span></p>
    </form>
  )
}

export default OnboardingAccountPin
