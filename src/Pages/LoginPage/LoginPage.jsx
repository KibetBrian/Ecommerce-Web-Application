import React, { useState } from 'react'
import './loginPage.scss'
import {Link} from 'react-router-dom'
import { login } from '../../Redux/apiCall';
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';


function LoginPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword]= useState('');
    const dispatch = useDispatch();
    const user = useSelector(state=>state.user);

    const isFetching = user.isFetching;
    const error = user.error;
    console.log('This is error state', error)
    
    const handleLogin = ()=>
    {
        login(dispatch, {email, password});
    }
    
    return (
        <div className = "loginPage">
           <div className="loginWrapper">
               <h1 className = "loginTitle">Sign In</h1>
               <p className = "newText">New to this site? 
               <Link style = {{textDecoration: "none"}} to = "register">
                <span> Sign Up</span>
               </Link>
               </p>
               <form onSubmit={e=>e.preventDefault()} className="formContainer">
                   <label htmlFor="emailInput">Email</label>
                   <input onChange={e=>setEmail(e.target.value)} className = "userEmailInput" name = "emailInput"  required= {true} type="email" />
                   <label htmlFor="password">Password</label>
                   <input onChange={e=>setPassword(e.target.value)} className = "userPasswordInput" name = "password" required = {true} type="password" />
                   <div className="loginButtonContainer">
                     {error ? <span>Invalid email or password</span>: 'Success'}
                     <button onClick={handleLogin} type = "submit">{isFetching?<CircularProgress  style = {{color: '#fff'}} color='inherit' size={25}/>: 'Sign IN'}</button>
                   </div>
               </form>
               <h3 className = "forgotPasswordText">Forgot Password</h3>
            </div> 
        </div>
    )
}

export default LoginPage
