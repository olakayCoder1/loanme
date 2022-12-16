import {BrowserRouter as Router , Route, Routes } from "react-router-dom";
import WelcomeHeader from "./component/WelcomeHeader";
import Welcome from "./welcome/Welcome";
import AdminWrapper from "./admin/AdminWrapper";
import Container from "./users";
import AccountContainer from "./users/account/AccountContainer";
import Onboarding from "./users/onboarding/Onboarding";

function App() {
  return (
    <div className=" w-full  text-loan-primary font-noto">
      <Router>
      <Routes>
        <Route path="/admin/*"  element={<AdminWrapper />} />
        <Route path='' element={<Welcome />}  />
        <Route path='/signup/*' element={<Onboarding />}  />
        <Route path='/account' element={<AccountContainer/>}  />
        {/* <Route path='/w' element={<WelcomeHeader />}  /> */}
        <Route path='m/*' element={<Container />}  />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
