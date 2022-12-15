import React from 'react'
import laptop from '../assets/laptop.jpeg'
import WelcomeNav from './WelcomeNav';
import WelcomeFooter from './WelcomeFooter';
import { useNavigate } from 'react-router-dom';
import WelcomeFlow from './WelcomeFlow';


const Hero = () => {

  let navigate = useNavigate()
  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img' style={{ backgroundImage: `url(${laptop})`}}>
      {/* Overlay */}
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]' />
      <div className='p-5 text-white z-[2] mt-[-10rem]'>
        <h2 className='text-5xl font-bold font-logo'>Hey, find the perfect loan for you...</h2>
        {/* <Typed className='text-5xl font-bold font-logo'
                    strings={['Hey, find the perfect loan for you...']}
                    typeSpeed={50} showCursor={false}
                /> */}

        <p className='py-5 text-xl'>Need some fast case? Bad credit history? Try LoanIt and feel secure in your future</p>
        <button onClick={()=> navigate('/register')} className='px-8 py-2 border'>Get started</button>
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

