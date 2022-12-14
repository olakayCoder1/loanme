import {BrowserRouter as Router , Route, Routes , useNavigate } from "react-router-dom";
import { AuthContext } from "./contexts/ContextProvider";
import Welcome from "./welcome/Welcome";
import AdminWrapper from "./admin/AdminWrapper";
import Container from "./users";
import AccountContainer from "./users/account/AccountContainer";
import Onboarding from "./users/onboarding/Onboarding";
import SignIn from "./users/onboarding/SignIn";
import { useContext, useState } from "react";
import OfferCalculating from "./component/OfferCalculating";
import { ToastContainer, toast } from 'react-toastify';
import Load from "./Load";
import LoadingSpinner from "./LoadingSpinner";
import Offer from "./users/loan/Offer";
import OfferError from "./users/loan/OfferError";
import PageNotFound from "./PageNotFound";
import ResetPassword from './users/onboarding/ResetPassword'
import ForgetPassword from './users/onboarding/ForgetPassword'





function App() {
  
  const {  Loading ,  authUser  }= useContext(AuthContext)


  

  return (
    <div className=" w-full  text-loan-primary font-noto">
      {Loading  &&  <LoadingSpinner /> } 
      {/* <LoadingSpinner />  */}
        <ToastContainer />
        <Router>
          <Routes>
            
            {authUser  ? (
              <>
                <Route path="/admin/*"  element={<AdminWrapper />} />
                <Route path='/*' element={<Container />}  />
                <Route path='/s' element={<OfferCalculating />}  />
                <Route path='/account' element={<AccountContainer/>}  />
              </>
               
            ): (
              <>
                <Route path='/signup/*' element={<Onboarding />}  />
                <Route path='' element={<Welcome />}  />
                <Route path='/signin' element={<SignIn />}  />
                <Route path="/offer" element={<Offer />} />
                <Route path="/error" element={<OfferError />} />
                <Route path="/password/reset" element={<ResetPassword />} />
                <Route path="/password/reset/:token/:uuid/confirm" element={<ForgetPassword />} /> 
              </>
                              
            )}
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>      
    </div>
  );
}

export default App;
