import React, { useContext, useEffect } from 'react'
import laptop from '../assets/loanp10.jpeg'
import WelcomeNav from './WelcomeNav';
import WelcomeFooter from './WelcomeFooter';
import { useNavigate } from 'react-router-dom';
import WelcomeFlow from './WelcomeFlow';
import { AuthContext } from '../contexts/ContextProvider';


const Hero = () => {

  let navigate = useNavigate()
  const { authUser } = useContext(AuthContext)
  
  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img' style={{ backgroundImage: `url(${laptop})`}}>
      {/* Overlay */}
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]' />
      <div className='p-5 text-white z-[2] mt-[-10rem] text-center'>
        <h2 className='text-5xl font-bold font-logo'>Hey, find the perfect loan for you...</h2>
        <p className='py-5 text-xl'>Need some fast case? Bad credit history? Try LoanIt and feel secure in your future</p>
        <button onClick={()=> navigate('/signup')} className='px-8 py-4 border bg-white text-black/70 font-bold duration-500 hover:bg-black/70 hover:text-white'>Get started</button>
      </div>
    </div>
  );
};


function Welcome() {
  return (
    <div className=''>
      <WelcomeNav />
      <Hero />
      <WelcomeFlow />
      <WelcomeFooter />
    </div>
  )
}

export default Welcome


