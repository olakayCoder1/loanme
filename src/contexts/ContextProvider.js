import React, {  useEffect, useState } from "react";
import { createContext  } from "react";
import {fetchProducts} from './utils/functions.js'

export const AuthContext = createContext()




export default function AuthContextProvider({children}){
    
    const apiDomainName = 'https://habibi-and-habibat-api.herokuapp.com'  
    // const apiDomainName = 'http://127.0.0.1:8000' 
    // const domainNameFrontend = 'https://habibi-and-habiba.vercel.app/' 
    const domainNameFrontend = 'http://127.0.0.1:3000'                    
    // TOKEN STATE 
    // USER DETAIL STATE 
    const [ authUser  ] = React.useState(()=> JSON.parse(localStorage.getItem('authUser'))|| null);
    // LOADING STATE TO DETERMINE WHEN TO UPDATE TOKEN 
    const [ loginError, setLoginError] = useState(false)

    const [ Loading , setLoading] = useState(null)
     // REFRESH TOKEN WHILE USER STILL ONLINE 
        const registerUser = async (e) => {
         e.preventDefault();
         if ( e.target.password.value === e.target.password2.value){

            const data = {
                'first_name' : e.target.first_name.value ,
                'last_name' : e.target.last_name.value ,
                'username' : e.target.username.value ,
                'email': e.target.email.value,
                'password': e.target.password.value,
                'password2': e.target.password2.value,
                'gender' : e.target.gender.value

            }

    
             const response = await fetch(`${apiDomainName}/api/auth/register/`, {
                 method: 'POST',
                 headers : {
                     'content-type' : 'application/json'
                 },
                 body : JSON.stringify(data)
                 
             })
             if(response.status === 200){    
                 alert('Your account is successfully created you can now login')
                 window.location['href'] = `${domainNameFrontend}/account/login`;
             }
         
             if(response.status === 400){
                 if (data.email){
 
                    //  setAuthEmailError(data.email[0])
                    //  setFormEmailError(true)
                        
                     }
                 
             }
             }else{
                //  setFormPasswordError('Password does not match')
                //  setAuthPasswordError(true)
             }
    } 



    const [ isAdminUser, setIsAdminUser  ]  = useState(()=> JSON.parse(localStorage.getItem('isAdminUser'))|| false )
    const [ hasCompletedKyc , setHasCompletedKyc  ]  = useState(()=> JSON.parse(localStorage.getItem('hasCompletedKyc'))|| false )
    const [ hasCompletedSignUp , setHasCompletedSignUp  ]  = useState(()=> JSON.parse(localStorage.getItem('hasCompletedSignUp'))|| false )
    const [ hasValidLoan , setHasValidLoan  ]  = useState(()=> JSON.parse(localStorage.getItem('hasValidLoan'))|| false )
    const [ validLoanPrice , setValidLoanPrice  ]  = useState(()=> JSON.parse(localStorage.getItem('validLoanPrice'))|| '0.00' )
    const [ isAuthenticated, setIsAuthenticated  ]  = useState(()=> JSON.parse(localStorage.getItem('isAuthenticated'))|| false )
 


    useEffect(() => {
        setIsAuthenticated(JSON.parse(localStorage.getItem('isAuthenticated')))
        setHasCompletedKyc(JSON.parse(localStorage.getItem('hasCompletedKyc')))
        setHasValidLoan(JSON.parse(localStorage.getItem('hasValidLoan')))
        setValidLoanPrice(JSON.parse(localStorage.getItem('validLoanPrice')))


    },[isAuthenticated, hasCompletedKyc, hasValidLoan , validLoanPrice])


    function logout(){
        localStorage.clear()
        // localStorage.setItem('isAuthenticated', JSON.stringify(false))
        // localStorage.setItem('hasCompletedKyc', JSON.stringify(false))
        // localStorage.setItem('isAdminUser', JSON.stringify(false))
        // localStorage.setItem('hasValidLoan', JSON.stringify(false))
        // localStorage.setItem('validLoanPrice', JSON.stringify('0.00'))
        // localStorage.setItem('hasCompletedSignUp', JSON.stringify(false))

        window.location.pathname = '/'
    }

    function login(){
        setIsAuthenticated(true)
        localStorage.setItem('isAuthenticated', JSON.stringify(true))

    }









 const value = { 
    registerUser, logout,
    Loading, login ,validLoanPrice , setValidLoanPrice ,
    isAdminUser, setIsAdminUser ,hasValidLoan , setHasValidLoan ,
    hasCompletedKyc , setHasCompletedKyc,
    hasCompletedSignUp , setHasCompletedSignUp,
    isAuthenticated , setIsAuthenticated 
 }
     



    
    return (
        <AuthContext.Provider value={value} >
            {children}
        </AuthContext.Provider>
    )
}