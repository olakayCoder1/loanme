import React, { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom";
import logo2 from '../../assets/l2.jpeg'
import logo1 from '../../assets/loanme.png'
import {Link } from "react-router-dom";
import { AuthContext } from '../../contexts/ContextProvider';
import Load from '../../Load';







function SignIn() {

    const {setIsAuthenticated , login ,displayNotification , setLoading } = useContext(AuthContext)
    // const [ loading ,setLoading] = useState(false)
    let navigate = useNavigate()

    

    function handleSubmit(){
        setLoading(true)
        demo()
        
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
            <form className=' flex flex-col gap-4'>
                <div className='flex items-center justify-between my-2'>
                {/* <div className=' p-4 bg-loan-primary flex items-center justify-between my-2'> */}
                    <h2 className=' heading-sub'>
                        SignIn
                    </h2>
                </div>
                <div>
                    {/* <p className=' text-description text-sm text-red-600'>Invalid credentials</p> */}
                    <label for="helper-text" className="text-input-label ">Email</label>
                    <input type="email" className=' input-primary'placeholder=""  />
                </div>
                <div>
                <label for="helper-text" className="text-input-label ">Pin</label>
                    <input type="number" className=' input-primary'  placeholder="******" />
                </div>  
                <div className=' w-full my-4 mt-8'>
                    <button type="button" onClick={handleSubmit} className="btn-primary">SIGNIN</button>
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




export default SignIn
