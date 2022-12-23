import React, { useContext, useEffect, useState } from 'react'
import LoanDetailHeader from '../../component/LoanDetailHeader'
import {TbCurrencyNaira} from 'react-icons/tb'
import {BsCircle} from 'react-icons/bs'
import {FcOk} from 'react-icons/fc'
import { AuthContext } from '../../contexts/ContextProvider'
import { useNavigate, useParams } from "react-router-dom";


function LoanRepayment() {
    let navigate = useNavigate()
    let { uuid} = useParams()
    const {setHasValidLoan, setValidLoanPrice , displayNotification , BACKEND_DOMAIN , authToken} = useContext(AuthContext)
    const [amountToPayType, setAmountToPayType] = useState(null)
    const [amountToPay, setAmountToPay] = useState(null)
    const [loan, setLoan] = useState(null)

    function handleClickFull(){
        setAmountToPay(loan.owing_loan)
        setAmountToPayType('full')
    }
    function handleClickNext(){
        setAmountToPay(loan.next_payment_amount)
        setAmountToPayType('next')
    }


    useEffect(()=>{ 
        
        async  function fetchUser(){
            const url2 = `${BACKEND_DOMAIN}/api/v1/loans/${uuid}` 
            const response = await fetch(url2 , {method : 'GET', headers : {
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${authToken?.access}`
            }})

            if(response.status === 200){
                const data = await response.json()
                setLoan(data)
            }
            if(response.status === 400){
                const data = await response.json()
                displayNotification('error', data['detail'])
            }
            if(response.status === 404){
                const data = await response.json()
                displayNotification('error', data['detail'])
            }
            if(response.status == 401){
                localStorage.clear()
                navigate('/signin')
            }
        }

        fetchUser()
    },[])

    async function handleSubmit(){
        displayNotification('success','Repayment successfully')
        setValidLoanPrice('0.00')
        setHasValidLoan(false)
        if(amountToPay){
            const data = { 'type': amountToPayType}
            const url1 = `${BACKEND_DOMAIN}/api/v1/loans/${uuid}/repay` 
            const response = await fetch(url1,{method : 'POST', headers : {
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${authToken?.access}`
                },
                body : JSON.stringify(data)
            },)
            if(response.status === 200){
                displayNotification('success','Payment successful')
                // localStorage.setItem('hasValidLoan', JSON.stringify(false))
                navigate('/')
            }
            if(response.status == 400){
                const v = response.json()
                displayNotification('error', v['detail'])
            }
            if(response.status == 401){
                localStorage.clear()
                navigate('/signin')
            }
        }
        // localStorage.setItem('hasValidLoan', JSON.stringify(false))
        // localStorage.setItem('validLoanPrice', JSON.stringify('0.00'))
        // navigate('/')
    }

  return (
    <div className='p-4 w-full h-full'>
        <div>
            <div onClick={handleClickFull} className=' flex items-center justify-between border p-4  border-loan-primary rounded-md cursor-pointer my-4' >
                <div className=' flex flex-col text-xl font-medium'>
                    <p className=' flex items-center '>
                        <TbCurrencyNaira />
                        <span>{loan && loan.owing_loan}</span>
                    </p>
                    <span className=' text-sm font-normal text-green-600'>Full payment</span>
                </div>
                {amountToPayType === 'full' ? (
                    <FcOk className=' w-8 h-8'/>
                ): (
                    <BsCircle className=' w-8 h-8'/>
                )}
            </div>
            <div onClick={handleClickNext} className=' flex items-center justify-between border p-4  border-loan-primary rounded-md cursor-pointer' >
                <div className=' flex flex-col text-xl font-medium'>
                    <p className=' flex items-center '>
                        <TbCurrencyNaira />
                        <span>{loan && loan.next_payment_amount}</span>
                    </p>
                    <span className=' text-sm font-normal text-green-600'>Next payment</span>
                </div>
                {amountToPayType === 'next' ? (
                    <FcOk className=' w-8 h-8'/>
                ): (
                    <BsCircle className=' w-8 h-8'/>
                )}
            </div>
        </div>
        <div className=' w-full my-6'>
            {amountToPay ? (
                <button  type="button" onClick={handleSubmit}  className=" btn-primary">
                        PAY {amountToPay}</button>
            ): (
                <button onClick={()=> displayNotification('error','Select a payment type')}  type="button" className="btn-primary ">
                    SELECT PAYMENT TYPE
                </button>
            )}
            
        </div>

    </div>
  
  )
}

export default LoanRepayment
