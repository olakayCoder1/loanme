import React, { useContext, useEffect, useState } from 'react'
import WelcomeHeader from '../../component/WelcomeHeader'
import {BsBank2} from 'react-icons/bs'
import { AuthContext } from '../../contexts/ContextProvider'
import { useNavigate } from "react-router-dom";
import { bank_list } from './bank_list';


function BankAccount() {

    const {BACKEND_DOMAIN , setHasCompletedKyc, displayNotification ,setLoading , authUser , authToken , setAuthUser  } = useContext(AuthContext)
    let navigate = useNavigate()
    const [whyBvn , setWhyBvn] = useState(false)
    const [ banks , setBanks ] = useState(bank_list) 
    const [ ifAccountName , setIfAccountName ] = useState(false)
    const [ accountNumber , setAccountNumber ] = useState('')
    const [ bankCode , setBankCode ] = useState(null)
    const [ bankName , setBankName ] = useState(null)
    const [ accountName , setAccountName ] = useState('') //2136873152

    useEffect(()=> {
        if(authUser === null || authUser === 'undefined' ){
            navigate('/signin')
        }
        if(authUser.is_staff){
            navigate('/admin') 
        }
        if(!authUser.is_bvn){
            navigate('/setup/account/bvn')
        }
        if(!authUser.is_card){
            navigate('/setup/account/card')
        }
        if(authUser.is_bank){
            navigate('/')
        }
    })

    function handleVerify(){
        if(bankCode && accountNumber.length === 10 ){
            setLoading(true)
                const url = `https://api.paystack.co/bank/resolve?account_number=${accountNumber}&bank_code=${bankCode}`
                fetch(url,{ method : 'GET', headers:{ 'Authorization' : 'Bearer sk_test_14eca726d98d0f387f1aa6ae9f2e4f17d7c0e5a8'} })
                .then(res => res.json())
                .then(val => {
                    setLoading(false)
                    if(val.status){
                        setAccountName(val.data.account_name) 
                        setIfAccountName(true)
                        // console.log(val.data.account_name) 
                    }else{
                        displayNotification('error','Invalid account number for chosen bank') 
                    }
                })
                .catch(err => displayNotification('error','An error occurred') )
        }
    }

    async function handleSubmitCard(){
        if(bankName && accountNumber && accountName && bankCode ){
            const data = {
                'name': bankName, 
                'account_number': accountNumber,
                'account_name': accountName,
                'code': bankCode,
            }
            setLoading(true)
            const url = `${BACKEND_DOMAIN}/api/v1/account/bank/add`
            const response = await fetch(url,{
                    method : 'POST',
                    headers : {
                        'Content-Type': 'application/json',
                        'Authorization' : `Bearer ${authToken.access}`
                    },
                    body: JSON.stringify(data)
                })
            
                if(response.status === 201 || response.status === 200){
                    const data = await response.json()
                    setHasCompletedKyc(true)
                    setLoading(false)
                    setAuthUser((prev)=>{
                        return { ...prev,'is_bank':true , 'verification_completed':true}
                    })
                    localStorage.setItem('authUser', JSON.stringify(authUser))
                    displayNotification('success','Bank Account successfully added')
                    localStorage.setItem('hasCompletedKyc', JSON.stringify(true))
                    navigate('/') 
                }
                else{
                    displayNotification('error', 'There was an error adding bank. try again in 30 minutes .')
                }
        }else{
            displayNotification('error','Enter necessary detail')
        }       
    }

    function handleNumberChange(e){ 
        setAccountNumber(e.target.value)
    }

    function handleBankNameChange(e){
        setBankCode(e.target.value) 
        const what = e.target.value
        const search = banks.find(element => element.code === what);
        setBankName(search.name)
    }

    // console.log(bankName) 


  return (
    <div className=' w-full h-full p-4 md:px-20'>
        <WelcomeHeader name={authUser && authUser.first_name} />
        <div className=''>
            <h2 className=' font-medium text-base my-4'>Complete Account Setup</h2>
            <div className='text-loan-secondary flex justify-between items-center bg-loan-light p-4 px-8'>
                <p className=' font-bold text-base '>Add Bank Account</p>
                <p>3/3</p>
            </div>

            <div className='flex items-center justify-between pt-12'>
                <form className='w-full min-w-sm max-w-md flex flex-col gap-2'>

                    <label htmlFor="bank" className="block mb-1 text-sm font-medium text-loan-secondary  ">Select Bank</label>
                    <select id="bank"  className="input-primary"  onChange={handleBankNameChange}  >
                        <option value="">Select bank</option>
                    {banks ? banks?.map((val)=>{ 
                        return <option key={val.id} value={val.code}>{val.name}</option> 
                    }): (
                        <option value="">loading....</option>
                    )}
                    </select>

                    <label htmlFor="helper-text" className="block mb-1 text-sm font-medium text-loan-secondary  ">Account Number</label>
                    <input type="number" maxLength={10}  value={accountNumber}  onChange={handleNumberChange}
                        className="input-primary" id='account-number'  placeholder="" /> 
                    {ifAccountName && (
                        <>
                            <label htmlFor="helper-text" className="block mb-1 text-sm font-medium text-loan-secondary  ">Account Name</label>
                            <input type="text"  value={accountName}  
                            className="input-primary" id='account-number'  placeholder="" disabled/> 
                        </>
                    )}

                    {ifAccountName ? (
                        <button type="button" onClick={handleSubmitCard} className="w-full py-4 px-5 mr-2 my-4 text-sm font-medium focus:outline-none bg-loanBlue-primary text-white rounded-md border border-gray-200 ">
                            ADD BANK ACCOUNT
                        </button>
                    ): (
                        <button type="button" onClick={handleVerify}  className="text-center w-full py-3 px-5 mr-2 my-4 text-sm font-medium focus:outline-none bg-loanBlue-primary text-white rounded-md border border-gray-200 ">VERIFY</button>
                    )}
                    
                    <p onClick={()=> setWhyBvn(true)}  className=' text-loanBlue-primary underline-offset-2 underline cursor-pointer'>Why ask for Bank Account?</p>
                </form>

                <div className='hidden w-80 h-80 bg-loan-light lg:flex place-content-center items-center'>
                    <BsBank2 className=' w-32 h-32 text-gray-300'/>
                </div>
            </div>
        </div>


    {whyBvn && (
    <div className=' fixed w-full h-full top-0 left-0 right-0 bottom-0 bg-gray-600 z-50 bg-blend-overlay opacity-95  flex items-center place-content-center'>
        <div className="z-50 p-4  md:inset-0  h-full flex items-center place-content-center">
            <div className="relative w-full  max-w-md h-auto">
                <div className="relative bg-white rounded-lg shadow ">
                    <button onClick={()=> setWhyBvn(false)}  type="button" className="absolute top-3 right-2.5  text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center " data-modal-toggle="popup-modal">
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                    <div className="p-6 text-center flex justify-center place-content-center items-center flex-col gap-2">
                        <BsBank2 className='w-12 h-12 text-loanBlue-primary'/>
                        <h2 className=' text-loan-secondary text-lg font-bold'>Why ask Bank Account?</h2>
                        <p className="mb-5 text-sm font-normal text-gray-500">
                            Please note: This will be used for loan disbursement.To allow you have access to your loan after approval.
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

export default BankAccount
