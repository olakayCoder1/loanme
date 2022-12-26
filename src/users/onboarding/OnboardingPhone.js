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
    const {displayNotification , setLoading , BACKEND_DOMAIN} = useContext(AuthContext)
    const [ changeNumberValue , setChangeNumberValue  ] = useState('')


    function handleChange(e){
        setChangeNumberValue(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault() 
        const v = e.target.phonenumber.value
        if( changeNumberValue != '' ){
            if( changeNumberValue.length  < 11 ){
                displayNotification('error','Phone number is not valid') 
                
            }else if( v.length == 11 ){
                if(changeNumberValue === onboardingData['phone']){
                    navigate('personaldetails')
                }else{
                    setLoading(true)
                    const phone = changeNumberValue
                    async function fetchPhone(){
                        const response = await fetch(`${BACKEND_DOMAIN}/api/v1/phone/verify`,{
                            method : 'POST', 
                            headers : {
                            'Content-Type': 'application/json',
                            }, body : JSON.stringify({ 'phone':phone})
                        })
                        console.log(response.status)
                        if(response.status === 200){
                            // const data = await response.json()
                            setLoading(false)
                            displayNotification('info','Verification code sent to your number')
                            navigate('phone-verify')
                        }
                        if(response.status === 400){
                            const data = await response.json()
                            setLoading(false)
                            displayNotification('error', data['detail'])
                        }
                    }
            
                    fetchPhone()
                    
                }
                
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
                // value={onboardingData['phone']} 
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
