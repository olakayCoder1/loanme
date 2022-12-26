import React, { useContext, useState } from 'react'
import { AuthContext } from '../../../contexts/ContextProvider'
import { useNavigate } from 'react-router-dom'

function Security() {
  const {displayNotification, authToken, setAuthUser ,  BACKEND_DOMAIN } = useContext(AuthContext)
  const [oldPassword , setOldPassword ] = useState(null)
  const [ newPassword , setNewPassword ] = useState(null) 
  const [ confirmPassword , setConfirmPassword ] = useState(null)
  let navigate = useNavigate() 

  async function resetPassword(e){
    e.preventDefault()

    if(newPassword && confirmPassword ){
      if(newPassword === confirmPassword  && confirmPassword.length > 6 ){
        const url = `${BACKEND_DOMAIN}/api/v1/account/password/change` 
        const response =  await fetch(url,{method : 'POST', headers : {
            'Content-Type': 'application/json',
            'Authorization' : `Bearer ${authToken?.access}`
          }, body : JSON.stringify({
            'old_password': oldPassword,
            'password1': newPassword,
            'password2': confirmPassword ,
          })
        })
        if(response.status === 200 ){
            const data = await response.json()
            localStorage.clear()
            setAuthUser(null)  
            displayNotification('success', 'Password updated successfully. Sign in again')
            navigate('/signin')
        }else{
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
    <div className=' bg-white p-6'>
      <form className=' flex flex-col gap-4' onSubmit={resetPassword}>
        <h2 className=' font-bold text-gray-800'>Change Password</h2>
        <div>
            <label htmlFor="helper-text" className="text-input-label ">Current Password</label>
            <input onChange={(e) => setOldPassword(e.target.value)}
                type="password"
                className=' input-primary'  
                placeholder="******" 
              />
        </div>
        <div>
            <label htmlFor="helper-text" className="text-input-label ">New Password</label>
            <input onChange={(e) => setNewPassword(e.target.value)}
                type="password"
                className=' input-primary'  
                placeholder="******" 
              />
        </div>
        <div>
            <label htmlFor="helper-text" className="text-input-label ">Confirm Password</label>
            <input onChange={(e) => setConfirmPassword(e.target.value)}
                type="password" 
                className=' input-primary'  
                placeholder="******" 
            />
        </div>
        <button type='submit' className=' btn-primary w-fit p-2 font-medium text-sm'>Save changes</button> 
      </form>

      {/* <div className=' border-t mt-8 py-8'>
        <button type='button' className=' btn-primary w-fit p-2 font-medium text-sm bg-red-600'>Deactivate your account</button> 
      </div> */}
    </div>
  )
}

export default Security
