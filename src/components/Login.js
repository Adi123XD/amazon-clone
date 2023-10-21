import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase.js'
function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then((auth) => navigate('/')).catch((error) => alert(error.message))
    }
    const register = (e) => {
        e.preventDefault();
        // if user is successfully created with email and password
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // console.log(auth)
                navigate('/')
            })
            .catch((error) => alert(error.message))
    }
    return (
        <div className='login'>
            <Link to='/'>
                <img className="login__logo" src="https://download.logo.wine/logo/Amazon_(company)/Amazon_(company)-Logo.wine.png" alt="amazon_logo" />
            </Link>
            <div className="login__container">
                <h1>Sign in</h1>
                <form action="/">
                    <h5>Email</h5>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <button type='submit' className='login__signinButton' onClick={signIn}>Sign in</button>
                </form>
                <p>By continuing, you agree to Amazon Fake Clone's Conditions of Use and Privacy Notice</p>
                <button className='login__registerButton' onClick={register}>Create your Amazon account</button>
            </div>
        </div>
    )
}

export default Login
