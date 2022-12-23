import React, { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom";
import OnboardHeader from './OnboardHeader';
import {Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../contexts/ContextProvider';
// import 'react-phone-number-input/style.css'
// import PhoneInput from 'react-phone-number-input'




function OnboardingPhone({onboardingData ,handleValueChange}) {
    let navigate = useNavigate()
    const notify = () => toast("Invalid phone number!");
    const {displayNotification} = useContext(AuthContext)
    const [ changeNumberValue , setChangeNumberValue  ] = useState('')


    function handleChange(e){
        handleValueChange('phone', e.target.value )
    }

    function handleSubmit(e){
        e.preventDefault() 
        const v = e.target.phonenumber.value
        if( v != '' ){
            if( v.length  < 11 ){
                displayNotification('error','Phone number is not valid 1') 
                
            }else if( v.length == 11 ){
                displayNotification('info','Verification code sent to your number')
                navigate('phone-verify')
            }
            else{
                // handleValueChange('phone', changeNumberValue )
                displayNotification('error','Phone number is not valid 2') 
                // navigate('phone-verify')
            } 
        }else{
            displayNotification('error','Phone number is required') 
        }   
    }

  return (
    <form className='w-full flex flex-col gap-4 px-4' onSubmit={handleSubmit}>
        <OnboardHeader  name='Phone Number' c='1'/>
        <div>
            <label htmlFor="helper-text" className="text-input-label ">Country</label>
            <input type="text" className=' input-primary' placeholder="Nigeria"  value='Nigeria' readOnly disable='true' />
        </div>
        <div>
        <label htmlFor="helper-text" className="text-input-label ">Number</label>
            <input type="number"  
                value={onboardingData['phone']} 
                onChange={handleChange} 
                className=' input-primary'  
                name='phonenumber'  
                placeholder="0908 345 5489" 
            />
            <p className=' text-description'>A verification code will be sent to your number</p>
        </div>  
        <div className=' w-full my-4 mt-8'>
            <button type="submit"    className="btn-primary">CONTINUE</button>
        </div>
        <div className=' w-full flex items-center place-content-center gap-4  py-4 '>
            <p className='text-description text-sm text-loan-secondary'>Have an account? <Link to={'/signin'} className='text-loanBlue-primary'> SignIn</Link></p>
        </div>
    </form>
  )
}

export default OnboardingPhone





{/* <label>
            <input type="file" class="text-sm text-grey-500
            file:mr-5 file:py-2 file:px-6
            file:rounded-full file:border-0
            file:text-sm file:font-medium
            file:bg-blue-50 file:text-blue-700
            hover:file:cursor-pointer hover:file:bg-amber-50
            hover:file:text-amber-700
          " />
        </label> */}

        // <input type='date' className=' input-primary' />
