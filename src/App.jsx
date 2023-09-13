import { useContext, useEffect, useState } from 'react'
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Header from './pages//Header'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Register from './pages/Register'
import { Toaster } from 'react-hot-toast'
import axios from 'axios'
import { Context } from './main'

export const server =  "https://todo-mernapp.onrender.com"
// export const server =  "http://localhost:5000"



function App() {
  const {user,setUser,isAuthenticated}  =  useContext(Context)
  // const [count, setCount] = useState(0)

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
    <Router>
    <Header/>
      <Routes>
        <Route path='/'  element= {<Home/>} />
        <Route path='/profile' element= {<Profile />} />
        <Route path='/login' element= { <Login />} />
        <Route path='/registerpage'  element= {<Register />} />
      </Routes>
      <Toaster/>
    </Router>
    </>
  )
}

export default App
