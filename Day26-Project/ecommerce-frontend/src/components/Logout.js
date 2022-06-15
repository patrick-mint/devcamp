import '../App.css';
import { useNavigate, Link } from 'react-router-dom';

function Logout() {

  let navigate = useNavigate();
  const token = localStorage.getItem("token");

  if (token) {
    localStorage.removeItem("token");
  }
window.location.href = "/";
  return (

    <h1 className="center">we are logging you out...</h1>
  )
}

export default Logout;