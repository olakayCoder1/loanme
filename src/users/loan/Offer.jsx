import React, { useContext, useEffect, useState } from 'react'
import  Lottie from 'lottie-react'
import cal from '../../admin/pages/user_account/done_ok.json'
import {TbCurrencyNaira} from 'react-icons/tb'

import {MdOutlineLocalOffer, MdLocalOffer} from 'react-icons/md'
import {AiOutlinePlus} from 'react-icons/ai'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { AuthContext } from '../../contexts/ContextProvider'




function OfferCard({uuid , period , total , interest , handleChoose , chosenOffer  }){
    return (
        <>
        {chosenOffer === uuid ? (
        <div onClick={()=> handleChoose(`${uuid}`)}  className='border w-fit flex flex-col gap-2 border-[#f8f0e7] rounded-md bg-[#f8f0e7] p-6 px-3 cursor-pointer hover:border-loanBlue-primary '>
            <p className='p-4 rounded-md bg-[#e6a969] w-fit'>
                <MdOutlineLocalOffer className=' w-5 h-5 text-white' />
            </p>
            <h3>{period} months</h3>
            <h2 className=' flex  items-center  text-xl font-normal text-gray-800'>
                <TbCurrencyNaira />
                <span>{total}</span>
            </h2>
            <h2 className=' flex  items-center  text-base font-normal text-gray-800 bg-white p-2 rounded-md px-4'>
                <AiOutlinePlus />
                <span>{interest}</span>
            </h2>
        </div>
        ): (
        <div onClick={()=> handleChoose(`${uuid}`)}  className='border w-fit flex flex-col gap-2 border-red-400 rounded-md bg-red-400 p-6 px-3 cursor-pointer hover:border-loanBlue-primary '>
            <p className='p-4 rounded-md bg-[#e6a969] w-fit'>
                <MdOutlineLocalOffer className=' w-5 h-5 text-white' />
            </p>
            <h3>{period} months</h3>
            <h2 className=' flex  items-center  text-xl font-normal text-gray-800'>
                <TbCurrencyNaira />
                <span>{total}</span>
            </h2>
            <h2 className=' flex  items-center  text-base font-normal text-gray-800 bg-white p-2 rounded-md px-4'>
                <AiOutlinePlus />
                <span>{interest}</span>
            </h2>
        </div>
        ) }
        
        </>
        
    )
}


function Offer() {
    let { app }= useParams()
    let navigate = useNavigate()
    const [appLoanOffer, setAppLoanOffer ] = useState(null)
    const [chosenOffer, setChosenOffer ] = useState(null)
    const [offerAmount, setOfferAmount] = useState(null)
    const {BACKEND_DOMAIN ,  setValidLoanPrice,  authToken ,setLoading, setAuthUser , authUser ,displayNotification } = useContext(AuthContext)




    function handleChoose(uuid){
        setChosenOffer(uuid)
    }

    async function sendConfirmChosen(){
        if(chosenOffer){
            setLoading(true)
            const m = {
                "offer_uuid": chosenOffer
            }
            const url = `${BACKEND_DOMAIN}/api/v1/loans/loanoffer/accept`
            const response = await fetch(url,{method : 'POST', headers : {
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${authToken?.access}`
                },
                body : JSON.stringify(m)
                },
              )
            
              if(response.status == 200){
                    const data = await response.json()
                    setLoading(false)
                    displayNotification('success','Your money is on the way')
                    navigate('/')
              }
              else if(response.status == 400){
                const data = await response.json()
                displayNotification('error', `${data['detail']}`)
              }
    
        }
        else{
            displayNotification('error','You must select an offer to proceed')
        }
    };
    


    
    
    useEffect(()=>{

        async function  fetchLoanOffers(){
            const url = `${BACKEND_DOMAIN}/api/v1/users/applications/${app}/offers`
            const response = await fetch(url,{method : 'GET', headers : {
            'Content-Type': 'application/json',
            'Authorization' : `Bearer ${authToken?.access}`
          }},)
        if(response.status === 200){
            const data = await response.json()
            setOfferAmount(data[0].offer_amount)
            setAppLoanOffer(data)

        }
        else if (response.status === 400){
            const data = await response.json()
            displayNotification('error', `${data['detail']}`)
            navigate('/')
        } else if(response === 404){
            const data = await response.json()
            displayNotification('error', `${data['detail']}`)
            navigate('/')
        }
        }
        fetchLoanOffers() 
    },[])

  return (
    <div className=' w-full mx-auto text-sm font-normal p-4'>
        <Lottie animationData={cal} className='w-28 h-28   text-center mx-auto'/>
        <h2 className='text-center text-lg font-normal text-loanBlue-primary'>Congratulations!</h2>
        <p className=' text-center'>Select your repayment period to proceed
            As part of our ongoing efforts to provide the best service to learners, customers,
             and partners, we will be updating some of our policies. Effective January 1, 
             2023, an updated Terms of Use will be in place on Coursera
        </p>
        <div className='flex flex-col items-center font-medium text-base text-gray-800 text-center my-6'>
            <h2 className=' text-sm font-bold'>Loan Amount</h2>
            <h2 className=' flex  items-center  text-3xl font-medium text-gray-800'>
                <TbCurrencyNaira />
                <span>{offerAmount}</span>
            </h2>
        </div>

        <h2 className=' text-center text-loanBlue-primary'>Choose a repayment period to proceed</h2>
        <div className=' p-4 flex gap-4 overflow-x-auto'>
            {appLoanOffer ? appLoanOffer.map((index , val )=>{
                return ( <OfferCard key={val} 
                    chosenOffer={chosenOffer}
                    handleChoose={handleChoose}  
                    period={index.period}   
                    uuid={index.uuid}
                    total={index.total_repayment}
                    interest={index.interest}/> )
            }
            ): (
                <>Loading.....</>
            )}
            
        </div>
        <div className='pt-2 pb-4 flex flex-col gap-3'>
            {chosenOffer && <button onClick={sendConfirmChosen} className=' btn-primary my-12'>PROCEED</button>}
        </div>
    </div>
  )
}

export default Offer
