
import '../pages/Header.css'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../main'
import { server } from '../App'
import axios from 'axios'
import { toast } from 'react-hot-toast'

export default function  Header() {

  const {authenticated, isAuthenticated , setRefresh} =  useContext(Context)
    const logoutHandler = async ()=>{
        try{
            await axios.get(`${server}/logout`,{
                withCredentials:true
            })
            toast.success('Logged Out Successfully')
            isAuthenticated(false)

    } catch (error){
        toast.error(error.response.data)
        console.log(error)
        isAuthenticated(true)
        onClick={refresh}
    }
    }
    return (
        <>
        <div className="navbar">
        <h1 className='LOGO'>To-Do</h1>
        <ul>
         <Link to={'/'}> <li>  Home </li></Link>
            <Link to={'/profile'}  > <li > Profile </li> </Link>           
           {
             authenticated ? <Link to={'/login'} ><li onClick={logoutHandler}> Logout </li></Link> : <Link to={'/login'} ><li>Login </li></Link>
            }
  
        </ul>
    </div>
        </>
    )
}