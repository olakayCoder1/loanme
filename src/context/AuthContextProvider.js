import React, {  useState } from "react";
import { createContext  } from "react";
import { authenticatedRoute } from "../component/Utils";



export const AuthContext = createContext()




export default function AuthContextProvider({children}){

    const BACKEND_DOMAIN = 'http://127.0.0.1:8000' 
    const FRONTEND_DOMAIN = 'http://127.0.0.1:3000'                    
    const [ authUser , setAuthUser  ] = React.useState(()=> JSON.parse(localStorage.getItem('authUser'))|| null);



     const loginAccount = async (e) => {
         e.preventDefault();
         if(e.target.username.value !== null || e.target.password.value !== '' || e.target.username.value !== '' || e.target.password.value !== null  ){
            const response = await fetch(`${BACKEND_DOMAIN}/login`, {
                method: 'POST',
                headers : {
                    'content-type' : 'application/json'
                },
                body : JSON.stringify({'username': e.target.username.value , 'password': e.target.password.value})       
            })
            if(response.status === 200){ 
               const data = await response.json();   
                localStorage.setItem('authUser', JSON.stringify(data))
                setAuthUser(data)
                 window.location['href'] = `${FRONTEND_DOMAIN}/`
            }
            // LOGOUT USER IF REFRESH TOKEN EXPIRED
           if(response.statusText === 'Unauthorized'){
               console.log('Error')
           }
         }else{

        }     
    } 
     
     
 
    
    
 




































    
 
 
 const value  = {    authUser ,
                     loginAccount , 
                     BACKEND_DOMAIN,
                  }
     


    
    return (
        <AuthContext.Provider value={value} >
            {children}
        </AuthContext.Provider>
    )
}