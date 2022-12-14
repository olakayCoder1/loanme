import React, { useContext, useState, useEffect  } from 'react'
import WelcomeHeader from '../../component/WelcomeHeader'
import {BsFillCreditCard2BackFill} from 'react-icons/bs'
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../../contexts/ContextProvider'
import { usePaystackPayment } from 'react-paystack';


function DebitCard() {

    let navigate = useNavigate()
    const [whyBvn , setWhyBvn] = useState(false)
    const {BACKEND_DOMAIN ,displayNotification ,setLoading ,authToken, authUser, fetchUser  , setAuthUser} = useContext(AuthContext)
    const [ paymentData , setPaymentData ] = useState({})
    

    useEffect(()=> {
        fetchUser()
        if(authUser === null || authUser === 'undefined' ){
            navigate('/signin')
        }
        else if(authUser.is_staff){
            navigate('/admin') 
        }
        else if(!authUser.is_bvn){
            navigate('/setup/account/bvn')
        }else if(authUser.is_card){
            navigate('/setup/account/bankaccount')
        }
    })
    // 2136873152 

    const onSuccess = (ref) => {
        const data = {
            'reference': ref.reference,
            'type':'success'
        }
        setLoading(true)
        fetch(`${BACKEND_DOMAIN}/api/v1/payment/verify`, {
            method : 'POST',
            headers : {
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${authToken.access}`
            },
            body: JSON.stringify(data)
        })  
        .then(res => res.json())
        .then(data =>{
            setLoading(false)
            setAuthUser((prev)=>{
                return { ...prev,'is_card':true }
            })
            localStorage.setItem('authUser', JSON.stringify(authUser))
            displayNotification('success', 'Debit card successfully added')
            navigate('/setup/account/bankaccount'); 
        })
        .catch(err => console.log(err)) 
      };

    const onClose = () => {
        // const data = {'reference': paymentData.reference,'type':'failed'}
        // fetch(`${BACKEND_DOMAIN}/api/v1/payment/verify`, { 
        //     method : 'POST',
        //     headers : {
        //         'Content-Type': 'application/json',
        //         'Authorization' : `Bearer ${authToken.access}`
        //     },
        //     body: JSON.stringify(data)
        // })  
        // .then(res => res.json())
        // .then(data =>{ console.log(data)  })
        // .catch(err => console.log(err)) 
      };


    async function handleAddDebit(){
        const response = await fetch(`${BACKEND_DOMAIN}/api/v1/account/debit/add`, {
            method : 'GET',
            headers : {
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${authToken.access}`
            },}) 
        
        if(response.status === 200 ){
            const data = await response.json()
            const config = { reference: data.reference, email: data.email, amount: 5000,  publicKey: data.paystack_public  };
            setPaymentData(config)
            document.getElementById('pay-with-paystack').click()

        }else if(response.status === 400){
            setAuthUser((prev)=>{
                return { ...prev,'is_card':true }
            })
            localStorage.setItem('authUser', JSON.stringify(authUser))
            displayNotification('success', 'Debit card successfully added')
            displayNotification('error','You already have a card linked')
        }
        else{
            displayNotification('error','An error occurred')
        }

    }

    const initializePayment = usePaystackPayment(paymentData);

  return (
    <div className=' w-full h-full p-4 md:px-20'>
        <WelcomeHeader name={authUser && authUser.first_name} />
        <div className=''>
            <h2 className=' font-medium text-base my-4'>Complete Account Setup</h2>
            <div className='text-loan-secondary flex justify-between items-center bg-loan-light p-4 px-8'>
                <p className=' font-bold text-base '>Add Debit Card</p>
                <p>2/3</p>
            </div>
            <button className='hidden' id='pay-with-paystack' onClick={() => { initializePayment(onSuccess, onClose)  }}>Paystack</button>
            <div className='flex items-center justify-between pt-12'>
                <form className='w-full min-w-sm max-w-md flex flex-col gap-2'>
                    <button type="button" onClick={handleAddDebit}   className="my-4 btn-primary">CLICK TO LINK DEBIT CARD</button>
 
                    <p onClick={()=> setWhyBvn(true)}  className=' text-loanBlue-primary underline-offset-2 underline cursor-pointer w-fit'>Why ask for debit card?</p>
                </form>
                <div className='hidden w-80 h-80 bg-loan-light lg:flex place-content-center items-center'>
                    <BsFillCreditCard2BackFill className=' w-32 h-32 text-gray-300'/>
                </div>
            </div>
        </div>
   
    {whyBvn && (
    <div className=' fixed w-full h-full top-0 left-0 right-0 bottom-0 bg-gray-600 z-50 bg-blend-overlay  opacity-95 flex items-center place-content-center'>
        <div className="z-50 p-4  md:inset-0  h-full flex items-center place-content-center">
            <div className="relative w-full max-w-md h-auto">
                <div className="relative bg-white rounded-md shadow ">
                    <button onClick={()=> setWhyBvn(false)}  type="button" className="absolute top-3 right-2.5  text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center " data-modal-toggle="popup-modal">
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                    <div className="p-6 text-center flex justify-center place-content-center items-center flex-col gap-2">
                        <BsFillCreditCard2BackFill className='w-12 h-12 text-loanBlue-primary'/>
                        <h2 className=' text-loan-secondary text-lg font-bold'>Why ask for Debit Card?</h2>
                        <p className="mb-5 text-sm font-normal text-gray-500">
                            Please note: This will be used for your loan auto repayment when due.
                        </p>
                        <button onClick={()=> setWhyBvn(false)}  type="button" 
                        className="w-full py-3 px-5 mr-2 my-4 text-sm font-medium focus:outline-none bg-loanBlue-primary text-white rounded-md border border-gray-200 ">GOT IT!</button>

                    </div>
                </div>
            </div>
        </div>
    </div>
    )}
    



    

    </div>
  )
}

export default DebitCard
