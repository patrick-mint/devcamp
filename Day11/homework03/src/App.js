import './App.css';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./Pages/Home";
import Employee from "./Pages/Employee";
import EmployeeDetail from "./Pages/EmployeeDetail";
import Department from "./Pages/Department";
import ErrorPage from "./Pages/ErrorPage";
import Footer from "./Pages/Footer";
import Navbar from "./Pages/Navbar";

function App() {
  return (
<Router>
  <Navbar/>

  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="employee" element={<Employee/>}/>
    <Route path="employee-detail" element={<EmployeeDetail />} />
    <Route path="department" element={<Department />} />
    <Route path="employee/:department" element={<Employee />} />
    <Route path="*" element={<ErrorPage/>}/>
  </Routes>

  < Footer/>
</Router>
  )
}

export default App;
