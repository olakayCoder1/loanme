import {BrowserRouter as Router , Route, Routes } from "react-router-dom";
import AdminWrapper from "./admin/AdminWrapper";
import Home from './Home';
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import Signup from "./pages/Signup";

function App() {
  return (
    <div className=" w-full h-screen bg-gray-200 text-loan-primary font-noto">
      <Router>
      <Routes>
        <Route path='/signup/*' element={<Signup/>}  />
        <Route path='/dashboard' element={<Dashboard/>}  />
        <Route path='/admin/*' element={<AdminWrapper />}  />
        <Route path='/settings' element={<Settings />}  />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
