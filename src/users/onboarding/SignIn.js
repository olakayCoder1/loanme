import React, { useContext } from 'react'
import { useNavigate } from "react-router-dom";
import logo2 from '../../assets/l2.jpeg'
import logo1 from '../../assets/loanme.png'
import {Link } from "react-router-dom";
import { AuthContext } from '../../contexts/ContextProvider';







function SignIn() {

    const {setIsAuthenticated , login} = useContext(AuthContext)

    let navigate = useNavigate()

    

    function handleSubmit(){
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



function SignIn1() {
    let navigate = useNavigate()

  return (
    <div className=' w-full h-screen flex '>
      <div className='p-3 md:p-0 w-full md:w-3/6 flex items-center place-content-center bg-gray-50  '>
        <div className=' w-full md:max-w-sm mx-auto py-6 p-4 border bg-white rounded-md shadow-md'>
            <div className=' w-full flex items-center place-content-center gap-4  py-4 pb-12 r  '>
                <h2 className=' logo-primary'>LoanIt</h2>
            </div>
            <form className=' flex flex-col gap-4'>
                <div className='flex items-center justify-between my-2'>
                {/* <div className=' p-4 bg-loan-primary flex items-center justify-between my-2'> */}
                    <h2 className=' heading-sub'>
                        SignIn
                    </h2>
                </div>
                <div>
                    <p className=' text-description text-red-600'>Invalid credentials</p>
                    <label for="helper-text" className="text-input-label ">Email</label>
                    <input type="email" className=' input-primary'placeholder=""  />
                </div>
                <div>
                <label for="helper-text" className="text-input-label ">Pin</label>
                    <input type="number" className=' input-primary'  placeholder="******" />
                </div>  
                <div className=' w-full my-4 mt-8'>
                    <button type="button" onClick={()=> navigate('/m')}   className="btn-primary">SIGNIN</button>
                </div>
                <div className=' w-full flex items-center place-content-center gap-4  py-4 '>
                    <p className='text-description text-sm text-loan-secondary'>Need an account? <Link to={'/signup'} className='text-loanBlue-primary'> SignUp</Link></p>
                </div>
            </form>
        </div>
      </div>
      <div className='hidden md:block md:w-3/6   h-full bg-cover bg-center bg-no-repeat' 
            style={{backgroundImage: `url(${logo2})` }}>
      </div>
        
    </div>
  )
}

export default SignIn
