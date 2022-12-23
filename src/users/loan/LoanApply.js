import React, { useContext, useEffect, useState } from 'react'
import {Route, Routes, useNavigate } from "react-router-dom";
import { AuthContext } from '../../contexts/ContextProvider';
import LoanApplyAddress from './LoanApplyAddress';
import LoanApplyDetail from './LoanApplyDetail';
import LoanApplyEmployment from './LoanApplyEmployment';
import LoanApplyPersonal from './LoanApplyPersonal';
import LoanOffer from './LoanOffer';
import Offer from './Offer';


function LoanApply() {

  const {authToken , setAuthToken , authUser , displayNotification , BACKEND_DOMAIN  } = useContext(AuthContext)
  let navigate = useState(null)  

  const [user, setUser] = useState(null)
  const [ loanApplicationData , setLoanApplicationData ] = useState( ()=> JSON.parse(localStorage.getItem('loanApplicationData'))||{
    'first_name':'',
    'last_name':'',
    'phone':'',
    'email':'',
    'gender':'',
    'date_of_birth': '',
    'marital_status' : '',
    'children' : '',
    'education': ' ',
    'employment':'',
    'income':'',
    'employer':'',
    'years_at_work':'',
    'residence':'',
    'years_at_residence':'',
    'rent_per_year':'',
    'amount':'',
    'reason':'',
  })


  function handleValueChange( key , val ){
    setLoanApplicationData( prev => {
      return { ...prev , [key]: val }
    })
    localStorage.setItem('loanApplicationData',JSON.stringify(loanApplicationData))
  }


  useEffect(()=>{ 
        
    async  function fetchUser(){
        if(authUser === null || authUser === 'undefined' ){
            navigate('/signin')
        }
        const url2 = `${BACKEND_DOMAIN}/api/v1/account` 
        const response = await fetch(url2 , {method : 'GET', headers : {
            'Content-Type': 'application/json',
            'Authorization' : `Bearer ${authToken?.access}`
        }})

        if(response.status === 200){
            const data = await response.json()
            setUser(data)
            handleValueChange('first_name',data.first_name)
            handleValueChange('last_name',data.last_name)
            handleValueChange('email',data.email)
            handleValueChange('phone',data.phone) 
            if(data.gender){
              handleValueChange('gender', 'Male')
            }
            if(data.date_of_birth){
              handleValueChange('date_of_birth', data.date_of_birth)
            }
            console.log(data)
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
  useEffect(()=>{
    // handleValueChange('first_name',authUser.first_name)
    // handleValueChange('last_name',authUser.last_name)
    // handleValueChange('email',authUser.email)
    // handleValueChange('phone',authUser.phone) 
  },[])

   console.log(loanApplicationData) 

  return ( 
    <div className=' w-full h-full'>
      <div>
        <Routes>
            <Route path='' element={<LoanApplyPersonal user={user} loanApplicationData={loanApplicationData} handleValueChange={handleValueChange} />}/>
            <Route path='/education-employment' element={<LoanApplyEmployment loanApplicationData={loanApplicationData} handleValueChange={handleValueChange}/>}/>
            <Route path='/address' element={<LoanApplyAddress loanApplicationData={loanApplicationData} handleValueChange={handleValueChange}/>}/>
            <Route path='/amount' element={<LoanApplyDetail loanApplicationData={loanApplicationData} handleValueChange={handleValueChange}/>}/>
            {/* <Route path='/offer' element={<LoanOffer loanApplicationData={loanApplicationData} handleValueChange={handleValueChange}/>}/> */}
            <Route path='/:app/offer' element={<Offer loanApplicationData={loanApplicationData} handleValueChange={handleValueChange}/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default LoanApply
