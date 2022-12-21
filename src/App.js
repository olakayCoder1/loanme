import {BrowserRouter as Router , Route, Routes } from "react-router-dom";
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






function App() {
  const { isAuthenticated , Loading , setLoading  }= useContext(AuthContext)
  return (
    <div className=" w-full  text-loan-primary font-noto">
      {Loading  && <div className="absolute w-full h-full  left-0 bottom-0 top-0">
        <Load /> 
      </div>}
        <ToastContainer />
        <Router>
          <Routes>
            
            {isAuthenticated  ? (
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
              </>
              
            )}
          </Routes>
        </Router>      
    </div>
  );
}

export default App;
