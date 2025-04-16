import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'

const Login = () => {
    const navigate = useNavigate()
    const hanldeLogin = () => {
        navigate('./Home')
    }
  return (
        
        <div class="login-container">
            <h1 class="login-title">Welcome</h1>
            <p className='login-subtitle'>please click below to sign in</p>
            <button class="login-button" onClick={hanldeLogin}>Login</button>


        </div>

  )
}

export default Login
