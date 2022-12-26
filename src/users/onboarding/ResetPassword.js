import React, { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom";
import logo2 from '../../assets/l2.jpeg'
import logo1 from '../../assets/loanme.png'
import {Link } from "react-router-dom";
import { AuthContext } from '../../contexts/ContextProvider';
import Load from '../../Load';







function ResetPassword() {

    const { BACKEND_DOMAIN, login ,displayNotification , setLoading , setAuthToken , setAuthUser } = useContext(AuthContext)
    // const [ loading ,setLoading] = useState(false)
    const [ email ,setEmail] = useState(null)
    const [ pin ,setPin] = useState(null)
    let navigate = useNavigate()

    

    async function handleSubmit(e){
       
        // demo()
        e.preventDefault()
        if(email ){
            const data = {
                'email':email,
            }
            setLoading(true)
            const response = await fetch(`${BACKEND_DOMAIN}/api/v1/account/password/reset`,  {
                method : 'POST',
                headers : {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)  
            }) 
            if(response.status === 200){
                const data = await response.json()
                setLoading(false)
                setEmail(' ')
                displayNotification('success', data['detail'])
            }else if(response.status === 400){
                setLoading(false) 
                displayNotification('error','Invalid email format')
            }else{
                setLoading(false)
                displayNotification('error', 'An error occurred')
            } 
        }
        else{
            displayNotification('error','Email field is required')
        }    
    }



 
  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img' style={{ backgroundImage: `url(${logo2})`}}>
      {/* Overlay */}
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]' />
      <div className='z-[2] w-full max-w-sm  md:max-w-md '>
        <div className=' w-full  mx-auto py-6 p-4 border bg-white rounded shadow-md'>
            <div className=' w-full flex items-center place-content-center gap-4  py-4 pb-12 r  '>
                <div className=' flex items-center gap-2'>
                    <img src={logo1} alt='logo'  className=' w-10 h-10' />
                    <h2 className=' logo-primary font-bold text-xl'>LoanIt</h2>
                </div>
                
            </div>
            <form className=' flex flex-col gap-4' onSubmit={handleSubmit}>
                <div className='flex items-center justify-between my-2'>
                    <h2 className=' heading-sub'>
                        Reset Password
                    </h2>
                </div>
                <div>
                    <p className=' text-description text-sm '>Enter the email linked with your account to get password reset instrunction.</p>
                    <label htmlFor="helper-text" className="text-input-label ">Email</label>
                    <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} className=' input-primary'placeholder=""  />
                </div> 
                <div className=' w-full my-4 mt-8'>
                    <button type="submit"  className="btn-primary">SEND INSTRUCTION</button>
                </div>
                <div className=' w-full flex items-center place-content-center gap-4  py-4 '>
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}




export default ResetPassword
