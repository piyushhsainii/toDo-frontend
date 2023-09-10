import { Link, Navigate } from "react-router-dom"
import React, { useContext, useState } from "react";
import axios  from "axios";
import { server } from "../App";
import { toast } from "react-hot-toast";
import { Context } from "../main";
 
export default function Register(){
    const [ name,setName] = useState('')
    const [ email,setEmail] = useState('') 
    const [ password,setPassword] = useState('')
    const {authenticated,isAuthenticated, loading ,setLoading} =  useContext(Context)
    

    const submitHandler = async (e) => {
        const AJFBNAKLJFBALFJ = {name:name,email:email,password:password}
        e.preventDefault();
        setLoading(true)
        try{
            console.log(name,email,password)
            const data =  await axios.post(`${server}/register`,
                AJFBNAKLJFBALFJ
            ,{
                withCredentials:true
            })

            console.log(data)
            toast.success("data.message")
            isAuthenticated(true)
            setLoading(false)
        } catch(error) {
            toast.error("Some error")
            console.log(error)
            isAuthenticated(false)
            setLoading(false)
    }
    }
        if(authenticated) return <Navigate to={"/"} />; 
    return (
        <>
        <div className="login-container">
        <h2>SIGN UP </h2>
        <form onSubmit={submitHandler} > 
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text"
                 value={name}
                 onChange={(e)=>setName(e.target.value)}
                 id="name" 
                 name="name"
                  placeholder="Enter your name"
                   required/>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text"
                 value={email}
                 onChange={(e)=>setEmail(e.target.value)}
                 id="email" 
                 name="email"
                  placeholder="Enter your email"
                   required/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                 id="password" name="password" 
                 placeholder="Enter your password"
                  required
                  />
            </div>
            <button type="submit" className="submit-btn">Submit</button>
            <h3 className="form-text">OR</h3>
            <div  className="sign-text" > <Link to={'/login'}> Sign IN </Link></div>
        </form>
    </div>
        </>
    )
}