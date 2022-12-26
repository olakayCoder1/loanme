import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import logo2 from '../../assets/l2.jpeg'
import logo1 from '../../assets/loanme.png'
import {Link } from "react-router-dom";
import { AuthContext } from '../../contexts/ContextProvider';
import Load from '../../Load';







function ForgetPassword() {
    const { token , uuid } = useParams()
    const { BACKEND_DOMAIN, displayNotification , setLoading  } = useContext(AuthContext)
    const [ newPassword , setNewPassword ] = useState(null) 
    const [ confirmPassword , setConfirmPassword ] = useState(null)
    let navigate = useNavigate()

    

    
  async function resetPassword(e){
    e.preventDefault()

    if(newPassword && confirmPassword ){
      if(newPassword === confirmPassword  && confirmPassword.length > 6 ){
        setLoading(true)
        const url = `${BACKEND_DOMAIN}/api/v1/account/password/${token}/${uuid}/confirm` 
        const response =  await fetch(url,{method : 'POST', headers : {
            'Content-Type': 'application/json',
          }, body : JSON.stringify({
            'password1': newPassword,
            'password2': confirmPassword ,
          })
        })
        if(response.status === 200 ){
            setLoading(false)
            const data = await response.json() 
            displayNotification('success', 'Password updated successfully. Sign in again')
            navigate('/signin')
        }else{
            setLoading(false)
            displayNotification('error','an error occurred')
        }
      }else{
        displayNotification('error','Password must match and should be greater than 6 characters')
      }
    }else{
      displayNotification('error','All fields are required')
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
            <form className=' flex flex-col gap-4' onSubmit={resetPassword}>
                <div className='flex items-center justify-between my-2'>
                    <h2 className=' heading-sub'>
                        Create new password
                    </h2>
                </div>
                
                <div>
                    <label htmlFor="helper-text" className="text-input-label ">Password</label>
                    <input type="password" onChange={(e)=> setNewPassword(e.target.value)} className=' input-primary'  placeholder="******" />
                </div>  
                <div>
                    <label htmlFor="helper-text" className="text-input-label ">Confirm password</label>
                    <input type="password" onChange={(e)=> setConfirmPassword(e.target.value)} className=' input-primary'  placeholder="******" />
                </div>  
                
                <div className=' w-full my-4 mt-8'>
                    <button type="submit"  className="btn-primary">CHANGE PASSWORD</button>
                </div>
               
            </form>
        </div>
      </div>
    </div>
  )
}



export default ForgetPassword
