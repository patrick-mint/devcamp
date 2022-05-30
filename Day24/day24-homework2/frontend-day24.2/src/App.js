import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./Pages/Home";
import Logout from "./Pages/Logout";
import Dashboard from "./Pages/Dashboard";
import Warehouse from "./Pages/Warehouse";
import Profile from "./Pages/Profile";
import RegisterForm from "./Pages/RegisterForm";
import Stock from "./Pages/Stock";
import ErrorPage from "./Pages/ErrorPage";
import Footer from "./Pages/Footer";
import Navbar from "./Pages/Navbar";
import { CurrencyContext } from "./CurrencyContext";

const token = localStorage.getItem('token') || null

function App() {

  return (
    <>
      <CurrencyContext.Provider value={token}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/stock" element={<Stock />} />
            <Route path="/warehouse" element={<Warehouse />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>

          < Footer />
        </Router>
      </CurrencyContext.Provider>

    </>
  )
}

export default App;
