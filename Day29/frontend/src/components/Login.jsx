import React, {useRef} from 'react'


const Login = () => {

const usernameRef = useRef('')
const passwordRef = useRef('')

const handleLogin = async (e) => {
    e.preventDefault()

    const loginObj = {
        // name: nameRef.current.value,
        username: usernameRef.current.value,
        password: passwordRef.current.value,
        // confirmPassword: confirmPasswordRef.current.value
    }
    console.log(loginObj);
}
  return (
    <div style= {{padding: '5rem'}}>
        <h3>Login</h3>
        <hr/>

        <form action="">

      
        <div>
            <label htmlFor="">Username : </label>
            <input type="text" ref = {usernameRef} required />
        </div>
        <div>
            <label htmlFor="">Password : </label>
            <input type="text" ref = {passwordRef} required />
        </div>
    
        <button onClick = {handleLogin} > Register</button>
        
        </form>
        
        </div>
  )
}

export default Login