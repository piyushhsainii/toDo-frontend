import React from "react"
import { Link } from "react-router-dom"
import './Login.css'


export default function Login(){
    return(
        <>
        <div className="login-container">
        <h2>SIGN IN</h2>
        <form > 
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text"
                 id="email"  
                 name="email"
                  placeholder="Enter your email"
                   required/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Enter your password" required/>
            </div>
            <button type="submit" className="submit-btn">Submit</button>
            <h5 className="form-text">OR</h5>
            <div className="sign-text"><Link to={'/register'}> Sign Up </Link></div>
        </form>
    </div>
        </>
    )
}