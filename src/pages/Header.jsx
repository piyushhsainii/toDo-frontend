
import '../pages/Header.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default function  Header() {
    return (
        <>
        <div className="navbar">
        <h1 className='LOGO'>To-Do</h1>
        <ul>
         <Link to={'/'}> <li>  Home </li></Link>
            <Link to={'/profile'} > <li> Profile </li> </Link>
            <Link to={'/login'} ><li>Login </li></Link>
        </ul>
    </div>
        </>
    )
}