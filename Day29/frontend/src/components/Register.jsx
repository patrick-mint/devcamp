import React, {useRef} from 'react'


const Register = () => {
    const nameRef = useRef('')
    const usernameRef = useRef('')
    const passwordRef = useRef('')
    const confirmPasswordRef = useRef('')

    const handleRegister = async (e) => {
        e.preventDefault()

        const registerObj = {
            name: nameRef.current.value,
            username: usernameRef.current.value,
            password: passwordRef.current.value,
            confirmPassword: confirmPasswordRef.current.value
        }
        console.log(registerObj);
    }
  return (
    <div style= {{padding: '5rem'}}>
        <h3>Register</h3>
        <hr/>

        <form action="">

        <div>
            <label htmlFor="">Name : </label>
            <input type="text" ref = {nameRef} required />
        </div>
        <div>
            <label htmlFor="">Username : </label>
            <input type="text" ref = {usernameRef} required />
        </div>
        <div>
            <label htmlFor="">Password : </label>
            <input type="text" ref = {passwordRef} required />
        </div>
        <div>
            <label htmlFor="">Confirm Password : </label>
            <input type="text" ref = {confirmPasswordRef} required />
        </div>
        
        <button onClick = {handleRegister} > Register</button>
        
        </form>
        
        </div>
  )
}

export default Register