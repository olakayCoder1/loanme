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

    

    function handleSubmit(e){
       
        // demo()
        e.preventDefault()
        if(email && pin ){
            const data = {
                'email':email,
                'password': pin
            }
            setLoading(true)
            fetch(`${BACKEND_DOMAIN}/api/v1/signin/`,  {
                method : 'POST',
                headers : {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)  
            })  
            .then(res => res.json())
            .then(data =>{ 
                localStorage.setItem('authToken',JSON.stringify(data.tokens)) 
                localStorage.setItem('authUser',JSON.stringify(data.user)) 
                setAuthToken(data.tokens)
                setAuthUser(data.user)
                
                login()
                navigate('/') 
             })
            .catch(err => {
                setLoading(false);
                console.log(err)
            }) 
            
        }
        else{
            displayNotification('error','Email and pin are required for signin')
        }
        
        
    }


    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    async function demo() {
        for (let i = 0; i < 3 ; i++) {
            await sleep(i * 1000);
        }
        setLoading(false)
        displayNotification('success','Login successfull')
        login()
        navigate('/')
        
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
                <div className=' w-full flex items-center place-content-center gap-4  py-4 '>
                    <p className='text-description text-sm text-loan-secondary'>Need an account? <Link to={'/signup'} className='text-loanBlue-primary'> SignUp</Link></p>
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}




export default ResetPassword
