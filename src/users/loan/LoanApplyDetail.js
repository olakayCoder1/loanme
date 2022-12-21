import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../../contexts/ContextProvider';
import OfferCalculating from '../../component/OfferCalculating';

function LoanApplyDetail() {
    const {setValidLoanPrice } = useContext(AuthContext)

    let navigate = useNavigate()
    const [loading , setLoading] = useState(false)

    const customLoad = () => {  
        setLoading(!loading)  
        if(loading === false){
            navigate('/')
        }
    }
    function handleSubmit(){
        setLoading(true)
        demo()
    }


    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    async function demo() {
        for (let i = 0; i < 5; i++) {
            await sleep(i * 1000);
        }
        setLoading(false)
        navigate('/loan/request/offer')
        
    }
    
    

  return (
    <div className=' py-4'>
        <>{loading ? (
            <OfferCalculating />
        ):(
            <>
            <div className='text-loan-secondary flex justify-between items-center bg-loan-light p-4 px-8'>
                <p className=' font-bold text-base '>Loan Details</p>
                <p>4/4</p>
            </div>

            <form className='w-full  flex flex-col gap-2 my-8'>
                <label htmlFor="helper-text" className="block mb-1 text-sm font-medium text-loan-secondary  ">Loan Amount</label>
                <input type="number"   className="input-primary"  placeholder="" /> 

                <label htmlFor="bank" className="block mb-1 text-sm font-medium text-loan-secondary  ">Loan Reason</label>
                <select id="bank"   className="input-primary"   >
                <option selected disabled hidden></option>
                <option value="fisrt_bank">Education</option>
                <option value="fisrt_bank">Medical</option>
                <option value="fisrt_bank">Rent</option>
                <option value="fisrt_bank">Travel</option>
                <option value="fisrt_bank">Business</option>
                <option value="fisrt_bank">Goods</option>
                <option value="fisrt_bank">Events</option>
                <option value="fisrt_bank">Household</option>
                <option value="fisrt_bank">Other</option>
                <option value="uba">Rented</option>
                </select>
                <div className=' w-full flex gap-2 py-6'>
                    <button type="button" onClick={()=> navigate('/loan/request/address')} className=" btn-primary-white">PREVIOUS</button>
                    <button type="button" onClick={handleSubmit} className="btn-primary">CONTINUE</button>
                </div>
            </form>
            </>
            )}  
        </>
        
    </div>
  )
}

export default LoanApplyDetail
