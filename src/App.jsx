import { useState } from 'react'
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Header from './pages//Header'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Register from './pages/Register'
import { Toaster } from 'react-hot-toast'

export const server =  "https://todo-mernapp.onrender.com"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
    <Header/>
      <Routes>
        <Route path='/' element= {<Home/>} />
        <Route path='/profile' element= {<Profile />} />
        <Route path='/login' element= { <Login />} />
        <Route path='/register' element= {<Register />} />
      </Routes>
      <Toaster/>
    </Router>
    </>
  )
}

export default App
