import {BrowserRouter as Router , Route, Routes } from "react-router-dom";
import AdminWrapper from "./admin/AdminWrapper";
import WelcomeHeader from "./component/WelcomeHeader";
import Home from './Home';
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import Signup from "./pages/Signup";
import Container from "./users";

function App() {
  return (
    <div className=" w-full h-screen  text-loan-primary font-noto">
      <Router>
      <Routes>
        {/* <Route path='/signup/*' element={<Signup/>}  />
        <Route path='/dashboard' element={<Dashboard/>}  />
        <Route path='/admin/*' element={<AdminWrapper />}  />
        <Route path='/settings' element={<Settings />}  /> */}
        <Route path='/*' element={<Container />}  />
        <Route path='/w' element={<WelcomeHeader />}  />
      
      </Routes>
      </Router>
    </div>
  );
}

export default App;
