import {BrowserRouter as Router , Route, Routes } from "react-router-dom";
import AuthContextProvider from "./contexts/ContextProvider";
import WelcomeHeader from "./component/WelcomeHeader";
import Welcome from "./welcome/Welcome";
import AdminWrapper from "./admin/AdminWrapper";
import Container from "./users";
import AccountContainer from "./users/account/AccountContainer";
import Onboarding from "./users/onboarding/Onboarding";
import SignIn from "./users/onboarding/SignIn";
import { useState } from "react";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  return (
    <div className=" w-full  text-loan-primary font-noto">
      <AuthContextProvider >
        <Router>
          <Routes>
            <Route path="/admin/*"  element={<AdminWrapper />} />
            {isAuthenticated ? (
              <Route path='/*' element={<Container />}  />
            ): (
              <Route path='' element={<Welcome />}  />
            )}
            <Route path='/signin' element={<SignIn />}  />
            <Route path='/signup/*' element={<Onboarding />}  />
            <Route path='/account' element={<AccountContainer/>}  />
            {/* <Route path='/w' element={<WelcomeHeader />}  /> */}
            
          </Routes>
        </Router>
      </AuthContextProvider>
      
    </div>
  );
}

export default App;
