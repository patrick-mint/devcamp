import React from 'react'
import { useNavigate} from 'react-router-dom';

function ErrorPage() {
  let navigate = useNavigate();
  return (
    <>
   <h1>This page does not exist!</h1>
   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
   <p><button
      onClick={() => {
        navigate("/");
      }}>
        {''}
        Back to Homepage</button></p>
   </>
   );
}

export default ErrorPage;