import {BrowserRouter as Router , Route, Routes } from "react-router-dom";
import WelcomeHeader from "./component/WelcomeHeader";
import Welcome from "./welcome/Welcome";
import Container from "./users";
import AccountContainer from "./users/account/AccountContainer";
import Onboarding from "./users/onboarding/Onboarding";
import AuthContextProvider from "./context/AuthContextProvider";
import Login from "./users/Login";


function App() {
  return (
    <div className=" w-full  text-loan-primary font-noto">
      <AuthContextProvider >
      <Router>
      <Routes>
        {/* <Route path='' element={<Welcome />}  /> */}
        <Route path='/signin' element={<Login />}  />
        <Route path='/signup/*' element={<Onboarding />}  />
        <Route path='/account' element={<AccountContainer/>}  />
        {/* <Route path='/w' element={<WelcomeHeader />}  /> */}
        <Route path='/*' element={<Container />}  />
      </Routes>
      </Router>
      </AuthContextProvider>
    </div>
  );
}

export default App;
