import React, { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom";
import logo2 from '../../assets/l2.jpeg'
import logo1 from '../../assets/loanme.png'
import {Link } from "react-router-dom";
import { AuthContext } from '../../contexts/ContextProvider';
import Load from '../../Load';







function SignIn() {

    const { BACKEND_DOMAIN, login ,displayNotification , setLoading , setAuthToken , setAuthUser } = useContext(AuthContext)
    const [ adminSignIn ,setAdminSignIn] = useState(false)
    const [ email ,setEmail] = useState(null)
    const [ adminEmail ,setAdminEmail] = useState(null)
    const [ adminPassword ,setAdminPassword] = useState(null) 
    const [ pin ,setPin] = useState(null)
    let navigate = useNavigate()

    

    async function handleSubmit(e){
        // demo()
        e.preventDefault()
        if(email && pin ){
            const data = {
                'email':email,
                'password': pin
            }
            setLoading(true)
            const response = await fetch(`${BACKEND_DOMAIN}/api/v1/signin/`,  {
                method : 'POST',
                headers : {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)  
            })
            if(response.status === 200){
                const data = await response.json()
                localStorage.setItem('authToken',JSON.stringify(data.tokens)) 
                localStorage.setItem('authUser',JSON.stringify(data.user)) 
                setLoading(false)
                setAuthToken(data.tokens)
                setAuthUser(data.user)
                navigate('/') 
            }else if(response.status === 401 ){
                setLoading(false)
                displayNotification('error','Your account is disabled, kindly contact the administrative')
            } 
            else{
                setLoading(false)
                displayNotification('error', 'Invalid login credential')
            }
        }
        else{
            displayNotification('error','Email and pin are required for signin')
        }
        
        
    }



    
    async function handleSubmitAdmin(e){
        // demo()
        e.preventDefault()
        if( adminEmail  && adminPassword  ){
            const data = {
                'email':adminEmail,
                'password': adminPassword
            }
            setLoading(true)
            const response = await fetch(`${BACKEND_DOMAIN}/api/v1/signin/admin`,  {
                method : 'POST',
                headers : {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)  
            })
            
            if(response.status === 200){
                const data = await response.json()
                localStorage.setItem('authToken',JSON.stringify(data.tokens)) 
                localStorage.setItem('authUser',JSON.stringify(data.user)) 
                setAuthToken(data.tokens)
                setAuthUser(data.user)
                setLoading(false)
                navigate('/admin')
            }
            else if(response.status === 401 ){
                setLoading(false)
                displayNotification('error','Not an admin, sign in here') 
                const data = await response.json()
    
            }
            else{
                setLoading(false)
                displayNotification('error','Invalid login credentials') 
            }
            
        }
        else{
            displayNotification('error','Email and password are required for signin')
        }
        
        
    }


 
  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img' style={{ backgroundImage: `url(${logo2})`}}>
      {/* Overlay */}
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]' />
      <div className='z-[2] w-full max-w-sm  md:max-w-md '>
        {!adminSignIn ? (
            <div className=' w-full  mx-auto py-6 p-4 border bg-white rounded shadow-md'>
                <div className=' w-full flex items-center place-content-center gap-4  py-4 pb-12 r  '>
                    <div className=' flex items-center gap-2'>
                        <img src={logo1} alt='logo'  className=' w-10 h-10' />
                        <h2 className=' logo-primary font-bold text-xl'>LoanIt</h2>
                    </div>
                    
                </div>
                <form className=' flex flex-col gap-4' onSubmit={handleSubmit}>
                    <div className='flex items-center justify-between my-2'>
                    {/* <div className=' p-4 bg-loan-primary flex items-center justify-between my-2'> */}
                        <h2 className=' heading-sub'>
                            SignIn
                        </h2>
                    </div>
                    <div>
                        {/* <p className=' text-description text-sm text-red-600'>Invalid credentials</p> */}
                        <label htmlFor="helper-text" className="text-input-label ">Email</label>
                        <input type="email" onChange={(e)=> setEmail(e.target.value)} className=' input-primary'placeholder=""  />
                    </div>
                    <div>
                    <label htmlFor="helper-text" className="text-input-label ">Pin</label>
                        <input type="number" onChange={(e)=> setPin(e.target.value)} className=' input-primary'  placeholder="******" />
                    </div>  
                    <div className=' w-full my-4 mt-8'>
                        <button type="submit"  className="btn-primary">SIGN IN</button>
                    </div>
                    <div className=' w-full flex flex-col items-center place-content-center gap-4  py-4 '>
                        <p className='text-description text-sm text-loan-secondary'>Need an account? <Link to={'/signup'} className='text-loanBlue-primary'> SignUp</Link></p>
                        <p className='text-description text-sm text-loan-secondary'><span onClick={()=> setAdminSignIn(true)} className='text-loanBlue-primary cursor-pointer'> Sign in as admin</span></p>
                    </div>
                </form>
            </div>
        ): (
            <div className=' w-full  mx-auto py-6 p-4 border bg-white rounded shadow-md'>
            <div className=' w-full flex items-center place-content-center gap-4  py-4 pb-12 r  '>
                <div className=' flex items-center gap-2'>
                    <img src={logo1} alt='logo'  className=' w-10 h-10' />
                    <h2 className=' logo-primary font-bold text-xl'>LoanIt</h2>
                </div>    
            </div>
            <form className=' flex flex-col gap-4' onSubmit={handleSubmitAdmin}>
                <div className='flex items-center justify-between my-2'>
                {/* <div className=' p-4 bg-loan-primary flex items-center justify-between my-2'> */}
                    <h2 className=' heading-sub'>
                        Admin SignIn
                    </h2>
                </div>
                <div>
                    {/* <p className=' text-description text-sm text-red-600'>Invalid credentials</p> */}
                    <label htmlFor="helper-text" className="text-input-label ">Email</label>
                    <input type="email"  onChange={(e)=> setAdminEmail(e.target.value)} className=' input-primary'placeholder=""  />
                </div>
                <div>
                <label htmlFor="helper-text" className="text-input-label ">Password</label>
                    <input type="password"  onChange={(e)=> setAdminPassword(e.target.value)} className=' input-primary'  placeholder="******" />
                </div>  
                <div className=' w-full my-4 mt-8'>
                    <button type="submit"  className="btn-primary">SIGN IN</button>
                </div>
                <div className=' w-full flex items-center place-content-center gap-4  py-4 '>
                        <p className='text-description text-sm text-loan-secondary'>Not an admin? <span onClick={()=> setAdminSignIn(false)} className='text-loanBlue-primary cursor-pointer'>Customer Sign In</span></p>
                    {/* <p className='text-description text-sm text-loan-secondary'>Need an account? <Link to={'/signup'} className='text-loanBlue-primary'> SignUp</Link></p> */}
                </div>
            </form>
        </div>
        )}
        





        
      </div>
    </div>
  )
}




export default SignIn
