import React, { useContext, useEffect, useState } from "react";
import "./Home.css"
import { Context } from "../main";
import axios from "axios";
import { server } from "../App";
import userImage from "../assets/user.png"
export default function Profile(){


    const { authenticated, setUser, user, refresh, setRefresh, isAuthenticated, setTask} = useContext(Context)

    useEffect(() => {
        axios.get(`${server}/getProfile`, {
          withCredentials: true
        }).then((res) => {
          setUser(res.data)
          if(res.data.mess === "Login First"){
          isAuthenticated(false)}
          else {
            isAuthenticated(true)
          }
        }).catch((error) => {
          console.log(error)
          isAuthenticated(false)
          setUser({})
        })
    
      },[])

    return (   
        <>
    <div className="profile-container">
       <div className="pfp">  <img className="user-pfp" src={userImage} alt="user" /> </div>
       <div className="text"> {user?.user} </div>
       <div>{user?.mess } </div>
       <div className="text">{user?.email} </div>
    </div>
    </>
        )
}

