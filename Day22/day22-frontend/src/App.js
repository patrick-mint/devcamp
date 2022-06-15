import './App.css';
import Login from './components/Login';
import { Routes, Route } from 'react-router-dom';
import Profile from './components/Profile';
import RegisterForm from './components/RegisterForm';
import Logout from './components/Logout';

function App() {
  return (<>
  {/* <div className = "space" >
       <Link to="/register">Register |</Link>
        <Link to="/login"> Login |</Link>
        <Link to="/profile"> Profile</Link>
        </div> */}
   <Routes>
      <Route path="/" element={<Profile />}></Route>
       <Route path="/login" element={<Login />}></Route>
       <Route path="/profile" element={<Profile />}></Route>
       <Route path="/register" element={<RegisterForm />}></Route>
       <Route path="/logout" element={<Logout />}></Route>
       </Routes>

        
        

   </>
  );
}

export default App;
