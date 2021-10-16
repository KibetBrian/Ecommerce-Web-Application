import React from 'react'
import './registerPage.scss'
import {Link} from 'react-router-dom'

function RegisterPage() {
    return (
        <div className = "registerPage">
           <div className="registerWrapper">
               <h1 className = "registerTitle">Sign In</h1>
               <p className = "newText">Already a member? 
               <Link style = {{textDecoration: "none"}} to = "login">
                <span> Sign Up</span>
               </Link>
               </p>
               <div className="formContainer">
                   <label htmlFor="emailInput">Email</label>
                   <input className = "userEmailInput" name = "emailInput"  required= "true" type="email" />
                   <label htmlFor="password">Password</label>
                   <input className = "userPasswordInput" name = "password" required = "true" type="password" />
                   <label htmlFor="password">Confirm Password</label>
                   <input className = "confirmUserPassword" name = "password" required = "true" type="password" /> 
                   <div className="registerButtonContainer">
                     <button type = "submit">Sign IN</button>
                   </div>
               </div>
            </div> 
        </div>
    )
}

export default RegisterPage
