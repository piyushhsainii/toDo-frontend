import { Link } from "react-router-dom"
import React, { useState } from "react";
import axios  from "axios";
import { server } from "../App";
import { toast } from "react-hot-toast";

export default function Register(){
    const [ name,setName] = useState('')
    const [ email,setEmail] = useState('') 
    const [ password,setPassword] = useState('')

    const submitHandler = async (e) => {
        const AJFBNAKLJFBALFJ = {name:name,email:email,password:password}
        e.preventDefault();
        try{
            console.log(name,email,password)
            const data =  await axios.post(`${server}/register`,
                AJFBNAKLJFBALFJ
            ,{
                withCredentials:false
            })
            // {
            //     headers:{
            //         "Content-Type":"application /json",
            //     },
            //     withCredentials:false
            // }
            console.log(data)
            toast.success("data.message")
        } catch(error) {
            toast.error("Some error")
            console.log(error)
    }
    }
        
    return (
        <>
        <div className="login-container">
        <h2>SIGN UP </h2>
        <form onSubmit={submitHandler} method="post"  > 
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