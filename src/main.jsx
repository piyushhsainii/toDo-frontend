import React, { createContext, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

export const Context = createContext({isAuthenticated: false })

  export const AppWrapper = ()=>{
    const [authenticated, isAuthenticated] = useState(false);
    const [loading,setLoading] = useState(false);
    const [ user, setUser] = useState({});
    const [ refresh, setRefresh] = useState(false);

    console.log(authenticated,"authenticate")
    return (
      <Context.Provider value={
       { authenticated,
        isAuthenticated,
        loading,
        setLoading,
        setUser,
        user, 
        refresh, 
        setRefresh
      }
      }>
      <App />
      </Context.Provider>
    )
  }

  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <AppWrapper/>
    </React.StrictMode>
  )
  