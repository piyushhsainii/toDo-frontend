import React, { useContext, useState } from "react"
import { Link, Navigate } from "react-router-dom"
import './Login.css'
import { Context } from "../main";
import { toast } from "react-hot-toast";
import axios from "axios";
import { server } from "../App";

export default function Login(){
    const [ email,setEmail] = useState('') 
    const [ password,setPassword] = useState('')

    const {authenticated,isAuthenticated, loading ,setLoading , refresh ,setRefresh} = useContext(Context)    
    if(authenticated) return <Navigate to={"/"} />; 


    const submitHandler = async (e) => {
        const AJFBNAKLJFBALFJ = {email:email,password:password}
        e.preventDefault();
        setLoading(true)
        try{
            const data =  await axios.post(`${server}/login`,
                AJFBNAKLJFBALFJ,{
                    withCredentials:true
                }
            )
            toast.success("Welcome back")
            isAuthenticated(true)
            setLoading(false)
            setRefresh((prev) => !prev)
            console.log(refresh)
        } catch(error) {
            toast.error(error.response.data)
            isAuthenticated(false)
            setLoading(false)
    }
    }

    return(
        <>
        <div className="login-container">
        <h2>SIGN IN</h2>
        <form onSubmit={submitHandler}> 
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text"
                 id="email"  
                 value={email}
                 onChange={(e)=>setEmail( e.target.value)}
                 name="email"
                  placeholder="Enter your email"
                   required/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" 
                id="password" 
                name="password"
                 placeholder="Enter your password"
                 value={password}
                 onChange={(e)=>setPassword( e.target.value)}
                  required/>
            </div>
            <button type="submit"
             className="submit-btn"
             disabled={loading}
            >Submit</button>
            <h5 className="form-text">OR</h5>
            <div className="sign-text"><Link to={'/registerpage'}> Sign Up </Link></div>
        </form>


    </div>
        </>
    )
}